
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import Skills from '../../Skills/Skills';
import Banner from './../Banner/Banner';




const Home = () => {
  return (
    <div className='pt-16'>
      <Banner />
      <Skills />
      <Projects />
      <Contact/>
      
   
     
    </div>
  );
};

export default Home;