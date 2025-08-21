import { atom } from "recoil"

export const userAuthentication = atom({
    key: "userAuthentication",
    default: { login: "igor", senha: "teste" },
})
