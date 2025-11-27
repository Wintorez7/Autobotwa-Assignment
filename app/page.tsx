"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"

import { SocialProof } from "@/components/social-proof"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { UseCases } from "@/components/use-cases"
import { Integrations } from "@/components/integrations"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import Hero from "@/components/hero"
import HowItWorks from "@/components/HowItWorks"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-950 via-purple-950 to-slate-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-10 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero/>
        <HowItWorks/>
        <Stats />
        <Features />
        <UseCases />
        <Integrations />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
