import { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Skills = () => {
   const { skill } = useParams()
   const navigate = useNavigate()
   const [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      const fetchData = async () => {
         try {
            // Fetch a generous list and filter client-side by skill name
            const { data } = await axios.get(`https://augmntx.com/api/profile_list?limit=200`)
            setData(data)
            setIsLoading(false)
         } catch (err) {
            setIsLoading(false)
            console.log(err)
         }
      }
      fetchData()
   }, [])

   const filtered = useMemo(() => {
      const s = (skill || '').toLowerCase()
      return data.filter((item) => item.skills?.some((sk) => (sk || '').toLowerCase() === s))
   }, [data, skill])

   const goUser = (profile_url, unique_id) => {
      const cleaned = (profile_url || '').toString();
      const pathOnly = cleaned.replace(/^https?:\/\/[^/]+\//i, '');
      const parts = pathOnly.split('/').filter(Boolean);
      const last = parts[parts.length - 1] || '';
      const secondLast = parts[parts.length - 2] || '';
      const maybeSlug = parts[0] === 'profile' ? secondLast : secondLast || parts[0] || '';
      const maybeId = last || unique_id || '';
      const slug = (maybeSlug || '').toLowerCase();
      const idLower = (maybeId || '').toLowerCase();
      navigate(`/profile/${slug}/${idLower}`)
      scrollTo({ top: 0 })
   }

   return (
      <section className='w-[100%] lg:w-[75%] pt-[50px] pb-[20px] md:px-[15px] lg:px-[15px] min-h-screen'>
         <h1 className='text-[28px] font-[700] mb-6'>Hire Talents with skills in {skill?.charAt(0).toUpperCase() + skill?.slice(1)}</h1>
         {isLoading ? (
            <div className='w-full min-h-[40vh] grid place-items-center'>Loading...</div>
         ) : (
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
               {filtered.map((item) => {
                  const { unique_id, id, first_name, last_name, bio, experience, primary_title, userPhoto, profile_url, profile_industries, skills } = item
                  return (
                     <div key={id} className='shadow cursor-pointer'>
                        <div onClick={() => goUser(profile_url, unique_id)}>
                           <div className='flex gap-6'>
                              <div className='min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] md:min-w-[200px] md:min-h-[200px] lg:w-[100px] lg:h-[100px] lg:min-w-[100px] lg:min-h-[100px] rounded-full img-shadow'>
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
                                    {primary_title}{experience == 0 ? <span className='flex items-center gap-1'>, 1 years</span> : `, ${experience} years`}
                                 </p>
                                 <div className='flex gap-2 '>
                                    {skills.slice(0, 3).map((sk, index) => (
                                       <span key={index} className='overflow-x-hidden text-[10px] px-[8px] rounded-lg border-solid border border-blue-400'>
                                          {sk.slice(0, 6)}..
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           </div>
                           <p className='text-[12px] mt-3 space-y-1'>{bio.slice(0, 140)}..</p>
                           <p className='text-[12px] mt-5'>Industries:
                              {profile_industries.slice(0, 4).map((it, idx) => (
                                 <span key={idx}><span className='underline'>{it},&nbsp;</span></span>
                              ))}
                           </p>
                        </div>
                     </div>
                  )
               })}
            </div>
         )}
      </section>
   )
}

export default Skills



