import { IconDashboard, IconUserCircle } from '@tabler/icons';
import Button from './Button';

export default function SideBar() {
  return (
    <section className='flex flex-col justify-between bg-my-board-blue text-my-board-white max-w-[300px] min-h-screen px-6 py-3'>
      <div>
        <h3 className='text-my-board-font text-center pt-4 min-w-full'>
          3Milagros
        </h3>
        <div className='border-b my-4' />
        <button className='flex gap-2 text-my-board-font-btn px-6 min-w-full text-left'>
          <IconDashboard />
          Dashboard
        </button>
        <div className='border-b my-4' />
        <button className='flex gap-2 text-my-board-font-btn px-6 min-w-full text-left'>
          <IconUserCircle />
          Profile
        </button>
        <div className='border-b my-4' />
      </div>
      <Button className='bg-my-board-full-white text-my-board-blue'>
        Logout
      </Button>
    </section>
  );
}
