"use client";

import { Card } from "@/components/ui/card";
import { FileText, Users, Activity, Clock, Layers, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Speed up iterations with Atla's evaluators.",
    description:
      "Test your prompts, strategies, or model versions with LLM judges. Automate score outputs, identify pain, and receive actionable critiques to refine and enhance your AI product.",
  },
  {
    title: "Continuous monitoring and guardrails for production safety.",
    description:
      "Deploy guardrails to detect drift, prevent failures, and enhance your AI application's performance continuously with robust, AI-centered data.",
  },
  {
    title: "Test and evaluate changes before production deployment.",
    description:
      "Integrate AI evaluators into your CI/CD pipelines. Evaluate regressions, ensure consistency and confidently ship updates.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#0e0829 ] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ensure precise accuracy
            <br />
            for your LLM app
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Our AI evaluators help define and measure what matters—relevance, correctness, tone,
            or any custom criteria for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-3"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-violet-600/10 to-indigo-600/5 blur-2xl" />

              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[85%] h-[85%] rounded-full border border-white/5"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[70%] h-[70%] rounded-full border border-white/5"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[55%] h-[55%] rounded-full border border-white/5"
                />

                <div className="absolute w-32 h-32 rounded-full bg-linear-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-2xl shadow-violet-600/50">
                  <Activity className="w-16 h-16 text-white" />
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-linear-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center shadow-xl">
                    <FileText className="w-6 h-6 text-violet-400" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full"
                >
                  <div className="absolute top-1/4 right-0 translate-x-1/2 w-14 h-14 rounded-full bg-linear-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center shadow-xl">
                    <Users className="w-6 h-6 text-violet-400" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full"
                >
                  <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-14 h-14 rounded-full bg-linear-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center shadow-xl">
                    <Clock className="w-6 h-6 text-violet-400" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full bg-linear-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center shadow-xl">
                    <Layers className="w-6 h-6 text-violet-400" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full"
                >
                  <div className="absolute top-1/4 left-0 -translate-x-1/2 w-14 h-14 rounded-full bg-linear-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center shadow-xl">
                    <TrendingUp className="w-6 h-6 text-violet-400" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24"
        >
          <Card className="bg-linear-to-br from-white/5 to-white/2 border-white/10 backdrop-blur-sm p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Get started in seconds
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Import our package, add your Atla API key, modify a few lines, and start leveraging our top AI
                  evaluation models. Or deploy our OBS models in your environment.
                </p>
                <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium transition-colors">
                  Read more
                </button>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-sm aspect-square">
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-violet-600/20 to-indigo-600/10 blur-3xl" />

                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-white/5" />

                    <div className="absolute w-[85%] h-[85%] rounded-full bg-linear-to-br from-slate-800/40 to-slate-900/40 border border-white/5" />
                    <div className="absolute w-[70%] h-[70%] rounded-full bg-linear-to-br from-slate-800/30 to-slate-900/30 border border-white/5" />
                    <div className="absolute w-[55%] h-[55%] rounded-full bg-linear-to-br from-slate-800/20 to-slate-900/20 border border-white/5" />

                    <div className="absolute w-32 h-32 rounded-full bg-linear-to-br from-violet-600/80 to-indigo-600/80 shadow-2xl shadow-violet-600/50" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { number: "01", title: "Powerful AI Evaluation" },
            { number: "02", title: "Flexible Deployment" },
            { number: "03", title: "Secure & Scalable" },
            { number: "04", title: "Quick Integration" },
          ].map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-violet-400 text-sm font-mono mb-2">{item.number}</div>
                <div className="text-white font-medium">{item.title}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
