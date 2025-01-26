import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: "/", text: "HOME", number: "00" },
    { to: "/destination", text: "DESTINATION", number: "01" },
    { to: "/crew", text: "CREW", number: "02" },
    { to: "/technology", text: "TECHNOLOGY", number: "03" },
  ]

  return (
    <header className="fixed w-full flex justify-between items-center px-6 md:px-0 py-8 z-50">
      <div className="md:ml-10">
        <img src="/src/assets/shared/logo.svg" alt="Space Tourism Logo" />
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-50 md:hidden"
        aria-label="Toggle Menu"
      >
        <img
          src={`/src/assets/shared/${isOpen ? "icon-close.svg" : "icon-hamburger.svg"}`}
          alt="menu"
        />
      </button>

      <nav className={`fixed md:relative top-0 right-0 h-screen md:h-auto bg-white/5 backdrop-blur-2xl 
        ${isOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0 transition-transform duration-300
        w-2/3 md:w-auto pt-32 md:pt-0 pl-8 md:pl-0`}>
        <ul className="flex flex-col md:flex-row gap-8 md:gap-12 text-white">
          {links.map(({ to, text, number }) => (
            <li key={to}>
              <Link
                to={to}
                className={`flex items-center gap-2 relative group ${
                  location.pathname === to ? "text-white" : "text-gray-400"
                }`}
              >
                <span className="font-bold">{number}</span>
                <span className="tracking-widest">{text}</span>
                {location.pathname === to && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-white"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
} 