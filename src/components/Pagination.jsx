// import {
//    MdOutlineKeyboardDoubleArrowRight,
//    MdOutlineKeyboardDoubleArrowLeft
// } from 'react-icons/md'

// eslint-disable-next-line react/prop-types
const Pagination = ({ setLimit }) => {

   const handleLimit = () => {
      setLimit(prevLimit => prevLimit + 20)
   }

   return (
      <div className='flex justify-center py-10'>
         {/* <ul className='flex items-center'>
            <li className='w-[50px] h-[50px] text-[13px] text-[#343f52] hover:text-[#5271FF] transition-all font-[700] flex justify-center items-center border border-solid border-[#a4aec633] bg-white ml-[-1px] rounded-l-xl '>
               <MdOutlineKeyboardDoubleArrowLeft size={11} />
            </li>
            <li className='w-[50px] h-[50px] text-[13px] text-[#343f52] hover:text-[#5271FF] transition-all font-[700] flex justify-center items-center border border-solid border-[#a4aec633] ml-[-1px]'>
               1
            </li>
            <li className='w-[50px] h-[50px] text-[13px] text-[#343f52] hover:text-[#5271FF] transition-all font-[700] flex justify-center items-center border border-solid border-[#a4aec633] bg-white ml-[-1px]'>
               2
            </li>
            <li className='w-[50px] h-[50px] text-[13px] text-[#343f52] hover:text-[#5271FF] transition-all font-[700] flex justify-center items-center border border-solid border-[#a4aec633] bg-white ml-[-1px]'>
               3
            </li>
            <li className='w-[50px] h-[50px] text-[13px] text-[#343f52] hover:text-[#5271FF] transition-all font-[700] flex justify-center items-center border border-solid border-[#a4aec633] bg-white ml-[-1px] rounded-r-xl '>
               <MdOutlineKeyboardDoubleArrowRight size={11} />
            </li>
         </ul> */}
         <button
            onClick={handleLimit}
            className="bg-[#5271FF] font-[700] text-[16px] text-white py-2 px-6 rounded-full transition-all hover:bg-[#253fb1]"
         >
            Show more
         </button>
      </div>

   )
}

export default Pagination
