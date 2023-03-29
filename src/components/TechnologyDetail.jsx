import { NavLink, useLoaderData } from "react-router-dom";
const TechnologyDetail = () => {
   const active =
      "lg:w-20 lg:h-20 w-16 h-16 rounded-full flex justify-center items-center bg-white text-black text-[20px] font-bold";
   const notActive =
      "lg:w-20 lg:h-20 w-16 h-16 rounded-full flex justify-center items-center text-white border border-gray-400 text-[20px] font-bold";
   const data = useLoaderData();

   return (
      <article className='flex lg:flex-row flex-col lg:justify-between w-full h-full'>
         <div className='lg:order-1 order-2  lg:basis-[60%]  flex lg:flex-row flex-col items-center justify-center lg:space-y-0 space-y-10 lg:space-x-10 h-full'>
            <nav className='flex lg:flex-col flex-row justify-center lg:space-y-6 space-x-6 lg:space-x-0'>
               <NavLink
                  to='/Space-toursim/Technology'
                  className={({ isActive }) => (isActive ? active : notActive)}
                  end
               >
                  <h1>1</h1>
               </NavLink>
               <NavLink
                  to='/Space-toursim/Technology/Spaceport'
                  className={({ isActive }) => (isActive ? active : notActive)}
               >
                  <h1>2</h1>
               </NavLink>
               <NavLink
                  to='/Space-toursim/Technology/capsule'
                  className={({ isActive }) => (isActive ? active : notActive)}
               >
                  <h1>3</h1>
               </NavLink>
            </nav>
            <div>
               <h2 className='font-barlow font-normal text-progray text-[16px] lg:text-left text-center'>
                  THE TERMINOLOGY...
               </h2>
               <h1 className='font-bellefair font-normal text-white lg:text-[56px] md:text-[40px] lg:text-left text-center lg:pb-0 pb-6 uppercase'>
                  {data.name}
               </h1>
               <p className='font-barlow font-normal text-progray lg:text-[18px] md:text-[16px] lg:text-left text-center lg:w-full md:w-[458px] w-[330px] lg:m-0 m-auto'>
                  {data.description}
               </p>
            </div>
         </div>
         <div className='lg:order-2 order-1 lg:h-auto md:h-[400px] h-[250px]'>
            <img
               className='w-full h-full object-co '
               src={screen.width > 788 ? data.images.portrait : data.images.landscape}
               alt=''
            />
         </div>
      </article>
   );
};

export default TechnologyDetail;
