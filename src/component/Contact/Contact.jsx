import { useRef } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { BiSolidPhoneCall } from 'react-icons/bi';
import emailjs from 'emailjs-com';

const Contact = () => {
  // console.log(import.meta.env)

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e)
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Message has been send successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };

  return (
    <div className='py-6 bg-lime-300 bg-opacity-5 hover:bg-lime-400 hover:bg-opacity-20 '>
      <h2 className='text-center text-4xl font-thin'>Contact</h2>
      <div className='py-3 grid grid-cols-1 md:grid-cols-2'>
        <div>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className='px-2 md:px-4 lg:px-8 w-full'
          >
            <div className='form-control w-full mt-4'>
              <label className='label'>
                <span className='label-text'>Your Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='your name'
                className='text-black px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                required
              />
            </div>
            <div className='form-control w-full mt-4'>
              <label className='label'>
                <span className='label-text'>Your Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='your email'
                className='text-black px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                required
              />
            </div>

            <div className='form-control w-full mt-4'>
              <label className='label'>
                <span className='label-text'>Your Email</span>
              </label>
              <textarea
                type='text'
                name='message'
                placeholder='your message'
                rows='4'
                cols='200'
                className='text-black px-4 py-2  rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                required
              />
            </div>
            <input
              className='px-2 py-2 bg-lime-500 my-3 rounded-lg hover:bg-lime-600 text-gray-50 hover:text-black w-full'
              type='submit'
              value='SEND'
            />
          </form>
        </div>

        <div>
          <div className='border-r-2 w-full border-violet-500 my-4'></div>
          <div className='text-center'>
            <span className='footer-title'>Follow Me</span>
            <div className='flex flex-col items-center justify-center gap-4 mt-4'>
              {/* <Link
              target='_blank'
              to='https://www.linkedin.com/in/abu-kowsear-abu-kaw-sar-77b075260/'
            >
              <BsWhatsapp className='text-3xl' />
            </Link> */}
              <div>
                <a
                  href='tel:+8801581629271'
                  className='flex items-center justify-center gap-2'
                >
                  <BiSolidPhoneCall className='text-3xl' />
                  <span>+8801581629271</span>
                </a>
              </div>
              <div className='flex items-center justify-center gap-4'>
                <Link
                  target='_blank'
                  to='https://www.facebook.com/kosternik.akash/'
                >
                  <BsFacebook className='text-3xl' />
                </Link>

                <Link target='_blank' to='https://github.com/abukawsar45'>
                  <FaGithub className='text-3xl' />
                </Link>

                <Link
                  target='_blank'
                  to='https://www.linkedin.com/in/abu-kowsear-abu-kaw-sar-77b075260/'
                >
                  <BsLinkedin className='text-3xl' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
