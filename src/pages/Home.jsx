const Home = () => {
   return (
      <main className='lg:bg-desktop md:bg-tablet bg-darkBlue bg-mobile bg-no-repeat bg-cover bg-center w-screen h-screen px-[10%] lg:py-[5%] '>
         <div className='flex lg:flex-row flex-col lg:items-end items-center lg:justify-between justify-evenly w-full h-full'>
            <div className='lg:h-[382px] md:w-[450px] w-[270px] lg:text-left text-center'>
               <h1 className='font-barlow font-normal lg:text-[28px] text-[20px] text-progray'>
                  SO, YOU WANT TO TRAVEL TO SPACE
               </h1>
               <h1 className='font-bellefair font-normal text-prowhite md:text-[150px] text-[80px] leading-tight'>
                  SPACE
               </h1>
               <p className='font-barlow lg:text-[18px] text-[16px] text-progray'>
                  Let’s face it; if you want to go to space, you might as well genuinely go to outer
                  space and not hover kind of on the edge of it. Well sit back, and relax because
                  we’ll give you a truly out of this world experience!
               </p>
            </div>
            <div className='lg:w-96 lg:h-96 rounded-full cursor-pointer hover:bg-tranwhite flex justify-center items-center duration-500'>
               <div className='lg:w-72 lg:h-72 md:h-60 md:w-60 h-36 w-36 rounded-full  flex justify-center items-center bg-prowhite'>
                  <h1 className='font-bellefair font-normal text-black md:text-[32px] text-[20px]'>
                     EXPLORE
                  </h1>
               </div>
            </div>
         </div>
      </main>
   );
};

export default Home;
