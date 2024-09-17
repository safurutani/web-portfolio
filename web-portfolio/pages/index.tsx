import Carousel from '../components/Carousel';
import Skills from '../components/Skills';

const Home = () => (
  <div className="container mx-auto p-8 justify-center">
    <h1 className="text-4xl font-bold mb-2 text-center">Sara Furutani</h1>
    <h2 className="text-2xl text-center mb-8">Self Taught Software Developer</h2>
    <Carousel />
    <Skills />
  </div>
);

export default Home;
