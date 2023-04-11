import React from 'react'
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Navbar from '../shared/Navbar/Navbar';

export default function Root() {
          return (
                    <>
                              <Navbar />
                              <Home />
                              <Outlet />
                    </>
          )
}
