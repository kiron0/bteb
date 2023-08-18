import React from 'react'
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Navbar from '../shared/Navbar/Navbar';
import BottomNav from '../shared/Navbar/BottomNav';
import useTitle from '../hooks/useTitle';

export default function Root() {
          useTitle('Home');

          return (
                    <>
                              <Navbar />
                              <BottomNav />
                              <Home />
                              <Outlet />
                    </>
          )
}
