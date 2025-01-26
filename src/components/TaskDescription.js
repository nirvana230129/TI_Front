import React from 'react';

class TaskDescription extends React.Component {
    render() {
        const { taskNumber, inputDescription, outputDescription } = this.props;

        return (
            <div>
                <h1>Задание {taskNumber}</h1>
                <p className='description'>Задача: {inputDescription}<br/>На выход — {outputDescription}</p>
            </div>
        );
    }
}

export default TaskDescription;
