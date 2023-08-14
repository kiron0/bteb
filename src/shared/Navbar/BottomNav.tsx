import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { GrFormClose } from 'react-icons/gr';
import Logo from '../../assets/logo.png'

export default function BottomNav() {
  const location = useLocation();

  const scrollToHome = () => {
    if (location.pathname === '/' || location.pathname === '/home') {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      return null
    }
  };

  const NavMenus = (
    <div className='grid grid-cols-3 gap-8 pb-10'>
      <NavLink to="/" className={({ isActive }) =>
        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary hover:bg-primary text-white flex flex-col justify-center items-center" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold border border-gray-300 duration-500 text-black flex flex-col justify-center items-center"
      }><i className="bx bx-home-heart text-2xl"></i><small className='text-xs text-center'>Home</small></NavLink>

      <NavLink to="/individualResult" className={({ isActive }) =>
        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary hover:bg-primary text-white flex flex-col justify-center items-center" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold border border-gray-300 duration-500 text-black flex flex-col justify-center items-center"
      }><i className='bx bx-book text-xl'></i><small className='text-xs text-center'>Individual</small></NavLink>

      <NavLink to="/groupResults" className={({ isActive }) =>
        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary hover:bg-primary text-white flex flex-col justify-center items-center" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold border border-gray-300 duration-500 text-black flex flex-col justify-center items-center"
      }><i className='bx bx-book-heart text-xl'></i><small className='text-xs text-center'>Group</small></NavLink>

      <NavLink to="/cgpaCalc" className={({ isActive }) =>
        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary hover:bg-primary text-white flex flex-col justify-center items-center" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold border border-gray-300 duration-500 text-black flex flex-col justify-center items-center"
      }><i className='bx bx-donate-heart text-2xl'></i><small className='text-xs text-center'>CGPA</small></NavLink>

      <NavLink to="/bookList" className={({ isActive }) =>
        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary hover:bg-primary text-white flex flex-col justify-center items-center" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold border border-gray-300 duration-500 text-black flex flex-col justify-center items-center"
      }><i className='bx bx-donate-heart text-2xl'></i><small className='text-xs text-center'>Book List</small></NavLink>

      <NavLink to="/dev" className={({ isActive }) =>
        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary text-white flex flex-col justify-center items-center" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold border border-gray-300 duration-500 text-black flex flex-col justify-center items-center"
      }><i className='bx bx-code text-2xl'></i><small className='text-xs text-center'>Developer</small></NavLink>
    </div>
  )

  return (
    <div className={`navbar flex justify-between px-5 bg-base-100 h-16 shadow-[0px_-2.05128px_20.2564px_rgba(0,0,0,.15)] md:hidden fixed bottom-0 left-0 right-0 z-[50]`}>
      <Link to={'/'} className={`font-bold`} onClick={scrollToHome}><img src={Logo} alt="BTEB" className='w-8 mr-2' /> BTEB Results Factory</Link>
      <div className='flex items-center'>
        <label htmlFor="navMenu">
          <MdSpaceDashboard size={25} />
        </label>
        <input type="checkbox" id="navMenu" className="modal-toggle" />
        <div className="modal modal-bottom lg:modal-middle">
          <div className={`modal-box bg-base-100 z-50`}>
            <label htmlFor="navMenu" className="btn btn-ghost btn-sm btn-circle absolute right-3 bottom-3">
              <GrFormClose size={25} />
            </label>
            {NavMenus}
          </div>
        </div>
      </div>
    </div>
  )
}
