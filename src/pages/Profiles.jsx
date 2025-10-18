import UserCard from "../components/user-card/UserCard"
import Aside from "../components/aside/Aside"
import Features from "../components/features/Features"

const Profiles = () => {
   return (
      <>
         <main className="container min-h-screen flex flex-col-reverse lg:flex-row  w-full pt-[60px]">
            <Aside />
            <UserCard />
         </main>
         <Features />
      </>
   )
}

export default Profiles
