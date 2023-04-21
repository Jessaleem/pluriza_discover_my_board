import Button from '@/components/Button';
import Card from '@/components/Card';
import EarningsOverview from '@/components/EarningsOverview';
import PendingRequests from '@/components/PendingReqChart';
import ProjectsChart from '@/components/ProjectsChart';
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
        <div className='flex flex-col col-span-3 bg-my-board-white items-center border-2 border-my-board-white shadow-inner'>
          <div className='bg-gray-50 w-full text-center py-2'>
            <h2 className='text-my-board-blue text-sm font-bold'>
              Earnings Overview
            </h2>
          </div>
          <div className='m-auto'>
            <EarningsOverview />
          </div>
        </div>
        <div className='flex flex-col col-span-2 bg-my-board-white items-center border-2 border-my-board-white shadow-inner'>
          <div className='bg-gray-50 w-full text-center py-2'>
            <h2 className='text-my-board-blue text-sm font-bold'>
              Revenue Sources
            </h2>
          </div>
          <div className='pb-5'>
            <RevenueSources />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <div className='flex flex-col bg-my-board-white items-center border-2 border-my-board-white shadow-inner'>
          <div className='bg-gray-50 w-full text-center py-2'>
            <h2 className='text-my-board-blue text-sm font-bold'>Projects</h2>
          </div>
          <div className='m-auto'>
            <ProjectsChart />
          </div>
        </div>
        <div className='flex flex-col bg-my-board-white items-center border-2 border-my-board-white shadow-inner'>
          <div className='bg-gray-50 w-full text-center py-2'>
            <h2 className='text-my-board-blue text-sm font-bold'>
              Pending Requests
            </h2>
          </div>
          <div className='pb-5'>
            <PendingRequests />
          </div>
        </div>
      </div>
    </article>
  );
}
