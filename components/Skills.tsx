import { HoverEffect } from "@/components/ui/card-hover-effect"
import { IconCode, IconBrandPython, IconBrandJavascript, IconDatabase, IconBrandHtml5 } from "@tabler/icons-react"

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  )
}

export const projects = [
{
  title: "Programming Languages",
  description: "Python, C, C++, Java, JavaScript, SQL/PLSQL, HTML/CSS",
  link: "#",
},
{
  title: "Frontend Technologies",
  description: "React, Next.js, HTML, CSS, JavaScript",
  link: "#",
},
{
  title: "Backend Technologies",
  description: "Node.js, Express.js, Django, REST APIs",
  link: "#",
},
{
  title: "AI Technologies",
  description: "TensorFlow, PyTorch, OpenCV, Scikit-Learn, Hugging Face, NLP",
  link: "#",
},
{
  title: "Database Technologies",
  description: "MongoDB, PostgreSQL, Oracle SQL",
  link: "#",
},
{
  title: "Coursework",
  description: "DBMS, Software Engineering, Data Structures, Computer Networks, Operating System",
  link: "#",
},
]

