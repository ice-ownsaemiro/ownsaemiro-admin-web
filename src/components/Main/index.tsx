import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./style";
import logo from "@/assets/logo_main.svg";
import register from "@/assets/logo_register.svg";
import logout from "@/assets/logo_logout.svg";
import { instance } from "@/apis/axios";
import { useFetchAdminNickname } from "@/hooks/useFetchAdminNickname";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  adminRegisterEventState,
  totalPageState,
  userNicknameState,
} from "@/atoms/atoms";
import search_logo from "@/assets/logo_search.svg";
import { resolveRegisterEvent, searchRegisterEvent } from "@/apis/admin";
import Modal from "@/components/Common/Modal";
import { useFetchRegisterEvent } from "@/hooks/useFetchRegisterEvent";

export default function MainPage() {
  const [activeMenu, setActiveMenu] = useState("register");
  const navigate = useNavigate();
  const nickname = useRecoilValue(userNicknameState).nickname;
  const [data, setData] = useRecoilState(adminRegisterEventState);
  const [totalPage, setTotalPage] = useRecoilState(totalPageState);
  const [selectedStatus, setSelectedStatus] = useState("전체");
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const startPage = Math.max(
    1,
    Math.min(currentPage - Math.floor(10 / 2), totalPage - 9)
  );
  const endPage = Math.min(totalPage, startPage + 9);

  useFetchAdminNickname();
  useFetchRegisterEvent(currentPage, itemsPerPage);

  const handleLogout = async () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      try {
        const response = await instance.get("/api/auth/logout");

        if (response.status === 200) {
          alert("로그아웃 되었습니다.");
          navigate("/");
        } else {
          alert("로그아웃에 실패했습니다.");
        }
      } catch (error) {
        console.error("로그아웃 요청 실패", error);
        alert("로그아웃 요청 중 오류가 발생했습니다.");
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await searchRegisterEvent(
        currentPage,
        itemsPerPage,
        searchKeyword,
        selectedStatus
      );
      setData(response.data.events);
      setTotalPage(response.data.totalPages);
    };

    fetchData();
  }, [currentPage, searchKeyword, selectedStatus]);

  const handleOpen = (id: number) => {
    setId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setId(0);
    setOpen(false);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSelectAll(false);
  };

  useEffect(() => {
    if (selectAll) {
      const newSelectedItems = [
        ...new Set([...selectedItems, ...data.map((item) => item.id)]),
      ];
      setSelectedItems(newSelectedItems);
    } else {
      const newSelectedItems = selectedItems.filter(
        (id) => !data.some((item) => item.id === id)
      );
      setSelectedItems(newSelectedItems);
    }
  }, [selectAll, currentPage, data]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleApprove = async () => {
    try {
      await Promise.all(
        selectedItems.map(async (id) => {
          const response = await resolveRegisterEvent(id, "COMPLETE");

          if (response.status !== 200) {
            throw new Error("승인에 실패했습니다.");
          }
        })
      );
      alert("승인되었습니다.");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("승인에 실패했습니다.");
    }

    setSelectedItems([]);
    setSelectAll(false);
  };

  const handleReject = async () => {
    try {
      await Promise.all(
        selectedItems.map(async (id) => {
          const response = await resolveRegisterEvent(id, "REJECT");

          if (response.status !== 200) {
            throw new Error("승인 거절에 실패했습니다.");
          }
        })
      );
      alert("승인 거절되었습니다.");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("승인 거절에 실패했습니다.");
    }

    setSelectedItems([]);
    setSelectAll(false);
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };

  return (
    <Styled.Container>
      <Styled.Sidebar>
        <Styled.Logo src={logo} alt="로고 출력 실패" />
        <Styled.Menu>
          <Styled.MenuItem
            className={activeMenu === "register" ? "active" : ""}
            onClick={() => setActiveMenu("register")}
          >
            <Styled.MenuImage src={register} alt="등록 사진 실패" />
            <Styled.MenuText>행사 등록 요청 목록</Styled.MenuText>
          </Styled.MenuItem>
        </Styled.Menu>
        <Styled.UserContainer>
          <Styled.Username>{nickname} 님</Styled.Username>
          <Styled.LogoutButton
            src={logout}
            alt="로그아웃 사진 실패"
            onClick={handleLogout}
          />
        </Styled.UserContainer>
      </Styled.Sidebar>
      <Styled.Content>
        <Styled.MainContent key={`${selectedStatus}-${currentPage}`}>
          <h1 style={{ color: "#555" }}>행사 등록 요청 목록</h1>
          <Styled.FilterTableHeader>
            <Styled.Filter>
              <Styled.FilterItem>
                <div
                  style={{
                    color: "#999",
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  승인 상태
                </div>
                <Styled.Select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="전체">전체</option>
                  <option value="WAITING">승인 대기</option>
                  <option value="COMPLETE">승인 허가</option>
                  <option value="REJECT">승인 거절</option>
                </Styled.Select>
              </Styled.FilterItem>
              <Styled.FilterItem>
                <div
                  style={{
                    color: "#999",
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  검색
                </div>
                <Styled.SearchBar>
                  <Styled.SearchIcon src={search_logo}></Styled.SearchIcon>
                  <Styled.SearchBarInput
                    type="search"
                    placeholder="검색"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                </Styled.SearchBar>
              </Styled.FilterItem>
              <Styled.Button onClick={handleSearch}>검색</Styled.Button>
            </Styled.Filter>
            <Styled.TableHeader>
              <Styled.ApprovedBtn onClick={handleApprove}>
                승인
              </Styled.ApprovedBtn>
              <Styled.Button onClick={handleReject}>승인 거절</Styled.Button>
            </Styled.TableHeader>
          </Styled.FilterTableHeader>
          <Styled.Table>
            <thead>
              <tr>
                <Styled.Th>
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </Styled.Th>
                <Styled.Th>신청자명</Styled.Th>
                <Styled.Th>공연명</Styled.Th>
                <Styled.Th>신청일</Styled.Th>
                <Styled.Th>공연일</Styled.Th>
                <Styled.Th>승인 상태</Styled.Th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <Styled.Tr
                  key={item.id}
                  onClick={() => handleOpen(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <Styled.Td onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                    />
                  </Styled.Td>
                  <Styled.Td>{item.host_name}</Styled.Td>
                  <Styled.Td>{item.name}</Styled.Td>
                  <Styled.Td>{item.apply_date}</Styled.Td>
                  <Styled.Td>{item.duration}</Styled.Td>
                  <Styled.Td state={item.state}>
                    {item.state === "WAITING"
                      ? "승인 대기"
                      : item.state === "COMPLETE"
                        ? "승인 허가"
                        : "승인 거절"}
                  </Styled.Td>
                </Styled.Tr>
              ))}
            </tbody>
          </Styled.Table>
          <Styled.Pagination>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ color: "#555555" }}
            >
              &lt;
            </button>
            {Array.from(
              { length: endPage - startPage + 1 },
              (_, i) => startPage + i
            ).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                disabled={currentPage === pageNumber}
                style={{
                  color: currentPage === pageNumber ? "#576FD7" : "#555555",
                  textDecoration:
                    currentPage === pageNumber ? "underline" : " ",
                }}
              >
                {pageNumber}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPage}
              style={{ color: "#555555" }}
            >
              &gt;
            </button>
          </Styled.Pagination>
          {open && <Modal open={open} handleClose={handleClose} id={id} />}
        </Styled.MainContent>
      </Styled.Content>
    </Styled.Container>
  );
}
