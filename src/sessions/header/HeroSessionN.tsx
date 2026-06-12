"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Caveat } from "next/font/google";
import Link from "next/link";

// Types
type Slide = {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  page: string;
};

type DropdownItem = {
  label: string;
  link: string;
};

type DropdownItems = Record<string, DropdownItem[]>;

const inter = Caveat({
  subsets: ["cyrillic"],
  weight: ["400"],
});

const Index = ({ lang }: { lang: string }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Hero");

  // Data
  const slidesData: Omit<Slide, "buttonLink">[] = [
    {
      id: "EP-242-ZX-Cover",
      title: t("Motorhome.name"),
      description: t("Motorhome.subtitle"),
      buttonText: t("Motorhome.button"),
      page: "About",
    },
    {
      id: "photo-1461749280684-dccba630e2f6",
      title: "Programming",
      description: "Discover the world of coding",
      buttonText: "Start Coding",
      page: "",
    },
    {
      id: "photo-1498050108023-c5249f4df085",
      title: "Development",
      description: "Build amazing applications",
      buttonText: "Get Started",
      page: "",
    },
  ];

  const slides: Slide[] = slidesData.map((slide) => ({
    ...slide,
    buttonLink: `/${lang}/#${slide.page}`,
  }));

  const navbarBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 0, 0, 0.5)", "rgba(255, 0, 0, 0.9)"]
  );

  const dropdownItems: DropdownItems = {
    hbutton1: [
      { label: "ZX", link: "/home-option1" },
      { label: "SR5", link: "/home-option2" },
      { label: "ซีรี่ส์ 5", link: "/home-option2" },
      { label: "ซีรี่ส์ 6", link: "/home-option2" },
      { label: "ซีรี่ส์ 7", link: "/home-option2" },
      { label: "จี 500", link: "/home-option2" },
      { label: "จี 3", link: "/home-option2" },
    ],
    hbutton2: [
      { label: "About Us", link: "/about-us" },
      { label: "Our Mission", link: "/our-mission" },
      { label: "Team", link: "/team" },
    ],
    hbutton3: [
      { label: "Services Overview", link: "/services-overview" },
      { label: "Consulting", link: "/consulting" },
    ],
    hbutton4: [
      { label: "Contact Form", link: "/contact-form" },
      { label: "Support", link: "/support" },
    ],
  };

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
    });

    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  const toggleDropdown = (menu: string): void => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className="">
      <motion.nav
        style={{ backgroundColor: navbarBg }}
        animate={{
          bottom: isScrolled ? "unset" : 0,
          top: isScrolled ? 0 : "unset",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={`fixed w-full h-10 flex items-center space-x-16 px-4 md:px-20 py-4 transition-all duration-300 z-50 ${
          isScrolled ? "top-0" : "bottom-0"
        }`}
      >
        {/* Logo */}
        <div className={`${inter.className} flex items-center`}>
          <a
            href="/"
            className="w-28 h-10 md:w-28 md:h-12 bg-white rounded-full flex items-center justify-center"
          >
            <span className="text-black text-lg md:text-4xl font-extrabold">
              {t("Motorhome.name")}
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div
          className="hidden md:flex items-center space-x-8 relative ml-4"
          ref={dropdownRef}
        >
          <Link href={`/${lang}/#`}>
            <button className="text-white hover:text-gray-300 transition-colors">
              {t("Motorhome.hbutton1")}
            </button>
          </Link>
          <Link href={`/${lang}/videopage`}>
            <button className="text-white hover:text-gray-300 transition-colors">
              {t("Motorhome.hbutton2")}
            </button>
          </Link>
          <Link href={`/${lang}/buildrv`}>
            <button className="text-white hover:text-gray-300 transition-colors">
              {t("Motorhome.hbutton3")}
            </button>
          </Link>
          <Link href={`/${lang}/Gallery`}>
            <button className="text-white hover:text-gray-300 transition-colors">
              {t("Motorhome.hbutton4")}
            </button>
          </Link>
          <Link href={`/${lang}/Contact`}>
            <button className="text-white hover:text-gray-300 transition-colors">
              {t("Motorhome.hbutton5")}
            </button>
          </Link>
          <Link href={`/${lang}/Brochure`}>
            <button className="text-white hover:text-gray-300 transition-colors">
              {t("Motorhome.hbutton6")}
            </button>
          </Link>
          {/* <div className="relative">
            <button
              onClick={() => toggleDropdown("hbutton6")}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("Motorhome.hbutton6")}
            </button>
            {openDropdown === "hbutton6" && (
              <div className="absolute top-full mt-2 bg-white text-black rounded shadow-lg py-2 w-48">
                {[
                  { label: "Option 1", link: `/${lang}/option1` },
                  { label: "Option 2", link: `/${lang}/option2` },
                  { label: "Option 3", link: `/${lang}/option3` },
                  { label: "Option 4", link: `/${lang}/option4` },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div> */}
          {/* {Object.keys(dropdownItems).map((key) => (
            <div key={key} className="relative">
              <button
                onClick={() => toggleDropdown(key)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {t(`Motorhome.${key}`)}
              </button>
              {openDropdown === key && (
                <div className="absolute top-full mt-2 bg-white text-black rounded shadow-lg py-2 w-48">
                  {dropdownItems[key].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))} */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-2 z-50"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center text-white"
        >
          {Object.keys(dropdownItems).map((key) => (
            <div key={key} className="relative mb-6">
              <button
                onClick={() => toggleDropdown(key)}
                className="text-xl hover:text-gray-300 transition-colors"
              >
                {t(`Motorhome.${key}`)}
              </button>
              {openDropdown === key && (
                <div className="mt-2 bg-white text-black rounded shadow-lg py-2 w-48 text-center">
                  {dropdownItems[key].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Index;
