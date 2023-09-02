import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

const Skills = () => {
  const location = useLocation();

  useEffect(() => {
    const skillsElement = document.getElementById('skills');
    if (skillsElement && location.pathname === '/skills') {
      skillsElement.scrollIntoView({ behavior: 'smooth' });
    }
    AOS.refresh();
  }, [location.pathname]);

  return (
    <div id='skills' className='highlight-section py-16 '>
      <div className='border-b-2 border-violet-500 my-4'></div>
      <div>
        <h4 className='text-center font-thin text-2xl text-sky-500 '>
          MY SKILLS
        </h4>
      </div>
      <div className='border-b-2 border-violet-500 my-4'></div>
      <div>
        <div
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '
          data-aos='fade-up'
          data-aos-delay='500'
        >
          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
            />
            <h4>HTML</h4>
          </div>
          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
            />
            <h4>CSS</h4>
          </div>
          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
            />
            <h4>Bootstrap</h4>
          </div>
          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
            />
            <h4>Tailwindow</h4>
          </div>
          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
            />

            <h4>JavaScript</h4>
          </div>

          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            />
            <h4>ReactJs</h4>
          </div>
          {/*  */}
          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
            />
            <h4>NextJs</h4>
          </div>
          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg'
            />
            <h4>TypeScript</h4>
          </div>
          {/*  */}
          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
            />
            <h4>NodeJs</h4>
          </div>
          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
            />
            <h4>MongoDB</h4>
          </div>

          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
            />
            <h4>Firebase</h4>
          </div>

          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
            />
            <h4>GitHub</h4>
          </div>
          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
            />
            <h4>Figma</h4>
          </div>
          <div className='flex flex-col justify-center items-center my-3'>
            <img
              className='mx-auto w-24 md:my-4 lg:my-6 bg-slate-400 rounded-lg p-4 bg-opacity-10'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
            />
            <h4>ExpressJs</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
