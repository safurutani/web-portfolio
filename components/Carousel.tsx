import { useState, useEffect, useRef } from 'react';

const Carousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 2; // Speed at which the carousel scrolls

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;
    
    const startScroll = () => {
      if (carouselRef.current) {
        const scrollElement = carouselRef.current;
        
        const handleScroll = () => {
          if (!isHovered) {
            scrollElement.scrollLeft += scrollSpeed;

            // Loop back to the beginning if scroll reaches the end
            if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
              scrollElement.scrollLeft = 0;
            }
          }
        };

        scrollInterval = setInterval(handleScroll, 20); // Adjust this value for smoother or faster scrolling
      }
    };

    startScroll();

    return () => clearInterval(scrollInterval);
  }, [isHovered]);
  return (
    <div
      className="relative overflow-hidden max-w-screen-xl mx-auto w-full h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={carouselRef}
        className={`flex whitespace-nowrap h-full carousel-inner ${isHovered ? 'paused' : ''}`}
      >
        <div className="w-[64rem]"></div>
        <img
          src="/images/tswift album ranker.png"
          alt="Taylor Swift Album Ranker"
          className=" carousel-item px-2"
        />
        <img
          src="/images/skelly zigzag.png"
          alt="Zig Zag Game"
          className=" carousel-item px-2"
        />
        <img
          src="/images/session break timer.png"
          alt="Session Break Timer"
          className=" carousel-item px-2"
        />
        <img
          src="/images/resin estimator.png"
          alt="Genshin Impact Resin Estimator"
          className=" carousel-item px-2"
        />
        <img
          src="/images/quote generator.png"
          alt="Quote Generator"
          className=" carousel-item px-2"
        />
        <img
          src="/images/pokemon lookup.png"
          alt="Pokemon Lookup"
          className=" carousel-item px-2"
        />
        <img
          src="/images/lyric app expanded.jpg"
          alt="Lyric App"
          className=" carousel-item px-2"
        />
        <img
          src="/images/wordsmith game.jpg"
          alt="WordSmith Game"
          className=" carousel-item px-2"
        />
        <img
          src="/images/fruit slicer.jpg"
          alt="Fruit Slicer"
          className=" carousel-item px-2"
        />
        <img
          src="/images/drum machine.png"
          alt="Drum Machine"
          className=" carousel-item px-2"
        />
        <img
          src="/images/calculator.png"
          alt="Calculator"
          className=" carousel-item px-2"
        />        
      </div>
    </div>
  );
};

export default Carousel;
