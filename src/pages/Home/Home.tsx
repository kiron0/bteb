import React from 'react'
import Individual from './Individual'
import Group from './Group'
import CGPA from './CGPA'
import Books from './Books'
import ScrollButton from '../../shared/ScrollButton/ScrollButton'
import Footer from '../../shared/Footer/Footer'

export default function Home() {
  return (
    <div className='pb-12 md:pb-0 '>
      <Individual />
      <Group />
      <CGPA />
      <Books />
      <div className='hidden md:flex justify-center items-center'>
        <Footer />
      </div>
      <ScrollButton />
    </div>
  )
}
