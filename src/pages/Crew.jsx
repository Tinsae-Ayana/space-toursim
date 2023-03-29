import { Outlet } from "react-router-dom";

const Crew = () => {
   return (
      <main className='h-screen w-screen lg:bg-crsdesktop md:bg-crstablet bg-crsmobile bg-no-repeat bg-center bg-cover bg-darkBlue lg:px-[166.5px] md:px-10 lg:pt-[212px] md:pt-[136px]  pt-[88px]'>
         <h1 className='font-barlow font-normal text-white lg:text-[28px] text-[20px] lg:text-left text-center w-[382px] h-[34px] pb-10'>
            <span className='font-bold'>02</span> MEET YOUR CREW
         </h1>
         <Outlet></Outlet>
      </main>
   );
};

export default Crew;
