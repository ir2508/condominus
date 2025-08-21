import { NavLink } from "react-router-dom"
import styled from "styled-components"

const MainHeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-color);
    height: 100px;
    padding: 0px 80px;
`

const ProjectNameStyled = styled.h1`
    font-size: 2em;
    margin: 0;
    padding: 0;
`

const NavigationMenuStyled = styled.nav`
    
    .menu {
        color: var(--font-color);
        margin-left: 32px;
    } 

    .menu:hover {
        color: var(--principal-color)
    }
`

const Header = () => {
    return (
        <MainHeaderStyled>
            <ProjectNameStyled>Condominus</ProjectNameStyled>
            <NavigationMenuStyled>
                <NavLink className="menu" to={"/"}>Login</NavLink>
                <NavLink className="menu" to={"/nova-reclamacao"} >Formulário</NavLink>
            </NavigationMenuStyled>
        </MainHeaderStyled>
    )
}

export default Header