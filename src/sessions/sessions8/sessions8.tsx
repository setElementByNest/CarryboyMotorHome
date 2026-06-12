"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Car {
  id: string;
  image: string;
  title: string;
  price: number;
  addedDays: number;
  specs: {
    condition: string;
    mileage: string;
    transmission: string;
    type: string;
  };
}

const cars: Car[] = [
  {
    id: "1",
    image: "https://edge.pxcrush.net/cars/dealer/amgxif2zarfi4i3xa10xbzagz.jpg",
    title: "2024 Mitsubishi ASX LS XD Auto 2WD MY24",
    price: 30990,
    addedDays: 2,
    specs: {
      condition: "Used",
      mileage: "9,143 kms",
      transmission: "CVT",
      type: "SUV",
    },
  },
  {
    id: "2",
    image: "https://edge.pxcrush.net/cars/dealer/e6rk0icruy4t2jx08ti10rat3.jpg",
    title: "2023 Mitsubishi Outlander ES ZM Auto 2WD MY23",
    price: 35990,
    addedDays: 4,
    specs: {
      condition: "Used",
      mileage: "12,174 kms",
      transmission: "CVT",
      type: "SUV",
    },
  },
  {
    id: "3",
    image: "https://edge.pxcrush.net/cars/dealer/6sp3zes7zhmvjmeg557jqsh3k.jpg",
    title: "2022 Haval H6GT Ultra Auto 4WD",
    price: 32990,
    addedDays: 4,
    specs: {
      condition: "Used",
      mileage: "61,608 kms",
      transmission: "Automatic",
      type: "SUV",
    },
  },
  {
    id: "4",
    image: "https://edge.pxcrush.net/cars/dealer/afdnwkxe6i1igask43dvilbul.jpg",
    title: "2024 Mitsubishi Eclipse Cross LS YB Auto 2WD MY24",
    price: 32888,
    addedDays: 5,
    specs: {
      condition: "Used",
      mileage: "16,847 kms",
      transmission: "CVT",
      type: "SUV",
    },
  },
  {
    id: "5",
    image: "https://edge.pxcrush.net/cars/dealer/bwa2n20o593h1og9jyxxk2033.jpg",
    title: "2020 Mitsubishi Eclipse Cross LS YA Auto 2WD MY20",
    price: 20990,
    addedDays: 5,
    specs: {
      condition: "Used",
      mileage: "128,184 kms",
      transmission: "CVT",
      type: "SUV",
    },
  },
  {
    id: "6",
    image: "https://edge.pxcrush.net/cars/dealer/9i8lxzdo0duddhb78l993ry7.jpg",
    title: "2019 Mitsubishi Outlander Black Edition ZL Auto 2WD MY20",
    price: 25990,
    addedDays: 5,
    specs: {
      condition: "Used",
      mileage: "97,261 kms",
      transmission: "CVT",
      type: "SUV",
    },
  },
  {
    id: "7",
    image: "https://edge.pxcrush.net/cars/dealer/820rcv2zgnr3hnajfmmuily0k.jpg",
    title: "2021 Peugeot 2008 Allure Auto MY21",
    price: 21990,
    addedDays: 5,
    specs: {
      condition: "Used",
      mileage: "64,143 kms",
      transmission: "Automatic",
      type: "SUV",
    },
  },
  {
    id: "8",
    image: "https://edge.pxcrush.net/cars/dealer/ek83gkbn9tatnl1a88aku6fyk.jpg",
    title: "2018 Mazda 3 SP25 Astina BN Series Auto",
    price: 24990,
    addedDays: 6,
    specs: {
      condition: "Used",
      mileage: "48,636 kms",
      transmission: "Automatic",
      type: "Hatch",
    },
  },
  {
    id: "9",
    image: "https://edge.pxcrush.net/cars/dealer/erypmvp8i748lsy1892gge9go.jpg",
    title: "2017 Honda Civic RS Auto MY16",
    price: 24990,
    addedDays: 6,
    specs: {
      condition: "Used",
      mileage: "60,264 kms",
      transmission: "CVT",
      type: "Sedan",
    },
  },
  {
    id: "10",
    image: "https://edge.pxcrush.net/cars/dealer/5kxcw303bmxuk2lcfra3ahn5k.jpg",
    title: "2023 Volkswagen Tiguan 162TSI R-Line Allspace 5N Auto 4MOTION MY24",
    price: 57990,
    addedDays: 7,
    specs: {
      condition: "Used",
      mileage: "11,542 kms",
      transmission: "Automatic",
      type: "SUV",
    },
  },
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  useEffect(() => {
    let intervalId: number;

    if (isAutoPlaying && !selectedCar) {
      intervalId = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(cars.length / 4));
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, selectedCar]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(cars.length / 4));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(cars.length / 4)) % Math.ceil(cars.length / 4)
    );
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsAutoPlaying(false);
  };

  const handleBackClick = () => {
    setSelectedCar(null);
    setIsAutoPlaying(true);
  };

  if (selectedCar) {
    return (
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-12 text-black">
        <div className="max-w-full mx-auto">
          <Button
            variant="ghost"
            onClick={handleBackClick}
            className="mb-6 flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Gallery
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={selectedCar.image}
              alt={selectedCar.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  {selectedCar.title}
                </h1>
                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                  Added {selectedCar.addedDays} days ago
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${selectedCar.price.toLocaleString()}
                </span>
                <span className="text-lg text-gray-600 ml-2">
                  Ex Govt Charges
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">Specifications</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Condition:</span>
                      <span className="font-medium">
                        {selectedCar.specs.condition}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Mileage:</span>
                      <span className="font-medium">
                        {selectedCar.specs.mileage}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Transmission:</span>
                      <span className="font-medium">
                        {selectedCar.specs.transmission}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Type:</span>
                      <span className="font-medium">
                        {selectedCar.specs.type}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3">Features</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Air Conditioning</li>
                    <li>✓ Power Steering</li>
                    <li>✓ Power Windows</li>
                    <li>✓ Bluetooth Connectivity</li>
                  </ul>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Contact Dealer
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Featured Vehicles
        </motion.h1>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute -left-24 top-1/2 -translate-y-1/2 z-10 bg-black/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            ←
          </button>

          <div className="overflow-hidden">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                {cars
                  .slice(currentIndex * 4, (currentIndex + 1) * 4)
                  .map((car) => (
                    <motion.div
                      key={car.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                      onClick={() => handleCarClick(car)}
                    >
                      <div className="relative">
                        <img
                          src={car.image}
                          alt={car.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-md text-sm">
                          Added {car.addedDays} days ago
                        </div>
                      </div>

                      <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                          {car.title}
                        </h2>

                        <div className="mb-4">
                          <span className="text-2xl font-bold text-gray-900">
                            ${car.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-600 ml-2">
                            Ex Govt Charges
                          </span>
                        </div>

                        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <li>{car.specs.condition}</li>
                          <li>{car.specs.mileage}</li>
                          <li>{car.specs.transmission}</li>
                          <li>{car.specs.type}</li>
                        </ul>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute -right-24 top-1/2 -translate-y-1/2 z-10 bg-black/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            →
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(cars.length / 4) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index ? "bg-orange-500 w-4" : "bg-gray-300"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
