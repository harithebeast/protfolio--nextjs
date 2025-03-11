"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

export const ThreeDCardDemo = ({ icon, title }: { icon: string; title: string }) => {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const { left, top, width, height } = card.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY
    const rotateX = (mouseY / height) * 30
    const rotateY = (mouseX / width) * -30

    setRotateX(rotateX)
    setRotateY(rotateY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">
        <div className="text-6xl">{icon}</div>
        <h3 className="mt-4 text-2xl font-bold text-gray-800">{title}</h3>
      </div>
    </motion.div>
  )
}

