import React from 'react'
import axios from "axios"
import NumberInput from "../components/NumberInput";
import TaskDescription from "../components/TaskDescription";
import ResultContainer from "../components/ResultContainer";
import ResultString from "../components/ResultString";
import SubmitButton from "../components/SubmitButton";
import Table from "../components/Table";

class Task4Page extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            a: 1,
            b: 1,
            c: 20,
            tableData: [],
            is_decrypted: false,
            c_is_generated: false,
            button_is_pressed: false,
            isLoading: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.generateRandomC = this.generateRandomC.bind(this)
    }

    path = '/task4'

    handleSubmit(event) {
        event.preventDefault()
        if (this.state.c_is_generated) {
            const {a, b, c} = this.state

            this.setState({ isLoading: true });

            axios.post(this.props.base_url + this.path, { a, b, c })
                .then(response => {
                    this.setState({
                        is_decrypted: response.data.is_decrypted,
                        tableData:
                            {
                                "original": response.data.original,
                                "encoded": response.data.encoded,
                                "corrupted": response.data.corrupted,
                                "decoded": response.data.decoded,
                            },
                        isLoading: false,
                        button_is_pressed: true,
                    })
                })
                .catch(error => {
                    console.error('There was an error!', error)
                    this.setState({ isLoading: false });
                })
        }
    }

    generateRandomC() {
        let left = 20, right = 70
        this.setState({ c: Math.floor(Math.random() * (right - left + 1)) + left, c_is_generated: true});
    }

    render() {
        return (
            <div>
                <TaskDescription taskNumber='4'
                                 inputDescription='введите число a — длину строки, число b — число дополнительных
                    символов, значение числа c — вероятности помехи в каждом отдельном символе — выбирается случайно.'
                                 outputDescription='удалось декодировать или нет.'
                />
                <form onSubmit={this.handleSubmit}>
                    <NumberInput label='Число a:'
                                 id='num_a'
                                 value={this.state.a}
                                 onChange={(e) => this.setState({a: e.target.value})}
                                 min={'1'}
                    />
                    <NumberInput label='Число b:'
                                 id='num_b'
                                 value={this.state.b}
                                 onChange={(e) => this.setState({b: e.target.value})}
                                 min={'1'}
                    />
                    <button type='button' onClick={this.generateRandomC}>Сгенерировать новое значение для переменной c</button>
                    <SubmitButton />
                </form>

                {this.state.isLoading ? (
                    <p>Loading...</p>
                ) : (
                    this.state.c_is_generated && this.state.button_is_pressed && (
                        <ResultContainer result={
                            <>
                                <ResultString string={this.state.is_decrypted? 'Удалось декодировать ✅': 'Не удалось декодировать ❌'} />
                                <Table stringsData={this.state.tableData} a={this.state.a} b={this.state.b} />
                            </>
                        } />
                    )
                )}
            </div>
        )
    }
}

export default Task4Page
