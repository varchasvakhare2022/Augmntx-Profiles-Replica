/* eslint-disable react/prop-types */
import { IoLanguageSharp } from 'react-icons/io5'

const Language = ({ data }) => {
   return (
      <div className="flex flex-col lg:flex-row justify-between lg:justify-normal gap-4 lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
         <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]  flex items-center gap-2">
            <IoLanguageSharp />Language
         </span>
         <span className="text-[#60697b] text-[16px]">English - {data.profile_info?.english}</span>
      </div>
   )
}

export default Language
