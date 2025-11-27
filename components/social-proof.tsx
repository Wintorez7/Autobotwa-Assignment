"use client"

import { motion } from "framer-motion"

export function SocialProof() {
  const companies = [
    { name: "Raypack", icon: "📦" },
    { name: "Retacule", icon: "🔄" },
    { name: "Maintech", icon: "⚙️" },
    { name: "Amco Corp", icon: "🏢" },
    { name: "Blockfence", icon: "🔐" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-center text-gray-500 text-sm mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Trusted by industry leaders worldwide
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl">{company.icon}</span>
                <span className="text-gray-400 text-sm font-medium">{company.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
