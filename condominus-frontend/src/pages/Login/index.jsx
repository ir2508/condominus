import Input from "../../components/Input"
import Button from "../../components/Button"
import styled from "styled-components"

const MainContentStyled = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginSectionStyled = styled.section`
    background-color: var(--bg-color);
    padding: 50px 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #cecece;
    min-width: 300px; 

    h2 {
        margin: 0;
        text-align: center;
    }
`

const Login = () => {
    return (
        <MainContentStyled>
            <LoginSectionStyled className="login-section">
                <h2>Login</h2>
                <form>
                    <Input inputType="text" label="Login" inputRequired={true}/>
                    <Input inputType="password" label="Senha"  inputRequired={true}/>
                    <Button>Fazer login</Button>
                </form>
            </LoginSectionStyled>
        </MainContentStyled>
    )
}

export default Login
