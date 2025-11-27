"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function UseCases() {
  const useCases = [
    {
      industry: "E-Commerce",
      title: "Intelligent Product Recommendations",
      desc: "AI-driven personalization increases conversion rates by 35%",
      icon: "🛍️",
    },
    {
      industry: "SaaS",
      title: "Customer Success Automation",
      desc: "Proactive support and onboarding with AI agents",
      icon: "🚀",
    },
    {
      industry: "Healthcare",
      title: "Patient Data Analysis",
      desc: "Secure, HIPAA-compliant AI insights",
      icon: "⚕️",
    },
    {
      industry: "Finance",
      title: "Fraud Detection",
      desc: "Real-time threat detection and prevention",
      icon: "🔒",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/30 to-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Transforming Industries Through Intelligent AI-Powered Use Cases
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-slate-800/40 border-purple-500/20 p-8 h-full hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{useCase.icon}</div>
                  <div>
                    <p className="text-purple-400 text-sm font-semibold mb-1">{useCase.industry}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-400">{useCase.desc}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
