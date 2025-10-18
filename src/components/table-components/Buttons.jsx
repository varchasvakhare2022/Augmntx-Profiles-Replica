/* eslint-disable react/prop-types */
import { AiOutlineMessage, AiOutlineDownload } from 'react-icons/ai'
import { PiShareFat } from 'react-icons/pi'

const Buttons = ({ id, u_id, p_url, f_name, l_name }) => {

   const handleShare = () => {
      const cleaned = (p_url || '').toString();
      const pathOnly = cleaned.replace(/^https?:\/\/[^/]+\//i, '');
      const parts = pathOnly.split('/').filter(Boolean);
      const last = parts[parts.length - 1] || '';
      const secondLast = parts[parts.length - 2] || '';
      const maybeSlug = parts[0] === 'profile' ? secondLast : secondLast || parts[0] || '';
      const maybeId = last || u_id || '';
      const slug = (maybeSlug || '').toLowerCase();
      const idLower = (maybeId || '').toLowerCase();
      if (navigator.share) {
         navigator.share({ url: `/profile/${slug}/${idLower}` })
            .catch(error => console.error('Error sharing', error));
      } else {
         console.log('Web share not supported');
      }
   };

   return (
      <div className='mx-auto py-[35px] flex justify-between w-full lg:w-[50%]'>
         <button className='hover:translate-y-[-5px] transition delay-100 '>
            <span
               onClick={handleShare}
               className='text-[#343f52] w-fit transition delay-100 font-[700] hover:text-white rounded-lg hover:bg-[#5271FF] flex items-center justify-center gap-2 text-[12px] md:text-[16px] lg:text-[16px] px-[20px] py-1'
            >
               <PiShareFat /> Share
            </span>
         </button>
         <button className='hover:translate-y-[-5px] transition delay-100 '>
            <a
               href="#"
               className='text-[#343f52] w-fit transition delay-100 font-[700] hover:text-white rounded-lg hover:bg-[#5271FF] flex items-center justify-center gap-2 text-[12px] md:text-[16px] lg:text-[186x] px-[20px] py-1'
            >
               <AiOutlineMessage />Hire {f_name} {l_name}
            </a>
         </button>
         <button className='hover:translate-y-[-5px] transition delay-100'>
            <a
               href={`https://www.augmntx.com/home/profile2pdf/${id}`}
               className='text-[#343f52] w-fit transition delay-100 font-[700]  hover:text-white rounded-lg hover:bg-[#5271FF] flex items-center justify-center gap-2 text-[12px] md:text-[16px] lg:text-[16px] px-[20px] py-1'
            >
               <AiOutlineDownload />Download PDF
            </a>
         </button>
      </div>
   )
}

export default Buttons
