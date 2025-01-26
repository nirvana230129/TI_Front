import React from 'react'

const ResultContainer = ({ result }) => {
    return (
        <div className="result-container">
            <h2>Результат:</h2>
            {result}
        </div>
    )
}

export default ResultContainer
