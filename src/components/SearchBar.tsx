export default function SearchBar() {
  return (
    <div className='mb-4'>
      <div className='relative mb-4 flex w-full flex-wrap items-stretch'>
        <input
          type='search'
          className='relative block  py-2 text-xs bg-gray-50 rounded-l-md mt-4 ml-6 px-4 focus:outline-none'
          placeholder='Search for...'
        />
        <button
          type='button'
          className='relative flex items-center rounded-r-md text-xs py-2 top-0 right-0 mt-4 bg-my-board-blue'
        >
          <svg
            aria-hidden='true'
            className='w-8 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
