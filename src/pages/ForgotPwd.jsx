import { useEffect, useState } from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import { Link } from 'react-router-dom';

const ForgotPwd = () => {
   const [isLoading, setIsLoading] = useState(true)
   const [email, setEmail] = useState('')
   const [err, setErr] = useState(null)

   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false)
      }, 500)
   }, [])

   const handleSubmit = async (e) => {
      e.preventDefault();
      setErr(true)
   }

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
                  <h1 className="text-[#343f52] font-[700] text-[22px] mb-[10px] leading-8">
                     Forgot password
                  </h1>
                  <p className='text-[#60697B] text-[14px] leading-6'>
                     Enter the email address associated with your account and we&apos;ll send you a link to reset your password.
                  </p>
                  <form
                     onSubmit={handleSubmit}
                     className="flex flex-col gap-2 mt-6 mb-3"
                  >
                     <input
                        type="text"
                        placeholder="Email"
                        className="shadow px-[20px] w-full text-[#60697b] font-[500] bg-[#fefefe] border rounded-md border-solid border-[#083c8212] outline-none transition-all focus:border-[#afdcf8] placeholder:text-sm"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                     />
                     {
                        email === '' && email.length <= 0 && err
                           ? <label
                              className='text-[#e2626b] block text-[16px]'
                           >
                              Please enter valid email address
                           </label>
                           : (err && <label
                              className='text-[#45c4a0] block text-[16px]'
                           >
                              If you have a AugmntX account, you will receive instructions for resetting your password in your email
                           </label>)
                     }
                     <button
                        type='submit'
                        className="mt-4"
                     >
                        <span className=' relative text-white bg-[#5271FF] rounded-md text-[16px] font-[700] py-[14px] px-[25px] btn-hire' >
                           Continue
                        </span>
                     </button>
                     <Link to="/login" className="text-[#5271FF] mt-3 text-4 font-[700] text-center hover:text-[#343f52]">
                        Return to vendor sign in
                     </Link>
                  </form>
               </div>
            </div>
            <div className="mt-6 text-[#60697B] text-[16px] text-center">
               <p>
                  Don&apos;t have an account? <Link to='/hire' className="text-[#5271FF]">Sign up
                  </Link>
               </p>
               <p>
                  Please <a href="#" className="text-[#5271FF]">Contact us</a> if you require any assistance
               </p>
            </div>
         </main>
      </>
   )
}

export default ForgotPwd;