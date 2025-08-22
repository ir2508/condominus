import { useRecoilState } from "recoil"
import { reportsState } from "../recoil/reportsAtom"

export function useReports() {
    const [reports, setReports] = useRecoilState(reportsState)

    const addReport = (report) => {
        return setReports((prev) => [...prev, report])
    }

    return {
        reports,
        addReport,
    }
}
