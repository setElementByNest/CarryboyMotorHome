"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface SafetyFeature {
  mainImage: string;
  gallery: string[];
  title: string;
  description: string;
}

const safetyFeatures: SafetyFeature[] = [
  {
    mainImage:
      "https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/safety1.webp",
    gallery: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    ],
    title: "IDAS",
    description:
      "Isuzu's Intelligent Driver Assistance System◊ (IDAS) offers cutting-edge safety technology that works tirelessly to protect you and your family. It's standard across every D-MAX model.",
  },
  {
    mainImage:
      "https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/safety2.webp",
    gallery: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    ],
    title: "BLIND SPOT MONITORING",
    description:
      "Blind Spot Monitoring (BSM) provides a visual warning in your side mirrors when an obstacle is approaching in your blind spot. (BSM will automatically disable when a towing device is connected to the vehicle via a genuine Tow Bar Wiring Harness).",
  },
  {
    mainImage:
      "https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/safety3.webp",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    ],
    title: "REAR CROSS TRAFFIC BRAKING",
    description:
      "Rear Cross Traffic Braking monitors your surrounding area while reversing into traffic. It will automatically brake if an object approaches from the left or right.",
  },
  {
    mainImage:
      "https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/safety4.webp",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    ],
    title: "LANE KEEP ASSIST",
    description:
      "The Lane Keep Assist system detects road lane markings and assists steering operation by keeping your vehicle in its lane while Adaptive Cruise Control is engaged.",
  },
];

const SafetyDetails = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-3xl md:text-4xl font-bold mb-8 text-[#1a365d]"
        >
          Safety Details
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <p className="mb-6 text-gray-700">
            The Isuzu D-MAX comes equipped with a comprehensive suite of safety
            features designed to protect you and your passengers. From advanced
            driver assistance systems to robust structural engineering, every
            aspect has been carefully considered to ensure maximum safety on the
            road.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Active Safety Features
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Autonomous Emergency Braking</li>
                <li>Lane Departure Warning</li>
                <li>Blind Spot Monitoring</li>
                <li>Rear Cross Traffic Alert</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Passive Safety Features
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>8 SRS Airbags</li>
                <li>High-Tensile Steel Cabin</li>
                <li>Anti-lock Braking System (ABS)</li>
                <li>Electronic Stability Control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSafetyDetails, setShowSafetyDetails] = useState(false);

  const openFullscreen = (image: string, gallery: string[]) => {
    setSelectedImage(image);
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
    setSelectedGallery([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedGallery.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === selectedGallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedGallery.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedGallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-3xl md:text-4xl font-bold mb-8 text-[#1a365d]"
        >
          CUTTING EDGE SAFETY
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] cursor-pointer"
            onClick={() =>
              openFullscreen(
                "https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/safety.webp",
                []
              )
            }
          >
            <img
              src="https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/safety.webp"
              alt="D-MAX"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 p-8 flex flex-col items-start justify-center"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1a365d]">
                Maximum 5-Star Safety
              </h3>
              <p className="mb-6 text-gray-700">
                Every{" "}
                <span className="inline-block">
                  Isuzu <span className="inline-block">D-MAX</span>
                </span>{" "}
                includes a comprehensive suite of safety features that operate
                automatically and independently to protect you. Isuzu s
                Intelligent Driver Assistance System◊ (IDAS) is a cutting-edge
                driver assistance system designed to protect and enhance your
                driving experience. All rigorously tested to achieve a maximum
                5-star ANCAP safety rating.
              </p>
              <button
                onClick={() => setShowSafetyDetails(true)}
                className="bg-[#1a365d] text-white px-6 py-3 rounded-md hover:bg-[#1a365d]/90 transition-colors duration-200"
              >
                Learn More About Safety Features
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="group h-full"
            >
              <div className="h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div
                  className="relative h-48 cursor-pointer overflow-hidden"
                  onClick={() =>
                    openFullscreen(feature.mainImage, feature.gallery)
                  }
                >
                  <img
                    src={feature.mainImage}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-[#1a365d] group-hover:text-[#1a365d]/80 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {feature.gallery.slice(0, 3).map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`Gallery ${imgIndex + 1}`}
                        className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openFullscreen(img, feature.gallery)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showSafetyDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
          >
            <button
              className="fixed top-4 right-4 text-white hover:text-gray-300 z-50"
              onClick={() => setShowSafetyDetails(false)}
            >
              <X size={32} />
            </button>
            <SafetyDetails />
          </motion.div>
        )}

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeFullscreen}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
              onClick={closeFullscreen}
            >
              <X size={32} />
            </button>

            {selectedGallery.length > 0 ? (
              <>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-4xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  &#10094;
                </button>
                <img
                  src={selectedGallery[currentImageIndex]}
                  alt="Fullscreen"
                  className="max-h-[90vh] max-w-[90vw] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-4xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  &#10095;
                </button>
              </>
            ) : (
              <img
                src={selectedImage}
                alt="Fullscreen"
                className="max-h-[90vh] max-w-[90vw] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
