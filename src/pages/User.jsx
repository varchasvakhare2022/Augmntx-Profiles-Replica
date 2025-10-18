/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import BasicInfo from "../components/info/BasicInfo"
import TableDetails from "../components/TableDetails"
import ContactSec from "../components/Contact/ContactSec"
import CircularProgress from '@mui/joy/CircularProgress';

const User = () => {
   const params = useParams()
   const [data, setData] = useState({})
   const [isLoading, setIsLoading] = useState(true)

   const fetchUserData = async () => {
      try {
         const uniqueId = (params.unique_id || '').toString().toUpperCase();
         const { data } = await axios.get(`https://augmntx.com/api/profile/${uniqueId}`)
         setData(data)
         setIsLoading(false)
      } catch (err) {
         console.log("Error" + err)
      }
   }

   useEffect(() => {
      fetchUserData()
   }, [params.unique_id])



   return (


      <div className="min-h-screen min-w-full">
         {
            isLoading
               ? <div className="w-full h-screen grid place-items-center">
                  <CircularProgress
                     size="lg"
                     variant="soft"
                  />
               </div>
               : <>
                  <BasicInfo data={data} />
                  <TableDetails data={data} />
                  <ContactSec />
               </>
         }
      </div>
   )
}

export default User
