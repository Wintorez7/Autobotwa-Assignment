"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Stay Connected With Us Anytime, Anywhere Online
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get the latest updates, insights, and exclusive offers delivered to your inbox.
          </p>

          <motion.div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" whileHover={{ scale: 1.02 }}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-800 border-purple-500/30 text-white placeholder:text-gray-500 rounded-full"
            />
            <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-8 font-semibold whitespace-nowrap">
              Subscribe
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
