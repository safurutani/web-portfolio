import { NextPage } from 'next';
import Link from 'next/link';
import CollapsibleDescription from '../../components/CollapsibleDescription';

const Websites: NextPage = () => (
  <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-8">Websites</h1>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white p-6 rounded-lg shadow-md shadow-accent2">
        <h2 className="text-2xl font-semibold">Taylor Swift Album Ranker</h2>
        <img src="/images/tswift album ranker.png" alt="Taylor Swift album ranking" className="web-img"></img>
        <CollapsibleDescription description={"This project is a Taylor Swift album ranker built using React. It allows users to rate each song on a scale of 1-10 for each album. Then it will calculate the average rating per album and order the albums based on the ranking."} />
        <Link href="https://safurutani.github.io/tswift-album-ranker/" target="_blank" className="mt-4 inline-block text-secondary view-project-button hover:underline">View Project</Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md shadow-accent2">
        <h2 className="text-2xl font-semibold">Spongebob Quote Generator</h2>
        <img src="/images/quote generator.png" alt="Spongebob Quote" className="web-img"></img>
        <CollapsibleDescription description={"This React website randomly generates memorable quotes from Spongebob Squarepants compiled in a JSON file. The background color of the site changes dynamically based on the character who says it. Users can easily tweet their favorite quotes or find a new one."} />
        <Link href="https://codepen.io/safurutani/full/eYPzjZL" target="_blank" className="mt-4 inline-block text-secondary view-project-button hover:underline">View Project</Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md shadow-accent2">
        <h2 className="text-2xl font-semibold">Pokemon Lookup</h2>
        <img src="/images/pokemon lookup.png" alt="Pokemon Lookup" className="web-img"></img>
        <CollapsibleDescription description={"This app lets users search for Pokémon by name or ID using the freeCodeCamp PokéAPI Proxy. It displays detailed information such as name, ID, weight, height, stats, and types. Users can view Pokémon images and are notified if a Pokémon isn't found. The results dynamically update based on user queries and the color changes based on pokemon type."} />
        <Link href="https://codepen.io/safurutani/full/zYbZZaZ" target="_blank" className="mt-4 inline-block text-secondary view-project-button hover:underline">View Project</Link>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md shadow-accent2">
        <h2 className="text-2xl font-semibold">Genshin Impact Resin Estimator</h2>
        <img src="/images/resin estimator.png" alt="Genshin Impact resin estimator" className="web-img"></img>
        <CollapsibleDescription description={"This project is a Genshin Impact resin estimator built using React. It helps players estimate the amount of resin needed to ascend the character and level up their talents. It takes into account various factors, including crafting bonuses, condensed resin, drop variance, and RNG."} />
        <Link href="https://safurutani.github.io/react-resin-estimator/" target="_blank" className="mt-4 inline-block text-secondary view-project-button hover:underline">View Project</Link>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md shadow-accent2">
        <h2 className="text-2xl font-semibold">Drum Machine</h2>
        <img src="/images/drum machine.png" alt="Drum Machine" className="web-img"></img>
        <CollapsibleDescription description={"This React app gives you a small drum kit with 9 pads. They can be activated by clicking or pressing the corresponding keyboard key. The sound will play and in the display, it shows you the name of the sound/instrument. The keys invert their color when clicked/pressed to indicate the sound being played."} />
        <Link href="https://codepen.io/safurutani/full/NWOwKvR" target="_blank" className="mt-4 inline-block text-secondary view-project-button hover:underline">View Project</Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md shadow-accent2">
        <h2 className="text-2xl font-semibold">Session/Break Timer</h2>
        <img src="/images/session break timer.png" alt="Session/Break Timer" className="web-img"></img>
        <CollapsibleDescription description={"This website helps manage your work and break sessions with customizable timers. The default settings are 25 minutes for work and 5 minutes for breaks, but you can adjust these from 1 to 60 minutes. The timer plays a brief beep when it ends and automatically starts the next session/break. Adjustments to the timer while running are reflected immediately, and the app continues indefinitely until paused or reset."} />
        <Link href="https://codepen.io/safurutani/full/qBQWNYq" target="_blank" className="mt-4 inline-block text-secondary view-project-button hover:underline">View Project</Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md shadow-accent2">
        <h2 className="text-2xl font-semibold">JavaScript Calculator</h2>
        <img src="/images/calculator.png" alt="JavaScript Calculator" className="web-img"></img>
        <CollapsibleDescription description={"This React web app lets you perform basic calculations, displaying real-time updates in a preview pane. Results are shown in both the main display and the preview area after pressing \"=\". Calculations can be continued or reset using the \"C\" button. Designed for everyday use, it handles standard operations and moderate number sizes."} />
        <Link href="https://codepen.io/safurutani/full/MWPMrKp" target="_blank" className="mt-4 inline-block text-secondary view-project-button hover:underline">View Project</Link>
      </div>
      
    </div>
  </div>
);

export default Websites;
