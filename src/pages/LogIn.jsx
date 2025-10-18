import { useContext, useEffect, useState } from 'react';
import LogInGoogle from './../components/LogInGoogle';
import CircularProgress from '@mui/joy/CircularProgress';
import axios from 'axios';
import AuthContext from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
   const [isLoading, setIsLoading] = useState(true)
   const { setAuth } = useContext(AuthContext)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const navigate = useNavigate()

   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false)
      }, 500)
   }, [])

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (email === '') {
         alert('Can not be empty')
         return
      }
      if (password === '') {
         alert('Can not be empty')
         return
      }
      try {
         const res = await axios.post('https://augmntx.com/api/login',
            { email, password },
            {
               headers: { "Content-Type": "application/json" },
               // withCredentials: true
            }
         );
         if (res?.status === 200) {
            navigate('/')
         }
         setAuth({ email, password })
         console.log(res);
      } catch (err) {
         if (!err.res) {
            console.log('No Server Response');
         } else if (err.res.status === 400) {
            console.log('400 Missing email and password');
         } else if (err.res.status === 401) {
            console.log('401 Unauthorized');
         } else {
            console.log('Login failed');
         }
      }
   };

   return (
      <>
         <div
            className={`w-full min-h-screen  fixed bg-white  ${isLoading ? 'z-50 grid place-items-center' : 'hidden'}`}
         >
            < CircularProgress
               size="lg"
               variant="soft"
            />
         </div >
         <main className="min-h-screen bg-[#f3fafe] py-[70px] grid place-items-center">
            <div className="container flex items-center justify-center flex-col pt-[25px] ">
               <div className=" md:w-[60%] lg:w-[45%] bg-white shadow-2xl rounded-lg py-[50px] px-[60px]">
                  <h1 className="text-[#343f52] font-[700] text-[22px] mb-[25px] leading-8">
                     Sign in to start your<br />session
                  </h1>
                  <form
                     onSubmit={handleSubmit}
                     className="flex flex-col gap-4 mb-2"
                  >
                     <input
                        type="text"
                        placeholder="Email"
                        className="shadow px-[20px] w-full text-[#60697b] font-[500] bg-[#fefefe] border rounded-md border-solid border-[#083c8212] outline-none transition-all focus:border-[#afdcf8] placeholder:text-sm"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                     />
                     <input
                        type="password"
                        placeholder="password"
                        className="shadow px-[20px] w-full text-[#60697b] font-[500] bg-[#fefefe] border rounded-md border-solid border-[#083c8212] outline-none transition-all focus:border-[#afdcf8] placeholder:text-sm"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                     />
                     <button
                        type='submit'
                        className="mt-4"
                     >
                        <span className=' relative text-white bg-[#5271FF] rounded-md text-[16px] font-[700] py-[14px] px-[25px] btn-hire' >
                           Continue
                        </span>
                     </button>
                     <Link to="/forgot-password" className="text-[#5271FF] text-4 font-[700] text-center hover:text-[#343f52]">
                        Forgot password?
                     </Link>
                  </form>
                  <div className="py-[10px] mt-2 flex flex-col items-center justify-center gap-3">
                     <h2 className="font-[700] text-xs text-[#60697b] text-center">
                        Or sign in with
                     </h2>
                     <LogInGoogle />
                  </div>
               </div>
            </div>
            <div className="mt-6 text-[#60697B] text-[16px] text-center">
               <p>
                  Don&apos;t have an account? <Link to="/hire" className="text-[#5271FF]">Sign up</Link>
               </p>
               <p>
                  Please <a href="#" className="text-[#5271FF]">Contact us</a> if you require any assistance
               </p>
            </div>
         </main>
      </>
   )
}

export default LogIn;