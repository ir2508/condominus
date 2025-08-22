import { useParams } from "react-router-dom"

const ShowReport = () => {
    const params = useParams()
    return (
        <h2>Teste - {params.id}</h2>
    )
}

export default ShowReport