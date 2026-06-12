"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

const Index = () => {
  const [selectedOption, setSelectedOption] = useState<number>(2);
  const t = useTranslations("Hero");

  const options = [
    {
      id: 0,
      text: t("Motorhome.textview13"),
      image:
        "/img/sizesIM/carryboy-motorhome-floor-plan-modern-interior-layout-1.jpg",
    },
    {
      id: 1,
      text: t("Motorhome.textview14"),
      image:
        "/img/sizesIM/carryboy-motorhome-floor-plan-modern-interior-layout-2.jpg",
    },
    {
      id: 2,
      text: t("Motorhome.textview15"),
      image:
        "/img/sizesIM/carryboy-motorhome-floor-plan-modern-interior-layout-3.jpg",
    },
    {
      id: 3,
      text: t("Motorhome.textview16"),
      image:
        "/img/sizesIM/carryboy-motorhome-floor-plan-modern-interior-layout-4.jpg",
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg overflow-hidden shadow-xl"
        >
          <div className="md:flex">
            {/* Image Section */}
            <motion.div
              className="md:w-1/2 aspect-[3/2] relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.img
                key={options[selectedOption].image}
                src={options[selectedOption].image}
                alt={options[selectedOption].text}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="md:w-1/2 p-8 text-black"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-kanit font-normal mb-2">
                {t("Motorhome.textview11")}
              </h2>
              <h3 className="text-lg text-gray-600 mb-6">
                {t("Motorhome.textview12")}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {options.map((option) => (
                  <motion.button
                    key={option.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                      ${
                        selectedOption === option.id
                          ? "border-2 border-[#CC0000] text-gray-800"
                          : "border-2 border-[#CCCCCC] text-gray-600 hover:border-gray-400"
                      }`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
