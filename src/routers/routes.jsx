import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from '../pages/Home';
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path:'/',
        element:<Home/>
      }
    ]
  },
]);

export default routes;

// children: [
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
//   {
//     path: "top-rated",
//     element: <TopRated />,
//   },
//   {
//     path: "cart",
//     element: <Cart />,
//   },
// ],
// },