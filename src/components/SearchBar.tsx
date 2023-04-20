import { IconSearch } from '@tabler/icons';
export default function SearchBar() {
  return (
    <div className='shadow-lg z-10 py-3 w-full px-8'>
      <div className='flex max-w-sm'>
        <input
          type='search'
          className='py-2 w-full text-xs bg-gray-100 rounded-l-md px-4 focus:outline-none'
          placeholder='Search for...'
        />
        <button
          type='button'
          className='flex items-center justify-center p-2 rounded-r-md text-xs top-0 right-0 bg-my-board-blue'
        >
          <IconSearch className='bg-my-board-blue text-my-board-full-white' />
        </button>
      </div>
    </div>
  );
}
