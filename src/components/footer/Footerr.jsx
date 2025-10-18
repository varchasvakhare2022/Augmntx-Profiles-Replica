const Footer = () => {
   return (
      <footer className='bg-black text-white pt-[70px]'>
         <div className="container flex flex-col md:flex-col lg:flex-row items-start gap-10 pb-[35px] border-solid border-b-[3px]">
            <div className='w-[75%] lg:w-[25%]'>
               <img
                  src='https://www.augmntx.com/assets/img/augmntxlogo.png'
                  srcSet='https://www.augmntx.com/assets/img/augmntxlogo.png'
                  alt="footer-logo"
                  className='w-full'
               />
            </div>
            <ul className='px-[15px] pb-[25px] flex flex-col gap-3' >
               <li className="text-[20px] font-[700]">
                  Information
               </li>
               <li className="mt-2 text-[#d3d3d3] text-[16px]">
                  <a href="#" >About Us</a>
               </li>
               <li className="mt-2 text-[#d3d3d3] text-[16px]">
                  <a href="#" >Corporate Information</a>
               </li>
               <li className="mt-2 text-[#d3d3d3] text-[16px]">
                  <a href="#" >Press</a>
               </li>
               <li className="mt-2 text-[#d3d3d3] text-[16px]">
                  <a href="#" >Careers</a>
               </li>
               <li className="mt-2 text-[#d3d3d3] text-[16px]">
                  <a href="#" >Blog</a>
               </li>
               <li className="mt-2">
                  <a href="#" >Contact Us</a>
               </li>
            </ul>
            <ul className='px-[15px] pb-[25px] flex flex-col gap-3' >
               <li className="text-[20px] font-[700]">
                  AugmntX
               </li>
               <li className="mt-2 text-[#d3d3d3] text-[16px]">
                  <a href="#" >
                     View Profiles
                  </a>
               </li>
               <li className="mt-2 text-[#d3d3d3] text-[16px]">
                  <a href="#" >
                     Discover
                  </a>
               </li>
               <li className="mt-2 text-[#d3d3d3] text-[16px]">
                  <a href="#" >
                     On Demand Talent
                  </a>
               </li>
               <li className="mt-2 text-[#d3d3d3] text-[16px]">
                  <a href="#" >
                     Pricing
                  </a>
               </li>
            </ul>
            <ul className='px-[15px] pb-[25px] flex flex-col gap-3' >
               <li className="text-[20px] font-[700]">
                  Vendor
               </li>
               <li className="mt-2 text-[#d3d3d3] text-[16px]">
                  <a href="#" >
                     Remote Jobs
                  </a>
               </li>
               <li className="mt-2 text-[#d3d3d3] text-[16px]">
                  <a href="#" >
                     Vendor Login
                  </a>
               </li>
               <li className="mt-2 text-[#d3d3d3] text-[16px]">
                  <a href="#" >
                     Remote Jobs
                  </a>
               </li>
               <li className="mt-2 text-[#d3d3d3] text-[16px]">
                  <a href="#" >
                     Resources
                  </a>
               </li>
            </ul>
         </div>
         <div className='container py-[25px] flex flex-col md:flex-col lg:flex-row items-center justify-center gap-3 md:justify-center lg:justify-between'>
            <div className='flex gap-3 md:gap-0 lg:gap-0 flex-col md:flex-row lg:flex-row  items-center'>
               <span>
                  <span className='text-[#D3D3D3]'>© 2022 - 2023</span>
                  <span className='text-[14px] md:text-[20px] lg:text-[20px] px-[10px] font-[600]'>AugmntX</span>
                  <span className='px-1'>-</span>
                  <span className='text-[#D3D3D3] px-[10px]'> Labor Omnia Vincit</span>
               </span>
               <span>
                  <span className='text-[#D3D3D3]'>⚡ by  </span>
                  <span className='text-[#5271FF] px-1 font-[700]'>SuperLabs</span>
               </span>
            </div>
            <div className='flex items-center gap-5'>
               <span className='text-[#D3D3D3]'>Terms of Use</span>
               <span className='text-[#D3D3D3]'> Privacy Policy</span>
            </div>
         </div>
      </footer >
   )
}

export default Footer;