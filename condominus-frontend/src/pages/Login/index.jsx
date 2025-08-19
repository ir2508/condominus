import { useRecoilState } from "recoil"
import { userAuthentication } from "../../recoil/userAtom"
import Input from "../../components/Input"
import Button from "../../components/Button"

const Login = () => {
    // const [userAudth, setUserAudth] = useRecoilState(userAuthentication)

    return (
        <>
            {/* {userAudth.login}
            {userAudth.senha} */}

            <Input inputType="text" label="Login" />
            <Input inputType="password" label="Senha" />
            <Button>Fazer login</Button>
        </>
    )
}

export default Login