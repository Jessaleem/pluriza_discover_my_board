import Button from '@/components/Button';
import Card from '@/components/Card';

const cardsData = [
  {
    id: 1,
    borderColor: 'border-my-board-blue',
    textColor: 'text-my-board-blue',
    label: 'EARNINGS (MONTHLY)',
    number: '$40,000',
  },
  {
    id: 2,
    borderColor: 'border-my-board-green',
    textColor: 'text-my-board-green',
    label: 'EARNINGS (ANNUAL)',
    number: '$215,000',
  },
  {
    id: 3,
    borderColor: 'border-my-board-aqua',
    textColor: 'text-my-board-aqua',
    label: 'EARNINGS (TASKS)',
    number: '50%',
  },
  {
    id: 4,
    borderColor: 'border-my-board-yellow',
    textColor: 'text-my-board-yellow',
    label: 'EARNINGS (PENDING REQUESTS)',
    number: '18',
  },
];

export default function Home() {
  return (
    <article className='p-4'>
      <div className='flex items-center justify-between py-2'>
        <h1>Dashboard</h1>
        <Button className='text-my-board-full-white bg-my-board-blue'>
          Download Resume
        </Button>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {cardsData.map((data) => {
          return <Card key={data.id} {...data} />;
        })}
      </div>
    </article>
  );
}
