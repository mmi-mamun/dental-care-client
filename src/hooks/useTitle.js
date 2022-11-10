import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Dental Care`;
    }, [title])
}
export default useTitle;