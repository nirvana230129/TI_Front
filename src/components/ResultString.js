import React from 'react'
import {IoCopy} from "react-icons/io5"

const ResultString = ({ string, showButton = false }) => {
    const copyToClipboard = () => {
        if (navigator.clipboard)
            navigator.clipboard.writeText(string)
                .catch(err => {
                    console.error('Ошибка при копировании: ', err)
                })
        else
            console.error('navigator.clipboard не поддерживается')
    }

    return (
        <>
            {showButton && <IoCopy onClick={copyToClipboard} className='copy-icon' />}
            <p>{string}</p>
        </>
    )
}

export default ResultString
