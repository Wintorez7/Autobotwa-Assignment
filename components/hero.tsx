"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a1f]">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large planet sphere */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1400px] h-[1400px] rounded-full bg-linear-to-t from-purple-900/30 via-indigo-800/20 to-transparent border border-purple-500/10" 
             style={{
               boxShadow: 'inset 0 -100px 200px rgba(139, 92, 246, 0.3), 0 0 300px rgba(139, 92, 246, 0.2)'
             }} />
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Award badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Award className="w-4 h-4 text-emerald-400" />
              <div className="text-left">
                <div className="text-[10px] text-emerald-400/70 uppercase tracking-wide">Technology and Innovation</div>
                <div className="text-xs text-emerald-300 font-medium">Best AI-Powered Innovation 2024</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Award className="w-4 h-4 text-emerald-400" />
              <div className="text-left">
                <div className="text-[10px] text-emerald-400/70 uppercase tracking-wide">Customer Experience Award</div>
                <div className="text-xs text-emerald-300 font-medium">Customer Experience 2025</div>
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering Websites with
              <br />
              <span className="text-gray-400">
                Intelligent AI Agents
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Accurately and flexibly evaluate your AI products to ensure
            reliability, performance, and trust—empowering you to refine,
            optimize, and deploy AI with confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#0a0a1f] px-8 py-6 text-lg rounded-full font-medium"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-lg rounded-full"
            >
              View More
            </Button>
          </motion.div>

          {/* Brand logos section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20"
          >
            <div className="text-gray-400 text-sm mb-8">
              Chosen by over 9000 leading global brands and organizations
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white/20" />
                </div>
                <div className="text-xl font-light">Bank of Baroda</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white/20" />
                </div>
                <div className="text-xl font-light">DBS</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white/20" />
                </div>
                <div className="text-xl font-light">Kotak Securities</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white/20" />
                </div>
                <div className="text-xl font-light">Audi</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white/20" />
                </div>
                <div className="text-xl font-light">Spherule</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}