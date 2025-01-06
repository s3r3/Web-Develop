// src/LineChart.tsx
import React from 'react';
import { Line, ChartData } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

// Register components dengan Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

interface LineChartProps {
  width?: number;
  height?: number;
}

const LineChart: React.FC<LineChartProps> = ({ width = 620, height = 250 }) => {
  const data: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4, // Kurangnya garis putus-putus (0 = lurus, 1 = terangkat)
        
      },
      {
        label: 'Monthly Expenses',
        data: [70, 55, 85, 75, 65, 60, 55],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.4, // Kurangnya garis putus-putus (0 = lurus, 1 = terangkat)
      },
    ],
  };
  
  const options = {
    responsive: true,
          maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Sales and Expenses',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <Line data={data} options={options} className='' />
    </div>
  );
};
export default LineChart;
