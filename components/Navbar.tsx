import { FloatingDock } from "@/components/ui/floating-dock"
import { IconBrandGithub, IconBrandLinkedin, IconHome, IconUser, IconCode, IconDeviceLaptop, IconMail } from "@tabler/icons-react"
import Image from "next/image"

export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#home",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#projects",
    },
    {
      title: "Skills",
      icon: <IconDeviceLaptop className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#skills",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/harithebeast",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://linkedin.com/in/hari-varsan",
    },
  ]
  return (
    <div className="flex items-center justify-center h-[5rem] w-full">
      <FloatingDock
        items={links}
      />
    </div>
  )
}




