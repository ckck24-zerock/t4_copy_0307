import {useState} from "react";
import useCustomParam from "./useCustomParam.tsx";


export default function useCustomResult() {

    const [result, setResult] = useState(false)
    const [msg, setMsg] = useState('')

    const {moveList, moveRead} = useCustomParam()

    const openModal = (str:string)=>  {

        setResult(true)
        setMsg(str)
    }

    const closeAddAction = () => {
        setResult(false)
        moveList()
    }

    const closeModifyAction = (tno:number, path ?:string ) => {

        setResult(false)
        moveRead(tno,path)
    }

    const closeDeleteAction = () => {
        setResult(false)
        moveList()
    }

    return {result,  msg, openModal, closeAddAction, closeModifyAction, closeDeleteAction}
}
