import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
   const activeLink =
      "font-barlow font-normal text-[16px]  text-prowhite md:py-6  py-3 border-white md:border-b-2 border-r-2 md:border-r-0";
   const notActiveLink =
      "font-barlow font-normal text-[16px] text-prowhite md:py-6 py-3 py-3 border-gray-400 hover:md:border-b-2 ";

   const [sideBareOpened, setSideBar] = useState(false);
   const openAndClose = () => {
      const sidebar = document.getElementById("sidebar");
      if (sideBareOpened) {
         sidebar.classList.replace("right-0", "-right-3/4");
         setSideBar(!sideBareOpened);
      } else {
         sidebar.classList.replace("-right-3/4", "right-0");
         setSideBar(!sideBareOpened);
      }
   };

   return (
      <nav
         className='md:w-[95%] w-full absolute md:right-0 lg:top-8 md:top-0'
         onClick={() => openAndClose()}
      >
         <div className='flex justify-between items-center'>
            <div className='flex justify-between items-center md:w-auto w-full p-6 '>
               <img className='h-10 w-10' src='/assets/shared/logo.svg' alt='logo' />
               <AiOutlineMenu
                  className='fill-white h-9 w-9 md:hidden'
                  onClick={() => openAndClose()}
               ></AiOutlineMenu>
            </div>
            <aside
               id='sidebar'
               className='flex md:flex-row flex-col md:justify-evenly justify-center md:pl-0 pl-6 w-4/6 h-screen md:h-auto backdrop-blur-[250px]  md:relative absolute md:right-0 -right-3/4 top-0 duration-200'
            >
               <AiOutlineClose
                  className='fill-white h-8 w-8 md:hidden absolute right-3 top-4'
                  onClick={() => openAndClose()}
               ></AiOutlineClose>
               <NavLink
                  to='/space-toursim/'
                  className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
               >
                  <pre>
                     <span className='font-bold lg:inline md:hidden inline'>00 </span>HOME
                  </pre>
               </NavLink>
               <NavLink
                  to='Destination'
                  className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
               >
                  <pre>
                     <span className='font-bold lg:inline md:hidden inline'>01 </span>DESTINATION
                  </pre>
               </NavLink>
               <NavLink
                  to='Crew'
                  className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
               >
                  <pre>
                     <span className='font-bold lg:inline md:hidden inline'>02 </span>CREW
                  </pre>
               </NavLink>
               <NavLink
                  to='Technology'
                  className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
               >
                  <pre>
                     <span className='font-bold lg:inline md:hidden inline'>03 </span>TECHNOLOGY
                  </pre>
               </NavLink>
               <hr className='border-t-2 w-[40%] absolute right-[95%] top-1/2 border-blurBg lg:block hidden ' />
            </aside>
         </div>
      </nav>
   );
};

export default Nav;
