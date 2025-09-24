import Image from "next/image"
import contactus from "@/public/images/contactus.jpg"
import peopleimage from "@/public/images/contactSide.jpg"
import { Phone, Mail, Briefcase, Facebook, Twitter, Linkedin } from "lucide-react"

export default function ContactPage() {
  const offices = [
    {
      city: "ERODE",
      address: [
        "178, Indu Nagar, Palayapalayam,",
        "Perundurai Road, Erode,",
        "Tamilnadu - 638 011, India.",
      ],
    },
    {
      city: "CHENNAI",
      address: [
        "First Floor, Greenways Towers,",
        "119, St. Mary's Road, Abiramapuram,",
        "Chennai, Tamil Nadu - 600 018.",
      ],
    },
    {
      city: "MUMBAI",
      address: [
        "Level 9, Platina, C-59, G-Block, BKC Bandra East,",
        "Mumbai.",
        "Phone: (91) 022 6700 0729",
      ],
    },
  ]

  const socials = [
    { name: "Facebook", href: "https://facebook.com", icon: <Facebook className="h-5 w-5" /> },
    { name: "Twitter/X", href: "https://twitter.com", icon: <Twitter className="h-5 w-5" /> },
    { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="h-5 w-5" /> },
  ]

  return (
    <main className="min-h-dvh bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
      {/* HERO */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        <Image
          src={contactus}
          alt="Zigma Global Environ Solutions offices"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-75"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Contact ZIGMA
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Reach us directly by phone or email, or connect through our offices worldwide.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:connect@zigma.in?subject=Inquiry%20from%20Website"
              className="px-6 py-3 rounded-xl bg-primary text-white font-medium shadow-md hover:shadow-lg hover:bg-primary/90 transition"
            >
              Email us
            </a>
            <a
              href="tel:+919894326007"
              className="px-6 py-3 rounded-xl bg-white text-primary font-medium shadow-md hover:shadow-lg transition"
            >
              Call us
            </a>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="max-w-6xl mx-auto -mt-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Business Enquiries", value: "(91) 98943 26007", icon: <Phone className="h-5 w-5" /> },
          { label: "General Email", value: "connect@zigma.in", icon: <Mail className="h-5 w-5" /> },
          { label: "Careers", value: "careers@zigma.in", icon: <Briefcase className="h-5 w-5" /> },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-md border shadow-sm hover:shadow-md transition"
          >
            <div className="p-3 rounded-full bg-primary/10 text-primary">{item.icon}</div>
            <div>
              <p className="text-sm font-medium text-gray-500">{item.label}</p>
              <p className="text-lg font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* OFFICES */}
      <section className="max-w-6xl mx-auto mt-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
          <div className="space-y-6">
            {offices.map((o) => (
              <div
                key={o.city}
                className="p-5 rounded-xl bg-white border shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">{o.city}</h3>
                <address className="mt-2 text-sm text-gray-600 not-italic leading-relaxed">
                  {o.address.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </address>
              </div>
            ))}
          </div>

          {/* SOCIALS */}
          <div className="mt-8">
            <p className="text-sm font-medium text-gray-500">Follow us</p>
            <div className="flex gap-3 mt-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex items-center justify-center w-10 h-10 rounded-full border bg-white shadow-sm hover:bg-primary hover:text-white transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={peopleimage}
            alt="ZIGMA office"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      {/* EMAIL DROPDOWN */}
      <section className="max-w-3xl mx-auto mt-16 px-6 pb-20">
        <details className="group rounded-xl bg-white border shadow-sm p-6">
          <summary className="flex justify-between items-center cursor-pointer font-medium">
            Prefer email? Reach us directly
            <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
          </summary>
          <div className="mt-4 text-gray-600 space-y-2 text-sm">
            <p>For business enquiries: <a href="mailto:connect@zigma.in" className="text-primary hover:underline">connect@zigma.in</a></p>
            <p>For careers: <a href="mailto:careers@zigma.in" className="text-primary hover:underline">careers@zigma.in</a></p>
          </div>
        </details>
      </section>
    </main>
  )
}
