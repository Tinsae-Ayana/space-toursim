import { NavLink, useLoaderData } from "react-router-dom";

const CrewDetail = () => {
   const active = "w-5 h-5 rounded-full bg-white";
   const notActive = "w-5 h-5 rounded-full bg-gray-600";
   const data = useLoaderData();

   return (
      <article className='lg:h-auto flex lg:flex-row flex-col lg:justify-between justify-center lg:space-y-0 space-y-24'>
         <div className='lg:basis-[60%] flex flex-col justify-center lg:text-left text-center md:order-1 order-2 '>
            <div className='md:order-1 order-2'>
               <h1 className='font-bellefair font-normal text-progray md:text-[32px] text-[16px] uppercase '>
                  {data.role}
               </h1>
               <h1 className='font-bellefair font-normal text-white md:text-[56px] text-[24px] uppercase'>
                  {data.name}
               </h1>
               <p className='font-barlow font-normal text-white md:text-[18px] text-[15px] md:w-[444px] w-full md:px-0 px-4 lg:m-0 m-auto'>
                  {data.bio}
               </p>
            </div>
            <nav className='flex lg:justify-start justify-center space-x-5  py-10 md:order-2 order-1'>
               <NavLink
                  to='/Space-toursim/Crew'
                  className={({ isActive }) => (isActive ? active : notActive)}
                  end
               ></NavLink>
               <NavLink
                  to='/Space-toursim/Crew/Mark'
                  className={({ isActive }) => (isActive ? active : notActive)}
               ></NavLink>
               <NavLink
                  to='/Space-toursim/Crew/Victor'
                  className={({ isActive }) => (isActive ? active : notActive)}
               ></NavLink>
               <NavLink
                  to='/Space-toursim/Crew/Anousheh'
                  className={({ isActive }) => (isActive ? active : notActive)}
               ></NavLink>
            </nav>
         </div>
         <div className='lg:h-[450px] md:h-[550px] h-[220px] md:order-2 order-1'>
            <img className='object-contain w-full h-full' src={data.images.png} alt='' />
         </div>
      </article>
   );
};

export default CrewDetail;
