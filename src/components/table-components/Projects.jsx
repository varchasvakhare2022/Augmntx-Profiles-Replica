/* eslint-disable react/prop-types */
import { CiShare1 } from 'react-icons/ci'
import { AiOutlineSetting } from 'react-icons/ai'

const Projects = ({ data }) => {
   return (
      <div className="flex justify-between lg:justify-normal gap-2 lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] items-start flex-col lg:flex-row ">
         <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]   flex items-center gap-2">
            <AiOutlineSetting />Projects
         </span>
         <span className="text-[#60697b] text-[18px] w-full lg:w-[65%] ">
            {
               data.projects?.map((project) => {
                  return (
                     <span key={project.id}>
                        <h3 className="flex gap-3 text-black font-[700] mt-[25px] mb-[10px] pl-[20px] title">
                           {project.title}
                           {
                              project.url !== ''
                              && <a
                                 target="_blanc"
                                 href={project.url}
                                 className="flex items-center gap-1 text-[14px] text-[#5271FF] font-[400]">
                                 View project<CiShare1 />
                              </a>
                           }
                        </h3>
                        {
                           project.pro_start && project.pro_end !== ''
                           && <p className="text-[16px] text-[#AAB0BC] font-[500] px-5 mb-[15px]">
                              {project.pro_start} to {project.pro_end}
                           </p>
                        }
                        <span className=" text-[16px] leading-7 border-l border-dashed border-l-black pl-[20px] flex flex-col gap-3 ">
                           <p className='font-[700]'>
                              Description
                           </p>
                           <p>
                              {project.description}
                           </p>
                           <p className='font-[700]'>
                              Roles and Responsibilities
                              <span className="block font-[500]">
                                 {project.responsibilities}
                              </span>
                           </p>
                           <p >
                              <span className='font-[700]'>
                                 Technologies:&nbsp;
                              </span>
                              <span className="font-500">
                                 {project.technologies}
                              </span>
                           </p>
                           <p >
                              <span className='font-[700]'>
                                 Industry:&nbsp;
                              </span>
                              <span className="font-500">
                                 {project.industry}
                              </span>
                           </p>
                        </span>
                     </span>
                  )
               })
            }
         </span>
      </div>
   )
}

export default Projects
