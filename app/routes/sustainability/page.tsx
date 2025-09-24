"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartPulse, Leaf, Home } from "lucide-react";

import sustainabilityBanner from "@/public/images/impact_property_value.jpg";
import impactOnHealth from "@/public/images/environment.jpg";

const topics = [
  {
    icon: <HeartPulse className="w-10 h-10 text-red-500" />,
    title: "Impact on Health",
    description:
      "Poor waste management directly affects human health, leading to respiratory illnesses, infections, and long-term chronic diseases. Zigma’s sustainable solutions reduce exposure to toxins and create healthier living conditions for communities.",
    image: impactOnHealth, // 👈 add image here
  },
  {
    icon: <Leaf className="w-10 h-10 text-green-600" />,
    title: "Impact on Environment",
    description:
      "Unmanaged landfills harm ecosystems, contaminate soil, and pollute groundwater. Zigma ensures eco-friendly processes, waste segregation, and safe disposal practices to protect biodiversity and maintain ecological balance.",
  image: impactOnHealth,
    },
  {
    icon: <Home className="w-10 h-10 text-blue-600" />,
    title: "Impact on Property Value",
    description:
      "Land near unmanaged dumps often loses value due to foul odor, pests, and pollution. By reclaiming land and converting it into clean, usable spaces, Zigma helps uplift property value and enhance community well-being.",
    image: sustainabilityBanner,
    },
];

const SustainabilityPage = () => {
  return (
    <div className="bg-gray-50">
      {/* ✅ Hero Banner */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={sustainabilityBanner}
          alt="Sustainability Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Sustainability at Zigma
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-200 max-w-3xl"
          >
            Building healthier communities, protecting the environment, and
            enhancing property value through sustainable waste solutions.
          </motion.p>
        </div>
      </div>

      {/* ✅ Topics Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Our Key Sustainability Impacts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center gap-4 overflow-hidden"
            >
              {/* Optional Image inside cards */}
              {topic.image && (
                <div className="relative w-full h-40 md:h-48">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Icon */}
              <div className="bg-gray-100 w-20 h-20 flex items-center justify-center rounded-full mt-6">
                {topic.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 px-4">
                {topic.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed px-6 pb-6">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ CTA Section */}
      <div className="bg-green-600 text-white text-center py-12 px-6">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Join Us in Creating a Sustainable Future
        </motion.h3>
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Partner With Zigma
        </motion.button>
      </div>
    </div>
  );
};

export default SustainabilityPage;
