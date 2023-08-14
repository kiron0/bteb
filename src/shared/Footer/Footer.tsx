import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
          return (
                    <div className='flex flex-col justify-center items-center py-6'>
                              <small className='font-semibold'>Copyright &copy; {new Date().getFullYear()} - All rights reserved.</small>
                              <small className='font-semibold'>Developed by <Link to="/dev"><span className='text-[#008000]'>Toufiq Hasan Kiron</span></Link></small>
                    </div>
          )
}
