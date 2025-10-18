/* eslint-disable react/prop-types */
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BasicInfo = ({ data }) => {
   return (
      <main className='container py-[90px] flex flex-col gap-7 justify-start'>
         <div className='flex items-center gap-1 text-[16px] text-[#AAB0BC]'>
            <span><FaLongArrowAltLeft /> </span>
            <span><a href="#" className='text-[#5271FF] font-[500]'>Home </a>/ </span>
            <span>
               <Link to='/'
                  className='text-[#5271FF] font-[500]'
               >
                  Developers&nbsp;
               </Link>
               /
            </span>
            <span>{data.profile_info?.unique_id}</span>
         </div>
         <div className='flex flex-col lg:flex-row gap-5 items-start justify-between '>
            <div className='w-full h-full lg:max-w-[350px] lg:max-h-[350px]  '>
               <img
                  src={
                     data.profile_info?.userPhoto === 'uploads/'
                        ? 'https://augmntx.com/assets/img/noimage.jpg'
                        : `https://www.augmntx.com/${data.profile_info?.userPhoto}`
                  }
                  alt="profile"
                  className='w-full h-full'
               />
            </div>
            <div className='w-full lg:w-[730px] flex flex-col gap-3'>
               <div className='flex items-center gap-3'>
                  <span className='text-[18px] text-[#AAB0Bc] font-[700]'>
                     {data.profile_info?.first_name} {data.profile_info?.last_name}
                  </span>
                  <span className='text-[12px] text-[#FF0000]'>
                     {data.profile_info?.unique_id}
                  </span>
                  <span className='text-[12px] text-[#45C4A0]'>
                     Active
                  </span>
               </div>
               <h3 className='text-[18px]'>
                  {data.profile_info?.primary_title} in {data.profile_info?.city}
               </h3>
               <p className='text-[14px] text-[#60697b] leading-7'>
                  {data.profile_info?.bio}
               </p>
            </div>
         </div>
         <div className='flex flex-wrap gap-3'>
            {
               data.skills?.map((skill) => {
                  return <a
                     key={skill.id}
                     href={`/skills/${encodeURIComponent(skill.name.toLowerCase())}`}
                     className=' text-[12px] cursor-pointer py-[2px] px-3 border-solid border-2 border-blue-400 rounded-full hover:bg-blue-300 '
                  >
                     {skill.name}
                  </a>
               })
            }
         </div>
         <div>
            <p className='text-[16px] font-[700] mt-5'>Industries :&nbsp;
               {
                  data.projects?.map((item) => {
                     return (
                        <span key={item.id} className='font-[500] text-[#60697b]'>
                           <span className='underline'>
                              {item.industry}
                           </span>
                           ,&nbsp;
                        </span>
                     )
                  })
               }
            </p>
         </div>
      </main >
   )
}

export default BasicInfo
