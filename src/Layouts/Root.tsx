import React from 'react'
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Navbar from '../shared/Navbar/Navbar';
import BottomNav from '../shared/Navbar/BottomNav';

export default function Root() {
          return (
                    <>
                              <Navbar />
                              <BottomNav />
                              <Home />
                              <Outlet />
                    </>
          )
}
