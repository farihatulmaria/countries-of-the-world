import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Countries from '../pages/Countries';
import Home from '../pages/Home';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/countries',
        element:<Countries/>,
      }
    ]
  },
]);

export default routes;