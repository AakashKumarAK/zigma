import Image from "next/image";
import { Briefcase, Users, Star, PhoneCall, FileText, CheckCircle } from "lucide-react";
import carrersbanner from '@/public/images/carrers_banner.jpg';

const CareersPage = () => {    
  return (
    <div className="w-full min-h-screen">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image 
          src={carrersbanner}
          alt="Careers"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Careers</h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            Partner with us in our growth journey and build a meaningful career.
          </p>
        </div>
      </div>

      {/* Why Work With Us */}
      <section className="py-12 px-4 md:px-20 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8">Why Work With Us?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center">
            <Briefcase className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold">Competitive Pay</h3>
            <p className="text-gray-600 mt-2">We offer industry-standard salaries with yearly appraisals.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center">
            <Users className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold">Collaborative Culture</h3>
            <p className="text-gray-600 mt-2">Work with passionate and supportive team members.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center">
            <Star className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold">Growth Opportunities</h3>
            <p className="text-gray-600 mt-2">Expand your skills with mentorship and learning programs.</p>
          </div>
        </div>
      </section>

      {/* Interview Process */}
      <section className="py-12 px-4 md:px-20 text-gray-700">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">Our Hiring Process</h2>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="p-6 bg-white shadow-md rounded-2xl flex flex-col items-center text-center">
            <FileText className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="font-semibold">1. Apply</h3>
            <p className="text-sm mt-2">Send your resume to <span className="font-bold text-green-500">hr@zigma.in</span>.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl flex flex-col items-center text-center">
            <PhoneCall className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="font-semibold">2. Phone Screening</h3>
            <p className="text-sm mt-2">Our HR team will connect to know more about you.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl flex flex-col items-center text-center">
            <Users className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="font-semibold">3. Interview Rounds</h3>
            <p className="text-sm mt-2">Technical & cultural fit discussions with our team.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl flex flex-col items-center text-center">
            <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="font-semibold">4. Offer</h3>
            <p className="text-sm mt-2">If successful, we’ll send you an offer to join our team.</p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-12 px-4 md:px-20 bg-green-50 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-6">How to Apply</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Interested in joining us? Email us at <span className="font-bold text-green-600">hr@zigma.in</span> with your updated resume.  
          We’ll get in touch when we have the right opportunity for you.
        </p>
        <a 
          href="mailto:hr@zigma.in"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md font-medium transition-all"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
};

export default CareersPage;
