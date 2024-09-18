import { NextPage } from 'next';
import Link from 'next/link';
import CollapsibleDescription from '../../components/CollapsibleDescription';

const MobileApps: NextPage = () => (
  <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-8">Mobile Apps</h1>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Example project */}
      <div className="bg-white p-6 rounded-lg shadow-md shadow-accent2">
        <h2 className="text-2xl font-semibold">WordSmith</h2>
        <img src="/images/wordsmith game.jpg" className="app-screenshot" alt="WordSmith game screenshot"></img>
        <CollapsibleDescription description={"Android app that challenges users to form words from 7 letters where 1 letter is always included. Managed app state using Redux and stored game data using AsyncStorage. Developed with React Native and TypeScript.\n\nThis app is in closed testing. To gain access, email sarafurutani@gmail.com with your gmail account."} />
        <Link href="https://play.google.com/store/apps/details?id=com.bluesara24.wordsmith" target="_blank" className="mt-4 inline-block view-project-button hover:underline" title="Request access at sarafurutani@gmail.com and provide a gmail account">Try the App</Link>
      </div>

      {/* Add more projects here */}
      <div className="bg-white p-6 rounded-lg shadow-md shadow-accent2">
        <h2 className="text-2xl font-semibold">Lyric App</h2>
        <img src="/images/lyric app expanded.jpg" className="app-screenshot" alt="Favorite lyric app screenshot"></img>
        <CollapsibleDescription description={"Android app that displays a scrollable list of cards with song data - title, artist, album cover. Cards are expandable to reveal a specific lyric. Incorporated horizontal viewing and light/dark themes."} />
        <Link href="https://github.com/safurutani/Favorite-Lyrics-App" target="_blank" className="mt-4 inline-block view-project-button hover:underline">View on Github</Link>
      </div>
    </div>
  </div>
);

export default MobileApps;
