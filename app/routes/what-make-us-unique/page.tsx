"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import makeusunique from "@/public/images/unique.jpg";

const features = [
  {
    title: "Innovative Solutions",
    description:
      "We embrace cutting-edge technology and processes to provide sustainable waste management and resource recovery solutions.",
  },
  {
    title: "Sustainability First",
    description:
      "Every project we undertake is designed with long-term environmental and social impact in mind.",
  },
  {
    title: "Proven Expertise",
    description:
      "With years of experience, Zigma has successfully executed large-scale projects across India.",
  },
  {
    title: "Collaborative Approach",
    description:
      "We work hand-in-hand with stakeholders to deliver results that benefit both communities and the environment.",
  },
];

const WhatMakesUsUnique = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={makeusunique}
          alt="What Makes Us Unique"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/50">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            What Makes Us Unique
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl max-w-3xl"
          >
            Because we would love to partner with you in our growth
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Why Zigma Stands Apart
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsUnique;
