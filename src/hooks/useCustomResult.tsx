import {useState} from "react";
import useCustomParam from "./useCustomParam.tsx";


export default function useCustomResult() {

    const [result, setResult] = useState(false)

    const {moveList} = useCustomParam()

    const closeAddAction = () => {
        moveList()
        setResult(false)
    }

    return {result, setResult, closeAddAction}
}