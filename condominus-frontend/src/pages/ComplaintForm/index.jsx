import Input from "../../components/Input"
import Button from "../../components/Button"
import styled from "styled-components"
import { useState } from "react"

const MainContentStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginSectionStyled = styled.section`
    background-color: var(--bg-color);
    padding: 50px 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #cecece;
    min-width: 500px;
    width: 1000px;

    h2 {
        margin: 0;
        text-align: center;
    }
`

const FormStyled = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    box-sizing: border-box;

    .col-1 {
        flex: 1 1 100%;
    }

    .col-2 {
        flex: 1 1 calc(50% - 16px);
    }

    .col-3 {
        flex: 1 1 calc(33.333% - 16px);
    }
`

const ComplaintForm = () => {
    const [complaint, setComplaint] = useState({
        nome: "",
        email: "",
        telefone: "",
        torre: "",
        apartamento: "",
        data: "",
        local: "",
        descricao: "",
    })

    const handleChange = (e) => {
        setComplaint({
            ...complaint,
            [e.target.id]: e.target.value,
        })
        console.log(complaint)
    }

    return (
        <MainContentStyled>
            <LoginSectionStyled>
                <h2>Novo feedback</h2>
                <FormStyled>
                    <div className="col-3">
                        <Input inputId="nome" inputType="text" label="Nome" inputRequired={false} onChange={handleChange} />
                    </div>
                    <div className="col-3">
                        <Input inputId="email" inputType="text" label="Telefone" inputRequired={false} onChange={handleChange} />
                    </div>
                    <div className="col-3">
                        <Input inputId="telefone" inputType="email" label="E-mail" inputRequired={false} onChange={handleChange} />
                    </div>
                    <div className="col-2">
                        <Input inputId="torre" inputType="text" label="Torre" inputRequired={true} onChange={handleChange} />
                    </div>
                    <div className="col-2">
                        <Input inputId="apartamento" inputType="text" label="Apartamento" inputRequired={true} onChange={handleChange} />
                    </div>

                    <div className="col-2">
                        <Input inputId="data" inputType="text" label="Data e horário do ocorrido" inputRequired={true} onChange={handleChange} />
                    </div>
                    <div className="col-2">
                        <Input inputId="local" inputType="text" label="Local" inputRequired={true} onChange={handleChange} />
                    </div>

                    <div className="col-1">
                        <Input inputId="descricao" inputType="text" label="Descrição" inputRequired={true} onChange={handleChange} />
                    </div>

                    <div className="col-1">
                        <Button>Cadastrar</Button>
                    </div>
                </FormStyled>
            </LoginSectionStyled>
        </MainContentStyled>
    )
}

export default ComplaintForm
