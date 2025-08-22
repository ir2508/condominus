import Input from "../../components/Input"
import Button from "../../components/Button"
import styled from "styled-components"
import { useState } from "react"
import { useReports } from "../../hooks/useReports"

const MainContentStyled = styled.main`
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
    width: 800px;

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

const ReportForm = () => {
    const [complaint, setComplaint] = useState({
        id: "",
        nome: "",
        email: "",
        telefone: "",
        torre: "",
        apartamento: "",
        data: "",
        local: "",
        assunto: "",
        descricao: "",
        status: "Em aberto",
        descricao: "",
    })

    const [stepForm, setStepForm] = useState(1)
    const { reports, addReport } = useReports()

    const handleChange = (e) => {
        setComplaint({
            ...complaint,
            [e.target.id]: e.target.value,
        })
    }

    const handleNextForm = (e) => {
        e.preventDefault()
        setStepForm(2)
    }

    const handleCreateComplaint = (e) => {
        e.preventDefault()
        addReport(complaint)
    }

    return (
        <MainContentStyled>
            <LoginSectionStyled>
                <h2>Novo feedback</h2>
                {stepForm === 1 && <h4>Passo 1/2 - Dados pessoais</h4>}
                {stepForm === 2 && <h4>Passo 2/2 - Dados do feedback</h4>}
                <FormStyled>
                    {stepForm === 1 && (
                        <>
                            <div className="col-3">
                                <Input inputId="nome" inputType="text" label="Nome" inputRequired={false} onChange={handleChange} />
                            </div>
                            <div className="col-3">
                                <Input inputId="email" inputType="text" label="Telefone" inputRequired={false} onChange={handleChange} />
                            </div>
                            <div className="col-3">
                                <Input inputId="telefone" inputType="email" label="E-mail" inputRequired={false} onChange={handleChange} />
                            </div>
                            <div className="col-3">
                                <Input inputId="id" inputType="text" label="Id" inputRequired={true} onChange={handleChange} />
                            </div>
                            <div className="col-3">
                                <Input inputId="torre" inputType="text" label="Torre" inputRequired={false} onChange={handleChange} />
                            </div>
                            <div className="col-3">
                                <Input inputId="apartamento" inputType="text" label="Apartamento" inputRequired={false} onChange={handleChange} />
                            </div>
                            <div className="col-2">
                                <Button btType="bt-secondary" onClick={handleNextForm}>
                                    Não quero me identificar
                                </Button>
                            </div>
                            <div className="col-2">
                                <Button btType="bt-primary" onClick={handleNextForm}>
                                    Próximo
                                </Button>
                            </div>
                        </>
                    )}

                    {stepForm === 2 && (
                        <>
                            <div className="col-2">
                                <Input inputId="data" inputType="text" label="Data e horário do ocorrido" inputRequired={true} onChange={handleChange} />
                            </div>
                            <div className="col-2">
                                <Input inputId="local" inputType="text" label="Local" inputRequired={true} onChange={handleChange} />
                            </div>

                            <div className="col-2">
                                <Input inputId="assunto" inputType="text" label="Assunto" inputRequired={true} onChange={handleChange} />
                            </div>
                            
                            <div className="col-2">
                                <Input inputId="descricao" inputType="text" label="Descrição" inputRequired={true} onChange={handleChange} />
                            </div>

                            <div className="col-1">
                                <Button btType="bt-primary" onClick={handleCreateComplaint}>
                                    Enviar feedback
                                </Button>
                            </div>
                        </>
                    )}
                </FormStyled>
            </LoginSectionStyled>
        </MainContentStyled>
    )
}

export default ReportForm
