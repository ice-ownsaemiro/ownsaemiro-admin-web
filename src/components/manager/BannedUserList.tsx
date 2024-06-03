import React, { useState, useEffect } from "react";
import "../../css/MainPage.css";
import { ReportedUserData } from "./Data/ReportedUserData";

function BannedUserList() {
  const [data, setData] = useState(ReportedUserData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSelectAll(false); // 페이지 변경 시 selectAll 상태 초기화
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

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
  }, [selectAll, currentPage]);

  // Start page for pagination display
  const startPage = Math.max(1, Math.min(currentPage - Math.floor(10 / 2), totalPages - 9));
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

  const handleUnban = () => {
    const newData = data.filter((item) => !selectedItems.includes(item.id));
    setData(newData);
    setSelectedItems([]);
    setSelectAll(false);
  };

  return (
    <main className="main-content">
      <h1 style={{ color: "#555" }}>사용자 정지 목록</h1>
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
        </div>
        <div className="table-header">
          <button className="btn approve" onClick={handleUnban}>정지 해제</button>
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
            <th>신고 ID</th>
            <th>정지 일자</th>
            <th>신고 일자</th>
            <th>신고 사유</th>
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
              <td>{item.applicant}</td>
              <td>{item.username}</td>
              <td>{item.reportID}</td>
              <td>{item.banDate}</td>
              <td>{item.reportDate}</td>
              <td>{item.reportReason}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
          style={{ color: '#555555' }}
        >
          &lt;
        </button>
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={currentPage === pageNumber}
            style={{ color: currentPage === pageNumber ? '#576FD7' : '#555555' }}
          >
            {pageNumber}
          </button>
        ))}
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
          style={{ color: '#555555' }}
        >
          &gt;
        </button>
      </div>
    </main>
  );
}

export default BannedUserList;
