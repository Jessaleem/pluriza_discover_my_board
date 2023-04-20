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
import { faker } from '@faker-js/faker';

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
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Earnings Overview',
    },
  },
};

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Nov',
  'Dec',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Earnings',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 40000 })),
      borderColor: '#3366CC',
      backgroundColor: '#3366CC',
    },
  ],
};

export default function EarningsOverview() {
  return <Line options={options} data={data} />;
}
