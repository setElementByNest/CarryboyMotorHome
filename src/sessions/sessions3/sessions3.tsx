"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface CarVariant {
  id: string;
  name: string;
  image: string;
  type: "crew-cab" | "space-cab" | "single-cab";
  drivetrain: "4x4" | "4x2";
  features: {
    engine: string;
    transmission: string;
    towingCapacity: string;
    fuelEfficiency: string;
  };
  keyFeatures: string[];
}

const carVariants: CarVariant[] = [
  // Crew Cab Variants
  {
    id: "1",
    name: "4x4 X-Terrain Crew Cab Ute",
    image:
      "https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/variants/d-max-4x4-x-terrain-crew-cab-sun.webp",
    type: "crew-cab",
    drivetrain: "4x4",
    features: {
      engine: "3.0L Turbo-Diesel",
      transmission: "Automatic",
      towingCapacity: "3.5T",
      fuelEfficiency: "8.0L/100KM",
    },
    keyFeatures: [
      "3.0L Turbo-Diesel Engine",
      '9" Display w/ Apple CarPlay®/Android Auto™',
      '18" Alloy Wheels',
      "Leather Accented Seats",
    ],
  },
  {
    id: "2",
    name: "4x2 LS-U Crew Cab Ute",
    image:
      "https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/variants/d-max-4x2-hr-ls-u-crew-cab-neptu.webp",
    type: "crew-cab",
    drivetrain: "4x2",
    features: {
      engine: "3.0L Turbo-Diesel",
      transmission: "Automatic",
      towingCapacity: "3.5T",
      fuelEfficiency: "8.0L/100KM",
    },
    keyFeatures: [
      "3.0L Turbo-Diesel Engine",
      '9" Display w/ Apple CarPlay®/Android Auto™',
      '18" Alloy Wheels',
      "Bi-LED Headlights & LED DRLs",
    ],
  },
  // Space Cab Variants
  {
    id: "3",
    name: "4x4 LS-U Space Cab Ute",
    image:
      "https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/variants/d-max-4x4-ls-u-space-cab-neptune.webp",
    type: "space-cab",
    drivetrain: "4x4",
    features: {
      engine: "3.0L Turbo-Diesel",
      transmission: "Automatic",
      towingCapacity: "3.5T",
      fuelEfficiency: "8.0L/100KM",
    },
    keyFeatures: [
      "3.0L Turbo-Diesel Engine",
      '9" Display w/ Apple CarPlay®/Android Auto™',
      "Rear Wing Space Cab Doors",
      "Rear Park Assist",
    ],
  },
  {
    id: "4",
    name: "4x2 SX Space Cab Chassis",
    image:
      "https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/variants/d-max-4x2-hr-sx-space-cab-chassi.webp",
    type: "space-cab",
    drivetrain: "4x2",
    features: {
      engine: "3.0L Turbo-Diesel",
      transmission: "Automatic",
      towingCapacity: "3.5T",
      fuelEfficiency: "8.0L/100KM",
    },
    keyFeatures: [
      "3.0L Turbo-Diesel Engine",
      '7" Display w/ Apple CarPlay®/Android Auto™',
      "Rear Wing Space Cab Doors",
      "Reversing Camera",
    ],
  },
  // Single Cab Variants
  {
    id: "5",
    name: "4x4 SX Single Cab Chassis",
    image:
      "https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/variants/d-max-4x4-sx-single-cab-chassis.webp",
    type: "single-cab",
    drivetrain: "4x4",
    features: {
      engine: "3.0L Turbo-Diesel",
      transmission: "Automatic & Manual",
      towingCapacity: "3.5T",
      fuelEfficiency: "8.0L/100KM",
    },
    keyFeatures: [
      "3.0L Turbo-Diesel Engine",
      '7" Display w/ Apple CarPlay®/Android Auto™',
      "Automatic Headlights & Highbeam",
      "Rear Differential Lock",
    ],
  },
  {
    id: "6",
    name: "4x2 SX Single Cab Chassis",
    image:
      "https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/variants/d-max-4x2-hr-sx-single-cab-chass.webp",
    type: "single-cab",
    drivetrain: "4x2",
    features: {
      engine: "3.0L Turbo-Diesel",
      transmission: "Automatic & Manual",
      towingCapacity: "3.5T",
      fuelEfficiency: "8.0L/100KM",
    },
    keyFeatures: [
      "3.0L Turbo-Diesel Engine",
      '7" Display w/ Apple CarPlay®/Android Auto™',
      "Automatic Headlights & Highbeam",
      "Easy-clean Vinyl Flooring",
    ],
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "crew-cab" | "space-cab" | "single-cab"
  >("all");
  const [activeDrivetrain, setActiveDrivetrain] = useState<
    "all" | "4x4" | "4x2"
  >("all");
  const [selectedVariant, setSelectedVariant] = useState<CarVariant | null>(
    null
  );

  const filteredVariants = carVariants.filter((variant) => {
    if (activeTab !== "all" && variant.type !== activeTab) return false;
    if (activeDrivetrain !== "all" && variant.drivetrain !== activeDrivetrain)
      return false;
    return true;
  });

  if (selectedVariant) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <Button
          variant="ghost"
          className="mb-4 flex items-center gap-2 text-primary hover:text-primary-hover"
          onClick={() => setSelectedVariant(null)}
        >
          <ChevronLeft className="h-4 w-4" />
          Back to All Vehicles
        </Button>

        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
          <img
            src={selectedVariant.image}
            alt={selectedVariant.name}
            className="w-full min-h-max object-cover rounded-lg mb-6"
          />

          <h1 className="text-3xl font-bold text-primary mb-4">
            {selectedVariant.name}
          </h1>

          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <img
                src="https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/gearstick-icon.webp"
                alt="Transmission"
                className="w-12 h-12 mx-auto mb-2"
              />
              <p className="font-bold text-primary">Transmission</p>
              <p className="text-gray-700">
                {selectedVariant.features.transmission}
              </p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <img
                src="https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/towbar-icon.webp"
                alt="Towing"
                className="w-12 h-12 mx-auto mb-2"
              />
              <p className="font-bold text-primary">Towing Capacity</p>
              <p className="text-gray-700">
                {selectedVariant.features.towingCapacity}
              </p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <img
                src="https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/fueltank-icon.webp"
                alt="Fuel"
                className="w-12 h-12 mx-auto mb-2"
              />
              <p className="font-bold text-primary">Fuel Efficiency</p>
              <p className="text-gray-700">
                {selectedVariant.features.fuelEfficiency}
              </p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-primary mb-4">
              Key Features
            </h2>
            <ul className="grid grid-cols-2 gap-4">
              {selectedVariant.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-red-600 shadow">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center text-black mb-8">
            D-MAX Range
          </h1>

          <div className="flex justify-center mt-6 space-x-4">
            {["all", "crew-cab", "space-cab", "single-cab"].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-white text-primary"
                    : "bg-white text-red-400 hover:bg-white"
                }`}
                onClick={() => setActiveTab(tab as typeof activeTab)}
              >
                {tab
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </motion.button>
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-4">
            {["all", "4x4", "4x2"].map((drive) => (
              <motion.button
                key={drive}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeDrivetrain === drive
                    ? "bg-white text-primary"
                    : "bg-white-700/50 text-white hover:bg-white"
                }`}
                onClick={() =>
                  setActiveDrivetrain(drive as typeof activeDrivetrain)
                }
              >
                {drive.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredVariants.map((variant) => (
              <motion.div
                key={variant.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
              >
                <img
                  src={variant.image}
                  alt={variant.name}
                  className="w-full h-62 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {variant.name}
                  </h3>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-2 bg-red-50 rounded-lg">
                      <img
                        src="https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/gearstick-icon.webp"
                        alt="Transmission"
                        className="w-8 h-8 mx-auto mb-2"
                      />
                      <p className="text-sm text-gray-700">
                        {variant.features.transmission}
                      </p>
                    </div>
                    <div className="text-center p-2 bg-red-50 rounded-lg">
                      <img
                        src="https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/towbar-icon.webp"
                        alt="Towing"
                        className="w-8 h-8 mx-auto mb-2"
                      />
                      <p className="text-sm text-gray-700">
                        {variant.features.towingCapacity}
                      </p>
                    </div>
                    <div className="text-center p-2 bg-red-50 rounded-lg">
                      <img
                        src="https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/fueltank-icon.webp"
                        alt="Fuel"
                        className="w-8 h-8 mx-auto mb-2"
                      />
                      <p className="text-sm text-gray-700">
                        {variant.features.fuelEfficiency}
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-primary mb-2">
                      Key Features
                    </h4>
                    <ul className="text-sm space-y-1">
                      {variant.keyFeatures.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary-hover text-white"
                    onClick={() => setSelectedVariant(variant)}
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Index;
