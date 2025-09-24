import Image from "next/image";
import rules2016 from "@/public/images/rules2016.jpg";

const Rules2016Page = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <Image
          src={rules2016}
          alt="SWM Rules 2016"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-black/40">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Rules 2016</h1>
          <h3 className="text-4xl md:text-6xl font-bold mb-4">
            SWM Rules 2016 – A Push for Landfill Mining
          </h3>
          <p className="text-lg md:text-2xl max-w-3xl">
            Because we would love to partner with you in our growth
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          The Solid Waste Management Rules, 2016, notified by the Government of
          India, marked a turning point in the way cities must address waste
          management. One of the most significant highlights of these rules is
          the clear emphasis on bio-mining and bio-remediation of legacy waste.
        </p>
      </div>

      {/* Key Directive */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
            Key Directive
          </h2>
          <div className="bg-white shadow-md rounded-2xl p-6 md:p-10 text-lg italic text-gray-800">
            Clause 15, Subclause (zj):<br />
            <span className="not-italic font-medium">
              “Investigate and analyse all old open dumpsites and existing
              operational dumpsites for their potential of bio-mining and
              bio-remediation and, wheresoever feasible, take necessary actions
              to bio-mine or bio-remediate the sites.”
            </span>
          </div>
        </div>
      </div>

      {/* What It Means */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What It Means
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          This directive makes it mandatory for Urban Local Bodies (ULBs) to
          identify legacy dump sites and take corrective actions using
          scientific methods such as bio-mining and bio-remediation. The focus
          is not on temporary fixes like landfill capping, but on permanent,
          eco-friendly solutions that:
        </p>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg max-w-4xl mx-auto">
          <li className="flex items-start gap-3">
            ✅ <span>Reclaim valuable land</span>
          </li>
          <li className="flex items-start gap-3">
            ✅ <span>Reduce environmental pollution</span>
          </li>
          <li className="flex items-start gap-3">
            ✅ <span>Minimize greenhouse gas emissions</span>
          </li>
          <li className="flex items-start gap-3">
            ✅ <span>Improve public health and community wellbeing</span>
          </li>
        </ul>
      </div>

      {/* Zigma’s Alignment */}
      <div className="bg-green-700 py-16 px-6 text-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Zigma’s Alignment with SWM Rules 2016
          </h2>
          <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
            At Zigma, our landfill mining projects are directly aligned with the
            mandates of SWM Rules 2016. We partner with Urban Local Bodies to
            ensure:
          </p>
          <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
            <li className="flex items-start gap-3">
              ✅ <span>Full compliance with government regulations</span>
            </li>
            <li className="flex items-start gap-3">
              ✅{" "}
              <span>
                Adoption of sustainable, technology-driven waste management
                methods
              </span>
            </li>
            <li className="flex items-start gap-3">
              ✅{" "}
              <span>
                End-to-end execution from investigation to remediation and land
                reclamation
              </span>
            </li>
          </ul>
          <p className="text-center text-lg font-medium mt-8">
            By translating policy into practice, Zigma is enabling cities across
            India to move closer to the{" "}
            <span className="font-bold">Zero Landfill vision</span> envisioned
            in the SWM Rules 2016.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules2016Page;
