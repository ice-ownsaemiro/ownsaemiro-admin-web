import React, { useState, useEffect } from "react";
import plus from "../../assets/logo_plus.svg";
import "../../css/MainPage.css";
import { SellHistoryData } from "./Data/SellHistoryData";
import SellRequestWrite from "./Modal/SellRequestWrite";

function SellRequest() {
  const [data, setData] = useState(SellHistoryData);
  const [selectedStatus, setSelectedStatus] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [open, setOpen] = useState(false);

  const filteredData =
    selectedStatus === "전체"
      ? data
      : data.filter((item) => item.status === selectedStatus);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSelectAll(false); // 페이지 변경 시 selectAll 상태 초기화
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  useEffect(() => {
    if (selectAll) {
      const newSelectedItems = [
        ...new Set([...selectedItems, ...currentItems.map((item) => item.id)]),
      ];
      setSelectedItems(newSelectedItems);
    } else {
      const newSelectedItems = selectedItems.filter(
        (id) => !currentItems.some((item) => item.id === id)
      );
      setSelectedItems(newSelectedItems);
    }
  }, [selectAll, currentPage]);

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

  const handleDelete = () => {
    const newData = data.filter((item) => !selectedItems.includes(item.id));
    setData(newData);
    setSelectedItems([]);
    setSelectAll(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (newItem: any) => {
    setData([...data, newItem]);
  };
  return (
    <main className="main-content">
      <h1 style={{ color: "#555" }}>판매 이력</h1>
      <div className="filter-table-header">
        <div className="filter">
          <div className="filter-item">
            <div
              style={{ color: "#999", fontWeight: "bold", marginBottom: "5px" }}
            >
              검색
            </div>
            <input
              type="text"
              style={{ border: "2px solid #E5E5E5", borderRadius: "5px" }}
            />
          </div>
          <div className="filter-item">
            <div
              style={{ color: "#999", fontWeight: "bold", marginBottom: "5px" }}
            >
              상태
            </div>
            <select
              value={selectedStatus}
              style={{ border: "2px solid #E5E5E5", borderRadius: "5px" }}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="전체">전체</option>
              <option value="승인 대기">승인 대기</option>
              <option value="승인 완료">승인 완료</option>
              <option value="승인 거절">승인 거절</option>
            </select>
          </div>
        </div>
        <div className="table-header">
          <button className="btn approve" onClick={handleOpen}>
            <img
              src={plus}
              alt="plus icon"
              style={{ width: "16px", height: "16px", marginRight: "8px" }}
            />
            작성 하기
          </button>
          <button className="btn reject" onClick={handleDelete}>
            요청 취소
          </button>
        </div>
      </div>
      <table style={{ borderRadius: "5px" }}>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>공연명</th>
            <th>신청자명</th>
            <th>신청일</th>
            <th>공연일</th>
            <th>좌석 수</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td onClick={(e) => e.stopPropagation()}>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                />
              </td>
              <td>{item.eventName}</td>
              <td>{item.applicant}</td>
              <td>{item.requestDate}</td>
              <td>{item.eventDate}</td>
              <td>{item.seatstatus}</td>
              <td
                className={
                  item.status === "승인 대기"
                    ? "stanby"
                    : item.status === "승인 완료"
                    ? "approved"
                    : item.status === "승인 거절"
                    ? "rejected"
                    : ""
                }
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ color: "#555555" }}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={currentPage === pageNumber}
              style={{
                color: currentPage === pageNumber ? "#576FD7" : "#555555",
              }}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ color: "#555555" }}
        >
          &gt;
        </button>
      </div>
      {open && (
        <SellRequestWrite
          open={open}
          handleClose={handleClose}
          handleSave={handleSave}
        />
      )}
    </main>
  );
}

export default SellRequest;
