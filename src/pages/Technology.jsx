import { Outlet } from "react-router-dom";

const Technology = () => {
   return (
      <main
         className='h-screen w-screen lg:bg-tedesktop md:bg-testablet bg-tesmobile bg-no-repeat bg-center bg-cover bg-darkBlue 
      lg:pl-[166.5px] lg:pr-0 md:pl-0 md:pr-0  lg:pt-[212px] md:pt-[136px] pt-[88px] lg:pb-[100px]'
      >
         <h1 className='font-barlow font-normal text-white lg:text-[28px] text-[20px] lg:text-left text-center w-[382px] h-[34px] pb-20'>
            <span className='font-bold'>02</span> SPACE LAUNCH 101
         </h1>
         <Outlet></Outlet>
      </main>
   );
};

export default Technology;
