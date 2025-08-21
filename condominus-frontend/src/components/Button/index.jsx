import styled from "styled-components"

const ButtonStyled = styled.button`
    display: block;
    margin-top: 20px;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;

    &.bt-primary {
        background-color: var(--principal-color);
        border: none;
    }

    &.bt-primary:hover {
        box-shadow: 1px 1px 5px var(--principal-color);
    }

    &.bt-secondary {
        background-color: var(--bg-color);
        color: var(--font-color);
        border: 1px solid var(--font-color);
    }

    &.bt-secondary:hover {
        box-shadow: 1px 1px 5px var(--font-color);
    }
`

const Button = ({ children, btType, onClick }) => {
    return <ButtonStyled className={btType} onClick={onClick}>{children}</ButtonStyled>
}

export default Button
