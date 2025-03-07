import {useState} from "react";


interface ResultModalProps {
    show:boolean
    closeResultModal:() => void
}

function ResultModal({show, closeResultModal }: ResultModalProps) {

    //false
    if(!show){
        return <></>
    }

    return (
        <div>
            <div className={'text-4xl'}>RESULT</div>
            <button onClick={closeResultModal}>CLOSE</button>
        </div>
    );

}

export default ResultModal;