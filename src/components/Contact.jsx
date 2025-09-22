import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-victory-gold to-victory-red bg-clip-text text-transparent">
          LET'S CONNECT! 🤝
        </h2>
        
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Ready to bring purpose and innovation to your next project? 
          Let's collaborate and create something that makes a real difference!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a 
            href="mailto:cmerriman@banyanlabs.io"
            className="group flex items-center space-x-3 bg-gradient-to-r from-victory-red to-victory-gold text-white px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-victory-red/50"
          >
            <Mail size={24} />
            <span>Email Me</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/50"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
        </div>
        
        <div className="text-center text-white/60 text-lg">
          Built with 💜, ⚡, and <span className="text-victory-gold font-bold">FAITH</span> through Victory 17 
        </div>
      </div>
    </section>
  )
}

export default Contact