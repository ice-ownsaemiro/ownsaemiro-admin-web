import { fetchRegisterEvent } from "@/apis/admin";
import { adminRegisterEventState, totalPageState } from "@/atoms/atoms";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export const useFetchRegisterEvent = (page: number, size: number) => {
  const setEventState = useSetRecoilState(adminRegisterEventState);
  const setPageState = useSetRecoilState(totalPageState);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchRegisterEvent(page, size);

      setPageState(result.data.data.page_info.total_page);
      setEventState(result.data.data.event_request);
    };

    fetchData();
  }, [page, size]);
};
