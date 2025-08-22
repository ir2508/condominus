import { atom } from "recoil"

export const reportsState = atom({
    key: "reportsState",
    default: [{
        nome: "Igor",
        email: "igor@igor.com",
        telefone: "11121212121",
        torre: "5",
        apartamento: "100",
        data: "22/08/2025",
        local: "Portaria",
        descricao: "Entrada irregular",
    }],
})
