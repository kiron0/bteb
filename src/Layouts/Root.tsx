import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import ResultForm from '../pages/IndividualResult/ResultForm';

export default function Root() {
          return (
                    <>
                              <Navbar />
                              <ResultForm />
                              <Outlet />
                    </>
          )
}
