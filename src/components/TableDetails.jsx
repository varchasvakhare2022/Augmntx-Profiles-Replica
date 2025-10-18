/* eslint-disable react/prop-types */
import Buttons from "./table-components/Buttons"
import Availability from "./table-components/Availability"
import TotalExperience from "./table-components/TotalExperience"
import TechnicalSkills from "./table-components/TechnicalSkills"
import Projects from "./table-components/Projects"
import WorkHistory from "./table-components/WorkHistory"
import SoftSkills from "./table-components/SoftSkills"
import Certifications from "./table-components/Certifications"
import Education from "./table-components/Education"
import Language from "./table-components/Language"

const TableDetails = ({ data }) => {

   return (
      <main className='container leading-7'>
         <Buttons
            id={data.profile_info?.id}
            u_id={data.profile_info?.unique_id}
            p_url={data.profile_info?.profile_url}
            f_name={data.profile_info?.first_name}
            l_name={data.profile_info?.last_name}
         />
         <div className="border-y border-solid border-slate-300 divide-y divide-slate-300 w-full min-h-screen ">
            <Availability data={data} />
            <TotalExperience data={data} />
            <TechnicalSkills data={data} />
            <Projects data={data} />
            {
               data?.experience === null
                  ? ''
                  : <WorkHistory data={data} />
            }
            {
               data.profile_info?.soft_skill !== ''
               && <SoftSkills data={data} />
            }
            {
               data.certifications !== null
               && <Certifications data={data} />
            }
            <Education data={data} />
            <Language data={data} />
         </div>
         <Buttons
            id={data.profile_info?.id}
            u_id={data.profile_info?.unique_id}
            p_url={data.profile_info?.profile_url}
            f_name={data.profile_info?.first_name}
            l_name={data.profile_info?.last_name}
         />
      </main>
   )
}

export default TableDetails
