import SearchBar from './SearchBar';
import ThemeController from './ThemeController';

const Header = () => {
  return (
    <header className='navbar wrapper'>
      <div className='flex-1'>
        <a className='btn dark:btn-neutral btn-ghost text-xl lg:text-2xl'>
          DevFinder
        </a>
      </div>
      <div className='flex-center space-x-3'>
        <div className='sm:block hidden'>
          <SearchBar />
        </div>
        <ThemeController />
      </div>
    </header>
  );
};

export default Header;
