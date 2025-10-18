import { useEffect, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'
import { FaBars } from 'react-icons/fa'


import './header.css'
import SideMenu from './SideMenu'
import { Link } from 'react-router-dom'
const Header = () => {
   const [show, setShow] = useState('top')
   const [lastScrollY, setLastScrollY] = useState(0);
   const [mobileMenu, setMobileMenu] = useState(false);


   const scrollHandler = () => {
      if (window.scrollY > 67) {
         setShow('hide-header')
         if (window.scrollY > 400) {
            setShow("show-header");
         }
      }
      else {
         setShow("top");
      }
      setLastScrollY(window.scrollY);
   };


   useEffect(() => {
      window.addEventListener("scroll", scrollHandler);
      return () => {
         window.removeEventListener("scroll", scrollHandler);
      };
   }, [lastScrollY])


   return (
      <>
         <header
            className={`text-[#343f52;] fixed h-[60px] w-full z-[99] flex items-center header ${show}`}
         >
            <nav className='container flex items-center justify-between'>
               <div >
                  <Link
                     to='/'
                  >
                     <img
                        src='https://www.augmntx.com/assets/img/AugmntX-Logo.png'
                        srcSet='https://www.augmntx.com/assets/img/AugmntX-Logo.png'
                        alt="logo"
                        className='w-[180px]'
                     />
                  </Link>
               </div>
               {/* Icon display in md and sm */}
               <div className='lg:hidden flex items-center gap-5'>
                  <ul>
                     <li>
                        <a href="#" className=' hidden md:block relative text-white bg-[#5271FF] rounded-[25px] text-[14px] font-[700] py-[12px] px-[20px] btn-hire' >
                           Hire Talent
                        </a>
                     </li>
                  </ul>
                  <FaBars
                     size={27}
                     className=' cursor-pointer'
                     onClick={() => setMobileMenu(true)}
                  />
               </div>
               {/* hide in md and sm */}
               <ul className='hidden lg:flex items-center'>
                  <li>
                     <a href="" className='text-[#343F52] text-[16px] font-[700] py-[24px] px-[20px] transition ease-in-out delay-100 hover:text-[#5271ff]' >
                        Why
                     </a>
                  </li>
                  <li className='li-hover'>
                     <a
                        href="#"
                        className='relative text-[#343F52] text-[16px] font-[700] py-[24px] px-[20px] flex items-center transition ease-in-out delay-100 hover:text-[#5271ff]'
                     >
                        Industries
                        <TiArrowSortedDown className='text-[#5271FF]' />
                     </a>
                     <ul className='drop-down'>
                        <li >
                           <a href="#" className='text-[15px] py-[4px] px-[30px] font-[700] transition ease-in-out delay-100 hover:text-[#5271ff]'>
                              Travel
                           </a>
                        </li>
                        <li >
                           <a href="#" className='text-[15px] py-[4px] px-[30px] w-full block font-[700] transition ease-in-out delay-100 hover:text-[#5271ff]'>
                              Automotive
                           </a>
                        </li>
                        <li >
                           <a href="#" className='text-[15px] py-[4px] px-[30px] w-full block font-[700] transition ease-in-out delay-100 hover:text-[#5271ff]'>
                              Banking
                           </a>
                        </li>
                        <li >
                           <a href="#" className='text-[15px] py-[4px] px-[30px] w-full block font-[700] transition ease-in-out delay-100 hover:text-[#5271ff]'>
                              Capital Markets
                           </a>
                        </li>
                        <li >
                           <a href="#" className='text-[15px] py-[4px] px-[30px] w-full block font-[700] transition ease-in-out delay-100 hover:text-[#5271ff]'>
                              Healthcare
                           </a>
                        </li>
                        <li >
                           <a href="#" className='text-[15px] py-[4px] px-[30px] w-full block font-[700] transition ease-in-out delay-100 hover:text-[#5271ff]'>
                              Digital Commerce
                           </a>
                        </li>
                        <li >
                           <a href="#" className='text-[15px] py-[4px] px-[30px] w-full block font-[700] transition ease-in-out delay-100 hover:text-[#5271ff]'>
                              View all
                           </a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="" className='text-[#343F52] text-[16px] font-[700] py-[24px] px-[20px] transition ease-in-out delay-100 hover:text-[#5271ff]' >
                        Find Dev
                     </a>
                  </li>
                  <li>
                     <a href="" className='text-[#343F52] text-[14px] font-[700] py-[24px] px-[20px] transition ease-in-out delay-100 hover:text-[#5271ff]' >
                        Remote Jobs
                     </a>
                  </li>
                  <li>
                     <Link to="/hire" className=' relative text-white bg-[#5271FF] rounded-full text-[14px] font-[700] py-[12px] px-[25px] btn-hire' >
                        Hire Dev
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/login"
                        className='text-[#343F52] text-[16px] font-[700] py-[24px] px-[20px] transition ease-in-out delay-100 hover:text-[#5271ff]'
                     >
                        Login
                     </Link>
                  </li>
               </ul>
            </nav>
         </header>
         <SideMenu
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
         />
      </>

   )
}

export default Header
