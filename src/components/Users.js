import React from 'react'
import User from "./User";


class Users extends React.Component {
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
    }

    render() {
        if (this.state.users.length)
            return (<div>
                    {this.state.users.map((user, index) => (
                        <User key={index} user={user} />
                    ))}
                </div>)
        else
            return (<div className='user'>
                <h3>Пользователей нет</h3>
            </div>)
    }
}


export default Users
