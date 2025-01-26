import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[url('/src/assets/home/background-home-mobile.jpg')] md:bg-[url('/src/assets/home/background-home-tablet.jpg')] 
        lg:bg-[url('/src/assets/home/background-home-desktop.jpg')] bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="container mx-auto max-w-6xl px-6 pt-32 pb-8 md:pt-48 lg:pt-64">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="text-center lg:text-left max-w-md">
            <h5 className="text-base md:text-xl tracking-[2.7px] md:tracking-[3.38px] text-[#D0D6F9]">
              SO, YOU WANT TO TRAVEL TO
            </h5>
            <h1 className="font-bellefair text-[80px] md:text-[150px] my-4 md:my-6">
              SPACE
            </h1>
            <p className="text-[#D0D6F9] text-[15px] md:text-base leading-6 md:leading-7">
              Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
            </p>
          </div>

          <Link to="/destination" className="lg:mr-20">
            <div className="relative group">
              <div className="absolute -inset-[3rem] rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500" />
              <button className="w-[150px] md:w-[242px] lg:w-[274px] h-[150px] md:h-[242px] lg:h-[274px] rounded-full bg-white text-xl md:text-[32px] tracking-[2px] text-[#0B0D17] font-bellefair relative z-10">
                EXPLORE
              </button>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  )
} 