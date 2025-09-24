"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import completedProjects1 from "@/public/images/atladara1.jpg";
import completedProjects2 from "@/public/images/karur.jpg";
import completedProjects3 from "@/public/images/vairapalayam1.jpg";
import completedProjects4 from "@/public/images/noida1.jpg";

const projects = [
  { src: completedProjects1, alt: "Atladara Project" },
  { src: completedProjects2, alt: "Karur Project" },
  { src: completedProjects3, alt: "Vairapalayam Project" },
  { src: completedProjects4, alt: "Noida Project" },
];

const CompletedProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Completed Projects
      </h1>

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
            <div className="relative w-full h-64">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {project.alt}
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur at elit sit amet justo dapibus posuere.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompletedProjectsPage;
