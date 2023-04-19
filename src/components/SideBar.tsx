export default function SideBar() {
  return (
    <nav className=' relative flex bg-my-board-blue text-my-board-white flex-col w-56 h-screen px-2'>
      <h3 className='text-my-board-font text-center border-b py-4 min-w-full'>
        3Milagros
      </h3>
      <button className='text-my-board-font-btn border-b py-4 min-w-full text-left'>
        Dashboard
      </button>
      <button className='text-my-board-font-btn border-b py-4 min-w-full text-left'>
        Profile
      </button>
      <button className=' absolute bg-my-board-full-white text-my-board-blue rounded inset-x-8 bottom-6 '>
        Logout
      </button>
    </nav>
  );
}
