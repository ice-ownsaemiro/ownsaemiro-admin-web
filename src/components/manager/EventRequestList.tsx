import React, { useState, useEffect } from "react";
import "../../css/MainPage.css";
import EventModal from "./Modal/EventModal";
import { RequestData } from "./Data/RequestData";

function EventRequestList() {
  const [data, setData] = useState(RequestData);
  const [selectedStatus, setSelectedStatus] = useState("전체");
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    (typeof RequestData)[0] | null
  >(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleOpen = (item: (typeof RequestData)[0]) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSelectAll(false); // 페이지 변경 시 selectAll 상태 초기화
  };

  // 필터링된 데이터를 매번 계산
  const filteredData =
    selectedStatus === "전체"
      ? data
      : data.filter((item) => item.status === selectedStatus);

  // 페이지 변경 시 currentItems를 업데이트
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedStatus]);

  useEffect(() => {
    if (selectAll) {
      const newSelectedItems = [
        ...new Set([
          ...selectedItems,
          ...currentItems.map((item) => item.id)
        ])
      ];
      setSelectedItems(newSelectedItems);
    } else {
      const newSelectedItems = selectedItems.filter(
        (id) => !currentItems.some((item) => item.id === id)
      );
      setSelectedItems(newSelectedItems);
    }
  }, [selectAll, currentPage, filteredData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startPage = Math.max(
    1,
    Math.min(currentPage - Math.floor(10 / 2), totalPages - 9)
  );
  const endPage = Math.min(totalPages, startPage + 9);

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

  const handleApprove = () => {
    const newData = data.map((item) =>
      selectedItems.includes(item.id) ? { ...item, status: "승인 허가" } : item
    );
    setData(newData);
    setSelectedItems([]);
    setSelectAll(false);
  };

  const handleReject = () => {
    const newData = data.map((item) =>
      selectedItems.includes(item.id) ? { ...item, status: "승인 거절" } : item
    );
    setData(newData);
    setSelectedItems([]);
    setSelectAll(false);
  };

  return (
    <main
      key={`${selectedStatus}-${currentPage}`}
      className="main-content"
    >
      <h1 style={{ color: "#555" }}>행사 등록 요청 목록</h1>
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
              승인 상태
            </div>
            <select
              value={selectedStatus}
              style={{ border: "2px solid #E5E5E5", borderRadius: "5px" }}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="전체">전체</option>
              <option value="승인 대기">승인 대기</option>
              <option value="승인 허가">승인 허가</option>
              <option value="승인 거절">승인 거절</option>
            </select>
          </div>
        </div>
        <div className="table-header">
          <button className="btn approve" onClick={handleApprove}>승인</button>
          <button className="btn reject" onClick={handleReject}>승인 거절</button>
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
            <th>신청자명</th>
            <th>아이디</th>
            <th>공연명</th>
            <th>신청일</th>
            <th>공연일</th>
            <th>승인 상태</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr
              key={item.id}
              onClick={() => handleOpen(item)}
              style={{ cursor: "pointer" }}
            >
              <td onClick={(e) => e.stopPropagation()}>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                />
              </td>
              <td>{item.applicant}</td>
              <td>{item.username}</td>
              <td>{item.eventName}</td>
              <td>{item.requestDate}</td>
              <td>{item.eventDate}</td>
              <td
                className={
                  item.status === "승인 거절"
                    ? "rejected"
                    : item.status === "승인 허가"
                    ? "approved"
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
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={currentPage === pageNumber}
            style={{ color: currentPage === pageNumber ? "#576FD7" : "#555555" }}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ color: "#555555" }}
        >
          &gt;
        </button>
      </div>
      {open && selectedItem && (
        <EventModal open={open} handleClose={handleClose} item={selectedItem} />
      )}
    </main>
  );
}

export default EventRequestList;
