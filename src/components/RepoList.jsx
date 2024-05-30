import { useState } from 'react';
import RepoDetail from './RepoDetail';

const RepoList = ({ repoList }) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  repoList = repoList.splice(0, 6);
  //   repoList = [];

  return (
    <section className='wrapper size-full'>
      <div className='px-5 py-3 space-y-4'>
        <div className='flex-between space-x-3'>
          <h2 className='text-xl font-medium border-dashed border-b-2 border-gray-400'>
            Repositories
          </h2>

          <select
            className='select select-bordered w-full max-w-40 dark:bg-neutral dark:text-neutral-content dark:border-neutral-content'
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option disabled selected>
              Filter By
            </option>
            <option value='stars'>Stars</option>
            <option value='forks'>Forks</option>
            <option value='size'>Size</option>
          </select>
        </div>

        {repoList.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {repoList.map((repo) => (
              <RepoDetail key={repo.id} repo={repo} />
            ))}
          </div>
        ) : (
          <p className='text-lg font-medium'>This profile has 0 repos.</p>
        )}
      </div>
    </section>
  );
};

export default RepoList;
