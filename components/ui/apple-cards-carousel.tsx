"use client"

import Image from "next/image"
import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"

export const Carousel = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative h-[450px] w-full max-w-5xl mx-auto">{children}</div>
}

export const Card = ({
  card,
  index,
}: {
  card: {
    src: string
    title: string
    description: string
    link: string
  }
  index: number
}) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  const controls = useAnimation()

  React.useEffect(() => {
    controls.start({ opacity: 1, scale: 1, transition: { delay: index * 0.2 } })
  }, [controls, index])

  return (
    <motion.div
      className={`absolute top-0 left-0 w-full h-full`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer ${
          expanded ? "h-full" : "h-3/4"
        }`}
        onClick={handleClick}
        layout
      >
        <Image
          src={card.src || "/placeholder.svg"}
          alt={card.title}
          width={300}
          height={400}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{card.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
          {expanded && (
            <motion.a
              href={card.link}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Learn More
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

