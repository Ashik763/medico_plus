
import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Exam from "../pages/Exam/Exam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "exam",
    element:<Exam/> ,
    children:[
        {
            path:"/exam/take_now",
            element:<div>Now Playing</div>
        },
        {
            path:"/exam/history",
            element:<div>History</div>
        }
    ]
  },
]);

export default router;