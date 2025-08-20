import styled from "styled-components"

const DivInputStyled = styled.div`
    display: flex;
    flex-direction: column;

    label {
        margin-top: 20px;
        color: #444;
    }
`

const InputStyled = styled.input`
    box-sizing: border-box;
    display: block;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
    font-family: "Montserrat", sans-serif;
    border-radius: 5px;
    color: var(--font-color);
    font-size: 1em;

`

const Input = ({ inputType, label, inputRequired }) => {
    return (
        <DivInputStyled>
            <label>{label}</label>
            <InputStyled type={inputType} placeholder={label} required={inputRequired?"required":""}/>
        </DivInputStyled>
    )
}

export default Input
