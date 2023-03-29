import { Outlet } from "react-router-dom";

const Destination = () => {
   return (
      <main className='h-screen w-screen lg:bg-desdesktop md:bg-destablet bg-desmobile bg-no-repeat bg-center bg-cover bg-darkBlue lg:px-[166.5px] md:px-[35.5px] lg:py-[212px] md:py-[136px]  py-[88px]'>
         <h1 className='font-barlow font-normal text-white lg:text-[28px] text-[20px] lg:text-left text-center w-[382px] h-[34px] pb-10'>
            <span className='font-bold'>01</span> PICK YOUR DETINATION
         </h1>
         <Outlet></Outlet>
      </main>
   );
};

export default Destination;
