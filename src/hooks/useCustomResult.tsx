import {useState} from "react";
import useCustomParam from "./useCustomParam.tsx";


export default function useCustomResult() {

    const [result, setResult] = useState(false)
    const [msg, setMsg] = useState('')

    const {moveList} = useCustomParam()

    const openModal = (str:string)=>  {

        setResult(true)
        setMsg(str)
    }

    const closeAddAction = () => {
        moveList()
        setResult(false)
    }

    return {result,  msg, openModal, closeAddAction}
}
