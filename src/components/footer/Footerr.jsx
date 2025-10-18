import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <footer className='bg-black text-white pt-[70px]'>
         <div className="container flex flex-col md:flex-col lg:flex-row items-start gap-10 pb-[35px] border-solid border-b-[1px] border-gray-800">
            <div className='w-[75%] lg:w-[30%]'>
               <img
                  src='https://www.augmntx.com/assets/img/augmntxlogo.png'
                  srcSet='https://www.augmntx.com/assets/img/augmntxlogo.png'
                  alt="footer-logo"
                  className='w-full mb-6'
               />
               {/* App Download Section */}
               <div className='mb-6'>
                  <a 
                     href="https://play.google.com/store/apps/details?id=com.augmntx.app" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className='inline-block transition-transform hover:scale-105'
                  >
                     <img src="/play_store.svg" alt="Get it on Google Play" className='h-[45px]' />
                  </a>
               </div>
            </div>
            <ul className='px-[15px] pb-[25px] flex flex-col gap-3' >
               <li className="text-[18px] font-[700] mb-2">
                  Information
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >About Us</a>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >Corporate Information</a>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >Press</a>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >Careers</a>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >Blog</a>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >Contact Us</a>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >Tech Stack</a>
               </li>
            </ul>
            <ul className='px-[15px] pb-[25px] flex flex-col gap-3' >
               <li className="text-[18px] font-[700] mb-2">
                  AugmntX
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <Link to="/profiles" >
                     View Profiles
                  </Link>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >
                     Discover
                  </a>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >
                     On Demand Talent
                  </a>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >
                     Pricing
                  </a>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >
                     Augmentation Data
                  </a>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >
                     Status
                  </a>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >
                     Email Opt-Out
                  </a>
               </li>
            </ul>
            <ul className='px-[15px] pb-[25px] flex flex-col gap-3' >
               <li className="text-[18px] font-[700] mb-2">
                  Vendor
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >
                     Sign Up
                  </a>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <Link to="/login" >
                     Vendor Login
                  </Link>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >
                     Post Job
                  </a>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <Link to="/remote-jobs" >
                     Remote Jobs
                  </Link>
               </li>
               <li className="text-[#9ca3af] text-[15px] hover:text-white transition-colors">
                  <a href="#" >
                     Resources
                  </a>
               </li>
            </ul>
         </div>
         <div className='container py-[25px] flex flex-col md:flex-col lg:flex-row items-center justify-center gap-5 md:justify-center lg:justify-between'>
            <div className='flex gap-3 md:gap-0 lg:gap-0 flex-col md:flex-row lg:flex-row items-center'>
               <span className='text-center md:text-left'>
                  <span className='text-[#9ca3af] text-[14px]'>© 2022 - 2025</span>
                  <span className='text-[16px] px-[10px] font-[600] text-white'>AugmntX</span>
                  <span className='px-1 text-[#9ca3af]'>-</span>
                  <span className='text-[#9ca3af] px-[10px] text-[14px]'>Labor Omnia Vincit</span>
               </span>
               <span className='flex items-center gap-1'>
                  <span className='text-[#9ca3af] text-[14px]'>⚡ by</span>
                  <span className='text-[#5271FF] px-1 font-[700]'>SuperLabs</span>
               </span>
            </div>
            <div className='flex items-center gap-5 text-[14px]'>
               <a href="#" className='text-[#9ca3af] hover:text-white transition-colors'>Terms of Use</a>
               <a href="#" className='text-[#9ca3af] hover:text-white transition-colors'>Privacy Policy</a>
            </div>
         </div>
      </footer >
   )
}

export default Footer;