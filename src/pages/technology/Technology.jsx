import React, { useState } from "react"
import { motion } from "framer-motion"
import { ButtonContainer } from "../../components/index.jsx"

export function Technology({ data }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const technology = data[activeIndex]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[url('/images/technology/background-technology-mobile.jpg')] md:bg-[url('/images/technology/background-technology-tablet.jpg')] 
        lg:bg-[url('/images/technology/background-technology-desktop.jpg')] bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="container mx-auto max-w-6xl pt-24 md:pt-36 lg:pt-48 pb-8">
        <div className="px-6 lg:px-0">
          <h5 className="text-center md:text-left text-base md:text-xl lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]">
            <span className="font-bold opacity-25 mr-4">03</span>
            SPACE LAUNCH 101
          </h5>
        </div>

        <div className="mt-8 md:mt-14 lg:mt-20 flex flex-col lg:flex-row items-center lg:items-start lg:gap-16">
          <div className="order-2 lg:order-1 w-full lg:w-1/2 px-6 lg:px-0">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              <div className="mt-8 lg:mt-0">
                <ButtonContainer
                  items={data}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  vertical={true}
                />
              </div>

              <motion.div
                key={technology.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center lg:text-left max-w-xl lg:max-w-md"
              >
                <span className="text-secondary text-sm md:text-base tracking-[2.36px] md:tracking-[2.7px]">
                  THE TERMINOLOGY...
                </span>
                <h3 className="font-bellefair text-2xl md:text-[40px] lg:text-[56px] uppercase mt-2">
                  {technology.name}
                </h3>
                <p className="text-secondary text-[15px] md:text-base lg:text-lg leading-6 md:leading-7 mt-4">
                  {technology.description}
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            key={technology.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full lg:w-1/2 order-1 lg:order-2 mt-8 lg:mt-0"
          >
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={technology.images.portrait}
              />
              <img
                src={technology.images.landscape}
                alt={technology.name}
                className="w-full h-auto lg:h-[527px] object-cover"
              />
            </picture>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 