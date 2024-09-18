import Carousel from '../components/Carousel';
import Skills from '../components/Skills';

const Home = () => (
  <div className="relative">
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-2 text-center">Sara Furutani</h1>
      <h2 className="text-2xl text-center mb-20">Self Taught Software Developer</h2>
      <Carousel />
    </div>
    <div className="w-full bg-accent"> 
      <div className="container mx-auto px-8">
        <Skills />
      </div>
    </div>
  </div>
);

export default Home;
