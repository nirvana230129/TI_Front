import React from 'react'
import axios from "axios"
import {IoCopy} from "react-icons/io5"
import NumberInput from "../components/NumberInput";
import StringInput from "../components/StringInput";
import TaskDescription from "../components/TaskDescription";


class Task1Page extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            string: '',
            n: 1,
            c: 0,
            result: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.copyToClipboard = this.copyToClipboard.bind(this)
    }

    path = '/task1'

    handleSubmit(event) {
        event.preventDefault()
        const { string, n, c } = this.state

        console.log(string, n, c)

        axios.post(this.props.base_url + this.path, { message: string, n, c })
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
                <TaskDescription taskNumber='1'
                                 inputDescription='введите строку, число дополнительных символов, вероятность помехи в
                    каждом отдельном символе (0-100).'
                                 outputDescription='строка.'
                />
                <form onSubmit={this.handleSubmit}>
                    <StringInput placeholder='Строка'
                                 value={this.state.string}
                                 onChange={(e) => this.setState({string: e.target.value})}
                    />
                    <NumberInput label='Число дополнительных символов:'
                                 id='num_n'
                                 value={this.state.n}
                                 onChange={(e) => this.setState({n: e.target.value})}
                                 min={'1'}
                    />
                    <NumberInput label='Вероятность помехи в каждом отдельном символе (0-100):'
                                 id='num_c'
                                 value={this.state.c}
                                 onChange={(e) => this.setState({c: e.target.value})}
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
