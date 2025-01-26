import React from "react"
import { motion } from "framer-motion"

export function ButtonContainer({ items, activeIndex, setActiveIndex, vertical = false }) {
  return (
    <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} gap-4 md:gap-8`}>
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 
            ${activeIndex === index 
              ? "bg-white text-black border-white" 
              : "text-white border-white/20 hover:border-white"
            } transition-colors duration-300`}
        >
          {activeIndex === index && (
            <motion.div
              layoutId="button-active"
              className="absolute inset-0 bg-white rounded-full -z-10"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <span className="font-bold">{index + 1}</span>
        </button>
      ))}
    </div>
  )
} 