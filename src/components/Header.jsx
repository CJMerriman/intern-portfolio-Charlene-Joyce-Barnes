import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
      <nav className="flex justify-between items-center p-6 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="text-2xl font-bold bg-gradient-to-r from-victory-gold via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Victory Through Code
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {[
            { name: 'About', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Projects', id: 'projects' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <button 
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={`text-white transition-all duration-300 hover:scale-110 relative group ${
                activeSection === item.id ? 'text-victory-gold' : 'hover:text-victory-gold'
              }`}
            >
              {item.name}
              <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-victory-gold to-purple-400 transition-all duration-300 ${
                activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-victory-gold transition-colors"
        >
          <div className="w-6 h-6 relative">
            <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'}`}></span>
            <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 translate-y-2.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden backdrop-blur-md bg-black/30 border-b border-white/10 transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="p-6 space-y-4">
          {[
            { name: 'About', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Projects', id: 'projects' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <button 
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={`block text-lg transition-all duration-300 ${
                activeSection === item.id ? 'text-victory-gold' : 'text-white hover:text-victory-gold'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header