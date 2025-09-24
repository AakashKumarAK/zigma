"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Lightbulb,
  Leaf,
  Scale,
  Handshake,
  Clock,
} from "lucide-react";

import advantageBanner from "@/public/images/advantage_zigma.jpg"; // 👈 add your banner image here

const advantages = [
  {
    icon: <ShieldCheck className="text-green-600 w-8 h-8" />,
    title: "Proven Expertise",
    description:
      "Team of seasoned professionals with deep experience in biomining, waste management, and industrial processing ensuring excellence in every step.",
  },
  {
    icon: <Lightbulb className="text-yellow-500 w-8 h-8" />,
    title: "Innovation & Technology",
    description:
      "Utilizing modern technologies, automation, and efficient processes to reduce environmental impact and maximize resource recovery.",
  },
  {
    icon: <Leaf className="text-green-500 w-8 h-8" />,
    title: "Sustainability Focus",
    description:
      "Adherence to environmental norms, SWM Rules, and community-friendly practices that promote long-term ecological health.",
  },
  {
    icon: <Scale className="text-blue-600 w-8 h-8" />,
    title: "Transparent Processes",
    description:
      "Clear, accountable operations and compliance, with measurable outcomes and no hidden costs.",
  },
  {
    icon: <Handshake className="text-indigo-500 w-8 h-8" />,
    title: "Reliable Partnerships",
    description:
      "Strong local alliances, coordination with municipalities, and stakeholder engagement for seamless project delivery.",
  },
  {
    icon: <Clock className="text-red-500 w-8 h-8" />,
    title: "Timely Execution & Support",
    description:
      "On-time project milestones, post-installation support, and continuous maintenance for sustainable outcomes.",
  },
];

const AdvantageZigma = () => {
  return (
    <div className="bg-gray-50">
      {/* ✅ Hero Banner Section */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={advantageBanner}
          alt="Advantage Zigma Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Advantage Zigma
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-200 max-w-3xl"
          >
            Discover the unique advantages that make Zigma your trusted partner
            in sustainable waste management and innovation.
          </motion.p>
        </div>
      </div>

      {/* ✅ Advantages Section */}
      <div className="py-16 px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12"
        >
          Why Choose Zigma
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-start gap-4"
            >
              <div className="flex items-center justify-center bg-gray-100 rounded-full p-4 mb-2">
                {adv.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                {adv.title}
              </h3>
              <p className="text-gray-600 text-base">{adv.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-colors duration-200"
          >
            Partner With Us
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AdvantageZigma;
