import React from 'react'
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Bob',
                    lastname: 'Marley',
                    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repella',
                    age: 40,
                    isHappy: true
                },
                {
                    id: 2,
                    firstname: 'John',
                    lastname: 'Doe',
                    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repella',
                    age: 22,
                    isHappy: false
                }
            ]
        }
        this.addUser = this.addUser.bind(this)
    }

    render() {
        return (<div className="name">
                <Header title="Список юзеров"/>
                <main>
                    <Users users={this.state.users} />
                </main>
                <aside>
                    <AddUser onAddUser={this.addUser}/>
                </aside>
            </div>
        )
    }

    addUser(user) {
        console.log(user)
        const id = this.state.length
        this.setState({ users: [...this.state.users, {id, ...user}] })
    }
}


export default App
