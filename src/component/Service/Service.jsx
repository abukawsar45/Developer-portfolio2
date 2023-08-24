
import {
  FaChalkboardTeacher,
  FaHireAHelper,
  FaHands,
  FaForumbee,
} from 'react-icons/fa';

const Service = () => {
  return (
    <div className='py-16'>
      <div
        data-aos='fade-up'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-orange-500 w-full py-4 px-4 md:py-5 h-auto'
      >
        <div className='text-slate-100 flex items-center  py-2'>
          <FaChalkboardTeacher className='text-6xl mr-4' />
          <h3 className='font-bold text-2xl'>BEST TEACHER</h3>
          <div className='border-2 hidden lg:block border-gray-300  h-full mx-4'></div>
        </div>

        <hr className='md:hidden w-full border-gray-300 mt-4' />

        <div className='text-slate-100 flex items-center py-2'>
          <FaHireAHelper className='text-6xl mr-4  text- border- ' />
          <h3 className='font-bold text-2xl'>ONLINE SUPPORT</h3>
          <div className='border-2 hidden lg:block border-gray-300  h-full mx-4'></div>
        </div>

        <hr className='md:hidden w-full  border-gray-300 mt-4' />

        <div className='text-slate-100 flex items-center py-2'>
          <FaHands className='text-6xl mr-4' />
          <h3 className='font-bold text-2xl'>EASY PROCESS</h3>
          <div className='border-2 hidden lg:block border-gray-300  h-full mx-4'></div>
        </div>

        <hr className='md:hidden w-full border-gray-300 mt-4' />

        <div className='text-slate-100 flex items-center py-2'>
          <FaForumbee className='text-6xl mr-4' />
          <h3 className='font-bold text-2xl'>YOUR DREAMS</h3>
        </div>
      </div>
    </div>
  );
};

export default Service;