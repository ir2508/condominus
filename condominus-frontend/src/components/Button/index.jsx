import styled from "styled-components"

const ButtonStyled = styled.button`
    display: block;
    margin-top: 20px;
    width: 100%;
    padding: 10px;
    background-color: var(--principal-color);
    cursor: pointer;
    border: none;
    border-radius: 5px;

    &:hover {
        box-shadow: 1px 1px 5px var(--principal-color)
    }
`

const Button = ({ children }) => {
    return <ButtonStyled>{children}</ButtonStyled>
}

export default Button
