import React from 'react'
import axios from "axios"


class Task4Page extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            a: 0,
            b: 0,
            c: 0,
            is_decrypted: false,
            c_is_generated: false,
            button_is_pressed: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.generateRandomC = this.generateRandomC.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.state.c_is_generated) {
            const {a, b, c} = this.state

            axios.post('http://127.0.0.1:8000/task4', { a, b, c })
                .then(response => {
                    this.setState({ is_decrypted: response.data.is_decrypted })
                })
                .catch(error => {
                    console.error('There was an error!', error)
                })

            this.setState({button_is_pressed: true})
            console.log(a, b, c, this.state.is_decrypted)
        }
    }

    generateRandomC() {
        let left = 20, right = 70
        this.setState({ c: Math.floor(Math.random() * (right - left + 1)) + left, c_is_generated: true});
    }

    render() {
        return (
            <div>
                <h1>Задание 4</h1>
                <p className='description'>Задача: введите число a — длину строки, число b — число дополнительных
                    символов, значение числа c выбирается случайно. На выход — удалось декодировать или нет.</p>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='num_a'>Число a:</label>
                    <input
                        id='num_a'
                        type='number'
                        value={this.state.a}
                        onChange={(e) => this.setState({a: e.target.value})}
                    />
                    <label htmlFor='num_b'>Число b:</label>
                    <input
                        id='num_b'
                        type='number'
                        value={this.state.b}
                        onChange={(e) => this.setState({b: e.target.value})}
                    />
                    <button type='button' onClick={this.generateRandomC}>Сгенерировать новое значение для переменной c</button>
                    <button type='submit'>Подтвердить</button>
                </form>

                {this.state.c_is_generated && this.state.button_is_pressed && (
                    <div className="result-container">
                        <h2>Результат:</h2>
                        <p>{this.state.is_decrypted? 'Удалось декодировать ✅' : 'Не удалось декодировать ❌'}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default Task4Page
