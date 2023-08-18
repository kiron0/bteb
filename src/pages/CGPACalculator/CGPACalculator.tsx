import React from 'react'
import Navbar from '../../shared/Navbar/Navbar'
import CalculatorForm from './CalculatorForm'
import BottomNav from '../../shared/Navbar/BottomNav'
import useTitle from '../../hooks/useTitle'

export default function CGPACalculator() {
          useTitle('CGPA Calculator');

          return (
                    <>
                              <Navbar />
                              <BottomNav />
                              <CalculatorForm />
                    </>
          )
}
