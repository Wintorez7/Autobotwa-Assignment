"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function Integrations() {
  const integrations = [
    {
      title: "CRM Integration",
      features: ["Salesforce sync", "Contact management", "Pipeline automation"],
    },
    {
      title: "Customer Support",
      features: ["Omnichannel support", "Ticket automation", "Agent training"],
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
            Seamlessly Connect Your Systems With Smarter Integrations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/40 border-purple-500/20 p-8">
                <h3 className="text-xl font-bold text-white mb-6">{integration.title}</h3>
                <ul className="space-y-3">
                  {integration.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
