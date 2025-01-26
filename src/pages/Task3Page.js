import React from 'react'
import axios from "axios"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import NumberInput from "../components/NumberInput";
import TaskDescription from "../components/TaskDescription";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

class Task3Page extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            a1: 1,
            a2: 2,
            b: 1,
            c: 0,
            a: [],
            d: [],
            is_drown: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    path = '/task3'

    handleSubmit(event) {
        event.preventDefault()
        const { a1, a2, b, c } = this.state

        console.log(a1, a2, b, c)

        axios.post(this.props.base_url + this.path, { a1, a2, b, c })
            .then(response => {
                this.setState({
                    a: response.data.a,
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
            labels: this.state.a,
            datasets: [
                {
                    label: 'График d от a',
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
                    text: 'График d от a',
                },
            },
        }

        return (
            <div>
                <TaskDescription taskNumber='3'
                                 inputDescription='введите границы диапазона чисел a — длин строк: число a1, число a2;
                    число b — число дополнительных символов; число с — вероятность помехи в каждом отдельном символе
                    (0-100).'
                                 outputDescription='график d(a).'
                />

                <form onSubmit={this.handleSubmit}>
                    <NumberInput label='Число a1:'
                                 id='num_a1'
                                 value={this.state.a1}
                                 onChange={(e) => this.setState({a1: e.target.value})}
                                 min={'1'}
                    />
                    <NumberInput label='Число a2:'
                                 id='num_a2'
                                 value={this.state.a2}
                                 onChange={(e) => this.setState({a2: e.target.value})}
                                 min={'2'}
                    />
                    <NumberInput label='Число b:'
                                 id='num_b'
                                 value={this.state.b}
                                 onChange={(e) => this.setState({b: e.target.value})}
                                 min={'1'}
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
                        <Line data={data} options={options}/>
                    </div>
                )}
            </div>
        )
    }
}

export default Task3Page
