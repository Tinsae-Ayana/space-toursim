import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";

const DestinationDetail = () => {
   const data = useLoaderData();
   const activeLink =
      "font-barlow font-normal text-[16px]  text-prowhite md:py-2  py-1 border-white border-b-2 md:border-r-0";
   const notActiveLink =
      "font-barlow font-normal text-[16px] text-prowhite md:py-2 py-1 border-gray-400 hover:md:border-b-2 ";
   return (
      <>
         <div className='flex lg:flex-row flex-col lg:items-end items-center lg:justify-between justify-around lg:h-auto h-full'>
            <div className='lg:w-[350px] lg:h-[350px] md:w-[250px] md:h-[250px] w-[170px] h-[170px] '>
               <img src={data.images.png} className='object-cover w-full h-full' />
            </div>

            <div className='lg:basis-1/3 md:w-[575px] w-[327px] h- flex flex-col lg:justify-start justify-between '>
               <nav className='flex flex-row lg:justify-between justify-evenly lg:pb-0 pb-6'>
                  <NavLink
                     to='/Space-toursim/Destination'
                     className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
                     end
                  >
                     MOON
                  </NavLink>
                  <NavLink
                     to='/Space-toursim/Destination/Mars'
                     className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
                  >
                     MARS
                  </NavLink>
                  <NavLink
                     to='/Space-toursim/Destination/Europa'
                     className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
                  >
                     EUROPE
                  </NavLink>
                  <NavLink
                     to='/Space-toursim/Destination/Titan'
                     className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
                  >
                     TITAN
                  </NavLink>
               </nav>
               <article>
                  <h1 className='font-bellefair font-normal lg:text-[100px] text-[56px] text-white lg:text-left text-center leading-tight uppercase'>
                     {data.name}
                  </h1>
                  <p className='font-barlow font-normal text-[18px] text-white text-center lg:text-left pb-10'>
                     {data.description}
                  </p>
                  <hr className='border-gray-500 pb-10' />

                  <div className='flex md:flex-row flex-col lg:justify-between md:justify-around justify-center items-center md:text-left text-center uppercase'>
                     <div>
                        <h1 className='font-barlow font-normal text-[14px] text-white'>
                           AVG. DISTANCE
                        </h1>
                        <h1 className='font-bellefair font-normal text-[28px] text-white'>
                           {data.distance}
                        </h1>
                     </div>
                     <div>
                        <h1 className='font-barlow font-normal text-[14px] text-white'>
                           EST. TRAVEL TIME
                        </h1>
                        <h1 className='font-bellefair font-normal text-[28px] text-white'>
                           {data.travel}
                        </h1>
                     </div>
                  </div>
               </article>
            </div>
         </div>
      </>
   );
};

export default DestinationDetail;
