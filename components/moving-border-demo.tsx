"use client"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import Image from "next/image"
import Navbar from "./Navbar"

export default function movingBorderDemo() {
  return (
    <div>
      <BackgroundGradient className="flex items-center justify-center h-[4rem] w-full">
       <Navbar/>
      </BackgroundGradient>
    </div>
  )
}

{/* <div className="flex items-center justify-center h-[5rem] w-full"> */}