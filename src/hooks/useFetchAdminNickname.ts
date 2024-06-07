import { fetchAdminNickname } from "@/apis/admin";
import { userNicknameState } from "@/atoms/atoms";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export const useFetchAdminNickname = () => {
  const setUsername = useSetRecoilState(userNicknameState);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAdminNickname();
      setUsername({ nickname: result.data.data.nickname });
    };

    fetchData();
  }, []);
};
