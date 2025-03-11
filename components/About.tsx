"use client"
import { LayoutGrid } from "@/components/ui/layout-grid"

export default function About() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-2xl text-white mb-4">About Me</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 leading-relaxed">
        Results-driven software engineering intern passionate about leveraging cutting-edge
        technologies to solve complex problems. Proficient in AI/ML and Web Development,
        adept at interdisciplinary collaboration. Committed to continuous learning and eager
        to contribute to innovative projects.
      </p>
    </div>
  )
}

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-2xl text-white mb-4">Education</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 leading-relaxed">
        <strong>VELLORE INSTITUTE OF TECHNOLOGY</strong><br/>
        BTech in Information Technology
        2022 - Present | Vellore, TN<br/>
        CGPA: 9.07 / 10<br/>
        <strong>AKSHAYA ACADEMY</strong><br/>
        Class XII
        2022 | Dindigul, TN
        Percentage: 91.4%
      </p>
    </div>
  )
}

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-2xl text-white mb-4">Experience</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 leading-relaxed">
        <strong>MICROGENN SOFTWARE SOLUTIONS</strong><br/>
        Web Development Intern | May 2024– June 2024<br/>
        
        <strong>PINESHERE</strong><br/>
        Full Stack Development Intern | June 2024 – July 2024<br/>
        
      </p>
    </div>
  )
}

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-2xl text-white mb-4">Contact</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 leading-relaxed">
        <strong>Email:</strong> harivarsan2004@gmail.com<br/>
        <strong>Phone:</strong> +91 7339390089<br/>
        <strong>LinkedIn:</strong> linkedin.com/in/hari-varsan<br/>
        <strong>Github:</strong> github.com/harithebeast<br/>
        <strong>Portfolio:</strong> roaring-selkie-56771b
      </p>
    </div>
  )
}

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/ABOUT ME.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/edu.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
     "/contact.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/WORK.jpg",
  },
]

