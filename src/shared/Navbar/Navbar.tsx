import React, { useContext } from 'react'

import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { RiMenu4Fill } from 'react-icons/ri'
import { InitializeContext } from '../../App'
import ToggleTheme from '../../components/ToggleTheme'

export default function Navbar() {
          const { theme } = useContext(InitializeContext);

          const NavMenus = (
                    <>
                              <li className='lg:mr-6 py-2 lg:py-0'>
                                        <NavLink to="/individualResult" className={({ isActive }) =>
                                                  isActive ? "text-white btn btn-primary" : `hover:bg-primary duration-300 btn glass ${theme ? 'text-white' : 'text-black'}`
                                        }>Individual Result</NavLink>
                              </li>
                              <li className='lg:mr-6 py-2 lg:py-0'>
                                        <NavLink to="/groupResults" className={({ isActive }) =>
                                                  isActive ? "text-white btn btn-primary" : ` hover:bg-primary duration-300 btn glass ${theme ? 'text-white' : 'text-black'}`
                                        }>Group Result</NavLink>
                              </li>
                              <li className='lg:mr-6 py-2 lg:py-0'>
                                        <NavLink to="/cgpaCalc" className={({ isActive }) =>
                                                  isActive ? "text-white btn btn-primary" : ` hover:bg-primary duration-300 btn glass ${theme ? 'text-white' : 'text-black'}`
                                        }>CGPA Calculator</NavLink>
                              </li>
                              <li className='lg:mr-6 py-2 lg:py-0'>
                                        <NavLink to="/bookList" className={({ isActive }) =>
                                                  isActive ? "text-white btn btn-primary" : ` hover:bg-primary duration-300 btn glass ${theme ? 'text-white' : 'text-black'}`
                                        }>Book List</NavLink>
                              </li>
                              <li className='md:hidden py-2 lg:py-0'>
                                        <NavLink to="/dev" className={({ isActive }) =>
                                                  isActive ? "text-white btn btn-primary" : ` hover:bg-primary duration-300 btn glass ${theme ? 'text-white' : 'text-black'}`
                                        }>Developer</NavLink>
                              </li>
                              <li className='py-2 lg:py-0'>
                                        <NavLink to="/v1/individualResult" className={({ isActive }) =>
                                                  isActive ? "text-white btn btn-primary" : ` hover:bg-primary duration-300 btn glass ${theme ? 'text-white' : 'text-black'}`
                                        }>V1</NavLink>
                              </li>
                    </>
          )

          return (
                    <div className="hidden md:flex navbar glass sticky top-0 py-4 z-50 md:px-16 lg:px-32">
                              <div className="navbar-start">
                                        <div className="dropdown">
                                                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                                            <RiMenu4Fill className={`text-3xl ${theme ? 'text-white' : 'text-black'}`} />
                                                  </label>
                                                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-72">
                                                            {NavMenus}
                                                  </ul>
                                        </div>
                                        <Link to="/" className={`btn bg-transparent hover:bg-transparent border-none ${theme ? 'text-white' : 'text-black'} normal-case text-xl flex justify-center items-center gap-2`}> <img src={Logo} alt="" className='w-8 md:w-10' /> BTEB Results Factory</Link>
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                        <ul className="menu menu-horizontal px-1">
                                                  {NavMenus}
                                        </ul>
                              </div>
                              <div className="navbar-end hidden md:flex gap-2">
                                        <ToggleTheme />
                                        <Link to="/dev" className={` hover:bg-primary duration-300 btn glass ${theme ? 'text-white' : 'text-black'}`}>Developer</Link>
                              </div>
                    </div>
          )
}
