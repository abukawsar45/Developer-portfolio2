import { useEffect } from "react";
import Chef from "./Chef/Chef";
import Teaching from "./Teaching/Teaching";
import Toy from "./Toy/Toy";
import AOS from 'aos';

const Projects = () => {

  useEffect(() => {
    AOS.refresh();
  },[])
  return (
    <div id='projects' className='' data-aos='fade-up' data-aos-delay='500'>
      <div className='border-b-2 border-violet-500 my-4'></div>
      <div>
        <h4 className='text-center font-thin text-2xl text-sky-500 '>
          MY PROJECTS
        </h4>
      </div>
      <div className='border-b-2 border-violet-500 my-4'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
        <div>
          <Teaching />
        </div>
        <div>
          <Toy />
        </div>
        <div>
          <Chef />
        </div>
      </div>
    </div>
  );
};

export default Projects;