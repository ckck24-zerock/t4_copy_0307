import {useParams} from "react-router";
import useCustomParam from "./useCustomParam.tsx";
import {useEffect, useState} from "react";
import {getTodo} from "../api/todoApi.tsx";

const initState: TodoDTO = {
    tno: 0,
    title: '',
    writer: '',
    regDate: '',
    modDate: ''
}

export default function useCustomRead () {

    const {tno} = useParams() // useParams( )의 값은 모두 문자열
    const {moveRead,moveList} = useCustomParam()

    const [todo, setTodo] = useState(initState)

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)

        getTodo(Number(tno))
            .then(data => {
                setTodo(data)
                setLoading(false)
            })

    }, [tno]);

    return {tno, loading, moveList,moveRead, todo, setTodo}
}