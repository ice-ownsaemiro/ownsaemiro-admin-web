import { fetchRegisterEventDetail } from "@/apis/admin";
import { adminRegisterDetailState } from "@/atoms/atoms";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export const useFetchRegisterDetailEvent = (id: number) => {
  const setEventState = useSetRecoilState(adminRegisterDetailState);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchRegisterEventDetail(id);

      setEventState(result.data.data);

      console.log(result.data);
    };

    fetchData();
  }, [id]);
};
