/* eslint-disable react/prop-types */
import { MdOutlineSchool } from 'react-icons/md'

const Education = ({ data }) => {
   return (
      <div className="flex items-start flex-col lg:flex-row justify-between lg:justify-normal gap-6 lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
         <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]  flex items-center gap-2">
            <MdOutlineSchool />Education
         </span>
         <span className="text-[#60697b] text-[16px] flex flex-col gap-3 ">
            {
               data.education?.map((item) => {
                  return (
                     <span key={item.id} className="flex flex-col ">
                        <span>
                           {item.degree} degree in {item.major}
                        </span>
                        <span className="text-[#aab0bc]">
                           {item.univ}
                        </span>
                        <span className="text-[#aab0bc]">
                           {item.edu_start} to {item.edu_end}
                        </span>
                     </span>
                  )
               })
            }
         </span>
      </div>
   )
}

export default Education
