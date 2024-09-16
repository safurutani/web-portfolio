const skills = [
    { name: 'HTML', icon: '/icons/html.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'C++', icon: '/icons/cpp.svg' },
    // Add more skills here
  ];
  
  const Skills = () => (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-3 gap-4">
        {skills.map(skill => (
          <div key={skill.name} className="flex flex-col items-center">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Skills;
  