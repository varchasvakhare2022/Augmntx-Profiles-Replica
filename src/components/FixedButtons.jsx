/* eslint-disable react/no-unknown-property */
import { BiMessage } from 'react-icons/bi'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { GrMail } from 'react-icons/gr'
import { FaLongArrowAltUp } from 'react-icons/fa'
import { useEffect, useState } from 'react'


const FixedButtons = () => {
   const [show, setShow] = useState(false)
   const [scroll, setScroll] = useState(0)

   const showButton = () => {
      if (window.scrollY > 100) {
         setShow(true)
      } else {
         setShow(false)
      }
   }

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }
   
   const calcScroll = () => {
      const ScrollValue = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const lastValue = Math.round((ScrollValue * 100) / height)
      setScroll(lastValue)
   }


   useEffect(() => {
      window.addEventListener('scroll', showButton)
      window.addEventListener('scroll', calcScroll)
   }, [])

   const style = {
      background: `conic-gradient(#5271ff ${scroll}% , #f1eaea ${scroll}%)`
   }

   return (
      <>
         <div className='icon-1 w-11 fixed z-50 bottom-[20%] right-9 flex flex-col items-center'>
            <div className='show'>
               <a
                  data-tooltip-target="tooltip-default"
                  target='_blanc'
                  text='Send details on Email'
                  className="bg-gradient-to-r from-[#4ECDC4] to-[#556270] text-white block cursor-pointer rounded-[40%] p-[5px] relative before:absolute before:content-[attr(text)] before:bg-[#E5E5E5] before:text-black before:rounded-xl before:top-2 before:right-12  before:w-[130px] before:leading-normal before:h-7 before:hidden before:text-xs before:p-1 hover:before:block before:font-[Roboto]"
                  href="mailto:cr@augmntx.com"
               >
                  <GrMail size={30} />
               </a>
               <a
                  target='_blanc'
                  text='Quick Chat on WhatsApp'
                  href="https://wa.me/+919820045154?text=Hello AugmntX"
                  className="bg-green-400 text-white block cursor-pointer rounded-[40%] p-[5px] relative before:absolute before:content-[attr(text)] before:bg-[#E5E5E5] before:text-black before:rounded-xl before:top-2 before:right-12 before:w-[150px] before:leading-normal before:h-7 before:hidden before:text-xs before:p-1 hover:before:block before:font-[Roboto]"
               >
                  <IoLogoWhatsapp size={30} />
               </a>
            </div>
            <div
               text='Need help with finding developers? Lets Talk'
               className="p-[5px] bg-white icon rounded-[40%] mt-5 text-[#5271ff] cursor-pointer relative before:absolute before:content-[attr(text)] before:bg-[#E5E5E5] before:text-black before:rounded-xl before:top-2 before:right-12  before:w-[250px]  before:leading-normal before:h-7 before:hidden before:text-xs before:p-1 hover:before:block before:font-[Roboto]"
            >
               <BiMessage size={30} />
            </div>
         </div>
         <div onClick={scrollToTop} style={style} className={`cursor-pointer fixed z-50 bottom-[10%] transition-all ${show ? 'right-9' : 'right-[-10%]'}  w-11 h-11 hidden md:grid lg:grid  place-items-center rounded-full`}>
            <span className=' relative block bg-white rounded-full p-5'>
               <FaLongArrowAltUp className='text-[#5271ff] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ' />
            </span>
         </div>
      </>
   )
}

export default FixedButtons
