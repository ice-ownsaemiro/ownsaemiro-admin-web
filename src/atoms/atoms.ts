// atoms/index.ts
import RegisterEventDetailState from "@/interfaces/RegisterEventDetailState";
import RegisterEventState from "@/interfaces/RegisterEventState";
import UserNicknameState from "@/interfaces/UserNicknameState";
import { atom } from "recoil";

export const adminRegisterEventState = atom<RegisterEventState[]>({
  key: "registerEventState",
  default: [],
});

export const userNicknameState = atom<UserNicknameState>({
  key: "userNicknameState",
  default: { nickname: "" },
});

export const totalPageState = atom<number>({
  key: "totalPageState",
  default: 0,
});

export const adminRegisterDetailState = atom<RegisterEventDetailState>({
  key: "registerDetailState",
  default: {
    name: "",
    host_nickname: "",
    address: "",
    running_time: "",
    duration: "",
    description: "",
  },
});
