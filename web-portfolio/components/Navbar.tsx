import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-accent text-text p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">SF</Link>
        <ul className="flex space-x-8">
          <li><Link href="/">Home</Link></li>
          <li className="relative">
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              Projects
            </button>
            <ul
              ref={dropdownRef}
              className={`absolute mt-2 ${isOpen ? 'block' : 'hidden'} bg-white text-text transition-opacity duration-300  border-solid border-2 border-accent`}
            >
              <li><Link href="/projects/websites" className="block px-4 py-2 hover:bg-gray-200">Websites</Link></li>
              <li><Link href="/projects/mobile-apps" className="block px-4 py-2 hover:bg-gray-200">Mobile Apps</Link></li>
              <li><Link href="/projects/unity-games" className="block px-4 py-2 hover:bg-gray-200">Unity Games</Link></li>
            </ul>
          </li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
