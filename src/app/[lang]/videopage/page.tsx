"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import HeroSectionN from "@/sessions/header/HeroSessionN";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface VideoItem {
  cover: string;
  title: string;
  videoUrl: string;
}
interface VideoItem2 {
  title: string;
  videoid: string;
}

interface MainPageProps {
  params: { lang: string }; // รับค่า lang จาก dynamic route
}

const Index = ({ params: { lang } }: MainPageProps) => {
  const [activeTab, setActiveTab] = useState<"demo" | "review">("demo");
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | VideoItem2 | null>(null);
  const t = useTranslations("videopage");

  const demoVideos: VideoItem[] = [
    {
      cover: "https://img.youtube.com/vi/7J8T4U1-CTQ/maxresdefault.jpg",
      title: t("page0.textt1"),
      videoUrl: "https://www.youtube.com/embed/7J8T4U1-CTQ",
    },
    {
      cover: "https://img.youtube.com/vi/-j19DJH_tRs/maxresdefault.jpg",
      title: t("page0.textt2"),
      videoUrl: "https://www.youtube.com/embed/-j19DJH_tRs",
    },
    {
      cover: "https://img.youtube.com/vi/6JgfGLY94KI/maxresdefault.jpg",
      title: t("page0.textt3"),
      videoUrl: "https://www.youtube.com/embed/6JgfGLY94KI",
    },
    {
      cover: "https://img.youtube.com/vi/xq0ccPHHsQQ/maxresdefault.jpg",
      title: t("page0.textt4"),
      videoUrl: "https://www.youtube.com/embed/xq0ccPHHsQQ",
    },
    {
      cover: "https://img.youtube.com/vi/GUoOu7hWXbM/maxresdefault.jpg",
      title: t("page0.textt5"),
      videoUrl: "https://www.youtube.com/embed/GUoOu7hWXbM",
    },
    {
      cover: "https://img.youtube.com/vi/3kAcQKLFEvY/maxresdefault.jpg",
      title: t("page0.textt6"),
      videoUrl: "https://www.youtube.com/embed/3kAcQKLFEvY",
    },
    {
      cover: "https://img.youtube.com/vi/h958BCnoxXU/maxresdefault.jpg",
      title: t("page0.textt7"),
      videoUrl: "https://www.youtube.com/embed/h958BCnoxXU",
    },
    {
      cover: "https://img.youtube.com/vi/kuW2JDZx_LQ/maxresdefault.jpg",
      title: t("page0.textt8"),
      videoUrl: "https://www.youtube.com/embed/kuW2JDZx_LQ",
    },
    {
      cover: "https://img.youtube.com/vi/mon7Cb012w4/maxresdefault.jpg",
      title: t("page0.textt9"),
      videoUrl: "https://www.youtube.com/embed/mon7Cb012w4",
    },
    {
      cover: "https://img.youtube.com/vi/-pFyjWbRkQo/maxresdefault.jpg",
      title: t("page0.textt10"),
      videoUrl: "https://www.youtube.com/embed/-pFyjWbRkQo",
    },
    {
      cover: "https://img.youtube.com/vi/JroZBevWo6o/maxresdefault.jpg",
      title: t("page0.textt11"),
      videoUrl: "https://www.youtube.com/embed/JroZBevWo6o",
    },
    {
      cover: "https://img.youtube.com/vi/rvlwEN9LO0U/maxresdefault.jpg",
      title: t("page0.textt12"),
      videoUrl: "https://www.youtube.com/embed/rvlwEN9LO0U",
    },
    {
      cover: "https://img.youtube.com/vi/EcArKzIT4yc/maxresdefault.jpg",
      title: t("page0.textt13"),
      videoUrl: "https://www.youtube.com/embed/EcArKzIT4yc",
    },
    {
      cover: "https://img.youtube.com/vi/EcArKzIT4yc/maxresdefault.jpg",
      title: t("page0.textt14"),
      videoUrl: "https://www.youtube.com/embed/Tt8jpzqg6oo",
    },
  ];

  const demoVideos_th: VideoItem2[] = [
    {
      title: "การใช้งานบันไดทางขึ้น",
      videoid: "UV1rSAvZ_-U",
    },
    {
      title: "การใช้งานประตูทางขึ้น",
      videoid: "ud191aBdkpI",
    },
    {
      title: "การใช้งานกล่องสัมภาระด้านท้าย",
      videoid: "0YLq26RjBgU",
    },
    {
      title: "การใช้งานบันไดท้ายรถ",
      videoid: "JoOCxMstKRs",
    },
    {
      title: "การใช้งานถังสุขภัณฑ์",
      videoid: "oxQV8jlQ67g",
    },
    {
      title: "การใช้งานชุดครัวสไลด์",
      videoid: "Dz3xBlB6c-E",
    },
    {
      title: "การใช้งาน AWNING",
      videoid: "FJT-IOAZkDk",
    },
    {
      title: "การเติมลมยาง หน้า  หลัง",
      videoid: "ZmfJpXgoeic",
    },
    {
      title: "การใช้งานระบบน้ำ ดี เสีย",
      videoid: "Vd13JK5uH_w",
    },
    {
      title: "การดูแลรักษา Solar cells",
      videoid: "RNCThATfObE",
    },
    {
      title: "การใช้งาน MAIN BREAKER",
      videoid: "ja6P-Ma4AvI",
    },
    {
      title: "การใช้งาน  AC CHARGER",
      videoid: "xmtXjpGhtRE",
    },
    {
      title: "การดูแลช่วงล่างรถยนต์",
      videoid: "jOIyMFtEed0",
    },
    {
      title: "การใช้งาน เท้าช้างไฟฟ้า",
      videoid: "gdX6olRyhVc",
    },
    {
      title: "การใช้งานกล้องมองถอย 360°",
      videoid: "35pwsh_HeXA",
    },
    {
      title: "การใช้งาน แผงควบคุมไฟฟ้า",
      videoid: "bPPagdbECd0",
    },
    {
      title: "การตรวจเช็คไดชาร์จ ด้วย BMS",
      videoid: "k8Ro5CKt9ws",
    },
    {
      title: "การใช้งานเครื่องปรับอากาศ",
      videoid: "VEQGrulYO04",
    },
    {
      title: "การใช้งานห้องน้ำ",
      videoid: "rsOpVaERqZo",
    },
    {
      title: "การใช้งานที่เก็บของอเนกประสงค์",
      videoid: "u9OsNsxSmnw",
    },
    {
      title: "การปรับโซฟาเป็นที่นอน",
      videoid: "YJknx1NgBRM",
    },
    {
      title: "ระบบแสงสว่างภายในรถ",
      videoid: "ncCUNhOiATA",
    },
    {
      title: "หน้าต่าง และ SKYVIEW",
      videoid: "zMCO3_TE9ME",
    },
    {
      title: "การใช้งานระบบ RV SMART",
      videoid: "12Y1N3vQzS8",
    },
  ];

  const demoVideos_en: VideoItem2[] = [
    {
      title: "ELECTRONIC STEPS",
      videoid: "5mJvl4PQvn4",
    },
    {
      title: "ENTRANCE DOOR",
      videoid: "oyOSy2PTwak",
    },
    {
      title: "REAR STORAGE BOX",
      videoid: "JAM6CtEdUVs",
    },
    {
      title: "REAR LADDER",
      videoid: "YZuLZP-bK4w",
    },
    {
      title: "WASTE SYSTEM",
      videoid: "0rcDUwUsqhQ",
    },
    {
      title: "SLIDING KITCHEN",
      videoid: "l9szVDWAcG8",
    },
    {
      title: "AWNING SYSTEM",
      videoid: "_yLwh9no1kI",
    },
    {
      title: "TYRE MAINTENANCE",
      videoid: "_Tdj8fk4nwc",
    },
    {
      title: "WANTER INLET  OUTLET",
      videoid: "WoAtl7GizL0",
    },
    {
      title: "SOLAR PANEL MAINTENANCE",
      videoid: "tRi5wGRw5t4",
    },
    {
      title: "MAIN BREAKER",
      videoid: "t3qz8rPhCdI",
    },
    {
      title: "AC CHARGING",
      videoid: "zomYEtCWsQU",
    },
    {
      title: "SUSPENSION MAINTENANCE",
      videoid: "UoqswZE7aqI",
    },
    {
      title: "ELECTRONIC SUPPORTS",
      videoid: "cGcsKofiFNM",
    },
    {
      title: "360 DEGREE MIRROR",
      videoid: "3fRm0GrdTeU",
    },
    {
      title: "CONTROL PANEL",
      videoid: "4vq8bQ0gm2U",
    },
    {
      title: "ELECTRICAL CURRENT",
      videoid: "gyySRRhHmZQ",
    },
    {
      title: "AIR CONDITIONING",
      videoid: "G9omF_Ha-jI",
    },
    {
      title: "BATHROOM",
      videoid: "T2dLGgKNoBo",
    },
    {
      title: "INTERIOR STORAGE",
      videoid: "E9wg-XgIc9E",
    },
    {
      title: "INTERIOR SEATS",
      videoid: "PSMlxgvYa6s",
    },
    {
      title: "INTERIOR LIGHTS",
      videoid: "d79nn_sIDIs",
    },
    {
      title: "WINDOWS AND SKY VIEW",
      videoid: "bRLYaLBmUAU",
    },
    {
      title: "RV SMART SYSTEM",
      videoid: "ik1wZgLPtvo",
    },
  ]

  // const reviewVideos: VideoItem[] = [
  //   {
  //     cover: "https://img.youtube.com/vi/uWxpGk-aGCw/maxresdefault.jpg",
  //     title: t("page01.textt6"),
  //     videoUrl: "https://www.youtube.com/embed/uWxpGk-aGCw",
  //   },
  //   {
  //     cover: "https://img.youtube.com/vi/bYaO-5kZQ2A/maxresdefault.jpg",
  //     title: t("page01.textt7"),
  //     videoUrl: "https://www.youtube.com/embed/bYaO-5kZQ2A",
  //   },
  //   {
  //     cover: "https://img.youtube.com/vi/EaZG7PhZj70/maxresdefault.jpg",
  //     title: t("page01.textt8"),
  //     videoUrl: "https://www.youtube.com/embed/EaZG7PhZj70",
  //   },
  //   {
  //     cover: "https://img.youtube.com/vi/jtmgxVipitA/maxresdefault.jpg",
  //     title: t("page01.textt1"),
  //     videoUrl: "https://www.youtube.com/embed/jtmgxVipitA",
  //   },
  //   {
  //     cover: "https://img.youtube.com/vi/BudQfFLwQsA/maxresdefault.jpg",
  //     title: t("page01.textt2"),
  //     videoUrl: "https://www.youtube.com/embed/BudQfFLwQsA",
  //   },
  //   {
  //     cover: "https://img.youtube.com/vi/_8vJD0A5q9o/maxresdefault.jpg",
  //     title: t("page01.textt3"),
  //     videoUrl: "https://www.youtube.com/embed/76VK20yaAHg",
  //   },
  //   {
  //     cover: "https://img.youtube.com/vi/Nq27zbLn_8s/maxresdefault.jpg",
  //     title: t("page01.textt4"),
  //     videoUrl: "https://www.youtube.com/embed/Nq27zbLn_8s",
  //   },
  //   {
  //     cover: "https://img.youtube.com/vi/_8vJD0A5q9o/maxresdefault.jpg",
  //     title: t("page01.textt5"),
  //     videoUrl: "https://www.youtube.com/embed/_8vJD0A5q9o",
  //   },
  // ];

  const reviewVideos_new: VideoItem2[] = [
    {
      title: t("page01.textt11"),
      videoid: "s9OB-eHg4vM",
    },
    {
      title: t("page01.textt10"),
      videoid: "ydKYpNBPZqA",
    },
    {
      title: t("page01.textt9"),
      videoid: "Y14pqR_Xr4A",
    },
    {
      title: t("page01.textt6"),
      videoid: "uWxpGk-aGCw",
    },
    {
      title: t("page01.textt7"),
      videoid: "bYaO-5kZQ2A",
    },
    {
      title: t("page01.textt8"),
      videoid: "EaZG7PhZj70",
    },
    {
      title: t("page01.textt1"),
      videoid: "jtmgxVipitA",
    },
    {
      title: t("page01.textt2"),
      videoid: "BudQfFLwQsA",
    },
    {
      title: t("page01.textt3"),
      videoid: "76VK20yaAHg",
    },
    {
      title: t("page01.textt4"),
      videoid: "Nq27zbLn_8s",
    },
    {
      title: t("page01.textt5"),
      videoid: "_8vJD0A5q9o",
    },
  ];

  const handleVideoClick = (video: VideoItem | VideoItem2) => {
    setSelectedVideo(video);
  };

  return (
    <>
      {/* <HeroSectionN lang={lang} /> */}
      <div className="min-h-screen bg-gray-100 p-4 md:p-8 mt-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h4 className="text-xl text-gray-600">{t("page0.textH01")}</h4>
          <h2 className="text-3xl font-bold text-gray-800">
            {t("page0.textH02")}
          </h2>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("demo")}
            className={`px-6 py-2 rounded-full ${activeTab === "demo"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
              }`}
          >
            {t("page0.textH1")}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("review")}
            className={`px-6 py-2 rounded-full ${activeTab === "review"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
              }`}
          >
            {t("page0.textH2")}
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {/* {(activeTab === "demo" ? demoVideos : reviewVideos).map(
            (video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                <div className="relative group">
                  <Image
                    src={video.cover}
                    alt={video.title}
                    width={320}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="text-white text-5xl"
                    >
                      ▶️
                    </motion.div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-800 line-clamp-2">{video.title}</p>
                </div>
              </motion.div>
            )
          )} */}
          {(activeTab === "demo" ? (lang === "en-US" ? demoVideos_en : demoVideos_th) : reviewVideos_new).map(
            (video, index) => {
              const voidSomeID = video.videoid === "76VK20yaAHg" ? "_8vJD0A5q9o" : video.videoid;
              const coverUrl = `https://img.youtube.com/vi/${voidSomeID}/maxresdefault.jpg`
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleVideoClick(video)}
                >
                  <div className="relative group">
                    <Image
                      src={coverUrl}
                      alt={video.title}
                      width={320}
                      height={192}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="text-white text-5xl"
                      >
                        ▶️
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-800 line-clamp-2">{video.title}</p>
                  </div>
                </motion.div>
              );
            }
          )}
        </motion.div>

        <Dialog
          open={!!selectedVideo}
          onOpenChange={() => setSelectedVideo(null)}
        >
          <DialogContent className="sm:max-w-[90vw] h-[90vh] p-0">
            {selectedVideo && (
              <iframe
                src={'videoid' in selectedVideo 
                  ? `https://www.youtube.com/embed/${selectedVideo.videoid}`
                  : selectedVideo.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Index;
