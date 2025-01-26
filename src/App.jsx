import React from "react"
import { Routes, Route } from "react-router-dom"
import { Header } from "./components/index.jsx"
import { HomePage, Destination, Crew, Technology } from "./pages/index.jsx"
import json from "./assets/data.json"
import { AnimatePresence } from "framer-motion"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <AnimatePresence>
        <main className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/destination"
              element={<Destination data={json.destinations} />}
            />
            <Route path="/crew" element={<Crew data={json.crew} />} />
            <Route
              path="/technology"
              element={<Technology data={json.technology} />}
            />
          </Routes>
        </main>
      </AnimatePresence>
    </div>
  )
}

export default App 