import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { RiMenu4Fill } from 'react-icons/ri'

export default function Navbar() {
          const NavMenus = (
                    <>
                              <li className='lg:mr-6 py-2 lg:py-0 lg:hidden'>
                                        <NavLink to="/" className={({ isActive }) =>
                                                  isActive ? "text-white btn btn-primary" : "btn glass text-black"
                                        }>Home</NavLink>
                              </li>
                              <li className='lg:mr-6 py-2 lg:py-0'>
                                        <NavLink to="/individualResult" className={({ isActive }) =>
                                                  isActive ? "text-white btn btn-primary" : "btn glass text-black"
                                        }>Individual's Result</NavLink>
                              </li>
                              <li className='lg:mr-6 py-2 lg:py-0'>
                                        <NavLink to="/groupResults" className={({ isActive }) =>
                                                  isActive ? "text-white btn btn-primary" : "btn glass text-black"
                                        }>Group's Result</NavLink>
                              </li>
                              <li className='lg:mr-6 py-2 lg:py-0'>
                                        <NavLink to="/cgpaCalc" className={({ isActive }) =>
                                                  isActive ? "text-white btn btn-primary" : "btn glass text-black"
                                        }>CGPA Calculator</NavLink>
                              </li>
                              <li className='lg:hidden py-2 lg:py-0'>
                                        <NavLink to="/dev" className={({ isActive }) =>
                                                  isActive ? "text-white btn btn-primary" : "btn glass text-black"
                                        }>Developer</NavLink>
                              </li>
                              <li className='py-2 lg:py-0'>
                                        <NavLink to="/v1/individualResult" className={({ isActive }) =>
                                                  isActive ? "text-white btn btn-primary" : "btn glass text-black"
                                        }>V1</NavLink>
                              </li>
                    </>
          )

          return (
                    <div className="navbar glass sticky top-0 z-50 md:px-16 lg:px-32">
                              <div className="navbar-start">
                                        <div className="dropdown">
                                                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                                            <RiMenu4Fill className="text-3xl" />
                                                  </label>
                                                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-60">
                                                            {NavMenus}
                                                  </ul>
                                        </div>
                                        <Link to="/" className="btn btn-ghost normal-case text-xl flex justify-center items-center gap-2"> <img src={Logo} alt="" className='w-8 md:w-10' /> BTEB Results Factory</Link>
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                        <ul className="menu menu-horizontal px-1">
                                                  {NavMenus}
                                        </ul>
                              </div>
                              <div className="navbar-end hidden md:flex">
                                        <Link to="/dev" className="btn glass text-black">Developer</Link>
                              </div>
                    </div>
          )
}
