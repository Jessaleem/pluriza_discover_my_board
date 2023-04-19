import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
export default function Home() {
  return (
    <div className='flex'>
      <SideBar />
      <SearchBar />
    </div>
  );
}
