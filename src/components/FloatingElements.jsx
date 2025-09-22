import React, { useState, useEffect } from 'react'
import { Code, Palette, Zap, Star, Heart, Sparkles } from 'lucide-react'

const FloatingElements = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const FloatingIcon = ({ Icon, delay = 0 }) => (
    <div 
      className={`absolute animate-bounce text-white/20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        animationDelay: `${delay}s`,
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 90}%`,
        animationDuration: `${2 + Math.random() * 2}s`
      }}
    >
      <Icon size={24 + Math.random() * 16} />
    </div>
  )

  return (
    <>
      {/* Floating Background Icons */}
      <FloatingIcon Icon={Code} delay={0} />
      <FloatingIcon Icon={Palette} delay={0.5} />
      <FloatingIcon Icon={Zap} delay={1} />
      <FloatingIcon Icon={Star} delay={1.5} />
      <FloatingIcon Icon={Heart} delay={2} />
      <FloatingIcon Icon={Sparkles} delay={2.5} />
      <FloatingIcon Icon={Code} delay={3} />
      <FloatingIcon Icon={Star} delay={3.5} />

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-victory-gold to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-victory-red to-victory-gold rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>
    </>
  )
}

export default FloatingElements