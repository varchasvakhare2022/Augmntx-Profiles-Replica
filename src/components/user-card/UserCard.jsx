/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import { AiOutlineMessage, AiOutlineDownload } from 'react-icons/ai'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import CircularProgress from '@mui/joy/CircularProgress';
import Input from '../Input'
import Pagination from '../Pagination'

const UserCard = () => {
   const [data, setData] = useState([])
   const [searchValue, setSearchValue] = useState("")
   const navigate = useNavigate()
   const [limit, setLimit] = useState(20)
   const [isLoading, setIsLoading] = useState(true)

   const fetchData = async () => {
      try {
         const { data } = await axios.get(`https://augmntx.com/api/profile_list?limit=${limit}`)
         setData(data)
         setIsLoading(false)
      } catch (err) {
         console.log(err)
      }
   }

   useEffect(() => {
      fetchData()
   }, [limit])

   const goUser = (profile_url, unique_id) => {
      const cleaned = (profile_url || '').toString();
      const pathOnly = cleaned.replace(/^https?:\/\/[^/]+\//i, ''); // strip domain if present
      const parts = pathOnly.split('/').filter(Boolean);
      // Expecting something like ["profile", "some-slug", "axo1234"] or ["some-slug", "axo1234"]
      const last = parts[parts.length - 1] || '';
      const secondLast = parts[parts.length - 2] || '';
      const maybeSlug = parts[0] === 'profile' ? secondLast : secondLast || parts[0] || '';
      const maybeId = last || unique_id || '';
      const slug = (maybeSlug || '').toLowerCase();
      const idLower = (maybeId || '').toLowerCase();
      navigate(`/profile/${slug}/${idLower}`)
      scrollTo({
         top: 0
      })
   }

   return (
      <>
         {
            isLoading
               ? <div className='w-full min-h-screen grid place-items-center'>
                  < CircularProgress
                     size="lg"
                     variant="soft"
                  />
               </div>
               : <section className='w-[100%] lg:w-[75%] pt-[50px] pb-[20px] md:px-[15px] lg:px-[15px] min-h-screen'>
                  <Input
                     setSearchValue={setSearchValue}
                  />
                  <div className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
                     {
                        data.filter((item) => {
                           return searchValue.toLowerCase() === '' || item.skills.some((skill) => {
                              return skill.toLowerCase().includes(searchValue.toLowerCase());
                           });
                        }).map((item) => {
                           const { unique_id, id, first_name, last_name, bio, experience, primary_title, userPhoto, profile_url, profile_industries, skills } = item
                           return (
                              <div
                                 key={id}
                                 className='shadow cursor-pointer'
                              >
                                 <div
                                    onClick={() => goUser(profile_url, unique_id)}
                                 >
                                    <div className='flex gap-6'
                                    >
                                       <div
                                          className='min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px]  md:min-w-[200px] md:min-h-[200px] lg:w-[100px] lg:h-[100px] lg:min-w-[100px] lg:min-h-[100px] rounded-full  img-shadow'
                                       >
                                          <img
                                             src={
                                                userPhoto === 'https://augmntx.com/assets/img/noimage.jpg'
                                                   ? 'https://augmntx.com/assets/img/noimage.jpg'
                                                   : `https://www.augmntx.com/${userPhoto}`
                                             }
                                             alt="profile"
                                             className='w-full h-full rounded-full'
                                          />
                                       </div>
                                       <div className='flex flex-col gap-2'>
                                          <span className='flex gap-1 items-center'>
                                             <p className='font-[700]'>{last_name} {first_name}</p>
                                             <p className='text-[10px] text-[#e2626b]'>{unique_id}</p>
                                          </span>
                                          <p className='text-[14px] font-[700] flex items-center '>
                                             {primary_title}{experience == 0
                                                ? <span className='flex items-center gap-1'>,<MdKeyboardArrowLeft />1 years</span>
                                                : `, ${experience} years`
                                             }
                                          </p>
                                          <div className='flex gap-2 '>
                                             {
                                                skills.map((skill, index) => {
                                                   return <a
                                                      key={index}
                                                      href={`/skills/${encodeURIComponent(skill.toLowerCase())}`}
                                                      className=' overflow-x-hidden text-[10px] px-[8px] rounded-lg border-solid border border-blue-400'
                                                   >{skill.slice(0, 6)}..
                                                   </a>
                                                }).slice(0, 3)
                                             }
                                          </div>
                                       </div>
                                    </div>
                                    <p className='text-[12px] mt-3 space-y-1'>{bio.slice(0, 140)}..</p>
                                    <p className='text-[12px] mt-5'>Industries:
                                       {
                                          profile_industries.map((item, index) => {
                                             return (
                                                <span key={index} >
                                                   <span className='underline'>
                                                      {item},&nbsp;
                                                   </span>
                                                </span>
                                             )
                                          }).slice(0, 4)
                                       }
                                    </p>
                                 </div>
                                 <div className='mt-[10px] flex w-full'>
                                    <button className='w-[50%]'>
                                       <a
                                          href="#"
                                          className='text-[#5271FF] flex items-center justify-center gap-1 text-[12px] px-[15px]'
                                       >
                                          <AiOutlineMessage />Hire {first_name} {last_name}
                                       </a>
                                    </button>
                                    <button className='w-[50%]'>
                                       <a
                                          href={`https://www.augmntx.com/home/profile2pdf/${id}`}
                                          className='text-[#5271FF] flex items-center justify-center gap-1 text-[12px] px-[15px]'
                                       >
                                          <AiOutlineDownload />Download PDF
                                       </a>
                                    </button>
                                 </div>
                              </div>
                           )
                        })
                     }
                  </div>
                  {
                     data.length > 0 && <Pagination setLimit={setLimit} />
                  }
               </section>
         }
      </>
   )
}

export default UserCard;
