import Image from "next/image";
import serviceBanner from "@/public/images/service_banner.jpg";

const ServicesPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <Image
          src={serviceBanner}
          alt="Services Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-black/50">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Landfill Mining – Reclaiming the Future
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl">
            Transforming legacy waste into resources, land, and opportunities.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Intro */}
        <section className="text-center space-y-6">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Landfill Mining is a scientifically proven method to address the
            decades-old problem of legacy municipal solid waste (MSW) that has
            been indiscriminately dumped in open landfills. Over the years,
            these unmanaged dumpsites have caused severe environmental
            degradation, including groundwater contamination, air pollution,
            foul odors, and uncontrolled fires. Beyond the environment, they
            have negatively impacted the health, safety, and quality of life of
            nearby communities.
          </p>
        </section>

        {/* Our Approach */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excavation & Stabilization",
                desc: "Safe recovery of old MSW with dust and odor control measures.",
              },
              {
                title: "Segregation & Processing",
                desc: "Scientific separation of recyclables, soil-like material, and inert fractions.",
              },
              {
                title: "Resource Recovery",
                desc: "Extracting plastics, metals, and other materials that can re-enter the economy.",
              },
              {
                title: "Eco-friendly Disposal",
                desc: "Safe treatment of non-recyclable fractions with minimal ecological footprint.",
              },
              {
                title: "Land Reclamation",
                desc: "Restoring degraded dump yards into usable land for green spaces, infrastructure, and community development.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white border rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why It Matters */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Why It Matters
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Environmental Restoration",
                desc: "Stops leachate contamination, reduces methane emissions, and prevents landfill fires.",
              },
              {
                icon: "🏞",
                title: "Land Reclamation",
                desc: "Returns valuable urban land to city development.",
              },
              {
                icon: "👨‍👩‍👧",
                title: "Community Wellbeing",
                desc: "Creates cleaner, safer, and healthier surroundings for residents.",
              },
              {
                icon: "♻️",
                title: "Circular Economy",
                desc: "Turns waste into a resource through material recovery.",
              },
              {
                icon: "📜",
                title: "Regulatory Compliance",
                desc: "Fully aligned with SWM Rules 2016 and national sustainability goals.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-green-50 rounded-2xl shadow hover:shadow-md transition text-center"
              >
                <p className="text-4xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Zigma’s Impact */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Zigma’s Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              "✅ Millions of tons of legacy waste scientifically remediated",
              "✅ Hundreds of acres of land reclaimed and repurposed",
              "✅ Significant reduction in greenhouse gas emissions",
              "✅ Healthier communities & improved Swachh Survekshan scores",
            ].map((impact, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <p className="text-lg font-medium text-gray-700">{impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Promise */}
        <section className="text-center bg-gradient-to-r from-green-600 to-green-400 text-white py-16 px-6 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Promise</h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            For Zigma, landfill mining is not just a service—it’s a commitment
            to sustainability and future generations. By restoring degraded
            land, protecting natural resources, and improving community
            wellbeing, we are helping cities transition towards a Zero Landfill
            future.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
