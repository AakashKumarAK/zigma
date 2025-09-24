import Image from "next/image";
import swachhbharat from "@/public/images/swachh.jpg";

const SwachhBharatPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <Image
          src={swachhbharat}
          alt="Swachh Bharat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Zigma & Swachh Bharat Mission
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl">
            Driving India’s flagship mission for a cleaner and healthier nation
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          At <span className="font-semibold">Zigma Environ Solutions</span>, we
          are proud to be an active contributor and torchbearer of the Swachh
          Bharat Mission (SBM)—India’s flagship program for a cleaner and
          healthier nation. Our pioneering work in bio-mining and landfill
          remediation has been recognized at the national level as a{" "}
          <span className="font-semibold">best practice model</span> for
          sustainable solid waste management.
        </p>
      </div>

      {/* Recognitions & Contributions */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Recognitions & Contributions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🟢",
                title: "National Recognition",
                desc: "Listed among the best practices in India for bio-mining of landfills under the Swachh Bharat Mission.",
              },
              {
                icon: "🔵",
                title: "Exclusive Industry Representation",
                desc: "Invited as the sole Landfill Mining Company by the Ministry of Urban Development (MoUD), Government of India, to participate in the landmark workshop that launched Swachh Survekshan 2017.",
              },
              {
                icon: "🟣",
                title: "Policy Alignment",
                desc: "Our landfill mining projects directly support the objectives of SBM and the Solid Waste Management Rules 2016, ensuring sustainable and scalable solutions.",
              },
              {
                icon: "🟠",
                title: "Capacity Building",
                desc: "Contributed technical expertise and on-ground experience to guide policymakers, municipal authorities, and industry stakeholders in shaping waste management strategies.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Driving the Swachh Bharat Vision */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Driving the Swachh Bharat Vision
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✅ Remediated millions of tons of legacy waste</li>
            <li>✅ Reclaimed hundreds of acres of land for public use and development</li>
            <li>✅ Reduced environmental hazards like groundwater contamination and landfill fires</li>
            <li>✅ Helped cities improve their rankings in Swachh Survekshan surveys</li>
          </ul>
        </div>
        <div className="bg-green-100 rounded-2xl p-8 shadow-md text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 gap-6 text-green-800 font-bold text-xl">
            <div>
              <p className="text-3xl">♻️</p>
              <p>Millions</p>
              <span className="text-sm font-medium text-gray-600">
                Tons Waste Remediated
              </span>
            </div>
            <div>
              <p className="text-3xl">🏞</p>
              <p>Hundreds</p>
              <span className="text-sm font-medium text-gray-600">
                Acres Reclaimed
              </span>
            </div>
            <div>
              <p className="text-3xl">🌱</p>
              <p>Reduced</p>
              <span className="text-sm font-medium text-gray-600">
                Environmental Hazards
              </span>
            </div>
            <div>
              <p className="text-3xl">⭐</p>
              <p>Improved</p>
              <span className="text-sm font-medium text-gray-600">
                City Rankings
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="bg-green-700 py-16 px-6 text-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Commitment</h2>
          <p className="text-lg leading-relaxed">
            Zigma stands committed to advancing the mission of a clean, green,
            and sustainable India. By converting waste into resources, restoring
            degraded lands, and promoting circular economy principles, we are
            not just supporting Swachh Bharat—we are{" "}
            <span className="font-semibold">accelerating its success story.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwachhBharatPage;
