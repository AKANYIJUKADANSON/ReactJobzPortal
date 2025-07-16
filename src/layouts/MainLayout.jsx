import React from 'react';
// Outlet will help to make sure that whatever is put inside the layout route
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/contexts';

import Navbar from '../components/Navbar';
const MainLayout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout