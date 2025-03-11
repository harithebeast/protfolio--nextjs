"use client"
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import About from "@/components/About"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
     
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About/>
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}

