"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useTypeCar } from "@/context/TypeCarContext";

const Index = () => {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const t = useTranslations("Hero");

  const { typeCar, typeCar_list } = useTypeCar();
  const nowCarType_valid = typeCar; // !== "TYPE-B" ? "TYPE-A" : "TYPE-B";
  const options_type_a = [
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

  const options_type_b = [
    {
      id: 0,
      text: t("Motorhome.textview13"),
      image:
        "/img/sizesIM/Floor plan Type B-1.png",
    },
    {
      id: 1,
      text: t("Motorhome.textview14"),
      image:
        "/img/sizesIM/Floor plan Type B-2.png",
    },
    {
      id: 2,
      text: t("Motorhome.textview16"),
      image:
        "/img/sizesIM/plan type b.jpg",
    },
  ];

  const options_type_l = [
    {
      id: 0,
      text: t("Motorhome.textview13"),
      image:
        "/img/sizesIM/typeL/Floor plan Type L1_0.png",
    },
    {
      id: 1,
      text: t("Motorhome.textview14"),
      image:
        "/img/sizesIM/typeL/Floor plan Type L1-2_0.png",
    },
    {
      id: 2,
      text: t("Motorhome.textview15"),
      image:
        "/img/sizesIM/typeL/Floor plan Type L2_0.png",
    },
    {
      id: 3,
      text: t("Motorhome.textview15-2"),
      image:
        "/img/sizesIM/typeL/Floor plan Type L2BED_0.png",
    }
  ];

  const options_type_lb = [
    {
      id: 0,
      text: t("Motorhome.textview13"),
      image:
        "/img/sizesIM/typeL/Floor plan Type LB-1_0.png",
    },
    {
      id: 1,
      text: t("Motorhome.textview14"),
      image:
        "/img/sizesIM/typeL/Floor plan Type LB_0.png",
    },
  ];

  const options: typeof options_type_a = (() => {
    switch (nowCarType_valid) {
      case typeCar_list[0][1]:
        return options_type_a;
      case typeCar_list[0][2]:
        return options_type_b;
      case typeCar_list[1][1]:
        return options_type_l;
      case typeCar_list[1][2]:
        return options_type_lb;
      default:
        return options_type_a;
    }
  })()
  const selectedOption_edit = nowCarType_valid === "TYPE-B" && selectedOption > 2 ? 0 : selectedOption;

  return (
    <div className=" bg-gray-100 text-black">
      <div className="w-[90%] md:max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
                key={options[selectedOption_edit].image}
                src={options[selectedOption_edit].image}
                alt={options[selectedOption_edit].text}
                className="w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="md:w-1/2 p-2 py-8 md:p-8 text-black"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold pb-4 flex items-center gap-2" >
                {t("Motorhome.textview11")}
                <span className="text-red-600">{typeCar}</span>
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
                      ${selectedOption === option.id
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
