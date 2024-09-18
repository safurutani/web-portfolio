const About = () => (
    <div className="container mx-auto p-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <p>
      Hello! I am a former pre-veterinary student with a Bachelor&apos;s degree in Animal Science from Cal Poly San Luis Obispo, who has transitioned into the field of computer science. I found a passion for the logical thinking and problem solving aspects of coding. What excites me about programming is the ability to conceptualize an idea, apply my creativity, and see it come to life.
      </p>
      <br></br>
      <p>
        My journey began with freeCodeCamp, where I earned certifications in:
        <ul className="ml-8 courses">
          <li>Responsive Web Design</li>
          <li>JavaScript Algorithms and Data Structures</li>
          <li>Front End Development Libraries</li>
          <li>Data Analysis with Python</li>
          <li>Scientific Computing with Python</li>
        </ul>
        </p>
        <div className="flex justify-items-center items-center w-80 gap-0 -mt-14 -mb-16">
          <img src="./images/fcc_secondary_large.png" className="scale-[0.5] -mr-12" alt="freeCodeCamp logo"></img>
          <img src="./images/Udemy.png" alt="Udemy logo" className="scale-[0.15] -ml-12"></img>
        </div>
        <br></br>
        <p>
          I have since broadened my expertise through additional courses offered by Udemy, community college, and LinkedIn Learning. They allowed me to explore WPF, SQL, game development, Java, and more. I&apos;ve also gained hands-on experience with Android development in Google&apos;s Compose course.
        </p>
        <br></br>
        <p>
          I look forward to sharing my projects and continuing to expand my skills in software development.
      </p>
    </div>
  );
  
  export default About;
  