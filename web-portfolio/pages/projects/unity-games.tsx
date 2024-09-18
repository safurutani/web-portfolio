import { NextPage } from 'next';
import Link from 'next/link';
import CollapsibleDescription from '../../components/CollapsibleDescription';

const UnityGames: NextPage = () => (
  <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-8">Unity Games</h1>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Example project */}
      <div className="bg-white p-6 rounded-lg shadow-md shadow-accent2">
        <h2 className="text-2xl font-semibold">Fruit Slicer Game</h2>
        <img src="/images/fruit slicer.jpg" alt="Fruit Slicer screenshot" className="unity-img"></img>
        <CollapsibleDescription description={"3D arcade game where players score points by slicing fruit that dynamically spawn across the screen. It features precise collision detection, immersive sound effects, and 3D Physics. Developed with C#, and playable on both PC and mobile platforms."} />
        <Link href="https://safurutani.github.io/fruit-slicer/" target="_blank" className="mt-4 inline-block view-project-button hover:underline">Play Game</Link>
      </div>

      {/* Add more projects here */}
      <div className="bg-white p-6 rounded-lg shadow-md shadow-accent2">
        <h2 className="text-2xl font-semibold">Zig Zag Game</h2>
        <img src="/images/skelly zigzag.png" alt="Zig Zag screenshot" className="unity-img"></img>
        <CollapsibleDescription description={"3D arcade game where players score points by collecting coins on an infinitely generated path without falling off. It offers high score tracking, music, and random path generation. Developed with C#, and playable on both PC and mobile platforms."} />
        <Link href="https://safurutani.github.io/zig-zag-game/" target="_blank" className="mt-4 inline-block view-project-button hover:underline">Play Game</Link>
      </div>
    </div>
  </div>
);

export default UnityGames;
