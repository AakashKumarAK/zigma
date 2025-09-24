import Image from "next/image";
import leagacyWaste from "@/public/images/legacywaste.jpg";

const LegacyWastePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[90vh]">
        <Image
          src={leagacyWaste}
          alt="Legacy Waste"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            Legacy Waste
          </h1>
          <p className="text-lg md:text-2xl">
            Because we would love to partner with you in our growth
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* Intro */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Turning the Tide: Solutions to Legacy Waste
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Addressing legacy waste is no longer a choice—it is a necessity.
            Traditional landfilling is no longer sustainable, and the challenge
            demands scientific, environmentally responsible solutions.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Zigma Environ Solutions, we pioneered large-scale bio-mining and
            remediation of legacy waste dumpsites across India. Our approach
            transforms a once daunting problem into an opportunity for resource
            recovery and land reclamation.
          </p>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-green-700 mb-6 text-center">
            Our Solutions Include:
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-bold mb-2">Bio-mining & Segregation</h4>
              <p className="text-gray-600">
                Scientific excavation and processing of old waste to recover
                recyclables, soil-like material, and inert residues.
              </p>
            </div>
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-bold mb-2">Recyclables Recovery</h4>
              <p className="text-gray-600">
                Extracting plastics, metals, and other materials for recycling,
                reducing the burden on landfills.
              </p>
            </div>
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-bold mb-2">Soil Restoration</h4>
              <p className="text-gray-600">
                Converting bio-mined compostable fractions into soil-like
                material for landscaping and green cover.
              </p>
            </div>
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-bold mb-2">Land Reclamation</h4>
              <p className="text-gray-600">
                Restoring dump yards into usable land for infrastructure, parks,
                and community development.
              </p>
            </div>
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition md:col-span-2">
              <h4 className="text-xl font-bold mb-2">
                Circular Economy Approach
              </h4>
              <p className="text-gray-600">
                Ensuring that what was once ‘waste’ is reintegrated into the
                economy as a resource.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold  text-green-700 mb-6 text-center">
            Impact So Far:
          </h3>
          <ul className="space-y-4 text-gray-700 text-lg list-disc list-inside">
            <li>Millions of tons of legacy waste successfully remediated</li>
            <li>Reduction of greenhouse gas emissions from dump sites</li>
            <li>Restoration of valuable urban land for productive use</li>
            <li>
              Improved public health and cleaner surroundings for communities
            </li>
          </ul>
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl font-medium text-gray-800">
            For Zigma, tackling legacy waste is not just about clearing
            garbage—it is about building a sustainable, resilient future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegacyWastePage;
