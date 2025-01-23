import React from 'react'
import Header from "./components/Header";

class App extends React.Component {
    help_text = "Help text"

    render() {
        return (<div className="name">
                <Header title={"Шапка сайта1"}/>
                <Header title={"Шапка сайта2"}/>
                <h1>{this.help_text}</h1>
                <input placeholder={this.help_text}
                       onClick={this.input_click}
                       onMouseEnter={this.mouse_over}/>
                <p>{this.help_text === "Help text!" ? "Yes" : "No"}</p>
            </div>
        )
    }

    input_click() {console.log("Clicked")}
    mouse_over() {console.log("Mouse Over")}
}


export default App
