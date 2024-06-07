import UserNicknameState from "@/interfaces/UserNicknameState";
import { atom } from "recoil";

export const userNicknameState = atom<UserNicknameState>({
  key: "userNicknameState",
  default: { nickname: "" },
});
