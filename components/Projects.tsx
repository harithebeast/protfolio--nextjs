"use client"
import { motion } from "framer-motion"


import Carousel from "@/components/ui/carousel"
export default function Projects() {
  const projects = [
    {
      title: "DOCTORAL",
      description: "Developed a fine-tuned Large Language Model (LLM) for AI-driven medical diagnosis and consultation.",
      src: "/doctoral.jpg",
      link: "/doctoral",
      button: "View Project",
      githubLink: "https://github.com/harithebeast/digi_medic"
    },
    {
      title: "CINERATE",
      description: "Built a MERN-based platform for rating and reviewing movies. Features include user-generated comments, trailer streaming.",
      src: "/cine.jpg",
      link: "/cinerate",
      button: "View Project",
      githubLink: "https://github.com/harithebeast/cineRate"
    },
    {
      title: "DIGISHOP",
      description: "Developed an e-commerce platform using the MERN stack, deployed on AWS (S3, EC2) for scalability and reliability.",
      src: "/digi.jpg",
      link: "/digishop",
      button: "View Project",
      githubLink: "https://github.com/harithebeast/Digishop"
    },
    {
      title: "TRANSACTION ANOMALY DETECTION",
      description: "Created a system using Apache Airflow pipelines designed for real-time fraud detection and risk assessment.",
      src: "/trans.jpg",
      link: "/transaction-anomaly-detection",
      button: "View Project",
      githubLink: "https://github.com/harithebeast/devsoc25"
    },
  ]

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={projects} carouselTitle="My Projects" />
    </div>
  )
}
