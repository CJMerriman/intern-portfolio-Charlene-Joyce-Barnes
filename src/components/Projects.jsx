import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS } from '../utils/constants'

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-victory-gold to-purple-400 bg-clip-text text-transparent">
          PROJECTS FOR PURPOSE 🌟
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.title}
              className="group relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-victory-gold/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Project Category Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 bg-gradient-to-r from-victory-gold/80 to-purple-600/80 text-black text-xs font-bold rounded-full backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              
              <div className="relative z-10 p-6">
                <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-victory-gold transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/50 to-victory-gold/50 text-white text-sm rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.demo}
                    className="flex items-center space-x-2 bg-gradient-to-r from-victory-gold to-purple-600 text-black px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 border border-victory-gold text-victory-gold px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-victory-gold hover:text-black"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects