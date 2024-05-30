import RepoList from '@/components/RepoList';
import SearchBar from '@/components/SearchBar';
import UserAvatar from '@/components/UserAvatar';
import UserProfile from '@/components/UserProfile';

import user from '@/utils/mockUserData';
import repoList from '@/utils/mockRepoData';

const Home = () => {
  return (
    <section>
      <div className='sm:hidden block'>
        <SearchBar />
      </div>

      <section className='grid gap-5 sm:gap-7'>
        <div className='grid grid-cols-3 gap-5 sm:gap-7'>
          <UserAvatar user={user} />
          <div className='col-span-2'>
            <UserProfile user={user} />
          </div>
        </div>

        <RepoList repoList={repoList} />
      </section>
    </section>
  );
};

export default Home;
