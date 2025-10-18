import { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { FiDownload, FiExternalLink } from 'react-icons/fi'

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
      <div className='pt-[80px] pb-[60px] bg-white min-h-screen'>
         <div className='container mx-auto px-4 lg:px-8 max-w-[1400px]'>
            <div className='flex flex-col lg:flex-row gap-8'>
               {/* Left Sidebar */}
               <aside className='lg:w-[280px] flex-shrink-0'>
                  <div className='mb-12'>
                     <h3 className='text-lg font-semibold text-[#2d3748] mb-5'>Hiring resources</h3>
                     <ul className='space-y-3'>
                        <li>
                           <a href='#' className='text-[#718096] hover:text-blue-600 flex items-center text-[15px] transition-colors'>
                              Guide to Hiring devs <span className='ml-2 text-[#cbd5e0]'>→</span>
                           </a>
                        </li>
                        <li>
                           <a href='#' className='text-[#718096] hover:text-blue-600 flex items-center text-[15px] transition-colors'>
                              Job Template <span className='ml-2 text-[#cbd5e0]'>→</span>
                           </a>
                        </li>
                        <li>
                           <a href='#' className='text-[#718096] hover:text-blue-600 flex items-center text-[15px] transition-colors'>
                              Interview Questions <span className='ml-2 text-[#cbd5e0]'>→</span>
                           </a>
                        </li>
                        <li>
                           <a href='#' className='text-[#718096] hover:text-blue-600 flex items-center text-[15px] transition-colors'>
                              Common Mistakes <span className='ml-2 text-[#cbd5e0]'>→</span>
                           </a>
                        </li>
                     </ul>
                  </div>

                  <div className='mb-10'>
                     <h3 className='text-lg font-semibold text-[#2d3748] mb-5'>Need help?</h3>
                     <ul className='space-y-3'>
                        <li>
                           <a href='#' className='text-[#718096] hover:text-blue-600 flex items-center text-[15px] transition-colors'>
                              Book a meeting <span className='ml-2 text-[#cbd5e0]'>→</span>
                           </a>
                        </li>
                        <li>
                           <a href='#' className='text-[#718096] hover:text-blue-600 flex items-center text-[15px] transition-colors'>
                              Chat with an expert <span className='ml-2 text-[#cbd5e0]'>→</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </aside>

               {/* Main Content */}
               <main className='flex-1'>
                  <h1 className='text-3xl lg:text-4xl font-normal text-[#2d3748] mb-10'>
                     Hire Talents with skills in <span className='text-[#5271FF] font-normal'>{formatSkillName(skill)}</span>
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
                                 className='bg-[#f9fafb] rounded-lg p-6 hover:shadow-md transition-shadow border border-[#e5e7eb] flex flex-col'
                              >
                                 <div 
                                    className='flex gap-4 mb-4 cursor-pointer'
                                    onClick={() => goUser(profile_url, unique_id)}
                                 >
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
                                          <h3 className='font-semibold text-[#2d3748] text-[17px] truncate'>
                                             {first_name} {last_name}
                                          </h3>
                                          <span className='text-[11px] text-[#fc8181] font-medium'>{unique_id}</span>
                                       </div>
                                       <p className='text-[14px] text-[#2d3748] font-normal mb-2'>
                                          {primary_title}, {experience == 0 ? '1 year' : `${experience} years`}
                                       </p>
                                       <div className='flex flex-wrap gap-2'>
                                          {skills.slice(0, 3).map((sk, index) => (
                                             <span 
                                                key={index} 
                                                className='text-[12px] px-3 py-1 rounded-full border border-[#5271FF] bg-white text-[#5271FF]'
                                             >
                                                {sk}
                                             </span>
                                          ))}
                                       </div>
                                    </div>
                                 </div>
                                 
                                 <div 
                                    className='cursor-pointer'
                                    onClick={() => goUser(profile_url, unique_id)}
                                 >
                                    <p className='text-[14px] text-[#4a5568] mb-3 leading-relaxed'>
                                       {bio || 'No bio available'}
                                    </p>
                                    
                                    {profile_industries && profile_industries.length > 0 && (
                                       <p className='text-[13px] text-[#4a5568] mb-4'>
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

                                 <div className='flex items-center justify-center gap-6 mt-auto pt-4 border-t border-gray-200'>
                                    <button 
                                       onClick={(e) => {
                                          e.stopPropagation()
                                          goUser(profile_url, unique_id)
                                       }}
                                       className='text-[#5271FF] hover:text-blue-700 text-[14px] flex items-center gap-2 transition-colors'
                                    >
                                       <FiExternalLink className='text-[14px]' />
                                       Hire {first_name} {last_name}
                                    </button>
                                    <button 
                                       onClick={(e) => {
                                          e.stopPropagation()
                                          // Add download functionality here
                                       }}
                                       className='text-[#5271FF] hover:text-blue-700 text-[14px] flex items-center gap-2 transition-colors'
                                    >
                                       <FiDownload className='text-[14px]' />
                                       Download PDF
                                    </button>
                                 </div>
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



