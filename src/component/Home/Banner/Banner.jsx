import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Banner.css'


const Banner = () => {
  const [isBorderAnimated, setIsBorderAnimated] = useState(false);

  return (
    <div className='py-16'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-6/12'>
          <h3 className='py-2 w-6/12 font-thin text-2xl md:text-3xl text-sky-500 text-center'>
            Hi, I&apos;m &#160;
            <br />
            <span className='font-bold'>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  'Web Developer!!',
                  'Front-End Developer!',
                  'Backend Developer!!',
                  'Full Stack Developer!',
                  'React Developer!!',
                  'JavaScript Developer!',
                  'NodeJs Developer!!',
                ]}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
          <h5 className='pt-2 lg:w-10/12'>
            I&apos;m a skilled Web developer who is creative, innovative, and
            passionate about my work. I pay close attention to detail to ensure
            that the websites I build are efficient and fully functional. I'm
            able to collaborate effectively with other developers and members of
            the creative team.
          </h5>
        </div>
        <div
          className={`w-full md:w-6/12 banner-image-container backdrop: ${
            isBorderAnimated ? 'animate-border' : ''
          }`}
          onMouseEnter={() => setIsBorderAnimated(false)}
          onMouseLeave={() => setIsBorderAnimated(true)}
        >
          <img
            src='https://i.ibb.co/G9VLWm7/abu-kowsear.png'
            alt='profile photo'
            className='mx-auto bg-indigo-400 hover:bg-indigo-700 rounded-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
