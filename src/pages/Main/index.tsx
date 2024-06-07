// // pages/RegisterEventPage.tsx
// import React, { useEffect, useState } from "react";
// import { useRecoilValue, useSetRecoilState } from "recoil";
// import Sidebar from "@/components/Main/SideBar";
// import { keywordState, registerEventState, statusState } from "@/atoms/atoms";
// import { fetchRegisterEvent, searchRegisterEvent } from "@/apis/admin";
// import Pagination from "@/components/Main/Pagination";
// import RegisterEventList from "@/components/Main/Event";
// import Filter from "@/components/Main/Filter";
// import { useFetchAdminNickname } from "@/hooks/useFetchAdminNickname";

import EventRequestList from "@/components/Main";

// const MainPage: React.FC = () => {
//   const events = useRecoilValue(registerEventState) || []; // Default to empty array if undefined
//   const setEvents = useSetRecoilState(registerEventState);
//   const keyword = useRecoilValue(keywordState);
//   const setKeyword = useSetRecoilState(keywordState);
//   const status = useRecoilValue(statusState);
//   const setStatus = useSetRecoilState(statusState);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [selectedItems, setSelectedItems] = useState<number[]>([]);

//   useFetchAdminNickname();

//   useEffect(() => {
//     async function loadEvents() {
//       const response = keyword
//         ? await searchRegisterEvent(currentPage, 7, keyword, status)
//         : await fetchRegisterEvent(currentPage, 7);
//       setEvents(response.data.data.event_request);
//       setTotalPages(response.data.data.page_info.total_page);
//     }
//     loadEvents();
//   }, [currentPage, keyword, setEvents]);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handleSelectItem = (id: number | "all", checked?: boolean) => {
//     if (id === "all") {
//       if (checked) {
//         setSelectedItems(events.map((event) => event.id));
//       } else {
//         setSelectedItems([]);
//       }
//     } else {
//       setSelectedItems((prevSelectedItems) =>
//         prevSelectedItems.includes(id)
//           ? prevSelectedItems.filter((item) => item !== id)
//           : [...prevSelectedItems, id]
//       );
//     }
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar />
//       <div style={{ flex: 1, padding: "20px" }}>
//         <h1>행사 등록 요청 목록</h1>
//         <Filter
//           keyword={keyword}
//           status={status}
//           onKeywordChange={setKeyword}
//           onStatusChange={setStatus}
//         />
//         <RegisterEventList
//           events={events}
//           selectedItems={selectedItems}
//           handleSelectItem={handleSelectItem}
//         />
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default MainPage;

export default function MainPage() {
  return (
    <>
      <EventRequestList />
    </>
  );
}
