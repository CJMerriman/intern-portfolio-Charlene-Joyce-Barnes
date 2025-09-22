import React from 'react'

const Skills = () => {
  const skills = [
    { name: "React", level: 95, color: "from-cyan-400 to-blue-500" },
    { name: "JavaScript", level: 92, color: "from-victory-gold to-orange-500" },
    { name: "TailwindCSS", level: 88, color: "from-green-400 to-emerald-500" },
    { name: "TypeScript", level: 85, color: "from-purple-400 to-pink-500" },
    { name: "Node.js", level: 80, color: "from-victory-red to-pink-500" },
    { name: "Next.js", level: 87, color: "from-indigo-400 to-purple-500" }
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-victory-gold to-purple-400 bg-clip-text text-transparent">
          SKILLS FOR IMPACT 🛠️
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className={`transition-all duration-1000 delay-${index * 100}`}>
              <div className="flex justify-between mb-2">
                <span className="text-white font-bold text-lg">{skill.name}</span>
                <span className="text-victory-gold font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800/50 rounded-full h-4 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-2000 delay-${index * 200} relative`}
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills