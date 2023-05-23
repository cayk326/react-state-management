import { atom } from "recoil";

//Global State using atom, recoil
// たったこれだけ！
export const userState = atom({
  key: "userState",
  default: { isAdmin: false }
});
