"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/20 border-b border-purple-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-white font-bold text-lg">V-Code</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["Features", "Pricing", "Solutions", "Resources"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="bg-white text-slate-900 hover:bg-gray-100 rounded-full px-6">Sign Up</Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
