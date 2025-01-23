import React from 'react'
import * as ReactDOMClient from 'react-dom/client';


class Header extends React.Component {
    render() {
        return (
            <header className="Header">{this.props.title}</header>
        )
    }
}


export default Header
