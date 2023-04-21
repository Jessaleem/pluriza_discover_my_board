import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        font: {
          size: 9,
        },
        boxWidth: 30,
        usePointStyle: true,
      },
    },
  },
};
export const data = {
  labels: ['Direct', 'Social', 'Referral'],
  datasets: [
    {
      label: 'Revenue Sources',
      data: [15, 6, 3],
      backgroundColor: ['#3366CC', '#33cc99', '#66cccc'],
      borderColor: ['#3366CC', '#33cc99', '#66cccc'],
      borderWidth: 1,
    },
  ],
};

export default function RevenueSources() {
  return <Doughnut data={data} options={options} width={240} height={150} />;
}
