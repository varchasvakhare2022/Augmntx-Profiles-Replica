/* eslint-disable react/prop-types */
import { MdWorkOutline } from 'react-icons/md'

const WorkHistory = ({ data }) => {
   return (
      <>
         {
            data.experience[0]?.title !== '' && <div
               className="flex flex-col lg:flex-row justify-between lg:justify-normal gap-6 lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] items-start"
            >
               <span
                  className="font-[700] text-[#343f52] text-[18px] w-[25%] flex items-center gap-2"
               >
                  <MdWorkOutline />Work history
               </span>
               <span className='flex flex-col gap-5'>
                  {
                     data.experience?.map((item) => {
                        return (
                           <div key={item.id}>
                              <span
                                 className="text-[#60697b] text-[16px] block"
                              >
                                 {item.title}
                                 {
                                    item.start !== ''
                                    && ` • ${item.start}`
                                 }
                                 {
                                    item.end !== '' && ` to ${item.end}`
                                 }
                              </span>
                              {
                                 item.description !== ''
                                 && <span className="text-[#60697b] text-[16px] block">
                                    Description: {item.description}
                                 </span>
                              }
                           </div>
                        )
                     })
                  }
               </span>
            </div>
         }
      </>

   )
}

export default WorkHistory
