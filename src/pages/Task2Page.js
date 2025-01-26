import React from 'react'
import axios from "axios"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import NumberInput from "../components/NumberInput";
import TaskDescription from "../components/TaskDescription";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

class Task2Page extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            a: 1,
            b1: 1,
            b2: 2,
            c: 0,
            b: [],
            d: [],
            is_drown: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    path = '/task2'

    handleSubmit(event) {
        event.preventDefault()
        const { a, b1, b2, c} = this.state

        console.log(a, b1, b2, c)

        axios.post(this.props.base_url + this.path, { a, b1, b2, c })
            .then(response => {
                this.setState({
                    b: response.data.b,
                    d: response.data.d
                })
            })
            .catch(error => {
                console.error('There was an error!', error)
            })

        this.setState({ is_drown: true})
    }

    render() {
        const data = {
            labels: this.state.b,
            datasets: [
                {
                    label: 'График d от b',
                    data: this.state.d,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                }
            ]
        }

        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'График d от b',
                },
            },
        }

        return (
            <div>
                <TaskDescription taskNumber='2'
                                 inputDescription='введите число a — длину строки; границы диапазона чисел b — чисел
                    дополнительных символов: число b1, число b2; число с — вероятность помехи в каждом отдельном символе
                    (0-100).'
                                 outputDescription='график d(b).'
                />

                <form onSubmit={this.handleSubmit}>
                    <NumberInput label='Число a:'
                                 id='num_a'
                                 value={this.state.a}
                                 onChange={(e) => this.setState({a: e.target.value})}
                                 min={'1'}
                    />
                    <NumberInput label='Число b1:'
                                 id='num_b1'
                                 value={this.state.b1}
                                 onChange={(e) => this.setState({b1: e.target.value})}
                                 min={'1'}
                    />
                    <NumberInput label='Число b2:'
                                 id='num_b2'
                                 value={this.state.b2}
                                 onChange={(e) => this.setState({b2: e.target.value})}
                                 min={'2'}
                    />
                    <NumberInput label='Число c:'
                                 id='num_c'
                                 value={this.state.c}
                                 onChange={(e) => this.setState({c: e.target.value})}
                                 min={'0'}
                                 max={'100'}
                    />
                    <button type='submit'>Подтвердить</button>
                </form>

                {this.state.is_drown && (
                    <div className="result-container">
                        <h2>Результат:</h2>
                        <Line data={data} options={options} />
                    </div>
                )}
            </div>
        )
    }
}

export default Task2Page
