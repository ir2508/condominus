import styled from "styled-components"
import Input from "../Input"
import Button from "../Button"

const FilterSectionStyled = styled.aside`
    background-color: var(--bg-color);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #cecece;
    min-width: 300px;

    h2 {
        margin: 0;
        text-align: center;
    }
`

const AsideFilter = () => {
    return (
        <FilterSectionStyled>
            <h2>Filtros de pesquisa</h2>

            <form>
                <Input inputType="text" label="Data" inputRequired={true} />
                <Input inputType="text" label="Local" inputRequired={true} />
                <Input inputType="text" label="Bloco" inputRequired={true} />
                <Input inputType="text" label="Apartamento" inputRequired={true} />
                <Button btType="bt-primary">Filtrar Resultados</Button>
            </form>
        </FilterSectionStyled>
    )
}

export default AsideFilter
