import React from 'react'

export default function Footer() {
          return (
                    <div className='flex flex-col justify-center items-center py-6'>
                              <small className='font-semibold'>Copyright &copy; {new Date().getFullYear()} - All rights reserved.</small>
                              <small className='font-semibold'>Developed by <a href="https://kiron.dev" target="_blank" rel="noopener noreferrer"><span className='text-[#008000]'>Toufiq Hasan Kiron</span></a></small>
                    </div>
          )
}
