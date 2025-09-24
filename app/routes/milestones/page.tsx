import Image from "next/image";
import milestones from "@/public/images/milestone.jpg";

const MilestonesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src={milestones}
          alt="Milestones"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/30">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Milestones</h1>
          <p className="text-lg md:text-2xl">
            Because we would love to partner with you in our growth
          </p>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Milestones
        </h2>

        <div className="space-y-10">
          {/* 2015 */}
          <div className="border-l-4 border-green-600 pl-6">
            <h3 className="text-xl md:text-2xl font-semibold">2015 – Establishment</h3>
            <p className="text-gray-700">
              Zigma Environ Solutions was founded with a mission to provide
              innovative and sustainable environmental solutions, focusing on
              solid waste management and eco-friendly practices.
            </p>
          </div>

          {/* 2017 */}
          <div className="border-l-4 border-green-600 pl-6">
            <h3 className="text-xl md:text-2xl font-semibold">
              2017 – First Major Project Completed
            </h3>
            <p className="text-gray-700">
              Successfully executed our first large-scale municipal solid waste
              management project, setting a benchmark in sustainable operations
              and technology-driven solutions.
            </p>
          </div>

          {/* 2019 */}
          <div className="border-l-4 border-green-600 pl-6">
            <h3 className="text-xl md:text-2xl font-semibold">
              2019 – Government & Industry Recognition
            </h3>
            <p className="text-gray-700">
              Recognized by leading government bodies and environmental agencies
              for excellence in waste management services, with compliance to the
              highest industry standards.
            </p>
          </div>

          {/* 2021 */}
          <div className="border-l-4 border-green-600 pl-6">
            <h3 className="text-xl md:text-2xl font-semibold">
              2021 – Strategic Expansions & Partnerships
            </h3>
            <p className="text-gray-700">
              Expanded operations across multiple states in India and forged key
              partnerships with municipal corporations, private enterprises, and
              technology providers to enhance service capabilities.
            </p>
          </div>

          {/* 2023 */}
          <div className="border-l-4 border-green-600 pl-6">
            <h3 className="text-xl md:text-2xl font-semibold">
              2023 – Awards & Certifications
            </h3>
            <p className="text-gray-700">
              Honored with industry awards for innovation in waste-to-energy
              solutions, and achieved certifications for environmental quality,
              safety, and sustainable practices.
            </p>
          </div>

          {/* 2025 */}
          <div className="border-l-4 border-green-600 pl-6">
            <h3 className="text-xl md:text-2xl font-semibold">
              2025 – Continuing the Journey
            </h3>
            <p className="text-gray-700">
              Leading the way in circular economy solutions, digital waste
              tracking, and community-driven sustainability initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestonesPage;
