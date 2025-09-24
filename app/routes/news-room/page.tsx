import Image from "next/image";
import newsroom1 from "@/public/images/n11.jpg";
import newsroom2 from "@/public/images/n12.jpg";
import newsroom3 from "@/public/images/sm27.jpg";
import newsroom4 from "@/public/images/sm29.jpg";
import social1 from "@/public/images/social4.png";
import social2 from "@/public/images/social5.png";
import social3 from "@/public/images/social.jpg";
import social4 from "@/public/images/social10.png";

const NewsRoomPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* News Section */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          News Room
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[newsroom1, newsroom2, newsroom3, newsroom4].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={img}
                alt={`News Room ${i + 1}`}
                className="w-full h-64 sm:h-72 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Social Media
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[social1, social2, social3, social4].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={img}
                alt={`Social Media ${i + 1}`}
                className="w-full h-80 sm:h-96 md:h-[28rem] object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsRoomPage;
