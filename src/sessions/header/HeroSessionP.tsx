"use client";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect, useRef, useContext } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { TypeCarContext } from "@/context/TypeCarContext";

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
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Hero");

  // Data
  const slidesData: Omit<Slide, "buttonLink">[] = [
    {
      id: "carryboy-motorhome-2025-11_1",
      title: t("Motorhome.texth1"),
      description: t("Motorhome.texth2"),
      buttonText: t("Motorhome.button"),
      page: "About",
    },
    {
      id: "carryboy-motorhome-2025-11_2",
      title: t("Motorhome.texth3"),
      description: t("Motorhome.texth4"),
      buttonText: t("Motorhome.button"),
      page: "",
    },
    {
      id: "carryboy-motorhome-2025-11_3",
      title: t("Motorhome.texth5"),
      description: t("Motorhome.texth6"),
      buttonText: t("Motorhome.button"),
      page: "",
    },
    {
      id: "carryboy-motorhome-2025-11_4",
      title: t("Motorhome.texth7"),
      description: t("Motorhome.texth8"),
      buttonText: t("Motorhome.button"),
      page: "",
    },
    {
      id: "carryboy-motorhome-2025-11_5",
      title: t("Motorhome.texth9"),
      description: t("Motorhome.texth10"),
      buttonText: t("Motorhome.button"),
      page: "",
    },
  ];

  const slides: Slide[] = slidesData.map((slide) => ({
    ...slide,
    buttonLink: `/${lang}/#${slide.page}`,
  }));

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {});

    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSlideChange = (index: number): void => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 30000);
    return () => clearInterval(timer);
  }, []);

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
    </div>
  );
};

export default Index;
