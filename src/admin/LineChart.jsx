import { useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
  
export const options = {
    responsive: true,
    plugins: { 
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'REVENUE YEAR 2023',
        },
    },
};
  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
export const data = {
    labels,
    datasets: [{
        label: 'Revenue',
        data: [21530000, 35200000, 20240000, 42024000, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#30336b',
        backgroundColor: '#130f40',
    }, 
]};
  

export const LineChart = () => {
   
    return (
        <Line options={options} data={data} />
    );
}