import { NextPage } from 'next';
import Link from 'next/link';

const Websites: NextPage = () => (
  <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-8">Websites</h1>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Example project */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Project Name 1</h2>
        <p className="mt-2">Brief description of the project goes here.</p>
        <Link href="https://example.com" target="_blank" className="mt-4 inline-block text-blue-500 hover:underline">View Project</Link>
      </div>

      {/* Add more projects here */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Project Name 2</h2>
        <p className="mt-2">Brief description of the project goes here.</p>
        <Link href="https://example.com" target="_blank" className="mt-4 inline-block text-blue-500 hover:underline">View Project</Link>
      </div>
    </div>
  </div>
);

export default Websites;
