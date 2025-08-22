import styled from "styled-components"
import AsideFilter from "../../components/AsideFilter"
import Table from "../../components/Table"
import { useRecoilState } from "recoil"
import { reportsState } from "../../recoil/reportsAtom"
import { useReports } from "../../hooks/useReports"

const MainContentStyled = styled.main`
    display: flex;
    /* justify-content: space-; */
    /* align-items: self-start; */
    gap: 80px;
    margin: 0 80px;
`

const DataResultsSectionStyled = styled.section`
    background-color: var(--bg-color);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #cecece;
    flex: 1;

    h2 {
        margin: 0;
    }

    .data-results {
        height: 400px;
        padding: 10px;
        overflow-y: auto;
        scrollbar-color: var(--principal-color) #f0f1f2;
    }
`

const ShowReports = () => {
    const {reports} = useReports()
    return (
        <MainContentStyled>
            <AsideFilter />
            <DataResultsSectionStyled>
                <h2>Resultados da pesquisa</h2>

                <div className="data-results">
                    <Table dataToShow={reports}/>
                </div>
            </DataResultsSectionStyled>
        </MainContentStyled>
    )
}

export default ShowReports
