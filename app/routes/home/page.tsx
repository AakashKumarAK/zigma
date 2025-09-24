"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import home1 from "@/public/images/home1.jpg"
import home2 from "@/public/images/home2.jpg"
import home3 from "@/public/images/home3.jpg"
import home4 from "@/public/images/home4.jpg"
import home5 from "@/public/images/home5.jpg"
import home6 from "@/public/images/home6.jpg"

const slides = [
  {
    image: home1,
    title: "The total MSW generated in urban India today is 1.8 lakh tons per day",
    subtitle: "Because we would love to partner with you in our growth",
  },
  {
    image: home2,
    title: "Turning waste into opportunity with modern infrastructure",
    subtitle: "Because we would love to partner with you in our growth",
  },
  {
    image: home3,
    title: "Operational excellence across collection, sorting, and recycling",
    subtitle: "Because we would love to partner with you in our growth",
  },
  {
    image: home4,
    title: "Cleaner cities through sustainable practices",
    subtitle: "Because we would love to partner with you in our growth",
  },
  {
    image: home5,
    title: "From waste to energy — scalable solutions",
    subtitle: "Because we would love to partner with you in our growth",
  },
  {
    image: home6,
    title: "Community-first approach in every deployment",
    subtitle: "Because we would love to partner with you in our growth",
  },
]

export default function HomePage() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )

  return (
    <div className="w-full h-screen overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full min-h-screen">
          {slides.map((slide, idx) => (
            <CarouselItem key={idx} className="relative w-full h-screen">
              {/* ✅ Motion Zoom Effect per slide */}
              <motion.div
                key={idx} // re-triggers animation each slide
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </motion.div>

              {/* ✅ Animated Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/30">
                <motion.h1
                  key={slide.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  key={slide.subtitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="text-lg md:text-2xl drop-shadow"
                >
                  {slide.subtitle}
                </motion.p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="left-4 text-white bg-black/40 hover:bg-black/60" />
        <CarouselNext className="right-4 text-white bg-black/40 hover:bg-black/60" />
      </Carousel>
    </div>
  )
}
