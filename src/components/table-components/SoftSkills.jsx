/* eslint-disable react/prop-types */
import { RiSettingsLine } from 'react-icons/ri'

const SoftSkills = ({data}) => {
   return (
      <div className="flex flex-col lg:flex-row justify-between lg:justify-normal gap-6 lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
         <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]  flex items-center gap-2">
            <RiSettingsLine />Soft Skills
         </span>
         <span className="flex flex-wrap gap-3">
            {
               (data.profile_info?.soft_skill
                  ? data.profile_info.soft_skill.split(',').filter(Boolean)
                  : []
               ).map((skill) => {
                  return (
                     <span
                        key={skill}
                        className="w-fit cursor-pointer rounded-lg text-[#60697b] text-[14px] p-[10px] border border-solid border-[#d3d3d3] transition-all hover:bg-[#5271ff] hover:text-white"
                     >
                        {skill}
                     </span>
                  )
               })
            }
         </span>
      </div>
   )
}

export default SoftSkills
