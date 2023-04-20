import SearchBar from './SearchBar';
import SideBar from './SideBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex bg-gray-50'>
      <SideBar />
      <div className='flex-1'>
        <SearchBar />
        <main className='py-4 px-3'>{children}</main>
      </div>
    </div>
  );
}
