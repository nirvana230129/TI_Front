import React from 'react'
import Header from "./components/Header";
import Image from "./components/Image";
import logo from './img/logo.jpg'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            help_text: "Help text",
            user_data: ""
        }

        this.input_click = this.input_click.bind(this)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.help_text !== 'Help')
            console.log('Some');
    }

    render() {
        return (<div className="name">
                <Header title={"Шапка сайта1"}/>
                <Header title={"Шапка сайта2"}/>
                <h1>{this.state.help_text}</h1>
                <h2>{this.state.user_data}</h2>
                <input placeholder={this.state.help_text}
                       onChange={event => this.setState({user_data: event.target.value})}
                       onClick={this.input_click}
                       onMouseEnter={this.mouse_over}/>
                <p>{this.state.help_text === "Help text!" ? "Yes" : "No"}</p>
                <Image image={logo}/>
            </div>
        )
    }

    input_click() {
        this.setState({help_text: 'Changed text!!!'})
        console.log('Clicked')
    }
    mouse_over() {console.log('Mouse Over')}
}


export default App
