import React from 'react'
import User from "./User";


class Users extends React.Component {
    render() {
        if (this.props.users.length)
            return (<div>
                    {this.props.users.map((user, index) => (
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
