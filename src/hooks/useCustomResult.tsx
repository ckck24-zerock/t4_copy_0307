import {useState} from "react";


export default function useCustomResult() {

    const [result, setResult] = useState(false)

    const closeResultModal = () => {

        setResult(false)

    }


    return {result, setResult, closeResultModal}
}