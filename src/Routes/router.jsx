import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../component/Home/Home/Home';
import Skills from '../component/Skills/Skills';
import Projects from '../component/Projects/Projects';
import Banner from '../component/Home/Banner/Banner';
import Contact from './../component/Contact/Contact';


const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <Banner />,
      },
      {
        path: 'skills',
        element: <Skills/>
      },
      {
        path: '/projects',
        element: <Projects/>
      },
      {
          path: '/contact',
          element: <Contact/>
      }
    ],
  },
]);

export default Router;
