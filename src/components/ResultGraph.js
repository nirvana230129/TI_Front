import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const ResultGraph = ({ x, y, label }) => {
    const data = {
        labels: x,
        datasets: [
            {
                label: label,
                data: y,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            }
        ]
    }

    const options = { responsive: true }
    return <Line data={data} options={options} />
}

export default ResultGraph
