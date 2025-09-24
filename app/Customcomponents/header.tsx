"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/images/zigma.png";
import mainLogo from "@/public/images/mainLogo.png";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [organisationOpen, setOrganisationOpen] = useState(false);
  const [processOpen, setProcessOpen] = useState(false);
  const [whyUsOpen, setWhyUsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  // timeouts for smooth hover
  const aboutTimeout = useRef<NodeJS.Timeout | null>(null);
  const whyUsTimeout = useRef<NodeJS.Timeout | null>(null);
  const projectsTimeout = useRef<NodeJS.Timeout | null>(null);
  const mediaTimeout = useRef<NodeJS.Timeout | null>(null);

  // helper function to check active route
  const isActive = (path: any) =>
    pathname === path ? "underline underline-offset-8 font-semibold" : "";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // generic handlers for hover menus
  const handleEnter = (setter: any, timeoutRef: any) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setter(true);
  };

  const handleLeave = (setter: any, timeoutRef: any) => {
    timeoutRef.current = setTimeout(() => {
      setter(false);
    }, 200); // delay before closing
  };

  return (
    <header
      className={`sticky top-0 w-full h-24 z-50 transition-colors duration-300 ${
        scrolled ? "bg-transparent shadow-md" : "bg-[#6D7175] shadow-md"
      }`}
    >
      <div className="flex w-full items-center justify-between px-4 py-3">
        {/* Left logo */}
        <div className="flex items-center gap-3 ">
          <Link href="/"  >
          <Image src={logo} alt="Zigma image" width={100} height={60} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-white font-medium relative">
          <Link href="/" className={`${isActive("/")} hover:underline`}>
            Home
          </Link>

          {/* About Us dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleEnter(setAboutOpen, aboutTimeout)}
            onMouseLeave={() => handleLeave(setAboutOpen, aboutTimeout)}
          >
            <button
              className={`flex items-center gap-1 ${
                pathname.startsWith("/routes/milestones") ||
                pathname.startsWith("/routes/leagacy-waste") ||
                pathname.startsWith("/routes/why-mining") ||
                pathname.startsWith("/routes/rules-2016") ||
                pathname.startsWith("/routes/swachh-bharat") ||
                pathname.startsWith("/routes/make-in-india")
                  ? "underline underline-offset-8 font-semibold"
                  : ""
              }`}
            >
              About
            </button>

            {aboutOpen && (
              <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg w-64 py-2 pt-2">
                {/* Organisation */}
                <div>
                  <button
                    onClick={() => setOrganisationOpen(!organisationOpen)}
                    className="flex w-full justify-between items-center px-4 py-2 hover:bg-gray-100"
                  >
                    Organisation
                    {organisationOpen ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>
                  {organisationOpen && (
                    <div className="pl-6">
                      <Link
                        href="/routes/milestones"
                        className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                          "/routes/milestones"
                        )}`}
                      >
                        Milestones
                      </Link>
                    </div>
                  )}
                </div>

                {/* Process Chain */}
                <div>
                  <button
                    onClick={() => setProcessOpen(!processOpen)}
                    className="flex w-full justify-between items-center px-4 py-2 hover:bg-gray-100"
                  >
                    Process Chain
                    {processOpen ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>
                  {processOpen && (
                    <div className="pl-6">
                      <Link
                        href="/routes/leagacy-waste"
                        className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                          "/routes/leagacy-waste"
                        )}`}
                      >
                        Legacy Waste
                      </Link>
                      <Link
                        href="/routes/why-mining"
                        className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                          "/routes/why-mining"
                        )}`}
                      >
                        Why Mining
                      </Link>
                      <Link
                        href="/routes/rules-2016"
                        className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                          "/routes/rules-2016"
                        )}`}
                      >
                        Rules 2016
                      </Link>
                      <Link
                        href="/routes/swachh-bharat"
                        className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                          "/routes/swachh-bharat"
                        )}`}
                      >
                        Swachh Bharat
                      </Link>
                      <Link
                        href="/routes/make-in-india"
                        className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                          "/routes/make-in-india"
                        )}`}
                      >
                        Make In India
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Why Us dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleEnter(setWhyUsOpen, whyUsTimeout)}
            onMouseLeave={() => handleLeave(setWhyUsOpen, whyUsTimeout)}
          >
            <button
              className={`flex items-center gap-1 ${
                pathname.startsWith("/routes/what-make-us-unique") ||
                pathname.startsWith("/routes/our-approach") ||
                pathname.startsWith("/routes/advantage-zigma") ||
                pathname.startsWith("/routes/sustainability")
                  ? "underline underline-offset-8 font-semibold"
                  : ""
              }`}
            >
              Why Us
            </button>

            {whyUsOpen && (
              <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg w-64 py-2 pt-2">
                <Link
                  href="/routes/what-make-us-unique"
                  className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                    "/routes/what-make-us-unique"
                  )}`}
                >
                  What makes us Unique
                </Link>
                <Link
                  href="/routes/our-approach"
                  className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                    "/routes/our-approach"
                  )}`}
                >
                  Our Approach
                </Link>
                <Link
                  href="/routes/advantage-zigma"
                  className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                    "/routes/advantage-zigma"
                  )}`}
                >
                  Advantage Zigma
                </Link>
                <Link
                  href="/routes/sustainability"
                  className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                    "/routes/sustainability"
                  )}`}
                >
                  Sustainability
                </Link>
              </div>
            )}
          </div>

          {/* Projects dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleEnter(setProjectsOpen, projectsTimeout)}
            onMouseLeave={() => handleLeave(setProjectsOpen, projectsTimeout)}
          >
            <button
              className={`flex items-center gap-1 ${
                pathname.startsWith("/routes/completed-projects") ||
                pathname.startsWith("/routes/ongoing-projects")
                  ? "underline underline-offset-8 font-semibold"
                  : ""
              }`}
            >
              Projects
            </button>

            {projectsOpen && (
              <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg w-64 py-2 pt-2">
                <Link
                  href="/routes/completed-projects"
                  className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                    "/routes/completed-projects"
                  )}`}
                >
                  Completed Projects
                </Link>
                <Link
                  href="/routes/ongoing-projects"
                  className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                    "/routes/ongoing-projects"
                  )}`}
                >
                  Ongoing Projects
                </Link>
              </div>
            )}
          </div>

          {/* Media dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleEnter(setMediaOpen, mediaTimeout)}
            onMouseLeave={() => handleLeave(setMediaOpen, mediaTimeout)}
          >
            <button
              className={`flex items-center gap-1 ${
                pathname.startsWith("/routes/news-room") ||
                pathname.startsWith("/routes/media-kit")
                  ? "underline underline-offset-8 font-semibold"
                  : ""
              }`}
            >
              Media
            </button>

            {mediaOpen && (
              <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg w-64 py-2 pt-2">
                <Link
                  href="/routes/news-room"
                  className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                    "/routes/news-room"
                  )}`}
                >
                  Newsroom
                </Link>
                <Link
                  href="/routes/media-kit"
                  className={`block px-4 py-2 hover:bg-gray-100 ${isActive(
                    "/routes/media-kit"
                  )}`}
                >
                  Media Kit
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/routes/services"
            className={`${isActive("/routes/services")} hover:underline`}
          >
            Services
          </Link>
          <Link
            href="/routes/products"
            className={`${isActive("/routes/products")} hover:underline`}
          >
            Products
          </Link>
          <Link
            href="/routes/careers"
            className={`${isActive("/routes/careers")} hover:underline`}
          >
            Careers
          </Link>
          <Link
            href="/routes/contact"
            className={`${isActive("/routes/contact")} hover:underline`}
          >
            Contact
          </Link>
        </div>

        {/* Right-side mainLogo */}
        <div className="hidden lg:block pb-3">
          <Link href="/" className="flex items-center">
            <Image src={mainLogo} alt="Zigma main logo" width={60} height={10} />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none text-white w-8 h-8"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (unchanged) */}
      {isOpen && (
        <div className="md:hidden bg-neutral-400 shadow-lg min-h-[calc(100vh-6rem)]">
           <div className="flex justify-end p-4">
      <button
        onClick={() => setIsOpen(false)}
        className="text-black text-2xl focus:outline-none"
      >
        ✕
      </button>
    </div>
          <nav className="flex flex-col px-2 py-4 text-gray-800 font-medium space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg hover:bg-gray-100 transition ${isActive(
                "/"
              )}`}
            >
              Home
            </Link>

            {/* About Us Dropdown (Mobile) */}
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex justify-between items-center w-full px-4 py-3 rounded-lg hover:bg-gray-100 transition ${
                  pathname.includes("/routes/milestones") ||
                  pathname.includes("/routes/leagacy-waste") ||
                  pathname.includes("/routes/why-mining") ||
                  pathname.includes("/routes/rules-2016") ||
                  pathname.includes("/routes/swachh-bharat") ||
                  pathname.includes("/routes/make-in-india")
                    ? "underline underline-offset-8 font-semibold"
                    : ""
                }`}
              >
                About Us {aboutOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {aboutOpen && (
                <div className="ml-3 mt-1 border-l-2 border-gray-200 pl-3 space-y-1">
                  {/* Organisation Dropdown */}
                  <div>
                    <button
                      onClick={() => setOrganisationOpen(!organisationOpen)}
                      className="flex justify-between items-center w-full px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      Organisation {organisationOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {organisationOpen && (
                      <div className="ml-3 mt-1 space-y-1">
                        <Link
                          href="/routes/milestones"
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                            "/routes/milestones"
                          )}`}
                        >
                          Milestones
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Process Chain Dropdown */}
                  <div>
                    <button
                      onClick={() => setProcessOpen(!processOpen)}
                      className="flex justify-between items-center w-full px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      Process Chain {processOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {processOpen && (
                      <div className="ml-3 mt-1 space-y-1">
                        <Link
                          href="/routes/leagacy-waste"
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                            "/routes/leagacy-waste"
                          )}`}
                        >
                          Legacy Waste
                        </Link>
                        <Link
                          href="/routes/why-mining"
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                            "/routes/why-mining"
                          )}`}
                        >
                          Why Mining
                        </Link>
                        <Link
                          href="/routes/rules-2016"
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                            "/routes/rules-2016"
                          )}`}
                        >
                          Rules 2016
                        </Link>
                        <Link
                          href="/routes/swachh-bharat"
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                            "/routes/swachh-bharat"
                          )}`}
                        >
                          Swachh Bharat
                        </Link>
                        <Link
                          href="/routes/make-in-india"
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                            "/routes/make-in-india"
                          )}`}
                        >
                          Make In India
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Why Us Dropdown */}
            <div>
              <button
                onClick={() => setWhyUsOpen(!whyUsOpen)}
                className={`flex justify-between items-center w-full px-4 py-3 rounded-lg hover:bg-gray-100 transition ${
                  pathname.includes("/routes/what-make-us-unique") ||
                  pathname.includes("/routes/our-approach") ||
                  pathname.includes("/routes/advantage-zigma") ||
                  pathname.includes("/routes/sustainability")
                    ? "underline underline-offset-8 font-semibold"
                    : ""
                }`}
              >
                Why Us {whyUsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {whyUsOpen && (
                <div className="ml-3 mt-1 border-l-2 border-gray-200 pl-3 space-y-1">
                  <Link
                    href="/routes/what-make-us-unique"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                      "/routes/what-make-us-unique"
                    )}`}
                  >
                    What makes us Unique
                  </Link>
                  <Link
                    href="/routes/our-approach"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                      "/routes/our-approach"
                    )}`}
                  >
                    Our Approach
                  </Link>
                  <Link
                    href="/routes/advantage-zigma"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                      "/routes/advantage-zigma"
                    )}`}
                  >
                    Advantage Zigma
                  </Link>
                  <Link
                    href="/routes/sustainability"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                      "/routes/sustainability"
                    )}`}
                  >
                    Sustainability
                  </Link>
                </div>
              )}
            </div>

            {/* Projects Dropdown */}
            <div>
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                className={`flex justify-between items-center w-full px-4 py-3 rounded-lg hover:bg-gray-100 transition ${
                  pathname.includes("/routes/completed-projects") ||
                  pathname.includes("/routes/ongoing-projects")
                    ? "underline underline-offset-8 font-semibold"
                    : ""
                }`}
              >
                Projects {projectsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {projectsOpen && (
                <div className="ml-3 mt-1 border-l-2 border-gray-200 pl-3 space-y-1">
                  <Link
                    href="/routes/completed-projects"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                      "/routes/completed-projects"
                    )}`}
                  >
                    Completed Projects
                  </Link>
                  <Link
                    href="/routes/ongoing-projects"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                      "/routes/ongoing-projects"
                    )}`}
                  >
                    Ongoing Projects
                  </Link>
                </div>
              )}
            </div>

            {/* Media Dropdown */}
            <div>
              <button
                onClick={() => setMediaOpen(!mediaOpen)}
                className={`flex justify-between items-center w-full px-4 py-3 rounded-lg hover:bg-gray-100 transition ${
                  pathname.includes("/routes/news-room") ||
                  pathname.includes("/routes/media-kit")
                    ? "underline underline-offset-8 font-semibold"
                    : ""
                }`}
              >
                Media {mediaOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {mediaOpen && (
                <div className="ml-3 mt-1 border-l-2 border-gray-200 pl-3 space-y-1">
                  <Link
                    href="/routes/news-room"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                      "/routes/news-room"
                    )}`}
                  >
                    Newsroom
                  </Link>
                  <Link
                    href="/routes/media-kit"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition ${isActive(
                      "/routes/media-kit"
                    )}`}
                  >
                    Media Kit
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/routes/services"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg hover:bg-gray-100 transition ${isActive(
                "/routes/services"
              )}`}
            >
              Services
            </Link>
            <Link
              href="/routes/products"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg hover:bg-gray-100 transition ${isActive(
                "/routes/products"
              )}`}
            >
              Products
            </Link>
            <Link
              href="/routes/careers"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg hover:bg-gray-100 transition ${isActive(
                "/routes/careers"
              )}`}
            >
              Careers
            </Link>
            <Link
              href="/routes/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg hover:bg-gray-100 transition ${isActive(
                "/routes/contact"
              )}`}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

    </header>
  );
}
