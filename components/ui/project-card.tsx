"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3
          className="text-white text-2xl font-bold mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray-300 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.a
          href={link}
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          Learn More →
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard

