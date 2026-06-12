/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { useTypeCar } from "@/context/TypeCarContext";

interface CarTypeProps {
  name: string;
  detail1: string;
  detail2: string;
  image: string;
  feature: CarFeature[];
}

interface CarFeature {
  icon: string;
  description: string;
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
  const { typeCar, setTypeCar, typeCar_list, typeGroup, setTypeGroup, typeGroup_list } = useTypeCar();
  const router = useRouter();
  const t = useTranslations("buildrv");
  const t2 = useTranslations("Hero");

  const carFeatures: CarFeature[] = [
    {
      icon: "/img/viewC/5/iconsitem-1.png",
      description: t2("Motorhome.textview24"),
    },
    {
      icon: "/img/viewC/5/iconsitem-2.png",
      description: t2("Motorhome.textview25"),
    },
    {
      icon: "/img/viewC/5/iconsitem-3.png",
      description: t2("Motorhome.textview26"),
    },
    {
      icon: "/img/viewC/5/iconsitem-4.png",
      description: t2("Motorhome.textview27"),
    },
    {
      icon: "/img/viewC/5/iconsitem-5.png",
      description: t2("Motorhome.textview28"),
    },
    {
      icon: "/img/viewC/5/iconsitem-6.png",
      description: t2("Motorhome.textview29"),
    },
    {
      icon: "/img/viewC/5/iconsitem-7.png",
      description: t2("Motorhome.textview30"),
    },
  ];

  const car_eachtype: Record<string, CarTypeProps>[] = [{
    "TYPE-A": {
      name: "TYPE-A",
      detail1: "ออกแบบมาเพื่อครอบครัว นั่งได้พร้อมหน้า นอนได้สูงสุด 6 คน",
      detail2: "พื้นที่ภายในจัดสรรเพื่อให้ทุกคนเดินทางได้พร้อมกัน รองรับการนั่งหลายที่นั่ง และมอนได้สูงสุด 6 คน เหมาะทั้งทริประยะสั้นและทริปครอบครัวยาว สิ่งอำนวยความสะดวกครบครัน",
      image: "/img/type_a/Travo-A.jpg",
      feature: carFeatures,
    },
    "TYPE-B": {
      name: "TYPE-B",
      detail1: "ออกแบบมาเพื่อครอบครัว นั่งได้พร้อมหน้า นอนได้สูงสุด 6 คน",
      detail2: "พื้นที่ภายในจัดสรรเพื่อให้ทุกคนเดินทางได้พร้อมกัน รองรับการนั่งหลายที่นั่ง และมอนได้สูงสุด 6 คน เหมาะทั้งทริประยะสั้นและทริปครอบครัวยาว สิ่งอำนวยความสะดวกครบครัน",
      image: "/img/type_b/Mitsu Type B.png",
      feature: carFeatures,
    }}, {
    "TYPE-LA": {
      name: "TYPE-LA",
      detail1: "สำหรับคนรักความสะดวกสบาย และใกล้ชิดธรรมชาติ",
      detail2: "มาพร้อม Hatch Window บานใหญ่พเศษ เปิดมุมมุมมอง 180° รับลม และแสงธรรมชาติได้เต็มที่ เสริมด้วยชุดครัว Pantry สไตล์บ้าน, และห้องน้ำแยกโซนเปียก-แห้ง เพื่อความสะดวกสะอาด และใช้งานง่ายในทุกทริป",
      image: "/img/type_l/LA Ex.jpg",
      feature: carFeatures,
    },
    "TYPE-LB": {
      name: "TYPE-LB",
      detail1: "สำหรับคนรักความสะดวกสบาย และใกล้ชิดธรรมชาติ",
      detail2: "มาพร้อม Hatch Window บานใหญ่พเศษ เปิดมุมมุมมอง 180° รับลม และแสงธรรมชาติได้เต็มที่ เสริมด้วยชุดครัว Pantry สไตล์บ้าน, และห้องน้ำแยกโซนเปียก-แห้ง เพื่อความสะดวกสะอาด และใช้งานง่ายในทุกทริป",
      image: "/img/type_l/LB triton ex.png",
      feature: carFeatures,
    }
  }];

  const car_eachGroup: Record<string, CarTypeProps> = {
    "STANDARD": {
      name: "STANDARD",
      detail1: "",
      detail2: "",
      image: "/img/type_a/Travo-A.jpg",
      feature: carFeatures,
    },
    "EXTENDED": {
      name: "EXTENDED",
      detail1: "",
      detail2: "",
      image: "/img/type_l/LA Ex.jpg",
      feature: carFeatures,
    },
  };

  const handleCardClick = (carKey: string) => {
    setTypeCar(carKey);
  };

  const handleClickGroup = (groupKey: string) => {
    setTypeGroup(groupKey);
    setTypeCar(typeCar_list[groupKey === "STANDARD" ? 0 : 1][0]);
  }

  return (
    <div className=" bg-gray-100 text-black">
      <div className="w-[90%] md:max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Menu */}
        <div className="flex flex-wrap items-center gap-4 p-4 border-b border-gray-200">
          {typeGroup_list.map((group) => (
            <motion.button
              key={group}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClickGroup(group)}
              className={`px-4 py-2 rounded-lg transition-colors ${typeGroup === group
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {group}
            </motion.button>
          ))}
          <Button
            onClick={() => router.push(`/${lang}/buildrv`)}
            className="ml-auto bg-red-600 hover:bg-red-700 text-white hidden md:inline-flex"
          >
            {t("textD36")}
          </Button>
        </div>
        <div className={"relative p-4" + (typeGroup !== "ALL" ? " hidden" : "")}>
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full items-start w-full md:w-2/3 mx-auto">
              {
                Object.entries(car_eachGroup).map(([key, car]) => (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 rounded-xl shadow-md cursor-pointer"
                    onClick={() => {
                      handleClickGroup(key);
                    }}
                  >
                    <h2 className="text-xl font-semibold p-4 text-white w-full text-center">{"รถบ้าน " + car.name}</h2>
                    <img
                      src={car.image}
                      alt={car.name}
                      className={`w-full h-36 md:h-48 object-contain mb-4 bg-white`}
                    />
                  </motion.div>
                ))
              }
            </div>
          </AnimatePresence>
        </div>



        <div className={"flex flex-wrap items-center gap-4 p-4 border-b border-gray-200" + (typeGroup === "ALL" ? " hidden" : "")}>
          {typeCar_list[typeGroup === "STANDARD" ? 0 : 1].map((car) => (
            <motion.button
              key={car}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTypeCar(car)}
              className={`px-4 py-2 rounded-lg transition-colors ${typeCar === car
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {car}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <div className={"relative p-4" + (typeGroup === "ALL" ? " hidden" : "")}>
          <AnimatePresence mode="wait">
            {typeCar === "ALL" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full items-start">
                {
                  Object.entries(car_eachtype[typeGroup === "STANDARD" ? 0 : 1]).map(([key, car]) => (
                    <motion.div
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-50 p-6 rounded-xl shadow-md cursor-pointer"
                      onClick={() => {
                        handleCardClick(key);
                      }}
                    >
                      <h2 className="text-xl font-semibold mb-4">{"รถบ้าน " + car.name}</h2>
                      <img
                        src={car.image}
                        alt={car.name}
                        className={`w-full h-36 md:h-48 object-contain mb-4`}
                      />
                    </motion.div>
                  ))
                }
              </div>
            ) : (
              (() => {
                const currentData = car_eachtype[typeGroup === "STANDARD" ? 0 : 1][typeCar];
                console.log("selectedCar:", typeCar);
                return currentData ? (
                  <motion.div
                    key={typeCar}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="flex flex-col"
                  >
                    <motion.div className="grid grid-cols-1 lg:grid-cols-[65%_auto] gap-8 w-full items-center" >
                      <ImageModal
                        src={currentData.image}
                        alt={currentData.name}
                      />
                      <div className="space-y-4 w-full flex flex-col justify-around gap-8 md:gap-0 min-w-[300px]">
                        <div className="flex flex-col">

                          <motion.h2
                            className="text-2xl md:text-3xl font-semibold pb-2 flex gap-2 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {"รถบ้าน"}
                            <span className="text-red-600">{typeCar}</span>
                          </motion.h2>
                          <motion.h3
                            className="text-xl md:text-2xl font-medium text-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {currentData.detail1}
                          </motion.h3>
                          <br />
                          <motion.h4
                            className="text-base md:text-lg font-normal text-gray-500"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {currentData.detail2}
                          </motion.h4>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6 w-full">
                          {carFeatures.map((feature, index) => (
                            <div
                              key={index}
                              className="flex flex-col gap-1 items-center w-12"
                            >
                              <img
                                src={feature.icon}
                                alt={`Feature icon ${index}`}
                                className="w-8 h-8 object-contain brightness-0"
                              />
                              <h3 className="text-xs font-light text-gray-700 text-center">
                                {feature.description}
                              </h3>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : null;
              })()
            )}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
};

export default Index;
