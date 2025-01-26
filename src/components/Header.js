import React from 'react'
import {Link} from 'react-router-dom'

const Header = ({ title }) => {
    return (
        <header className="header">
            {title}
            <nav>
                <Link to="/task1">Task 1</Link>
                <Link to="/task2">Task 2</Link>
                <Link to="/task3">Task 3</Link>
                <Link to="/task4">Task 4</Link>
            </nav>
        </header>
    )
}

export default Header
