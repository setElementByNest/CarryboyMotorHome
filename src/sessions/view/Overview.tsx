"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface CarModel {
  name: string;
  models: string[];
  image: string; // เพิ่มฟิลด์ image
}

interface NavbarProps {
  lang?: string;
}

const carData: Record<string, CarModel> = {
  "TOYOTA-REVO": {
    name: "TOYOTA HILUX REVO",
    models: [
      "2.4 ENTRY 2WD A/T",
      "2.8 ENTRY 2WD M/T",
      "2.8 ENTRY 4WD M/T",
      "2.8 ENTRY 4WD A/T",
    ],
    image: "/img/Sesstion/Overview/Toyota.png", // รูปภาพของ TOYOTA REVO
  },
  "TOYOTA-CHAMP": {
    name: "TOYOTA HILUX CHAMP",
    models: ["2.4 Diesel AT LWB"],
    image: "/img/Sesstion/Overview/Toyota_champ.png", // รูปภาพของ TOYOTA CHAMP
  },
  MITSUBISHI: {
    name: "ALL-NEW TRITON 2023",
    models: ["2.4 PRO 4WD A/T"],
    image: "/img/Sesstion/Overview/Mitsubishi.png", // รูปภาพของ MITSUBISHI
  },
  "MOTORHOME-L": {
    name: "MERCEDES-BENZ",
    models: [
      "Length : 4900 mm",
      "Width : 2200 mm",
      "Sleeping Capacity : Up to 6 persons",
      "Refrigerator : 80 liters",
      "Fresh Water : 90 liters",
      "Solar Panel : 400W",
      "Battery : 9600W LiFePO4",
    ],
    image: "/img/Sesstion/Overview/mercedes-benz.png", // รูปภาพของ MITSUBISHI
  },
  // "MERCEDES-BENZ": {
  //   name: "MERCEDES-BENZ X-CLASS",
  //   models: ["MOTORHOME - L"],
  //   image: "/img/Sesstion/Overview/mercedes-benz.png", // รูปภาพของ MERCEDES-BENZ
  // },
};

const ImageModal = ({ src, alt }: { src: string; alt: string }) => (
  <Dialog>
    <DialogTrigger asChild>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-auto max-h-[60vh] md:max-h-[55vh] object-contain mb-4 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
    </DialogTrigger>
    <DialogContent className="w-[95vw] h-[95vh] p-0 bg-transparent border-none">
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
    </DialogContent>
  </Dialog>
);

const Index = ({ lang }: { lang: string }) => {
  const [selectedCar, setSelectedCar] = useState<string>("ALL");
  const router = useRouter();
  const t = useTranslations("buildrv");

  const handleCardClick = (carKey: string) => {
    setSelectedCar(carKey);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const product = {
    title: "MERCEDES-BENZ",
    description:
      "Luxury motorhome with modern amenities and efficient space utilization.",
    images: ["/img/Sesstion/Overview/mercedes-benz.png"],
    specifications: [
      { label: "Length", value: "4900 mm" },
      { label: "Width", value: "2200 mm" },
      { label: "Sleeping Capacity", value: "Up to 6 persons" },
      { label: "Refrigerator", value: "80 liters" },
      { label: "Fresh Water", value: "90 liters" },
      { label: "Solar Panel", value: "400W" },
      { label: "Battery", value: "9600W LiFePO4" },
    ],
  };

  const openGallery = () => {
    setCurrentImageIndex(0);
    setIsGalleryOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className=" bg-gray-100 p-4 md:p-8 text-black">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Menu */}
        <div className="flex flex-wrap items-center gap-4 p-4 border-b border-gray-200">
          {["ALL", ...Object.keys(carData)].map((car) => (
            <motion.button
              key={car}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCar(car)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCar === car
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {car}
            </motion.button>
          ))}
          <Button
            onClick={() => router.push(`/${lang}/buildrv`)}
            className="ml-auto bg-red-600 hover:bg-red-700 text-white"
          >
            {t("textD36")}
          </Button>
        </div>

        {/* Content */}
        <div className="relative min-h-[500px] p-4">
          <AnimatePresence mode="wait">
            {selectedCar === "ALL" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 w-full">
                <motion.div
                  key="all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 md:grid-cols-1 gap-6 p-4 "
                >
                  {Object.entries(carData).map(([key, car]) =>
                    car.name !== "MERCEDES-BENZ" ? (
                      <motion.div
                        key={key}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-50 p-6 rounded-xl shadow-md cursor-pointer"
                        onClick={() => handleCardClick(key)}
                      >
                        <h2 className="text-xl font-bold mb-4">{car.name}</h2>
                        {/* รูปภาพของแต่ละยี่ห้อ */}
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-48 object-contain mb-4"
                        />
                        {/* <div className="space-y-2">
                          {car.models.map((model) => (
                            <p key={model} className="text-gray-600">
                              {model}
                            </p>
                          ))}
                        </div> */}
                      </motion.div>
                    ) : (
                      <></>
                    )
                  )}
                </motion.div>
                <motion.div
                  key="all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 md:grid-cols-1 gap-1 p-1 "
                >
                  {Object.entries(carData).map(([key, car]) =>
                    car.name === "MERCEDES-BENZ" ? (
                      <motion.div
                        key={key}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-50 p-6 rounded-xl shadow-md cursor-pointer"
                        onClick={() => handleCardClick(key)}
                      >
                        <h2 className="text-xl font-bold mb-4">{car.name}</h2>
                        {/* รูปภาพของแต่ละยี่ห้อ */}
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full object-contain mb-4"
                        />
                        <div className="space-y-2">
                          {car.models.map((model) => (
                            <p key={model} className="text-gray-600">
                              {model}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <></>
                    )
                  )}
                </motion.div>
              </div>
            ) : (
              carData[selectedCar] && (
                <motion.div
                  key={selectedCar}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="flex flex-col md:flex-row gap-8 p-4"
                >
                  {/* รูปภาพในหน้า Details */}
                  <ImageModal
                    src={carData[selectedCar].image}
                    alt={carData[selectedCar].name}
                  />
                  <div className="space-y-4">
                    <motion.h2
                      className="text-2xl font-bold"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {carData[selectedCar].name}
                    </motion.h2>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-600">
                        Model
                      </h4>
                      {carData[selectedCar].models.map((model) => (
                        <motion.h3
                          key={model}
                          className="text-gray-800"
                          whileHover={{ x: 10 }}
                        >
                          {model}
                        </motion.h3>
                      ))}
                    </motion.div>
                    {/* <Button
                      onClick={() =>
                        router.push(`/detail/${selectedCar.toLowerCase()}`)
                      }
                      className="ml-auto bg-red-600 hover:bg-red-700 text-white"
                    >
                      ดูรายละเอียดเพิ่มเติม
                    </Button> */}
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* <section className="py-5 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col bg-secondary/50 rounded-lg p-8 hover:bg-secondary/70 transition-all duration-300 transform hover:scale-[1.02] animate-fade-up">
              <div className="w-full space-y-4">
                <button
                  onClick={openGallery}
                  className="w-full aspect-video overflow-hidden rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.03] group"
                >
                  <img
                    src={product.images[0]}
                    alt={`${product.title} floorplan`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </button>
                <div className="flex justify-center space-x-2">
                  {product.images.map((_, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        imgIndex === currentImageIndex
                          ? "bg-primary scale-125"
                          : "bg-gray-600 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold transform transition-all duration-300 hover:text-primary">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 transition-all duration-300 hover:text-gray-300">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg transition-all duration-300 hover:bg-red-400"
                    >
                      <p className="text-sm text-black">{spec.label}</p>
                      <p className="font-semibold">{spec.value}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    window.open(`/pdf/2025-Bez-Motorhome-01.pdf`, "_blank")
                  }
                  className="w-full bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Request Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="w-full max-w-[95vw] sm:max-w-[80vw] lg:max-w-[60vw] max-h-[90vh] p-0 border-0 animate-fade-in">
          <DialogHeader>
            <DialogTitle className="sr-only">
              {product.title} Gallery
            </DialogTitle>
          </DialogHeader>
          <div className="relative animate-fade-in flex justify-center items-center">
            <img
              src={product.images[currentImageIndex]}
              alt={`${product.title} view ${currentImageIndex + 1}`}
              className="w-full max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain transition-opacity duration-300"
            />

            {/* ปุ่ม Previous */}
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 sm:p-3 lg:p-4 rounded-full hover:bg-black/70 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* ปุ่ม Next */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 sm:p-3 lg:p-4 rounded-full hover:bg-black/70 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {product.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={() => setCurrentImageIndex(imgIndex)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 transform ${
                    imgIndex === currentImageIndex
                      ? "bg-primary scale-125"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
