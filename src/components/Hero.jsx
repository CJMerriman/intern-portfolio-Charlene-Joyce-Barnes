import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className={`text-center transition-all duration-1500 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="relative mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-victory-gold via-purple-500 to-indigo-500 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <img 
                src="../assets/profile-pic/profile_Img - Copy.png" 
                alt="Victory Through Code - Front End Developer with purpose and faith" 
                className="w-36 h-36 rounded-full object-cover border-4 border-white/20"
              />
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-victory-gold rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-4">
          <span className="bg-gradient-to-r from-victory-gold via-blue-400 to-green-400 bg-clip-text text-transparent animate-pulse">
            VICTORY
          </span>
          <br />
          <span className="bg-gradient-to-r from-victory-red via-pink-400 to-purple-400 bg-clip-text text-transparent">
            DEVELOPER
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Front-End Developer who codes with <span className="text-victory-gold font-bold">purpose</span>, 
          designs with <span className="text-purple-400 font-bold">creativity</span>, 
          and builds with <span className="text-victory-gold font-bold">faith</span>! 
          Transforming lives through technology - one project at a time!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-victory-gold to-purple-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-victory-gold/50 relative"
          >
            Let's Build Something Amazing
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-victory-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-victory-gold text-victory-gold px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-victory-gold hover:text-black hover:scale-110 hover:shadow-2xl hover:shadow-victory-gold/50"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero