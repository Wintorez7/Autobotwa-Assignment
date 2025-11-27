"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      desc: "Perfect for small teams",
      features: ["Up to 1,000 API calls", "Basic AI features", "Email support", "Community access"],
      highlight: false,
    },
    {
      name: "Professional",
      price: "$0",
      desc: "Popular choice for growing businesses",
      features: [
        "Unlimited API calls",
        "Advanced AI features",
        "Priority support",
        "Custom integrations",
        "Analytics dashboard",
      ],
      highlight: true,
      label: "Free Trial",
    },
    {
      name: "Enterprise",
      price: "$49",
      desc: "For large-scale operations",
      features: [
        "Unlimited everything",
        "Custom AI models",
        "24/7 dedicated support",
        "SLA guarantee",
        "On-premise options",
      ],
      highlight: false,
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-purple-950/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Flexible Pricing Plans Designed To Fit Everyone
          </h2>
          <p className="text-gray-400">Choose the perfect plan for your needs</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card
                className={`p-8 h-full flex flex-col ${
                  plan.highlight
                    ? "bg-gradient-to-b from-purple-900/50 to-purple-900/20 border-purple-400/50 relative"
                    : "bg-slate-800/40 border-purple-500/20"
                }`}
              >
                {plan.label && (
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {plan.label}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full font-semibold ${
                    plan.highlight
                      ? "bg-purple-500 hover:bg-purple-600 text-white"
                      : "bg-white text-slate-900 hover:bg-gray-100"
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
