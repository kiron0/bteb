import React from 'react'
import Individual from './Individual'
import Group from './Group'
import CGPA from './CGPA'
import Footer from '../../shared/Footer/Footer'

export default function Home() {
  return (
    <>
      <Individual />
      <Group />
      <CGPA />
      <Footer />
    </>
  )
}
