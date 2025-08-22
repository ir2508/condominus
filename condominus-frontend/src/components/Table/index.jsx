import styled from "styled-components"

const DataTableStyled = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-top: 30px;

    tr {
        border: 1px solid #444;
    }

    td,
    th {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }

    tr:nth-child(even) {
        background-color: var(--bg-color-contrast);
    }
    tr:hover {
        background-color: #ddd;
        cursor: pointer;
    }
`

const Table = ({ dataToShow }) => {
    return (
        <DataTableStyled>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Local</th>
                    <th>Assunto</th>
                    <th>Status</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {dataToShow.map((data) => {
                    return (
                        <tr key={data.id}>
                            <td>{data.data}</td>
                            <td>{data.local}</td>
                            <td>{data.assunto}</td>
                            <td>{data.status}</td>
                            <td>Visualizar</td>
                        </tr>
                    )
                })}
            </tbody>
        </DataTableStyled>
    )
}

export default Table
