import React from 'react'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from "./AddUser";


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            edit_form: false,
        }
    }

    render() {
        return (
            <div className='user'>
                <IoCloseCircleSharp onClick={() => this.props.onDeleteUser(this.props.user.id)} className='delete-icon'></IoCloseCircleSharp>
                <IoHammerSharp onClick={() => {
                    this.setState({
                        edit_form: !this.state.edit_form
                    })
                }} className='edit-icon'></IoHammerSharp>
                <h3>{this.props.user.firstname} {this.props.user.lastname}, {this.props.user.age}</h3>
                <p>{this.props.user.bio}</p>
                <b>{this.props.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>

                {this.state.edit_form && <AddUser user={this.props.user} onAddUser={this.props.onEditUser} />}
            </div>
        )
    }
}


export default User
