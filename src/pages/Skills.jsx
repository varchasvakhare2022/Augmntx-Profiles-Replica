import { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
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

   // Format skill name for display
   const formatSkillName = (skillStr) => {
      if (!skillStr) return ''
      return skillStr
         .split(/[_\-\s]+/)
         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
         .join(' ')
   }

   return (
      <div className='pt-[80px] pb-[60px] bg-gray-50 min-h-screen'>
         <div className='container mx-auto px-4 lg:px-8'>
            <div className='flex flex-col lg:flex-row gap-8'>
               {/* Left Sidebar */}
               <aside className='lg:w-[280px] flex-shrink-0'>
                  <div className='bg-white rounded-lg p-6 mb-6'>
                     <h3 className='text-lg font-semibold text-gray-800 mb-4'>Hiring resources</h3>
                     <ul className='space-y-3'>
                        <li>
                           <a href='#' className='text-gray-600 hover:text-blue-600 flex items-center text-sm'>
                              Guide to Hiring devs <span className='ml-2 text-gray-400'>→</span>
                           </a>
                        </li>
                        <li>
                           <a href='#' className='text-gray-600 hover:text-blue-600 flex items-center text-sm'>
                              Job Template <span className='ml-2 text-gray-400'>→</span>
                           </a>
                        </li>
                        <li>
                           <a href='#' className='text-gray-600 hover:text-blue-600 flex items-center text-sm'>
                              Interview Questions <span className='ml-2 text-gray-400'>→</span>
                           </a>
                        </li>
                        <li>
                           <a href='#' className='text-gray-600 hover:text-blue-600 flex items-center text-sm'>
                              Common Mistakes <span className='ml-2 text-gray-400'>→</span>
                           </a>
                        </li>
                     </ul>
                  </div>

                  <div className='bg-white rounded-lg p-6'>
                     <h3 className='text-lg font-semibold text-gray-800 mb-4'>Need help?</h3>
                     <ul className='space-y-3'>
                        <li>
                           <a href='#' className='text-gray-600 hover:text-blue-600 flex items-center text-sm'>
                              Book a meeting <span className='ml-2 text-gray-400'>→</span>
                           </a>
                        </li>
                        <li>
                           <a href='#' className='text-gray-600 hover:text-blue-600 flex items-center text-sm'>
                              Chat with an expert <span className='ml-2 text-gray-400'>→</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </aside>

               {/* Main Content */}
               <main className='flex-1'>
                  <h1 className='text-3xl lg:text-4xl font-normal text-gray-800 mb-8'>
                     Hire Talents with skills in <span className='text-blue-600 font-normal'>{formatSkillName(skill)}</span>
                  </h1>

                  {isLoading ? (
                     <div className='w-full min-h-[40vh] grid place-items-center'>
                        <div className='text-gray-500'>Loading...</div>
                     </div>
                  ) : filtered.length === 0 ? (
                     <div className='w-full min-h-[40vh] grid place-items-center'>
                        <div className='text-gray-500'>No profiles found for this skill</div>
                     </div>
                  ) : (
                     <div className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
                        {filtered.map((item) => {
                           const { unique_id, id, first_name, last_name, bio, experience, primary_title, userPhoto, profile_url, profile_industries, skills } = item
                           return (
                              <div 
                                 key={id} 
                                 className='bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100'
                                 onClick={() => goUser(profile_url, unique_id)}
                              >
                                 <div className='flex gap-4 mb-4'>
                                    <div className='w-24 h-24 flex-shrink-0'>
                                       <img
                                          src={
                                             userPhoto === 'https://augmntx.com/assets/img/noimage.jpg'
                                                ? 'https://augmntx.com/assets/img/noimage.jpg'
                                                : `https://www.augmntx.com/${userPhoto}`
                                          }
                                          alt="profile"
                                          className='w-full h-full rounded-full object-cover border-2 border-gray-100'
                                       />
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                       <div className='flex items-center gap-2 mb-1'>
                                          <h3 className='font-semibold text-gray-900 text-lg truncate'>
                                             {first_name} {last_name}
                                          </h3>
                                          <span className='text-xs text-red-400 font-medium'>{unique_id}</span>
                                       </div>
                                       <p className='text-sm text-gray-700 font-medium mb-2'>
                                          {primary_title}, {experience == 0 ? '1 year' : `${experience} years`}
                                       </p>
                                       <div className='flex flex-wrap gap-2'>
                                          {skills.slice(0, 3).map((sk, index) => (
                                             <span 
                                                key={index} 
                                                className='text-xs px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700'
                                             >
                                                {sk}
                                             </span>
                                          ))}
                                       </div>
                                    </div>
                                 </div>
                                 
                                 <p className='text-sm text-gray-600 mb-3 line-clamp-3'>
                                    {bio || 'No bio available'}
                                 </p>
                                 
                                 {profile_industries && profile_industries.length > 0 && (
                                    <p className='text-xs text-gray-500'>
                                       <span className='font-medium'>Industries: </span>
                                       {profile_industries.slice(0, 3).map((industry, idx) => (
                                          <span key={idx}>
                                             <span className='underline'>{industry}</span>
                                             {idx < profile_industries.slice(0, 3).length - 1 && ', '}
                                          </span>
                                       ))}
                                    </p>
                                 )}
                              </div>
                           )
                        })}
                     </div>
                  )}
               </main>
            </div>
         </div>
      </div>
   )
}

export default Skills



