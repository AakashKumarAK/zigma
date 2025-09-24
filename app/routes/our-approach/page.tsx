"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ourapproach from "@/public/images/ourapproach.jpg";

const steps = [
  "ULB awards Zigma the work order for Biomining",
  "Zigma obtains all requisite clearances and approvals for establishing their plant",
  "ULB does not pay any money in advance to Zigma towards capital expenditure",
  "Meanwhile the mobile plant is erected and the machinery is commissioned",
  "Zigma starts processing the waste",
  "Zigma separates the two main aggregates - combustible fraction and inert fraction",
  "Zigma takes responsibility for the disposal of all aggregates as per SWM Rules 2016",
  "Zigma raises monthly bill to the ULB based on the weight / volume of the waste cleared from the landfill",
  "ULB pays Zigma the monthly bills",
  "Zigma reclaims land till the ground level",
  "If required, ULB can ask Zigma to clear any waste available below the ground level for complete remediation",
  "After complete reclamation / remediation, Zigma decommissions the plant and machinery from the site",
];

const OurApproachPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh]">
        <Image src={ourapproach} alt="Our Approach" fill className="object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/50">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our Approach
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

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Step-by-Step Approach
        </h2>

        <div className="relative">
          {/* Vertical line in the middle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-green-600 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Connector Dot */}
                  <span className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10  items-center justify-center bg-green-600 text-white rounded-full font-bold shadow-lg z-10 hidden md:flex">
                    {index + 1}
                  </span>

                  {/* Step Card */}
                  <div
                    className={`bg-white shadow-lg rounded-2xl p-6 md:w-[45%] hover:shadow-2xl transition-shadow duration-300 ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">a
                          Step {index + 1}
                        </h3>
                        <p className="text-gray-600 mt-2">{step}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproachPage;
