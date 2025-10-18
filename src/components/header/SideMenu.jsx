/* eslint-disable react/prop-types */
import { MdKeyboardArrowDown } from 'react-icons/md'
import { IoCloseSharp } from 'react-icons/io5'
import { AiFillLinkedin, AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { useState } from 'react'


import './header.css'
import { Link } from 'react-router-dom'
const SideMenu = ({ mobileMenu, setMobileMenu }) => {
   const [showMenu, setShowMenu] = useState(false)

   const closeSideMenu = () => {
      window.scrollTo({ top: 0 })
      setMobileMenu(false)
   }
   return (
      <>
         <div
            className={`side-menu text-white font-[700] fixed h-screen top-0 ${mobileMenu ? '' : 'translate-x-[-400px]'}  bg-[#1e2228] w-[300px] flex flex-col z-[100] items-center overflow-y-scroll`}
         >
            <div className='p-[30px] w-full flex justify-between items-center'>
               <h3 className='text-[30px]' >AugmntX</h3>
               <span className='block rounded-full p-[7px] bg-gray-500/25'>
                  <IoCloseSharp
                     size={22}
                     className='cursor-pointer'
                     onClick={() => setMobileMenu(false)}
                  />
               </span>
            </div>
            <ul className='h-full w-full px-[30px]'>
               <li className='mb-[10px]'>
                  <a href="" className='text-[16px] font-[700] py-[10px]' >
                     Why
                  </a>
               </li>
               <li
                  className='mb-[10px]'
                  onClick={() => setShowMenu(!showMenu)}
               >
                  <a
                     href="#"
                     className=' flex items-center justify-between text-[16px] font-[700] py-[10px]'
                  >
                     Industries
                     <MdKeyboardArrowDown size={20} />
                  </a>
                  <ul className={`pl-5 pt-2 ${showMenu ? '' : 'hidden'}`}>
                     <li className='mb-[10px]' >
                        <a href="#" className=' block text-[15px] py-[8px]'>
                           Travel
                        </a>
                     </li>
                     <li className='mb-[10px]'>
                        <a href="#" className=' block text-[15px] font-[700] py-[8px]'>
                           Automotive
                        </a>
                     </li>
                     <li className='mb-[10px]'>
                        <a href="#" className=' block text-[15px] font-[700] py-[8px]'>
                           Banking
                        </a>
                     </li>
                     <li className='mb-[10px]'>
                        <a href="#" className=' block text-[15px] font-[700] py-[8px]'>
                           Capital Markets
                        </a>
                     </li>
                     <li className='mb-[10px]'>
                        <a href="#" className=' block text-[15px] font-[700] py-[8px]'>
                           Healthcare
                        </a>
                     </li>
                     <li className='mb-[10px]'>
                        <a href="#" className=' block text-[15px] font-[700] py-[8px]'>
                           Digital Commerce
                        </a>
                     </li>
                     <li className='mb-[10px]'>
                        <a href="#" className=' block text-[15px] font-[700] py-[8px]'>
                           View all
                        </a>
                     </li>
                  </ul>
               </li>
               <li className='mb-[10px]'>
                  <Link 
                     to="/profiles" 
                     onClick={closeSideMenu}
                     className=' block  text-[16px] font-[700] py-[10px]' 
                  >
                     Find Dev
                  </Link>
               </li>
               <li className='mb-[10px]'>
                  <Link 
                     to="/remote-jobs" 
                     onClick={closeSideMenu}
                     className=' block text-[14px] font-[700] py-[10px]' 
                  >
                     Remote Jobs
                  </Link>
               </li>
               <li className='mb-[25px]'>
                  <Link
                     onClick={closeSideMenu}
                     to="/login"
                     className=' block  text-[16px] font-[700] py-[10px]'
                  >
                     Login
                  </Link>
               </li>
               <li className='mb-[25px]'>
                  <Link to="/hire" onClick={closeSideMenu} className="block mb-1" >Hire Dev</Link>
                  <a href="mailto:hello@augmntx.com" className="block mb-1 transition delay-150 hover:text-[#5271FF]">hello@augmntx.com </a>
                  <a href="tel:+919820045154" className="block mb-1 transition delay-150 hover:text-[#5271FF]">+91 982 004 5154 </a>
               </li>
               <li className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/company/AugmntX/"
                     className='relative hover:translate-y-[-4px] transition ease-in-out delay-75'
                  >
                     <AiFillLinkedin size={20} />
                  </a>
                  <a href="https://twitter.com/AugmntXofficial"
                     className='relative hover:translate-y-[-4px] transition ease-in-out delay-75'
                  >
                     <AiOutlineTwitter size={20} />
                  </a>
                  <a href="https://www.facebook.com/AugmntXofficial"
                     className='relative hover:translate-y-[-4px] transition ease-in-out delay-75'
                  >
                     <AiFillFacebook size={20} />
                  </a>
                  <a href="https://www.instagram.com/AugmntXofficial/"
                     className='relative hover:translate-y-[-4px] transition ease-in-out delay-75'
                  >
                     <AiOutlineInstagram size={20} />
                  </a>
               </li>
            </ul>
         </div>
         <div className={`overlay fixed top-0 left-0 z-[99] w-screen h-screen bg-black/50 ${mobileMenu ? '' : 'hidden'} `}></div>
      </>


   )
}

export default SideMenu
