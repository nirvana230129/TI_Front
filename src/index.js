import React from 'react'
import * as ReactDOMClient from 'react-dom/client';


const input_click = () => console.log("Clicked")
const mouse_over = () => console.log("Mouse Over")

const help_text = "Help text"

const elements = (<div className="name">
    <h1>{help_text}</h1>
    <input placeholder={help_text}
           onClick={input_click}
           onMouseEnter={mouse_over} />
    <p>{help_text === "Help text!" ? "Yes" : "No"}</p>
</div>)

const app = ReactDOMClient.createRoot(document.getElementById('app'));
app.render(elements)
