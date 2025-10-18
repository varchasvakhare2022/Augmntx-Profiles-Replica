/* eslint-disable react/prop-types */
import { BsPatchCheck } from "react-icons/bs"

const Certifications = ({ data }) => {
   return (
      <div
         className="flex items-start flex-col lg:flex-row justify-between lg:justify-normal gap-6 lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] "
      >
         <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]  flex items-center gap-2">
            <BsPatchCheck />Certifications
         </span>
         {data.certifications?.map((item) => {
            return (
               <span
                  key={item.id}
                  className="text-[#60697b] text-[16px] flex flex-col lg:flex-row  gap-3 "
               >
                  <span className="flex flex-col ">
                     <span>
                        {item.name} {item.issuer !== '' ? `by ${item.issuer}` : ''}
                     </span>
                     <span className="text-[#aab0bc]">
                        {item.year == 0 ? '' : item.year}
                     </span>
                  </span>
               </span>
            )
         })}
      </div>
   )
}

export default Certifications
