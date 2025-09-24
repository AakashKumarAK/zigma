import Image from "next/image";
import whymining from "@/public/images/why_mining.jpg";

const WhyMiningPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh]">
        <Image
          src={whymining}
          alt="Landfill Mining"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Reclaiming Land. Restoring Communities.
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-3xl">
            At Zigma, Landfill Mining isn’t just waste removal—it’s about
            building a cleaner, sustainable future.
          </p>
          <a
            href="#projects"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Explore Our Projects
          </a>
        </div>
      </div>

      {/* What is Landfill Mining */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          What is Landfill Mining?
        </h2>
        <p className="text-gray-700 text-lg text-center leading-relaxed max-w-4xl mx-auto">
          Landfill Mining is the process of excavating, stabilizing, treating,
          segregating, and responsibly disposing of legacy waste. Unlike
          “landfill capping,” which only hides the problem, landfill mining
          eliminates hazards and reclaims land for future use.
        </p>
      </div>

      {/* Why Landfill Mining Matters */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Landfill Mining Matters
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌍",
                title: "Freedom from Pollution",
                desc: "Stops groundwater contamination and toxic emissions.",
              },
              {
                icon: "♻️",
                title: "Resource Recovery",
                desc: "Recyclables and soil-like material are recovered and reused.",
              },
              {
                icon: "🏞",
                title: "Land Reclamation",
                desc: "Dump yards converted into usable land for infrastructure or green zones.",
              },
              {
                icon: "✅",
                title: "Sustainable Alternative",
                desc: "Permanent solution, not just temporary capping.",
              },
              {
                icon: "👨‍👩‍👧",
                title: "Community Wellbeing",
                desc: "Healthier living conditions for surrounding communities.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zigma’s Expertise */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src={whymining}
            alt="Zigma Expertise"
            className="rounded-2xl shadow-md"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Zigma’s Expertise</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Zigma Environ Solutions has pioneered large-scale bio-mining and
            landfill remediation projects across India.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Millions of tons of legacy waste remediated</li>
            <li>✅ Acres of land reclaimed and restored</li>
            <li>✅ Proven compliance with environmental standards</li>
            <li>✅ Trusted partner of Urban Local Bodies nationwide</li>
          </ul>
        </div>
      </div>

      {/* Our Process */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { title: "Excavation", desc: "Safe and controlled removal of legacy waste." },
              { title: "Stabilization & Treatment", desc: "Using scientific methods to control odor, dust, and emissions." },
              { title: "Segregation", desc: "Separation of recyclables, soil-like material, and inert waste." },
              { title: "Resource Recovery", desc: "Plastics, metals, and compostable fractions reintroduced into the economy." },
              { title: "Land Reclamation", desc: "Restoring dump yards into usable, green, and productive spaces." },
            ].map((step, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Impact
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl">♻️</div>
            <h3 className="text-3xl font-bold mt-2">XM+</h3>
            <p className="text-gray-600">Tons of waste remediated</p>
          </div>
          <div>
            <div className="text-5xl">🏞</div>
            <h3 className="text-3xl font-bold mt-2">YM+</h3>
            <p className="text-gray-600">Acres of land reclaimed</p>
          </div>
          <div>
            <div className="text-5xl">🌱</div>
            <h3 className="text-3xl font-bold mt-2">ZM+</h3>
            <p className="text-gray-600">Tons of CO₂ emissions prevented</p>
          </div>
          <div>
            <div className="text-5xl">👨‍👩‍👧</div>
            <h3 className="text-3xl font-bold mt-2">Thousands</h3>
            <p className="text-gray-600">Lives positively impacted</p>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="bg-green-700 py-16 text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          From waste to wealth, from landfills to landmarks—Zigma leads the way.
        </h2>
        <a
          href="#contact"
          className="mt-6 inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
        >
          Partner With Us
        </a>
      </div>
    </div>
  );
};

export default WhyMiningPage;
