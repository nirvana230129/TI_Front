import React from 'react';
import axios from 'axios';
import NumberInput from '../components/NumberInput';
import StringInput from '../components/StringInput';
import TaskDescription from '../components/TaskDescription';
import ResultContainer from '../components/ResultContainer';
import ResultString from '../components/ResultString';
import SubmitButton from '../components/SubmitButton';

class Task1Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            string: 'qwerty',
            n: 1,
            c: 0,
            result: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    path = '/task1';

    handleSubmit(event) {
        event.preventDefault();
        const { string, n, c } = this.state;

        console.log(string, n, c);

        axios.post(this.props.baseUrl + this.path, { message: string, n, c })
            .then(response => {
                this.setState({ result: response.data.message });
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    render() {
        const { result } = this.state;
        const thresholdLen = 180;
        const displayResult = result.length > thresholdLen ? result.substring(0, thresholdLen) + '…' : result;

        return (
            <div>
                <TaskDescription
                    taskNumber='1'
                    inputDescription='Введите строку, число дополнительных символов, вероятность помехи в каждом отдельном символе (0-100).'
                    outputDescription='Строка.'
                />
                <form onSubmit={this.handleSubmit}>
                    <StringInput
                        placeholder='Строка'
                        value={this.state.string}
                        onChange={(e) => this.setState({ string: e.target.value })}
                    />
                    <NumberInput
                        label='Число дополнительных символов:'
                        id='num_n'
                        value={this.state.n}
                        onChange={(e) => this.setState({ n: e.target.value })}
                        min={1}
                    />
                    <NumberInput
                        label='Вероятность помехи в каждом отдельном символе (0-100):'
                        id='num_c'
                        value={this.state.c}
                        onChange={(e) => this.setState({ c: e.target.value })}
                        min={0}
                        max={100}
                    />
                    <SubmitButton />
                </form>

                {this.state.result && (
                    <ResultContainer result={
                        <ResultString string={displayResult} showButton={true} />
                    } />
                )}
            </div>
        );
    }
}

export default Task1Page;
