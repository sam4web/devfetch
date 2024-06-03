import { SearchBar } from '@/components';
import usePageTitle from '@/hooks/usePageTitle';

import useUserStore from '@/store';
import { useEffect } from 'react';

const Home = () => {
  const clearState = useUserStore((state) => state.clearState);

  usePageTitle('');

  useEffect(() => {
    clearState();
  }, [clearState]);

  return (
    <section className='hero min-h-[70vh] size-full'>
      <div className='hero-content text-center p-0 sm:wrapper-spacing'>
        <div className='max-w-md space-y-7'>
          <div className='flex-center'>
            <img src={'/favicon.svg'} alt='devfetch icon' />
          </div>
          <h1 className='text-xl sm:text-2xl font-semibold dark:text-neutral-content'>
            Search for GitHub Profile.
          </h1>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Home;
