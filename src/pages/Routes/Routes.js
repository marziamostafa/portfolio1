import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutMe from "../AboutMe/AboutMe";
import Blog from "../Blog/Blog";
import Home from "../HomePage/Home/Home";
import Project1 from "../Projects/Project1/Project1";
import Project2 from "../Projects/Project2/Project2";
import Project3 from "../Projects/Project3/Project3";
import Projects from "../Projects/Projects";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/project/1',
                element: <Project1></Project1>
            },
            {
                path: '/project/2',
                element: <Project2></Project2>
            },
            {
                path: '/project/3',
                element: <Project3></Project3>
            },
            {
                path: '/aboutme',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])


export default router;