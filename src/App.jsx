import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import FloatingElements from './components/FloatingElements'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <FloatingElements />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <footer className="py-8 text-center text-white/40 border-t border-white/10 backdrop-blur-sm">
          <p>© 2024 Victory Through Code. Built with React, TailwindCSS & Faith! ⚡</p>
        </footer>
      </div>
    </div>
  )
}

export default App