import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const Main = () => {
  return (
    <div className='mx-0 px-2 md:mx-2 lg:mx-6 '>
      {' '}
      {/* for bg-image */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;