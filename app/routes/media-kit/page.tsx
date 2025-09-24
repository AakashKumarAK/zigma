"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import award1 from "@/public/images/award1.jpg";
import award2 from "@/public/images/award2.jpg";
import award3 from "@/public/images/award3.jpg";
import award4 from "@/public/images/award4.jpg";
import award5 from "@/public/images/award5.jpg";
import award6 from "@/public/images/award6.jpg";
import award7 from "@/public/images/award7.jpg";
import award8 from "@/public/images/award8.jpg";

import gal1 from "@/public/images/gal1.jpg";
import gal2 from "@/public/images/gal15.jpg";
import gal3 from "@/public/images/gal19.jpg";
import gal4 from "@/public/images/gal45.jpg";
import gal5 from "@/public/images/gal4.jpg";
import gal6 from "@/public/images/gal50.jpg";
import gal7 from "@/public/images/gal54.jpg";
import gal8 from "@/public/images/gal54.jpg";

const awards = [award1, award2, award3, award4, award5, award6, award7, award8];
const gallery = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8];

const MediaKitPage = () => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10 bg-gray-200 space-y-16">
      {/* Awards Section */}
      <section>
        <h2 className="text-5xl font-bold mb-6 text-center">Awards</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          className="rounded-2xl shadow-lg"
        >
          {awards.map((award, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
                <Image
                  src={award}
                  alt={`Award ${idx + 1}`}
                  fill
                  className="object-cover rounded-2xl"
                  priority={idx === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Gallery Section */}
      <section>
        <h2 className="text-5xl font-bold mb-6 text-center">Gallery</h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-500`}
        >
          {gallery.map((img, idx) => {
            const isFocused = focusedIndex === idx;
            const isBlurred = focusedIndex !== null && !isFocused;

            return (
              <Card
                key={idx}
                onClick={() =>
                  setFocusedIndex(isFocused ? null : idx) // toggle focus
                }
                className={`overflow-hidden rounded-2xl shadow-md cursor-pointer transition-transform duration-500 ${
                  isFocused ? "scale-105 z-20" : "hover:scale-105"
                } ${isBlurred ? "blur-sm opacity-50" : ""}`}
              >
                <CardContent className="p-0">
                  <div className="relative w-full h-60">
                    <Image
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Videos Section */}
      <section>
        <h2 className="text-5xl font-bold mb-6 text-center">Videos</h2>
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center text-gray-500">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yBNbU118w4Q?si=Qa4dRaGInaW9UJeh" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>
    </div>
  );
};

export default MediaKitPage;
