"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ongoingProjects1 from "@/public/images/chennai1.jpg";
import ongoingProjects2 from "@/public/images/guwahati.jpg";
import ongoingProjects3 from "@/public/images/nagpur_4.jpg";
import ongoingProjects4 from "@/public/images/vadora_1.jpg";

const projects = [
  { src: ongoingProjects1, alt: "Chennai Project" },
  { src: ongoingProjects2, alt: "Guwahati Project" },
  { src: ongoingProjects3, alt: "Nagpur Project" },
  { src: ongoingProjects4, alt: "Vadodara Project" },
];

const OngoingProjects = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Ongoing Projects
      </h1>

      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {project.alt}
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                This project is currently in progress. We’re working hard to
                deliver innovative solutions and sustainable results.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OngoingProjects;
