"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Boxes } from "@/components/ui/background-boxes-demo";
import Navbar from "./Navbar";
import MovingBorderDemo from "./moving-border-demo";

interface Word {
  text: string;
  className?: string;
}

interface TypewriterEffectProps {
  words: Word[];
}

const TypewriterEffect = ({ words }: TypewriterEffectProps) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    let currentText = '';
    words.forEach((word: Word, index: number) => {
      currentText += word.text + ' ';
    });
    currentText = currentText.trim();

    let charIndex = 0;
    const timer = setInterval(() => {
      if (charIndex <= currentText.length) {
        setText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [words, isComplete]);

  return (
    <span>
      {text.split(' ').map((word, index) => (
        <span key={index} className={word === 'Hari' || word === 'Varsan' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text' : 'text-white'}>
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
};

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "MERN Stack Developer",
    "Competitive Programmer",
    "AI Developer",
    "Machine Learning Engineer"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        // Wait before typing next word
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r 
      ${loopNum % 4 === 0 ? 'from-purple-500 to-pink-500' : 
      loopNum % 4 === 1 ? 'from-green-500 to-blue-500' : 
      loopNum % 4 === 2 ? 'from-yellow-500 to-red-500' :
      'from-blue-500 to-teal-500'}`}>
      {text || " "}
    </span>
  );
};

export default function Hero() {
  const word1 = "Hi there";
  const word2 = [
    {
      text: "I'm",
    },
    {
      text: "Hari",
    },
    {
      text: "Varsan",
    }
  ];

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <div className="h-screen relative w-full overflow-hidden bg-slate-90 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-80 z-20 [mask-image:radial-gradient(transparent,black)] pointer-events-none" />
        <Boxes />
        <div className="flex justify-center items-center w-full">
          <div className="text-center space-y-8">
            <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-left text-black dark:text-white font-sans tracking-tight mt-8">
              {word1}
            </h2>
            <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-left text-black dark:text-white font-sans tracking-tight mt-8">
              <TypewriterEffect words={word2} />
            </h2>
            <h3 className="text-xl relative z-20 md:text-3xl lg:text-5xl font-bold text-left font-sans tracking-tight">
              <TypingEffect />
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
