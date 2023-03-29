import React from "react";
import ReactDOM from "react-dom/client";
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";
import CrewDetail from "./components/CrewDetail";
import DestinationDetail from "./components/DestinationDetail";
import Layout from "./components/Layout";
import "./index.css";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import { DestinationLoader } from "./pages/destinationloader";
import { CrewLoader } from "./pages/crewloader";
import Technology from "./pages/Technology";
import TechnologyDetail from "./components/TechnologyDetail";
import { technologyLoader } from "./pages/technologyloader";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/space-toursim/' element={<Layout />}>
         <Route index={true} element={<Home />} />
         <Route path='Destination' element={<Destination />}>
            <Route
               index={true}
               element={<DestinationDetail />}
               loader={async () => {
                  return await DestinationLoader("Moon");
               }}
            />
            <Route
               path=':destinationData'
               element={<DestinationDetail />}
               loader={async ({ params }) => {
                  return await DestinationLoader(params.destinationData);
               }}
            />
         </Route>
         <Route path='Crew' element={<Crew />}>
            <Route
               index={true}
               element={<CrewDetail />}
               loader={async () => await CrewLoader("Douglas")}
            />
            <Route
               path=':crewData'
               element={<CrewDetail />}
               loader={async ({ params }) => await CrewLoader(params.crewData)}
            />
         </Route>
         <Route path='Technology' element={<Technology />}>
            <Route
               index={true}
               element={<TechnologyDetail />}
               loader={() => technologyLoader("Launch")}
            ></Route>
            <Route
               path=':technologyData'
               element={<TechnologyDetail />}
               loader={({ params }) => technologyLoader(params.technologyData)}
            ></Route>
         </Route>
      </Route>
   )
);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>
);
