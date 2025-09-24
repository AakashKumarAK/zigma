import Image from "next/image";
import madeinindia from "@/public/images/makeinindia.jpg";
// (Optional: Import more images for sections, carousel, map, etc.)

const MadeInIndiaPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <Image
          src={madeinindia}
          alt="Made in India"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-gradient-to-r from-orange-600/70 via-white/10 to-green-600/70">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Engineered in India. Empowering Sustainability.
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl">
            Proudly supporting the Make in India initiative with world-class
            waste management technologies.
          </p>
          <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-green-50 transition">
            Explore Our Machines
          </button>
        </div>
      </div>

      {/* Section 1 – Indigenous Manufacturing */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={madeinindia}
            alt="Zigma Factory"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Indigenous Manufacturing
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            🏭 <span className="font-semibold">“Built in India, for India”</span> – All
            Zigma machines are self-designed, self-built, and manufactured in
            India, reducing import dependency and empowering local innovation.
          </p>
        </div>
      </div>

      {/* Section 2 – Zero Defect, Zero Effect */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Zero Defect, Zero Effect
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition text-center">
              <p className="text-4xl mb-4">✔️</p>
              <h3 className="text-xl font-semibold mb-2">Zero Defect</h3>
              <p className="text-gray-600">
                Precision-driven, reliable, efficient machines.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition text-center">
              <p className="text-4xl mb-4">🌱</p>
              <h3 className="text-xl font-semibold mb-2">Zero Effect</h3>
              <p className="text-gray-600">
                Eco-friendly processes with no adverse environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 – Advanced Manufacturing Excellence */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Advanced Manufacturing Excellence
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
          State-of-the-art facilities, process innovation, and continuous R&D
          investment enable Zigma to deliver world-class waste management
          technologies designed and manufactured in India.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Replace these with actual carousel/images */}
          <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
            Assembly Line
          </div>
          <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
            R&D Team
          </div>
          <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
            Field Machines
          </div>
        </div>
      </div>

      {/* Section 4 – Driving Atmanirbhar Bharat */}
      <div className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Driving Atmanirbhar Bharat
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              "✅ Indigenous waste management technologies",
              "✅ Employment & skill development in manufacturing",
              "✅ Reduced dependency on foreign imports",
              "✅ Cost-effective, eco-friendly, scalable solutions",
            ].map((point, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
              >
                <p className="text-lg text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5 – Impact Map */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Impact Map</h2>
        <p className="text-lg text-gray-700 mb-10">
          Proudly powering India’s waste management transformation.
        </p>
        <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
          {/* Placeholder – Replace with Interactive Map */}
          🗺 Map of India (Projects Deployment)
        </div>
      </div>

      {/* Closing Section */}
      <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 py-16 px-6 text-center">
        <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 max-w-4xl mx-auto">
          “At Zigma, Make in India is not a campaign—it’s our identity. We are
          building machines that build a sustainable nation.”
        </blockquote>
        <button className="mt-8 bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-green-800 transition">
          Partner With Us
        </button>
      </div>
    </div>
  );
};

export default MadeInIndiaPage;
