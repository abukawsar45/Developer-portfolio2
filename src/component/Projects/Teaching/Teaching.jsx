import { useEffect, useState } from 'react';
import { Carousel } from '3d-react-carousal';
import { Link } from 'react-router-dom';

const Teaching = () => {
  const [teachingData, setTeachingData] = useState([]);

  useEffect(() => {
    fetch('/teachingData.json')
      .then((res) => res.json())
      .then((data) => {
        setTeachingData(data);
      });
  }, []);

  const callback = () => {
    // // console.log('callback', index);
  };

  const slideElements = teachingData.map((teaching) => (
    <div key={teaching.imageUrl}>
      <img src={teaching.imageUrl} alt='Slide' />
    </div>
  ));

  return (
    <div className='my-2 lg:my-8'>
      <div>
        <Carousel
          slides={slideElements}
          autoplay={true}
          interval={2000}
          onSlideChange={callback}
          stopOnHover={true} // Add this prop to stop autoplay on hover
        />
      </div>
      <div className='my-4 md:my-6 lg:my-8 flex justify-around flex-col md:flex-row items-center'>
        <div>
          <h6 className=' text-xs mx-2 my-2 bg-pink-300 text-black hover:text-white px-4 py-2 rounded-lg hover:shadow-lg hover:bg-pink-500'>
            <Link to='https://best-teaching-home.web.app/' target='_blank'>
              Live Site
            </Link>
          </h6>
        </div>
        <div>
          <h6 className=' text-xs mx-2 my-2 bg-pink-300 text-black hover:text-white px-4 py-2 rounded-lg hover:shadow-lg hover:bg-pink-500'>
            <Link
              to='https://github.com/abukawsar45/best-teaching-home'
              target='_blank'
            >
              Client Repo
            </Link>
          </h6>
        </div>
        <div>
          <h6 className=' text-xs mx-2 my-2 bg-pink-300 text-black hover:text-white px-4 py-2 rounded-lg hover:shadow-lg hover:bg-pink-500'>
            <Link
              to='https://github.com/abukawsar45/best-teaching-home-server'
              target='_blank'
            >
              Server Repo
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
