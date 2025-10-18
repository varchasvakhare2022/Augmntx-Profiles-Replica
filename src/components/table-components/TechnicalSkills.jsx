/* eslint-disable react/prop-types */
import { BsCodeSlash } from "react-icons/bs"

const TechnicalSkills = ({ data }) => {
   return (
      <div className="flex flex-col lg:flex-row justify-between lg:justify-normal gap-8 lg:gap-24 items-start lg:px-[70px] py-[15px] mt-[5px]  ">
         <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]   flex items-center gap-2">
            <BsCodeSlash />Technical skills
         </span>
         <span className="flex justify-between w-full lg:w-[40%] lg:gap-10">
            <span className="text-[#60697b] text-[16px] flex flex-col gap-4 ">
               {
                  data.skills?.map((skill) => {
                     return <span key={skill.id}>
                        {skill.name}
                     </span>
                  })
               }
            </span>
            <span className="text-[#60697b] text-[16px] flex flex-col gap-4">
               {
                  data.skills?.map((skill) => {
                     return <span key={skill.id}>
                        {skill.year > 0 && `${skill.year} Years`}
                        {skill.year > 0 && skill.month > 0 && ' & '}
                        {skill.month > 0 && `${skill.month} Months`}
                     </span>
                  })
               }
            </span>
         </span>
      </div>
   )
}

export default TechnicalSkills
