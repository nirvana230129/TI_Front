import React from 'react'
import axios from "axios"
import {IoCopy} from "react-icons/io5"


class Task1Page extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            string: '',
            a: 0,
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

        // axios.post('https://backend.com/api/task1', { string, a, b })
        //     .then(response => {
        //         this.setState({ result: response.data })
        //     })
        //     .catch(error => {
        //         console.error('There was an error!', error)
        //     })

        this.setState({ result: '<<<' + string + a + b + '>>>' })
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
                <p className='description'>Задача: введите строку, число a, число b. На выход — строка.</p>

                <form onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder='Строка'
                        value={this.state.string}
                        onChange={(e) => this.setState({string: e.target.value})}
                    />
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
