import { IconBorderBottom } from '@tabler/icons';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        font: {
          size: 9,
        },
        boxWidth: 30,
      },
    },
  },
};

export const data = {
  labels: ['Hosting', 'Backup', 'Server Configuration'],
  datasets: [
    {
      label: 'Pending Requests',
      data: [1, 12, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: ['#ff0000', '#3366CC', '#ffcc33'],
      borderWidth: 1,
    },
  ],
};

export default function PendingRequests() {
  return <Pie data={data} options={options} width={240} height={150} />;
}
