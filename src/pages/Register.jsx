import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from '../context/AuthProvider';
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/joy/CircularProgress';

const Register = () => {
   const { setAuth } = useContext(AuthContext)
   const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      org_name: '',
      email: '',
      tel: ''
   });

   const navigate = useNavigate()

   const [isLoading, setIsLoading] = useState(true)
   const [fNameErr, setFNameErr] = useState('');
   const [lNameErr, setLNameErr] = useState('');
   const [oNameErr, setONameErr] = useState('');
   const [emailErr, setEmailErr] = useState('');
   const [telErr, setTelErr] = useState('');
   const [isFNameFocused, setIsFNameFocused] = useState(false)
   const [isLNameFocused, setIsLNameFocused] = useState(false)
   const [isOrgFocused, setIsOrgFocused] = useState(false)
   const [isEmailFocused, setIsEmailFocused] = useState(false)
   const [isTelFocused, setIsTelFocused] = useState(false)

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });
   };

   const handleRegister = async (e) => {
      e.preventDefault();
      try {
         const res = await axios.post('https://augmntx.com/api/register',
            formData,
            {
               headers:
               {
                  "Content-Type": "application/json"
               }
            }
         );
         setAuth(formData)
         console.log(res);
         if (res.data.errors) {
            const { first_name, last_name, org_name, email, tel } = res.data.errors
            setFNameErr(first_name)
            setLNameErr(last_name)
            setONameErr(org_name)
            setEmailErr(email)
            setTelErr(tel)
         }
         if (res.status === 200 && !res.data.errors) {
            navigate('/login')
         }
         if (res.data.message === 'Registration successful') {
            alert(`Registration successful. Your password is ${res.data.password} keep it secret as you will use it to login`);
         } else {
            console.log(res.data.message);
         }
      } catch (err) {
         console.error('Error during registration:', err);
      }
   };

   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false)
      }, 500)
   }, [])

   return (
      <>
         <div
            className={`w-full min-h-screen  fixed bg-white  ${isLoading ? 'z-50 grid place-items-center' : 'hidden'}`
            }>
            < CircularProgress
               size="lg"
               variant="soft"
            />
         </div >
         <main
            className="min-h-screen bg-[#f3fafe] py-20"

         >
            <div className="container text-center tracking-wide leading-10">
               <h2
                  className="container font text-[40px] font-[400] mb-[15px]"
               >
                  Hire the best dedicated developers
               </h2>
               <p
                  className="text-[#60697B] text-[18px] mt-[20px]"
               >
                  Hire pre-vetted developers with strong technical and communication skills at unbeatable prices.
               </p>
               <p
                  className="text-[#60697B] text-[18px] mb-[20px]"
               >
                  If you decide to stop within one week, you pay nothing.
               </p>
            </div>
            <div
               className="container flex justify-center"
            >
               <form
                  onSubmit={handleRegister}
                  className="w-[770px] flex flex-col gap-8"
               >
                  <div className="flex justify-between flex-col gap-5 md:flex-row">
                     <div className="w-full md:w-[48%] relative ">
                        <label
                           htmlFor="first_name"
                           className={`absolute py-3 px-5 text-[15px] text-[#959ca9] transition-all ${isFNameFocused || formData.first_name.length > 0 ? 'translate-x-[-10px] translate-y-[-12px] scale-[0.8]' : ''}`}
                        >
                           First Name *
                        </label>
                        <input
                           onFocus={() => setIsFNameFocused(true)}
                           onBlur={() => setIsFNameFocused(false)}
                           className="py-[12px] px-[20px] w-full border border-solid border-slate-200 rounded-md outline-none transition-all focus:border-blue-300 shadow-sm"
                           type="text"
                           name="first_name"
                           id="first_name"
                           onChange={handleChange}
                        />
                        <label className="text-[#e2626b] block text-[16px]">{fNameErr}</label>
                     </div>
                     <div className="w-full md:w-[48%] relative">
                        <label
                           htmlFor="last_name"
                           className={`absolute py-3 px-5 text-[15px] text-[#959ca9] transition-all ${isLNameFocused || formData.last_name.length > 0 ? 'translate-x-[-10px] translate-y-[-12px] scale-[0.8]' : ''}`}
                        >
                           Last Name *
                        </label>
                        <input
                           onFocus={() => setIsLNameFocused(true)}
                           onBlur={() => setIsLNameFocused(false)}
                           className="py-[12px] px-[20px] w-full border border-solid border-slate-200 rounded-md outline-none transition-all focus:border-blue-300 shadow-sm"
                           type="text"
                           name="last_name"
                           id="last_name"
                           onChange={handleChange}
                        />
                        <label className="text-[#e2626b] block text-[16px]">{lNameErr}</label>
                     </div>
                  </div>
                  <div className="flex justify-between flex-col gap-5 md:flex-row">
                     <div className="w-full md:w-[48%] relative">
                        <label
                           htmlFor="org_name"
                           className={`absolute py-3 px-5 text-[15px] text-[#959ca9] transition-all ${isOrgFocused || formData.org_name.length > 0 ? 'translate-x-[-10px] translate-y-[-12px] scale-[0.8]' : ''}`}
                        >
                           Organization Name *
                        </label>
                        <input
                           onFocus={() => setIsOrgFocused(true)}
                           onBlur={() => setIsOrgFocused(false)}
                           className="py-[12px] px-[20px] w-full border border-solid border-slate-200 rounded-md outline-none transition-all focus:border-blue-300 shadow-sm"
                           type="text"
                           name="org_name"
                           id="org_name"
                           onChange={handleChange}
                        />
                        <label className="text-[#e2626b] block text-[16px]">{oNameErr}</label>
                     </div>
                     <div className="w-full md:w-[48%] relative">
                        <label
                           htmlFor="email"
                           className={`absolute py-3 px-5 text-[15px] text-[#959ca9] transition-all ${isEmailFocused || formData.email.length > 0 ? 'translate-x-[-10px] translate-y-[-12px] scale-[0.8]' : ''}`}
                        >
                           Email *
                        </label>
                        <input
                           onFocus={() => setIsEmailFocused(true)}
                           onBlur={() => setIsEmailFocused(false)}
                           className="py-[12px] px-[20px] w-full border border-solid border-slate-200 rounded-md outline-none transition-all focus:border-blue-300 shadow-sm"
                           type="email"
                           name="email"
                           id="email"
                           onChange={handleChange}
                        />
                        <label className="text-[#e2626b] block text-[16px]">{emailErr}</label>
                     </div>
                  </div>
                  <div className="flex justify-between flex-col gap-5 md:flex-row">
                     <div className="w-full md:w-[48%] relative">
                        <label
                           htmlFor="tel"
                           className={`absolute py-3 px-5 text-[15px] text-[#959ca9] transition-all ${isTelFocused || formData.tel.length > 0 ? 'translate-x-[-10px] translate-y-[-12px] scale-[0.8]' : ''}`}
                        >
                           Phone Number *
                        </label>
                        <input
                           onFocus={() => setIsTelFocused(true)}
                           onBlur={() => setIsTelFocused(false)}
                           className="py-[12px] px-[20px] w-full border border-solid border-slate-200 rounded-md outline-none transition-all focus:border-blue-300 shadow-sm"
                           type="tel"
                           name="tel"
                           id="tel"
                           onChange={handleChange}
                        />
                        <label className="text-[#e2626b] block text-[16px]">{telErr}</label>
                     </div>
                     <div className="w-full md:w-[48%]">
                        <select
                           className="text-[#8c98af] py-[14px] pl-[20px] pr-[40px] w-full border border-solid border-slate-200 rounded-md outline-none transition-all focus:border-blue-300 shadow-sm"
                           name=""
                           id=""
                        >
                           <optgroup>
                              <option value="">How did you hear about us? *</option>
                              <option value="">Email</option>
                              <option value="">Search engine</option>
                              <option value="">Social media</option>
                              <option value="">Others</option>
                           </optgroup>
                        </select>
                     </div>
                  </div>
                  <div className="mt-2">
                     <button
                        className="block mx-auto text-white w-fit bg-[#5271FF] rounded-full text-[17px] font-[700] py-[12px] px-[25px] btn-hire mb-3"
                        type="submit"
                     >
                        Submit
                     </button>
                     <p
                        className="text-center text-[#aab0bc]"
                     >
                        * These fields are required.
                     </p>
                  </div>
               </form>
            </div >
         </main >
      </>
   )
}

export default Register
