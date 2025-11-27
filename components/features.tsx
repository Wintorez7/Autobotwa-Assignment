"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      title: "Natural Language Processing",
      desc: "Advanced NLP technology to understand context and nuance",
      icon: "🗣️",
    },
    {
      title: "Real-time Analytics",
      desc: "Monitor performance metrics and user behavior instantly",
      icon: "📊",
    },
    {
      title: "Multi-channel Integration",
      desc: "Seamlessly connect across all your platforms",
      icon: "🔗",
    },
    {
      title: "Custom Training",
      desc: "Tailor AI models to your specific business needs",
      icon: "🎯",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Empowering Every Website With Smarter Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Advanced AI capabilities designed to elevate your digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
