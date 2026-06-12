"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

type Feature = {
  title: string;
  subtitle: string;
};

type Highlight = {
  images: string[];
  title: string;
  description: string;
};

type FadeInAnimation = {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: { duration: number };
};

const Index = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const t = useTranslations("sessions");

  const fadeIn: FadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const features: Feature[] = [
    { title: "3.0L", subtitle: "TURBO-DIESEL" },
    { title: "140KW", subtitle: "POWER" },
    { title: "450NM", subtitle: "TORQUE" },
    { title: "3.5T", subtitle: "TOWING+" },
  ];

  const highlights: Highlight[] = [
    {
      images: [
        "/img/header/EP-242-ZX-Cover.jpg",
        "/img/sesstion1/Carryboy-Touring-09.jpg",
        "https://media.adtorqueedge.com/new-cars/isuzu-au/mu-x/towing-3.webp",
      ],
      title: t("page0.cyberlidn"),
      description: t("page0.cyberlid"),
    },
    {
      images: [
        "/img/sesstion1/Carryboy-Touring-01.jpg",
        "https://media.adtorqueedge.com/new-cars/isuzu-au/mu-x/safety-2.webp",
        "https://media.adtorqueedge.com/new-cars/isuzu-au/mu-x/safety-3.webp",
      ],
      title: t("page0.touringn"),
      description: t("page0.touring"),
    },
    {
      images: [
        "https://media.adtorqueedge.com/new-cars/isuzu-au/mu-x/hightlight-3.webp",
        "https://media.adtorqueedge.com/new-cars/isuzu-au/mu-x/interior-2.webp",
        "https://media.adtorqueedge.com/new-cars/isuzu-au/mu-x/interior-3.webp",
      ],
      title: "7-Seat Leather Accented§ Interior",
      description:
        "Room for the whole team and stacks of gear with 7-seats standard across the MU-X range. LS-T models boast a luxurious leather accented§ interior & heated front seats.",
    },
    {
      images: [
        "https://media.adtorqueedge.com/new-cars/isuzu-au/mu-x/hightlight-4.webp",
        "https://media.adtorqueedge.com/new-cars/isuzu-au/mu-x/tech-2.webp",
        "https://media.adtorqueedge.com/new-cars/isuzu-au/mu-x/tech-3.webp",
      ],
      title: "Apple CarPlay® & Android Auto™",
      description:
        "Connect your smartphone to your vehicle via Android Auto™ or wireless Apple CarPlay® which will allow you to play music, navigate, answer phone calls and text messages.",
    },
  ];

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (selectedHighlight) {
      if (isLeftSwipe) {
        nextImage();
      }
      if (isRightSwipe) {
        prevImage();
      }
    }
  };

  const nextImage = () => {
    if (selectedHighlight) {
      setCurrentImageIndex((prev) =>
        prev === selectedHighlight.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedHighlight) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedHighlight.images.length - 1 : prev - 1
      );
    }
  };

  function setSelectedImage(arg0: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <div id="About" className="min-h-screen bg-white text-black">
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
            onClick={() => setShowVideo(false)}
          >
            <div className="w-full h-full max-w-7xl max-h-[80vh] p-4">
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/1774bq6WoJE?autoplay=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        )}

        {selectedHighlight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => {
              setSelectedHighlight(null);
              setCurrentImageIndex(0);
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
              onClick={() => {
                setSelectedHighlight(null);
                setCurrentImageIndex(0);
              }}
            >
              <X className="h-8 w-8" />
            </button>

            <div className="relative w-full max-w-6xl">
              <motion.img
                key={currentImageIndex}
                src={selectedHighlight.images[currentImageIndex]}
                alt={selectedHighlight.title}
                className="w-full h-auto max-h-[70vh] object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 md:block hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 md:block hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {selectedHighlight.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? "bg-white" : "bg-gray-500"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="text-white text-center max-w-2xl mt-4">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {selectedHighlight.title}
              </h3>
              <p className="text-sm md:text-base">
                {selectedHighlight.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h2 className="text-4xl font-bold text-center mb-12" {...fadeIn}>
          {t("page0.head")}
        </motion.h2>

        <div className="flex flex-col-reverse lg:flex-row gap-8 mb-16">
          <motion.div
            className="lg:w-1/2 relative group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              if (e.target === e.currentTarget) {
                setSelectedImage(
                  "https://media.adtorqueedge.com/new-cars/isuzu-au/mu-x/overview.webp"
                );
              } else {
                setShowVideo(true);
              }
            }}
          >
            <img
              src="/img/header/EP-242-ZX-Cover.jpg"
              alt="MU-X"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 bg-gray-100 p-8 rounded-lg"
            {...fadeIn}
          >
            <h3 className="text-3xl font-bold mb-4">{t("page0.head")}</h3>
            <p className="text-gray-600 mb-8">{t("page0.subtitle")}</p>

            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-blue-600">
                    {feature.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {feature.subtitle}
                  </span>
                </motion.div>
              ))}
            </div> */}

            <motion.button
              className="flex items-center gap-2 text-blue-600 font-semibold"
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowVideo(true)}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              {t("page0.watch")}
            </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => {
                setSelectedHighlight(highlight);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={highlight.images[0]}
                  alt={highlight.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded-full text-sm">
                  {highlight.images.length} photos
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2 line-clamp-1">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
