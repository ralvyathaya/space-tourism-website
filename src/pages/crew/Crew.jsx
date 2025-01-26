import React, { useState } from "react"
import { motion } from "framer-motion"
import { ButtonContainer } from "../../components/index.jsx"

export function Crew({ data }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const member = data[activeIndex]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[url('/images/crew/background-crew-mobile.jpg')] md:bg-[url('/images/crew/background-crew-tablet.jpg')] 
        lg:bg-[url('/images/crew/background-crew-desktop.jpg')] bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="container mx-auto max-w-6xl px-6 lg:px-0 pt-24 md:pt-36 lg:pt-48 pb-8">
        <h5 className="text-center md:text-left text-base md:text-xl lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]">
          <span className="font-bold opacity-25 mr-4">02</span>
          MEET YOUR CREW
        </h5>

        <div className="mt-8 md:mt-14 lg:mt-20 flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 md:mt-0 order-2 md:order-1 text-center lg:text-left"
            >
              <h4 className="font-bellefair text-base md:text-2xl lg:text-[32px] uppercase opacity-50">
                {member.role}
              </h4>
              <h3 className="font-bellefair text-2xl md:text-[40px] lg:text-[56px] uppercase mt-2">
                {member.name}
              </h3>
              <p className="text-secondary text-[15px] md:text-base lg:text-lg leading-6 md:leading-7 mt-4 max-w-md mx-auto lg:mx-0">
                {member.bio}
              </p>
            </motion.div>

            <div className="mt-8 md:mt-12 order-1 md:order-2 w-full flex justify-center lg:justify-start">
              <ButtonContainer
                items={data}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
          </div>

          <motion.div
            key={member.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full lg:w-1/2 mt-8 md:mt-12 lg:mt-0 border-b border-white/10 md:border-none flex justify-center"
          >
            <img
              src={member.images.webp}
              alt={member.name}
              className="h-[222px] md:h-[532px] lg:h-[654px] w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 