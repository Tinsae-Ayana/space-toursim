import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
   return (
      <main id='layout' className='relative overflow-hidden'>
         <Nav></Nav>
         <Outlet></Outlet>
      </main>
   );
};

export default Layout;
