// components
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  if (location.pathname === '/') {
    return <Navigate to='/home' />;
  }

  return (
    <main className='max-w-screen-lg mx-auto size-full min-h-screen'>
      <div className='p-4 sm:px-7 sm:py-10 size-full flex flex-col space-y-4 sm:space-y-8'>
        <Header />
        <div className='min-h-[70vh] size-full'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
