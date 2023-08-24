import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import ActiveLink from './../../utilities/ActiveLink';


const Navbar = () => {

    const [loader, setLoader] = useState(false);

  const handleDownloadButton = () => {
     setLoader(true);
    // Create a temporary link element
    const link = document.createElement('a');
  
    // Set the href to the CV link
    link.href =
      'https://drive.google.com/uc?export=download&id=1Lw4TO30uUOvNoIW3XdO1YBPTuXque2_K';
  
    // Set the download attribute to specify the file name
    link.download = 'abu-kowsear_resume.pdf';
  
    // Programmatically trigger the click event to initiate the download
    link.click();
    // Clean up the temporary link element
    link.remove();
    setLoader(false);
  
  };
  const navOptions = (
    <>
      <li className=''>
        <ActiveLink to='/'>Home</ActiveLink>{' '}
      </li>
      <li className=' gap-1 '>
        <ActiveLink to='skills'>Skills</ActiveLink>{' '}
      </li>
      <li className=' gap-1 '>
        <ActiveLink to='projects'>Projects</ActiveLink>{' '}
      </li>
      <li className=' gap-1 '>
        <ActiveLink to='about'>About</ActiveLink>{' '}
      </li>
      <li className=' gap-1 '>
        <ActiveLink to='contact'>Contact Me</ActiveLink>{' '}
      </li>
    </>
  );

  return (
    <div className='navbar  bg-opacity-30 font-serif w-full bg-black text-white '>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navOptions}
          </ul>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
      </div>
      <div className='navbar-end pr-5'>
        <ul className='menu-horizontal '>
          <li
            onClick={handleDownloadButton}
            disabled={!(loader === false)}
            className=' gap-1 mr-5 btn btn-secondary'
          >
            {loader ? <span>Downloading</span> : <span>Download CV</span>}
            <FaDownload className='h-5 w-5 ml-2' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
