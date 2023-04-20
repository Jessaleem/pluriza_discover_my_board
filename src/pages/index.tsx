import Button from '@/components/Button';
import Card from '@/components/Card';
import EarningsOverview from '@/components/EarningsOverview';
import RevenueSources from '@/components/RevenueSources';
import { cardsData } from '@/utils/cardsData';

export default function Home() {
  return (
    <article className='p-4'>
      <div className='flex items-center justify-between py-2'>
        <h1 className='font-bold text-gray-800'>Dashboard</h1>
        <Button className='text-my-board-full-white bg-my-board-blue'>
          Download Resume
        </Button>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {cardsData.map((data) => {
          return <Card key={data.id} {...data} />;
        })}
      </div>
      <div className='grid grid-cols-5 gap-4 py-4'>
        <div className='flex col-span-3 bg-my-board-white shadow-md items-center justify-center py-2'>
          <EarningsOverview />
        </div>
        <div className='flex col-span-2 bg-my-board-white shadow-md items-center justify-center py-3'>
          <RevenueSources />
        </div>
      </div>
    </article>
  );
}
