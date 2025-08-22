import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"

const ContainerStyled = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
`

const DefaultLayout = () => {
    return (
        <ContainerStyled>
            <Header />
            <Outlet />
            <Footer />
        </ContainerStyled>
    )
}

export default DefaultLayout
