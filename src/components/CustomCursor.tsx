import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    // Add 1.5 second delay by using setTimeout
    const timer = setTimeout(() => {
      cursorX.set(mousePosition.x)
      cursorY.set(mousePosition.y)
    }, 1500)

    return () => clearTimeout(timer)
  }, [mousePosition, cursorX, cursorY])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <div className="w-8 h-8 bg-white rounded-full blur-sm opacity-80" />
    </motion.div>
  )
}