import React, { useContext } from 'react'
import { InitializeContext } from '../App';

export default function ToggleTheme() {
          const { theme, toggleTheme } = useContext(InitializeContext);
          return (
                    <div onClick={toggleTheme} className={`cursor-pointer py-1 px-3 rounded-xl font-semibold duration-300 ${theme ? 'text-white' : 'text-black'}`}>
                              {
                                        theme ? (
                                                  <i className='bx bx-sun text-xl'></i>
                                        ) : (
                                                  <i className='bx bx-moon text-xl'></i>
                                        )
                              }
                    </div>
          )
}
