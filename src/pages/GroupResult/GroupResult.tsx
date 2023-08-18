import React from 'react'
import Navbar from '../../shared/Navbar/Navbar'
import GroupForm from './GroupForm'
import BottomNav from '../../shared/Navbar/BottomNav'
import useTitle from '../../hooks/useTitle'

export default function GroupResult() {
          useTitle('Group Result');

          return (
                    <>
                              <Navbar />
                              <BottomNav />
                              <GroupForm />
                    </>
          )
}
