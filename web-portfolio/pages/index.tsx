import Carousel from '../components/Carousel';
import Skills from '../components/Skills';

const Home = () => (
  <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
    <Carousel />
    <Skills />
  </div>
);

export default Home;
