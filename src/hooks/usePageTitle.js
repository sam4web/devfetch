import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (title) => {
  const location = useLocation();
  const defTitle = 'Devfetch';

  useEffect(() => {
    document.title = title.trim() ? `${defTitle} | ${title}` : defTitle;
    console.log(title);
  }, [location, title]);
};

export default usePageTitle;
