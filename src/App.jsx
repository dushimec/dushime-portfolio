import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Process from "./Pages/Process/Process";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About"; // Assuming you’ll place About in Pages/About/About.jsx
import Contact from "./components/ContactSection/ContactSection"; // Assuming Contact uses ContactSection
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/process",
        element: <Process />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;