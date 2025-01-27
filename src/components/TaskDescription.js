import React from 'react';

const TaskDescription = ({ taskNumber, inputDescription, outputDescription }) => {
    return (
        <div>
            <h1>Задание {taskNumber}</h1>
            <p className="description">
                Задача: {inputDescription}<br />
                На выход — {outputDescription}
            </p>
        </div>
    );
};

export default TaskDescription;
