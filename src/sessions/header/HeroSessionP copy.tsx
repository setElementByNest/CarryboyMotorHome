"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

// Types
type Slide = {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  page: string;
};

const Index = ({ lang }: { lang: string }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations("Hero");

  // Data
  const slidesData: Omit<Slide, "buttonLink">[] = [
    {
      id: "EP-242-ZX-Cover",
      title: t("carryboy.name"),
      description: t("carryboy.subtitle"),
      buttonText: t("carryboy.button"),
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

  const navbarBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 0, 0, 0.5)", "rgba(255, 0, 0, 0.9)"]
  );

  // สร้าง slides พร้อม buttonLink โดยใช้ `lang`
  const slides: Slide[] = slidesData.map((slide) => ({
    ...slide,
    buttonLink: `/${lang}/#${slide.page}`, // ใช้ `lang` ใน buttonLink
  }));

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-screen">
      <div className="top-0 left-0 w-full h-screen overflow-hidden ">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              transition: { duration: 0.3 },
            }}
            style={{
              backgroundImage: `url(/img/header/${slide.id}.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              pointerEvents: currentSlide === index ? "auto" : "none",
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <h2 className="text-3xl md:text-6xl font-bold mb-4 text-center">
                {slide.title}
              </h2>
              <p className="text-base md:text-xl mb-8 text-center max-w-2xl px-4">
                {slide.description}
              </p>
              <a
                href={slide.buttonLink}
                className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50 rounded-full transition-all transform hover:scale-105 active:scale-95"
              >
                {slide.buttonText}
              </a>
            </div>
          </motion.div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all z-20"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>

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
        className={`fixed w-full h-14 flex items-center justify-between px-4 md:px-20 py-4 transition-all duration-300 z-50 mt-16 ${
          isScrolled ? "top-0" : "bottom-0"
        }`}
      >
        <div className="flex items-center ">
          <a
            href="/"
            className="w-28 h-10 md:w-28 md:h-12 bg-white rounded-full flex items-center justify-center"
          >
            <span className="text-black text-lg md:text-xl font-bold">
              {t("carryboy.name")}
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            {t("carryboy.hbutton1")}
          </a>
          <a
            href="/about"
            className="text-white hover:text-gray-300 transition-colors"
          >
            {t("carryboy.hbutton2")}
          </a>
          <a
            href="/services"
            className="text-white hover:text-gray-300 transition-colors"
          >
            {t("carryboy.hbutton3")}
          </a>
          <a
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors"
          >
            {t("carryboy.hbutton4")}
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            {t("carryboy.hbutton5")}
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            {t("carryboy.hbutton6")}
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            {t("carryboy.hbutton7")}
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            {t("carryboy.hbutton8")}
          </a>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-2 z-50"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <motion.div
          initial={false}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : 20,
          }}
          className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center space-y-8 text-xl">
            <a
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("carryboy.hbutton1")}
            </a>
            <a
              href="/about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("carryboy.hbutton2")}
            </a>
            <a
              href="/services"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("carryboy.hbutton3")}
            </a>
            <a
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("carryboy.hbutton4")}
            </a>
          </div>
          <div className="mt-12 flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("carryboy.hbutton5")}
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("carryboy.hbutton6")}
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("carryboy.hbutton7")}
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("carryboy.hbutton8")}
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Index;
