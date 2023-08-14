import React from 'react'
import Individual from './Individual'
import Group from './Group'
import CGPA from './CGPA'
import Books from './Books'
import ScrollButton from '../../shared/ScrollButton/ScrollButton'

export default function Home() {
  return (
    <div className='pb-12 md:pb-0 '>
      <Individual />
      <Group />
      <CGPA />
      <Books />
      <ScrollButton />
    </div>
  )
}
