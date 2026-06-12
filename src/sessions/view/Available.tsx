/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { use, useContext, useEffect, useState } from "react";
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
import { TypeCarContext, useTypeCar } from "@/context/TypeCarContext";

interface CarModel {
  name: string;
  models: string[];
  image: string; // เพิ่มฟิลด์ image
}

interface NavbarProps {
  lang?: string;
}

const ImageModal = ({ src, alt }: { src: string; alt: string }) => (
  <Dialog>
    <DialogTrigger asChild>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-auto max-h-[50vh] md:max-h-[50vh] object-contain mb-4 cursor-pointer"
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
  const { typeCar, setTypeCar, typeCar_list } = useTypeCar();
  const [selectedCar, setSelectedCar] = useState<number>(0);
  // const [selectedCarType, setSelectedCarType] = useState<string>("ALL");
  const router = useRouter();
  const t = useTranslations("buildrv");

  const carData: CarModel[] = [
    {
      name: "TOYOTA HILUX TRAVO",
      models: [
        "2.4 ENTRY 2WD A/T",
        "2.8 ENTRY 2WD M/T",
        "2.8 ENTRY 4WD M/T",
        "2.8 ENTRY 4WD A/T",
      ],
      image: "/img/type_a/Travo-A.jpg",
    },
    {

      name: "TOYOTA HILUX CHAMP",
      models: ["2.4 Diesel AT LWB"],
      image: "/img/type_a/Champ Type B.png",
    },
    {
      name: "ALL-NEW TRITON",
      models: ["2.4 PRO 4WD A/T"],
      image: "/img/type_a/Mitsu Type A.png", // รูปภาพของ MITSUBISHI
    }
  ];

  const carData2: CarModel[] = [
    {
      name: "TOYOTA HILUX TRAVO",
      models: [
        "2.4 ENTRY 2WD A/T",
        "2.8 ENTRY 2WD M/T",
        "2.8 ENTRY 4WD M/T",
        "2.8 ENTRY 4WD A/T",
      ],
      image: "/img/type_b/TravoB copy.png",
    },
    {
      name: "TOYOTA HILUX CHAMP",
      models: ["2.4 Diesel AT LWB"],
      image: "/img/type_b/Champ.jpg",
    },
    {
      name: "ALL-NEW TRITON",
      models: ["2.4 PRO 4WD A/T"],
      image: "/img/type_b/Mitsu Type B.png",
    }
  ];

  const carData3: CarModel[] = [
    {
      name: "TOYOTA HILUX TRAVO",
      models: [
        "Length : 4900 mm",
        "Width : 2200 mm",
        "Sleeping Capacity : Up to 6 persons",
        "Refrigerator : 80 liters",
        "Fresh Water : 80 liters",
        "Solar Panel : 400W",
        "Battery : 9600W LiFePO4",
      ],
      image: "/img/type_l/LA Ex.jpg",
    },
    {
      name: "ALL-NEW TRITON",
      models: [
        "Length : 4900 mm",
        "Width : 2200 mm",
        "Sleeping Capacity : Up to 6 persons",
        "Refrigerator : 80 liters",
        "Fresh Water : 80 liters",
        "Solar Panel : 400W",
        "Battery : 9600W LiFePO4",
      ],
      image: "/img/type_l/Type L Mitsu-1.jpg",
    }
  ];

  const carData4: CarModel[] = [
    {
      name: "TOYOTA HILUX TRAVO",
      models: [
        "Length : 4900 mm",
        "Width : 2200 mm",
        "Sleeping Capacity : Up to 6 persons",
        "Refrigerator : 80 liters",
        "Fresh Water : 80 liters",
        "Solar Panel : 400W",
        "Battery : 9600W LiFePO4",
      ],
      image: "/img/type_l/LB ex.png",
    },
    {
      name: "ALL-NEW TRITON",
      models: [
        "Length : 4900 mm",
        "Width : 2200 mm",
        "Sleeping Capacity : Up to 6 persons",
        "Refrigerator : 80 liters",
        "Fresh Water : 80 liters",
        "Solar Panel : 400W",
        "Battery : 9600W LiFePO4",
      ],
      image: "/img/type_l/LB triton ex.png",
    }
  ];

  const carType = [typeCar_list[0][1], typeCar_list[0][2], typeCar_list[1][1], typeCar_list[1][2]];
  const carMenu1 = ["TOYOTA-TRAVO", "TOYOTA-CHAMP", "MITSUBISHI"];
  const carMenu2 = ["TOYOTA-TRAVO", "TOYOTA-CHAMP", "MITSUBISHI"];
  const carMenu3 = ["TOYOTA-TRAVO", "MITSUBISHI"];

  const handleCardClick = (carKey: number) => {
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

  useEffect(() => {
    setSelectedCar(0);
  }, [typeCar]);

  return (
    <div className=" bg-gray-100 text-black">
      <div className="w-[90%] md:max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col p-4">

          <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-gray-200">
            {(() => {
              const carMenu = (() => {
                switch (typeCar) {
                  case typeCar_list[0][1]:
                    return carMenu1;
                  case typeCar_list[0][2]:
                    return carMenu2;
                  case typeCar_list[1][1]:
                    return carMenu3;
                  case typeCar_list[1][2]:
                    return carMenu3;
                  default:
                    return [];
                }
              })();

              return carMenu.map((car, index) => (
                <motion.button
                  key={car}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { handleCardClick(index); }}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedCar === index
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {car}
                </motion.button>
              ));
            })()}
          </div>
        </div>

        {/* Content */}
        <div className="relative min-h-[500px] p-4">
          <AnimatePresence mode="wait">
            {typeCar === "ALL" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full items-start">
                {[
                  { type: carType[0], data: carData },
                  { type: carType[1], data: carData2 },
                  { type: carType[2], data: carData3 }
                ].map(({ type, data }, index) => (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-1 gap-6 p-1"
                  >
                    <h2 className="text-2xl font-bold mb-0">{type} :</h2>
                    {Object.entries(data).map(([key, car], index) => (
                      <motion.div
                        key={key}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-50 p-6 rounded-xl shadow-md cursor-pointer"
                        onClick={() => {
                          handleCardClick(index);
                        }}
                      >
                        <h2 className="text-xl font-bold mb-4">{car.name}</h2>
                        <img
                          src={car.image}
                          alt={car.name}
                          className={`w-full h-48 object-contain mb-4`}
                        // className={`w-full ${type === carType[2] ? "" : "h-48"} object-contain mb-4`}
                        />
                        {/* {type === carType[2] && (
                          <div className="space-y-2">
                            {car.models.map((model) => (
                              <p key={model} className="text-gray-600">
                                {model}
                              </p>
                            ))}
                          </div>
                        )} */}
                      </motion.div>
                    ))}
                  </motion.div>
                ))}
              </div>
            ) : (
              (() => {
                const currentData = typeCar === "TYPE-A" ? carData[selectedCar] : typeCar === "TYPE-B" ? carData2[selectedCar] : typeCar === "TYPE-LA" ? carData3[selectedCar] : typeCar === "TYPE-LB" ? carData4[selectedCar] : null;
                console.log("selectedCar:", selectedCar);
                return currentData ? (
                  <motion.div
                    key={selectedCar}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="flex flex-col md:flex-row gap-8 p-4"
                  >
                    {/* รูปภาพในหน้า Details */}
                    <ImageModal
                      src={currentData.image}
                      alt={currentData.name}
                    />
                    <div className="space-y-4 w-full md:w-1/2">
                      <motion.h3
                        className="text-2xl font-semibold flex gap-2 items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {"รถบ้าน"}
                        <span className="text-red-600">{typeCar}</span>
                      </motion.h3>
                      <motion.h2
                        className="text-2xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {currentData.name}
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
                        {currentData.models.map((model) => (
                          <motion.h3
                            key={model}
                            className="text-gray-800"
                            whileHover={{ x: 10 }}
                          >
                            {model}
                          </motion.h3>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                ) : null;
              })()
            )}
          </AnimatePresence>
        </div>
      </div>
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
                  className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 transform ${imgIndex === currentImageIndex
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
