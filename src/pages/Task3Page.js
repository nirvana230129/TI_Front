import React from 'react'
import axios from "axios"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

class Task3Page extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            a1: 0,
            a2: 0,
            b: 0,
            c: 0,
            a: [],
            d: [],
            is_drown: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const { a1, a2, b, c } = this.state

        console.log(a1, a2, b, c)

        // axios.post('https://backend.com/api/task3', { a1, a2, b, c })
        //     .then(response => {
        //         this.setState({
        //             result: response.data,
        //             a: response.data.a,
        //             d: response.data.d
        //         })
        //     })
        //     .catch(error => {
        //         console.error('There was an error!', error)
        //     })

        this.setState({ a: [1, 2, 3], d: [1, 4, 9]})
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
                <h1>Задание 3</h1>
                <p className='description'>Задача: введите число a1, число a2, число b, число c. На выход — график d(a).</p>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='num_a1'>Число a1:</label>
                    <input
                        id='num_a1'
                        type='number'
                        value={this.state.a1}
                        onChange={(e) => this.setState({a1: e.target.value})}
                    />
                    <label htmlFor='num_a2'>Число a2:</label>
                    <input
                        id='num_a2'
                        type='number'
                        value={this.state.a2}
                        onChange={(e) => this.setState({a2: e.target.value})}
                    />
                    <label htmlFor='num_b'>Число b:</label>
                    <input
                        id='num_b'
                        type='number'
                        value={this.state.b}
                        onChange={(e) => this.setState({b: e.target.value})}
                    />
                    <label htmlFor='num_c'>Число c:</label>
                    <input
                        id='num_c'
                        type='number'
                        value={this.state.c}
                        onChange={(e) => this.setState({c: e.target.value})}
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

export default Task3Page
