import { useState, useEffect, useRef } from 'react';

const Carousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && !isHovered) {
        carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={carouselRef}
        className="whitespace-nowrap flex scroll-smooth"
      >
        {/* Add your carousel items here */}
        <img src="/images/img1.jpg" alt="Project 1" className="inline-block w-1/4" />
        <img src="/images/img2.jpg" alt="Project 2" className="inline-block w-1/4" />
        <img src="/images/img3.jpg" alt="Project 3" className="inline-block w-1/4" />
        {/* Repeat for more images */}
      </div>
    </div>
  );
};

export default Carousel;
