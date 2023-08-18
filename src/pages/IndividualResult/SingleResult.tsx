import React from 'react'
import Navbar from '../../shared/Navbar/Navbar'
import ResultForm from './ResultForm'
import BottomNav from '../../shared/Navbar/BottomNav'
import useTitle from '../../hooks/useTitle'

export default function SingleResult() {
          useTitle('Individual Result');

          return (
                    <>
                              <Navbar />
                              <BottomNav />
                              <ResultForm />
                    </>
          )
}
