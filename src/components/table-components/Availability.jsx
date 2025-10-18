import { BsCalendarCheck, BsCodeSlash } from 'react-icons/bs'


const Availability = ({ data }) => {
   return (
      <div className="flex items-center justify-between lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
         <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%] flex items-center gap-3">
            <BsCalendarCheck />Availability
         </span>
         <span className="text-[#60697b] text-[16px]">{data.profile_info?.comittment}</span>
      </div>
   )
}

export default Availability
