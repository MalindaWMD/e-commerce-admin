import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const colors = [
  "rgba(142, 96, 247, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(34, 201, 62, 0.8)",
  "rgba(109, 134, 181, 0.8)",
  "rgba(227, 224, 36, 0.8)",
];

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
}

const getFormattedData = (data) => {
  data.datasets = data.datasets.map((dataset, idx) => {
    return {
      ...dataset,
      ...{
        backgroundColor: colors[idx] || colors[0],
        barThickness: 20,
      }
    };
  });

  return data;
}

export default function BarChart({ data }) {
    return(
    <Bar data={getFormattedData(data)}  options={options}/>
    )
}