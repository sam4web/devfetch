// pages & components
import Layout from '@/layout/Layout';
import Home from '@/pages/Home';
import User from '@/pages/User';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path='user' element={<User />} />
      </Route>
    </>
  )
);

export default router;
