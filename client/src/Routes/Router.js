import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Portfolios from "../Pages/Portfolio/Portfolios";
import Contact from "../Pages/Contact/Contact";
import Experience from "../Pages/Professional Experience/Experience";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/portfolio", element: <Portfolios></Portfolios> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/experience", element: <Experience></Experience> },
    ],
  },
]);
