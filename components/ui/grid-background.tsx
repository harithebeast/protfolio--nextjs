"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export const GridBackgroundDemo = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({ x: ev.clientX - rect.left, y: ev.clientY - rect.top })
      }
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  const size = 300
  return (
    <div
      ref={containerRef}
      className="h-full w-full bg-black/[0.96] relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-4xl sm:text-7xl font-bold relative z-20">Welcome to My Portfolio</h1>
      </div>
      <motion.div
        className="absolute inset-0 opacity-0"
        animate={{
          background: [
            `radial-gradient(${size}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.15), transparent 80%)`,
          ],
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.6 }}
      />
      <div className="h-full w-full absolute inset-0 z-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 right-0 top-0 bg-gray-300 h-[1px] opacity-50"
            style={{ top: `${(i + 1) * 3}%` }}
            animate={{
              opacity: [0.5, 1, 0.5],
              transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 },
            }}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 left-0 bg-gray-300 w-[1px] opacity-50"
            style={{ left: `${(i + 1) * 3}%` }}
            animate={{
              opacity: [0.5, 1, 0.5],
              transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 },
            }}
          />
        ))}
      </div>
    </div>
  )
}

