const ContactSec = () => {
   return (
      <section className='bg-[#5271ff] py-[90px] my-10 mx-[40px] text-white'>
         <div className=' flex items-center gap-10 lg:gap-0 flex-col lg:flex-row justify-evenly'>
            <div className='px-[15px] flex gap-8 flex-col'>
               <h2 className='text-[30px] font-[700] text-center'>
                  Hire software
                  <br />
                  developers today
               </h2>
               <button className='font-[700] relative text-black bg-white text-[18px] py-[12px] px-[22px] rounded-full transition delay-100 hover:translate-y-[-5px]'>
                  Contact with us
               </button>
            </div>
            <div className='bg-white h-[2px] lg:h-[150px] w-[90%] lg:w-[2px]'></div>
            <div className='px-[15px] flex gap-8 flex-col'>
               <h2 className='text-[30px] font-[700] text-center'>
                  Join the
                  <br />
                  developer network
               </h2>
               <button className='font-[700] relative text-black bg-white text-[18px] py-[12px] px-[22px] rounded-full transition delay-100 hover:translate-y-[-5px]'>
                  Join AugmentX
               </button>
            </div>
         </div>
      </section>
   )
}

export default ContactSec
