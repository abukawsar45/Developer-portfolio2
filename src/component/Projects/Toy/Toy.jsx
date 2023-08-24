import { useEffect, useState } from 'react';
import { Carousel } from '3d-react-carousal';
import { Link } from 'react-router-dom';

const Toy = () => {
  const [toyData, setToyData] = useState([]);
  // console.log(toyData)

  useEffect(() => {
    fetch('toyData.json')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setToyData(data);
      });
  }, []);

  const callback = () => {
    // // console.log('callback', index);
  };

  const slideElements = toyData?.map((teaching) => (
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
          <h6 className=' text-xs mx-2 my-2 bg-green-300 text-black hover:text-white px-4 py-2 rounded-lg hover:shadow-lg hover:bg-green-500'>
            <Link to='https://best-car-toys.web.app/' target='_blank'>
              Live Site
            </Link>
          </h6>
        </div>
        <div>
          <h6 className=' text-xs mx-2 my-2 bg-green-300 text-black hover:text-white px-4 py-2 rounded-lg hover:shadow-lg hover:bg-green-500'>
            <Link
              to='https://github.com/abukawsar45/best_toy_shop_client'
              target='_blank'
            >
              Client Repo
            </Link>
          </h6>
        </div>
        <div>
          <h6 className=' text-xs mx-2 my-2 bg-green-300 text-black hover:text-white px-4 py-2 rounded-lg hover:shadow-lg hover:bg-green-500'>
            <Link
              to='https://github.com/abukawsar45/best_toy_shop_server'
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

export default Toy;
