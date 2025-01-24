import React from 'react'
import axios from "axios"
import {IoCopy} from "react-icons/io5"


class Task1Page extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            string: '',
            a: 1,
            b: 0,
            result: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.copyToClipboard = this.copyToClipboard.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const { string, a, b } = this.state

        console.log(string, a, b)

        const aNumber = Number(a)
        const bNumber = Number(b)
        axios.post('http://127.0.0.1:8000/task1', { message: string, n: aNumber, c: bNumber })
            .then(response => {
                this.setState({ result: response.data.message })
            })
            .catch(error => {
                console.error('There was an error!', error)
            })
    }

    copyToClipboard() {
        navigator.clipboard.writeText(this.state.result)
            .catch(err => {
                console.error('Ошибка при копировании: ', err)
            })
    }

    render() {
        const { result } = this.state
        let threshold_len = 180
        const displayResult = result.length > threshold_len ? result.substring(0, threshold_len) + '…' : result

        return (
            <div>
                <h1>Задание 1</h1>
                <p className='description'>Задача: введите строку, число дополнительных символов, вероятность помехи в
                    каждом отдельном символе (0-100). На выход — строка.</p>

                <form onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder='Строка'
                        value={this.state.string}
                        onChange={(e) => this.setState({string: e.target.value})}
                    />
                    <label htmlFor='num_a'>Число дополнительных символов:</label>
                    <input
                        id='num_a'
                        type='number'
                        value={this.state.a}
                        onChange={(e) => this.setState({a: e.target.value})}
                        min={'1'}
                    />
                    <label htmlFor='num_b'>Вероятность помехи в каждом отдельном символе (0-100):</label>
                    <input
                        id='num_b'
                        type='number'
                        value={this.state.b}
                        onChange={(e) => this.setState({b: e.target.value})}
                        min={'0'}
                        max={'100'}
                    />
                    <button type='submit'>Подтвердить</button>
                </form>

                {this.state.result && (
                    <div className="result-container">
                        <h2>Результат:</h2>
                        <IoCopy onClick={this.copyToClipboard} className='copy-icon'></IoCopy>
                        <p>{displayResult}</p>
                    </div>
                )}

            </div>
        )
    }
}

export default Task1Page
