import React from 'react'


class Users extends React.Component {
    users = [
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
    // users = []

    render() {
        if (this.users.length)
            return (<div>
                    {this.users.map((user, index) => (<div className='user' key={user.id}>
                            <h3>[{index}] {user.firstname} {user.lastname}</h3>
                            <p>{user.bio}</p>
                            <b>{user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
                        </div>
                    ))}
                </div>)
        else
            return (<div className='user'>
                <h3>Пользователей нет</h3>
            </div>)
    }
}


export default Users
