import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">My Portfolio</Link>
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li>
          <button className="relative">
            Projects
            <ul className="absolute left-0 mt-2 hidden bg-white text-black group-hover:block">
              <li><Link href="/projects/websites">Websites</Link></li>
              <li><Link href="/projects/mobile-apps">Mobile Apps</Link></li>
              <li><Link href="/projects/unity-games">Unity Games</Link></li>
            </ul>
          </button>
        </li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
