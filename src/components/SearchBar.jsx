const SearchBar = () => {
  return (
    <div className='flex-center space-x-3'>
      <label className='input input-bordered flex-1 flex-center gap-2 dark:bg-neutral font-medium dark:text-neutral-content sm:dark:border-neutral-content'>
        <input type='text' className='grow outline-none' placeholder='Search' />
        <button className='sm:block hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='w-5 h-5 opacity-70'
          >
            <path
              fillRule='evenodd'
              d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </label>
      <button className='sm:hidden dark:btn-neutral btn px-2.5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='size-6'
        >
          <path
            fillRule='evenodd'
            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
