import {useState} from "react";


interface ResultModalProps {
    show:boolean
}

function ResultModal({show}: ResultModalProps) {

    //false
    if(!show){
        return <></>
    }

    return (
        <div>
            <div className={'text-4xl'}>RESULT</div>
        </div>
    );

}

export default ResultModal;