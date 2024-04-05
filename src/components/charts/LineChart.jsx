
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { abbr } from "../../utils/number";
import { useMemo } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const colors = [
  "rgba(142, 96, 247, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(34, 201, 62, 0.8)",
];

const getOptions = (yPrefix, ySufix, abbreviate, steps) => {
  return {
    responsive: true,
    lineTension: 0.35,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        ticks: {
          stepSize: steps || 1,
          color: "#6b7280",
          callback: function(value, index, ticks) {
            let val = abbreviate ? abbr(value) : value;
            if(yPrefix){
              return yPrefix + val;
            }

            if(ySufix){
              return val +ySufix;
            }

            return val;
        }
        },
        grid: {
          color: "#f0f0f0",
        },
        border: {
          display: false,
        },
      },
    },
  }
};

const getFormattedData = (data) => {
  data.datasets = data.datasets.map((dataset, idx) => {
    return {
      ...dataset,
      ...{
        borderWidth: 2,
        borderColor: colors[idx] || colors[0],
        backgroundColor: colors[idx] || colors[0],
        borderDash: [4, 4],
      }
    };
  });

  return data;
}

export default function LineChart({ data, steps, yPrefix, ySufix, abbreviate=true }) {

  const options = useMemo(() => {
    return getOptions(yPrefix, ySufix, abbreviate, steps);
  }, [yPrefix, ySufix, abbreviate, steps]);
  
    return(
      <Line options={options} data={getFormattedData(data)} />
    )
}