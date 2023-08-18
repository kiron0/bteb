import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { BiCalculator, BiCode, BiHomeHeart } from 'react-icons/bi';
import { HiOutlineDocumentSearch, HiOutlineDocumentText } from 'react-icons/hi';
import { HiOutlineDocumentMagnifyingGlass } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { GiBookshelf } from 'react-icons/gi';
import Logo from '../../assets/logo.png'
import ToggleTheme from '../../components/ToggleTheme';
import { InitializeContext } from '../../App';

export default function BottomNav() {
  const { theme } = useContext(InitializeContext);
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
        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary hover:bg-primary text-white flex flex-col justify-center items-center gap-1" : `py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold border border-gray-300 duration-500 ${theme ? 'text-white' : 'text-black'} flex flex-col justify-center items-center gap-1`
      }><BiHomeHeart size={25} /><small className='text-xs text-center'>Home</small></NavLink>

      <NavLink to="/individualResult" className={({ isActive }) =>
        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary hover:bg-primary text-white flex flex-col justify-center items-center gap-1" : `py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold border border-gray-300 duration-500 ${theme ? 'text-white' : 'text-black'} flex flex-col justify-center items-center gap-1`
      }><HiOutlineDocumentSearch size={25} /><small className='text-xs text-center'>Individual</small></NavLink>

      <NavLink to="/groupResults" className={({ isActive }) =>
        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary hover:bg-primary text-white flex flex-col justify-center items-center gap-1" : `py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold border border-gray-300 duration-500 ${theme ? 'text-white' : 'text-black'} flex flex-col justify-center items-center gap-1`
      }><HiOutlineDocumentText size={25} /><small className='text-xs text-center'>Group</small></NavLink>

      <NavLink to="/cgpaCalc" className={({ isActive }) =>
        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary hover:bg-primary text-white flex flex-col justify-center items-center gap-1" : `py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold border border-gray-300 duration-500 ${theme ? 'text-white' : 'text-black'} flex flex-col justify-center items-center gap-1`
      }><BiCalculator size={25} /><small className='text-xs text-center'>CGPA</small></NavLink>

      <NavLink to="/bookList" className={({ isActive }) =>
        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary hover:bg-primary text-white flex flex-col justify-center items-center gap-1" : `py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold border border-gray-300 duration-500 ${theme ? 'text-white' : 'text-black'} flex flex-col justify-center items-center gap-1`
      }><GiBookshelf size={25} /><small className='text-xs text-center'>Book List</small></NavLink>

      <NavLink to="/v1/individualResult" className={({ isActive }) =>
        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary hover:bg-primary text-white flex flex-col justify-center items-center gap-1" : `py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold border border-gray-300 duration-500 ${theme ? 'text-white' : 'text-black'} flex flex-col justify-center items-center gap-1`
      }><HiOutlineDocumentMagnifyingGlass size={25} /><small className='text-xs text-center'>V1</small></NavLink>

      <NavLink to="/dev" className={({ isActive }) =>
        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary text-white flex flex-col justify-center items-center gap-1" : `py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold border border-gray-300 duration-500 ${theme ? 'text-white' : 'text-black'} flex flex-col justify-center items-center gap-1`
      }><BiCode size={25} /><small className='text-xs text-center'>Developer</small></NavLink>
    </div>
  )

  return (
    <div className={`navbar flex justify-between px-5 bg-base-100 h-[4.5rem] shadow-[0px_-2.05128px_20.2564px_rgba(0,0,0,.15)] md:hidden fixed bottom-0 left-0 right-0 z-[50]`}>
      <Link to={'/'} className={`font-bold ${theme ? 'text-white' : 'text-black'}`} onClick={scrollToHome}><img src={Logo} alt="BTEB" className='w-8 mr-2' /> BTEB Results Factory</Link>
      <div className='flex items-center gap-1'>
        <ToggleTheme />
        <label htmlFor="navMenu">
          <MdSpaceDashboard size={25} className={`${theme ? 'text-white' : 'text-black'}`} />
        </label>
        <input type="checkbox" id="navMenu" className="modal-toggle" />
        <div className="modal modal-bottom lg:modal-middle">
          <div className={`modal-box bg-base-100 z-50`}>
            <p className='absolute left-6 bottom-5'>
              <small className={`font-bold text-xs ${theme ? 'text-white' : 'text-black'}`}>Developed by <a href='https://toufiqhasankiron.com' target='_blank' rel="noreferrer" className={`uppercase text-primary ${theme ? 'hover:text-[#3DB868]' : 'hover:text-[#09A8EC]'}`}>Toufiq Hasan Kiron</a></small>
            </p>
            <label htmlFor="navMenu" className="btn btn-ghost btn-sm btn-circle absolute right-3 bottom-3">
              <IoClose size={25} className={`${theme ? 'text-white' : 'text-black'}`} />
            </label>
            {NavMenus}
          </div>
        </div>
      </div>
    </div>
  )
}
