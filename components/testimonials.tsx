"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO of TechCorp",
      content:
        "The AI agents transformed our customer support. Response times dropped by 80% and satisfaction scores increased dramatically.",
      avatar: "👩‍💼",
    },
    {
      name: "Marcus Johnson",
      role: "CTO of Innovation Labs",
      content:
        "Integrating V-Code was seamless. Their team was incredibly helpful throughout the implementation process.",
      avatar: "👨‍💻",
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager at StartupXYZ",
      content: "The customization options are fantastic. We were able to tailor the AI to our exact business needs.",
      avatar: "👩‍🔬",
    },
    {
      name: "David Kim",
      role: "Founder of CloudFirst",
      content: "Outstanding ROI. We saw improvements in conversion rates within the first month of deployment.",
      avatar: "👨‍🔧",
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
            Real Stories, Genuine Feedback, Trusted By Many
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-slate-800/40 border-purple-500/20 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
