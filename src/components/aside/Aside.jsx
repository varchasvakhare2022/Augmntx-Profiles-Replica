import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const Aside = () => {
   return (
      <div className='w-full lg:w-[25%] py-[50px] px-[15px] '>
         <div className=' mb-5 '>
            <h4 className='mb-3 text-[19px] text-[#343f52] font-[700]'>
               Hiring resources
            </h4>
            <ul className=' space-y-2 '>
               <li className='cursor-pointer flex items-center mb-1 text-[#60697b] hover:text-[#5271FF]'>
                  Guide to Hiring devs (<HiOutlineArrowNarrowRight size={15} />)
               </li>
               <li className='cursor-pointer flex items-center mb-1 text-[#60697b] hover:text-[#5271FF]'>
                  Job Template (<HiOutlineArrowNarrowRight size={15} />)
               </li>
               <li className='cursor-pointer flex items-center mb-1 text-[#60697b] hover:text-[#5271FF]'>
                  Interview Questions (<HiOutlineArrowNarrowRight size={15} />)
               </li>
               <li className='cursor-pointer flex items-center mb-1 text-[#60697b] hover:text-[#5271FF]'>
                  Common Mistakes (<HiOutlineArrowNarrowRight size={15} />)
               </li>
            </ul>
         </div>
         <div>
            <h4 className='mb-3 text-[19px] text-[#343f52] font-[700]'>
               Need help?
            </h4>
            <ul className=' space-y-2 '>
               <li className='cursor-pointer flex items-center mb-1 text-[#60697b] hover:text-[#5271FF]'>
                  Book a meeting (<HiOutlineArrowNarrowRight size={15} />)
               </li>
               <li className='cursor-pointer flex items-center mb-1 text-[#60697b] hover:text-[#5271FF]'>
                  Chat with an expert (<HiOutlineArrowNarrowRight size={15} />)
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Aside
