import RepoList from '@/components/RepoList';
import SearchBar from '@/components/SearchBar';
import UserAvatar from '@/components/UserAvatar';
import UserProfile from '@/components/UserProfile';

import user from '@/utils/mockUserData';
import repoList from '@/utils/mockRepoData';

const Home = () => {
  return (
    <section>
      <div className='space-y-4'>
        <div className='sm:hidden block'>
          <SearchBar />
        </div>
        <section className='grid gap-5 sm:gap-7'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7'>
            <UserAvatar user={user} />
            <div className='lg:col-span-2'>
              <UserProfile user={user} />
            </div>
          </div>
          <RepoList repoList={repoList} />
        </section>{' '}
      </div>
    </section>
  );
};

export default Home;
