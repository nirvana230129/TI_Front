import React, {useEffect, useState} from 'react'


const Button = (props) => {
    const [click, set_click] = useState(0)

    useEffect(() => {
        document.title = `Вы нажали ${click}`
    })

    return (
        <button onClick={() => set_click(click + 1)}>{props.text} hh {click}</button>
    )
}

Button.defaultProps = {
    text: 'default',
}

export default Button
