"use client"

import { motion } from "framer-motion"

export function Stats() {
  const stats = [
    { number: "150+", label: "Enterprise Clients", desc: "Building smarter connections" },
    { number: "95%", label: "Uptime SLA", desc: "Innovative AI agents", color: "text-green-400" },
    { number: "24/7", label: "Support", desc: "Always here for you" },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <motion.h3
                className={`text-4xl sm:text-5xl font-bold mb-2 ${stat.color || "text-white"}`}
                whileInView={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-white font-semibold mb-2">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
