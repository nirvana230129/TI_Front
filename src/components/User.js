import React from 'react'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends React.Component {
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
        return (
            <div className='user'>
                <IoCloseCircleSharp className='delete-icon'></IoCloseCircleSharp>
                <IoHammerSharp className='edit-icon'></IoHammerSharp>
                <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
                <p>{this.props.user.bio}</p>
                <b>{this.props.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
            </div>
        )
    }
}


export default User
