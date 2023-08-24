import { useEffect, useState } from 'react';
import { Carousel } from '3d-react-carousal';
import { Link } from 'react-router-dom';

const Chef = () => {
  const [chefData, setChefData] = useState([]);
  // console.log(chefData);

  useEffect(() => {
    fetch('chefData.json')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setChefData(data);
      });
  }, []);

  const callback = () => {
    // // console.log('callback', index);
  };

  const slideElements = chefData?.map((teaching) => (
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
          <h6 className=' text-xs mx-2 my-2 bg-violet-300 text-black hover:text-white px-4 py-2 rounded-lg hover:shadow-lg hover:bg-violet-500'>
            <Link to='https://my-assignment-10-f52e3.web.app/' target='_blank'>
              Live Site
            </Link>
          </h6>
        </div>
        <div>
          <h6 className=' text-xs mx-2 my-2 bg-violet-300 text-black hover:text-white px-4 py-2 rounded-lg hover:shadow-lg hover:bg-violet-500'>
            <Link
              to='https://github.com/abukawsar45/chef_recipe_hunter.git'
              target='_blank'
            >
              Client Repo
            </Link>
          </h6>
        </div>
        <div>
          <h6 className=' text-xs mx-2 my-2 bg-violet-300 text-black hover:text-white px-4 py-2 rounded-lg hover:shadow-lg hover:bg-violet-500'>
            <Link
              to='https://github.com/abukawsar45/chef_recipe_hunter_server.git'
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
export default Chef;
