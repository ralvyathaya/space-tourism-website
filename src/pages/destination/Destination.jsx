import React, { useState } from "react"
import { motion } from "framer-motion"

export function Destination({ data }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const destination = data[activeIndex]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[url('/images/destination/background-destination-mobile.jpg')] md:bg-[url('/images/destination/background-destination-tablet.jpg')] 
        lg:bg-[url('/images/destination/background-destination-desktop.jpg')] bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="container mx-auto max-w-6xl px-6 lg:px-0 pt-24 md:pt-36 lg:pt-48 pb-8">
        <h5 className="text-center md:text-left text-base md:text-xl lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]">
          <span className="font-bold opacity-25 mr-4">01</span>
          PICK YOUR DESTINATION
        </h5>

        <div className="mt-8 md:mt-14 lg:mt-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-24">
          <div className="lg:w-1/2 flex justify-center">
            <motion.img
              key={destination.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              src={destination.images.webp}
              alt={destination.name}
              className="w-[170px] md:w-[300px] lg:w-[445px] aspect-square"
            />
          </div>

          <div className="lg:w-1/2 max-w-xl text-center lg:text-left">
            <nav className="mt-8 lg:mt-0">
              <ul className="flex justify-center lg:justify-start gap-6 md:gap-8">
                {data.map((item, index) => (
                  <li key={item.name}>
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={`pb-2 text-sm md:text-base tracking-[2.36px] md:tracking-[2.7px] relative
                        ${activeIndex === index ? "text-white" : "text-secondary hover:text-white/75"}`}
                    >
                      {item.name.toUpperCase()}
                      {activeIndex === index && (
                        <motion.div
                          layoutId="destination-underline"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 md:mt-12"
            >
              <h2 className="font-bellefair text-[56px] md:text-[80px] lg:text-[100px] uppercase">
                {destination.name}
              </h2>
              <p className="text-secondary text-[15px] md:text-base lg:text-lg leading-6 md:leading-7 mt-4">
                {destination.description}
              </p>

              <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-center lg:justify-start gap-8 md:gap-16">
                <div>
                  <h6 className="text-secondary text-sm tracking-[2.36px]">AVG. DISTANCE</h6>
                  <p className="font-bellefair text-[28px] uppercase mt-3">{destination.distance}</p>
                </div>
                <div>
                  <h6 className="text-secondary text-sm tracking-[2.36px]">EST. TRAVEL TIME</h6>
                  <p className="font-bellefair text-[28px] uppercase mt-3">{destination.travel}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 