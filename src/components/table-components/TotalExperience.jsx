/* eslint-disable react/prop-types */
import { CgSandClock } from 'react-icons/cg';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const TotalExperience = ({ data }) => {
   return (
      <div className="flex items-center justify-between lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px]">
         <span className="font-[700] text-[#343f52] text-[18px] w-[70%] lg:w-[25%]  flex items-center gap-2">
            <CgSandClock />Total experience
         </span>
         <span className="text-[#60697b] text-[16px]">
            {data.profile_info?.experience == 0
               ? <span className=" flex items-center gap-1"><MdKeyboardArrowLeft />1 years</span>
               : `${data.profile_info?.experience} years`
            }
         </span>
      </div>
   )
}

export default TotalExperience
