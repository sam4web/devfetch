import SearchBar from '@/components/SearchBar';
import Skeleton from '@/components/Skeleton';

const Home = () => {
  return (
    <section>
      <div className='sm:hidden block'>
        <SearchBar />
      </div>
      <Skeleton />
    </section>
  );
};

export default Home;
