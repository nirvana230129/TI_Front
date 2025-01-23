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
                    id: 0,
                    firstname: 'Bob',
                    lastname: 'Marley',
                    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repella',
                    age: 40,
                    isHappy: true
                },
                {
                    id: 1,
                    firstname: 'John',
                    lastname: 'Doe',
                    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repella',
                    age: 22,
                    isHappy: false
                }
            ]
        }
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }

    render() {
        return (<div className="name">
                <Header title="Список юзеров"/>
                <main>
                    <Users users={this.state.users} onEditUser={this.editUser} onDeleteUser={this.deleteUser} />
                </main>
                <aside>
                    <AddUser onAddUser={this.addUser}/>
                </aside>
            </div>
        )
    }

    addUser(user) {
        const id = this.state.users.length
        this.setState({ users: [...this.state.users, {id, ...user}] })
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter(user => user.id !== id)
        })
    }

    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id] = user

        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }
}


export default App
