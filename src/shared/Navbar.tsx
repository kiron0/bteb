import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'

export default function Navbar() {

          const NavMenus = (
                    <>
                              <li className='lg:mr-6'>
                                        <NavLink to="/" className={({ isActive }) =>
                                                  isActive ? "text-white bg-primary" : ""
                                        }>Individual's Result</NavLink>
                              </li>
                              <li>
                                        <NavLink to="/group" className={({ isActive }) =>
                                                  isActive ? "text-white bg-primary" : ""
                                        }>Group's Result</NavLink>
                              </li>
                              <li className='lg:hidden'>
                                        <NavLink to="/dev" className={({ isActive }) =>
                                                  isActive ? "text-white bg-primary" : ""
                                        }>Developer</NavLink>
                              </li>
                    </>
          )

          return (
                    <div className="navbar glass sticky top-0 z-50 md:px-16 lg:px-32">
                              <div className="navbar-start">
                                        <div className="dropdown">
                                                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                                  </label>
                                                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                            {NavMenus}
                                                  </ul>
                                        </div>
                                        <Link to="/" className="btn btn-ghost normal-case text-xl flex justify-center items-center gap-2"> <img src={Logo} alt="" className='w-10' /> BTEB Results Park</Link>
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                        <ul className="menu menu-horizontal px-1">
                                                  {NavMenus}
                                        </ul>
                              </div>
                              <div className="navbar-end hidden md:flex">
                                        <NavLink to="/dev" className={({ isActive }) =>
                                                  isActive ? "text-white btn btn-primary" : "btn glass text-black"
                                        }>Developer</NavLink>
                              </div>
                    </div>
          )
}
