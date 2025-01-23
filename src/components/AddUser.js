import React from 'react'

class AddUser extends React.Component {
    user_to_add = {}

    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            bio: '',
            age: 1,
            isHappy: false,
        }
    }

    render() {
        return (
            <form className='header' ref={(el) => this.form = el}>
                <input placeholder='Имя' onChange={(e) => this.setState({firstname: e.target.value})}/>
                <input placeholder='Фамилия' onChange={(e) => this.setState({lastname: e.target.value})}/>
                <textarea placeholder='Био' onChange={(e) => this.setState({bio: e.target.value})}/>
                <input placeholder='Возраст' onChange={(e) => this.setState({age: e.target.value})}/>
                <label htmlFor='is_happy'>Счаслив?</label>
                <input type='checkbox' placeholder='счастлив' id='is_happy' onChange={(e) => this.setState({isHappy: e.target.checked})}/>
                <button type='button' onClick={() => {
                    this.form.reset()
                    this.user_to_add = {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    if (this.props.user)
                        this.user_to_add.id = this.props.user.id
                    this.props.onAddUser(this.user_to_add)}
                }>Добавить</button>
            </form>
        )
    }
}


export default AddUser
