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
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  indexAxis: 'y' as const,
  layout: {
    padding: {
      left: 15,
      right: 20,
    },
  },
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Projects',
      color: '#3366CC',
    },
  },
  scales: {
    y: {
      ticks: {
        font: {
          size: 9,
        },
      },
    },
    x: {
      ticks: {
        font: {
          size: 9,
        },
      },
    },
  },
};

const labels = ['Server Migration', 'Sales Tracking', 'Customer Database'];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 10, max: 100 })),
      backgroundColor: ['#ff0000', '#ffcc33', '#3366CC'],
    },
  ],
};
export default function ProjectsChart() {
  return <Bar options={options} data={data} />;
}
