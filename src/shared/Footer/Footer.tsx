import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { InitializeContext } from '../../App';

export default function Footer() {
          const { theme } = useContext(InitializeContext);

          return (
                    <div className='flex flex-col justify-center items-center py-6'>
                              <small className={`font-semibold ${theme ? 'text-white' : 'text-black'}`}>Copyright &copy; {new Date().getFullYear()} - All rights reserved.</small>
                              <small className={`font-semibold ${theme ? 'text-white' : 'text-black'}`}>Developed by <Link to="/dev"><span className='text-primary'>Toufiq Hasan Kiron</span></Link></small>
                    </div>
          )
}
