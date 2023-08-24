import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className='grid grid-cols-1 md:grid-cols-2 bg-neutral text-neutral-content'>
        <div className='bg-slate-600 p-10 flex flex-col md:flex-row justify-evenly'>
          <div>
            <div>
              <span className='footer-title'>Follow Me</span>
              <div className='flex  gap-4 mt-4'>
                <Link  target='_blank' to='https://www.facebook.com/kosternik.akash/'>
                  <BsFacebook className='text-3xl' />
                </Link>
                <Link  target='_blank' to='https://github.com/abukawsar45'>
                  <FaGithub className='text-3xl' />
                </Link>
                <Link  target='_blank' to='https://www.linkedin.com/in/abu-kowsear-abu-kaw-sar-77b075260/'>
                  <BsLinkedin className='text-3xl' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='p-10 grid grid-cols-1 md:grid-cols-2'>
          <div className=''>
            <span className='footer-title'>Newsletter</span>
            <div className='form-control w-80'>
              <label className='label'>
                <span className='label-text'>Enter your email address</span>
              </label>
              <div className='mr-16'>
                <input
                  type='text'
                  placeholder='user@site.com'
                  className='input w-44 lg:w-auto input-bordered '
                />
                <br />
                <button className='btn btn-primary mt-2'>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer footer-center p-4  bg-gray-800 text-white'>
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
