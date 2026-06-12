"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface PinProps {
  top: string;
  left: string;
  images: string[];
}

interface ViewOption {
  id: number;
  name: string;
  image: string;
  pins?: PinProps[];
  view360Url?: string;
}

const Index = () => {
  const [showPins, setShowPins] = useState(false);
  const [selectedView, setSelectedView] = useState<number>(1);
  const [selectedGallery, setSelectedGallery] = useState<string[]>([]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = useTranslations("Hero");

  const interiorViews: ViewOption[] = [
    {
      id: 1,
      name: t("Motorhome.textview1"),
      image:
        "/img/Sesstion/GalleryM/carryboy-motorhome-interior-luxury-design-modern-camping.jpg",
      pins: [
        {
          top: "16%",
          left: "67%",
          images: [
            "/img/GalleryM/2/carryboy-motorhome-rv-interior-compartment1.jpg",
            "/img/GalleryM/2/carryboy-motorhome-rv-interior-compartment2.jpg",
            "/img/GalleryM/2/carryboy-motorhome-rv-interior-compartment3.jpg",
            "/img/GalleryM/2/carryboy-motorhome-rv-interior-compartment4.jpg",
          ],
        },
        {
          top: "43%",
          left: "50%",
          images: [
            "/img/GalleryM/4/carryboy-motorhome-stainless-steel-sink-modern-design1.jpg",
            "/img/GalleryM/4/carryboy-motorhome-stainless-steel-sink-modern-design2.jpg",
          ],
        },
        {
          top: "60%",
          left: "60%",
          images: [
            "/img/GalleryM/7/carryboy-motorhome-interior-modern-bedroom-living-space.jpg",
            "/img/GalleryM/7/carryboy-motorhome-interior-modern-bedroom-living-space2.jpg",
            "/img/GalleryM/7/carryboy-motorhome-interior-modern-bedroom-living-space3.jpg",
          ],
        },
        {
          top: "30%",
          left: "40%",
          images: [
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet2.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet3.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet4.jpg",
          ],
        },
        {
          top: "30%",
          left: "60%",
          images: [
            "/img/GalleryM/5/carryboy-motorhome-bathroom-wooden-design-compact-space.jpg",
            "/img/GalleryM/5/carryboy-motorhome-bathroom-wooden-design-compact-space2.jpg",
            "/img/GalleryM/5/carryboy-motorhome-bathroom-wooden-design-compact-space3.jpg",
          ],
        },
        {
          top: "47%",
          left: "28%",
          images: [
            "/img/GalleryM/6/carryboy-motorhome-rv-interior-accessory-tv-microwave.jpg",
          ],
        },
        {
          top: "15%",
          left: "23%",
          images: [
            "/img/GalleryM/carryboy-motorhome-interior-modern-luxury-bedroom-dining-space.jpg",
          ],
        },
      ],
    },
    {
      id: 2,
      name: t("Motorhome.textview2"),
      image:
        "/img/Sesstion/GalleryM/carryboy-motorhome-interior-modern-luxury-bedroom-dining-space.jpg",
      pins: [
        {
          top: "28%",
          left: "50%",
          images: [
            "/img/GalleryM/View2/1/carryboy-motorhome-rv-interior-skyview-1.jpg",
            "/img/GalleryM/View2/1/carryboy-motorhome-rv-interior-skyview-2.jpg",
            "/img/GalleryM/View2/1/carryboy-motorhome-rv-interior-skyview-3.jpg",
            "/img/GalleryM/View2/1/carryboy-motorhome-rv-interior-skyview-4.jpg",
            "/img/GalleryM/View2/1/carryboy-motorhome-rv-interior-skyview-5.jpg",
          ],
        },
        {
          top: "42%",
          left: "50%",
          images: [
            "/img/GalleryM/View2/2/carryboy-motorhome-loft-bedroom-modern-interior-design-1.jpg",
            "/img/GalleryM/View2/2/carryboy-motorhome-loft-bedroom-modern-interior-design-2.jpg",
            "/img/GalleryM/View2/2/carryboy-motorhome-loft-bedroom-modern-interior-design-3.jpg",
          ],
        },
        {
          top: "58%",
          left: "54%",
          images: [
            "/img/GalleryM/View2/3/carryboy-motorhome-window-shade-modern-privacy-design-1.jpg",
            "/img/GalleryM/View2/3/carryboy-motorhome-window-shade-modern-privacy-design-2.jpg",
          ],
        },
        {
          top: "40%",
          left: "80%",
          images: [
            "/img/GalleryM/View2/4/carryboy-motorhome-rv-window-side-1.jpg",
            "/img/GalleryM/View2/4/carryboy-motorhome-rv-window-side-2.jpg",
            "/img/GalleryM/View2/4/carryboy-motorhome-rv-window-side-3.jpg",
          ],
        },
        {
          top: "82%",
          left: "12%",
          images: [
            "/img/GalleryM/View2/5/carryboy-motorhome-power-outlet-modern-electrical-design-1.jpg",
          ],
        },
      ],
    },
    {
      id: 3,
      name: t("Motorhome.textview3"),
      image:
        "/img/GalleryM/View2/5/carryboy-motorhome-bathroom-compact-shower-toilet-design-1.jpg",
      view360Url:
        "https://app2.ricoh360.com/viewer/47c6b4f9-a01d-4ee9-aff1-5078c09eb931",
    },
  ];

  const exteriorViews: ViewOption[] = [
    {
      id: 4,
      name: t("Motorhome.textview4"),
      image: "/img/Sesstion/GalleryM/exterior_1.jpg",
      pins: [
        {
          top: "18%",
          left: "50%",
          images: [
            "/img/GalleryM/EView1/E1/carryboy-motorhome-rv-interior-skyview-1.jpg",
            "/img/GalleryM/EView1/E1/carryboy-motorhome-rv-interior-skyview-2.jpg",
            "/img/GalleryM/EView1/E1/carryboy-motorhome-rv-interior-skyview-3.jpg",
            "/img/GalleryM/EView1/E1/carryboy-motorhome-rv-interior-skyview-4.jpg",
            "/img/GalleryM/EView1/E1/carryboy-motorhome-rv-interior-skyview-5.jpg",
          ],
        },
        {
          top: "30%",
          left: "29%",
          images: [
            "/img/GalleryM/EView1/E2/carryboy-motorhome-rv-window-side-1.jpg",
            "/img/GalleryM/EView1/E2/carryboy-motorhome-rv-window-side-2.jpg",
            "/img/GalleryM/EView1/E2/carryboy-motorhome-rv-window-side-3.jpg",
          ],
        },
        {
          top: "55%",
          left: "29%",
          images: [
            "/img/GalleryM/EView1/E3/carryboy-motorhome-rv-exterior-battery-1.jpg",
            "/img/GalleryM/EView1/E3/carryboy-motorhome-rv-exterior-battery-2.jpg",
            "/img/GalleryM/EView1/E3/carryboy-motorhome-rv-exterior-battery-3.jpg",
          ],
        },
        {
          top: "50%",
          left: "21%",
          images: [
            "/img/GalleryM/EView1/E4/carryboy-motorhome-rv-exterior-sewage.jpg",
          ],
        },
      ],
    },
    {
      id: 5,
      name: t("Motorhome.textview5"),
      image: "/img/Sesstion/GalleryM/exterior_2.jpg",
      pins: [
        {
          top: "16%",
          left: "45%",
          images: [
            "/img/GalleryM/EView2/1/carryboy-motorhome-rv-exterior-awning-1.jpg",
            "/img/GalleryM/EView2/1/carryboy-motorhome-rv-exterior-awning.jpg",
          ],
        },
        {
          top: "43%",
          left: "50%",
          images: [
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-1.jpg",
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-2.jpg",
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-3.jpg",
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-4.jpg",
          ],
        },
        {
          top: "55%",
          left: "43%",
          images: [
            "/img/GalleryM/EView2/3/carryboy-motorhome-exterior-water-connection-utility-design-1.jpg",
          ],
        },
        {
          top: "30%",
          left: "75%",
          images: [
            "/img/GalleryM/EView2/4/carryboy-motorhome-rv-exterior-back.jpg",
          ],
        },
        {
          top: "62%",
          left: "70%",
          images: [
            "/img/GalleryM/EView2/5/carryboy-motorhome-rv-exterior-boxback1.jpg",
            "/img/GalleryM/EView2/5/carryboy-motorhome-rv-exterior-boxback2.jpg",
          ],
        },
        {
          top: "68%",
          left: "55%",
          images: [
            "/img/GalleryM/EView2/6/carryboy-motorhome-rv-exterior-step-1.jpg",
            "/img/GalleryM/EView2/6/carryboy-motorhome-rv-exterior-step-2.jpg",
            "/img/GalleryM/EView2/6/carryboy-motorhome-rv-exterior-step-3.jpg",
          ],
        },
      ],
    },
  ];

  const currentView = [...interiorViews, ...exteriorViews].find(
    (view) => view.id === selectedView
  );

  const handlePinClick = (images: string[]) => {
    setSelectedGallery(images);
    setIsGalleryOpen(true);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedGallery([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedGallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedGallery.length - 1 : prev - 1
    );
  };

  const GalleryModal = ({
    isOpen,
    onClose,
    images,
    currentIndex,
    onNext,
    onPrev,
  }: {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    currentIndex: number;
    onNext: () => void;
    onPrev: () => void;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-4 rounded-lg max-w-4xl w-full mx-4">
          <div className="relative">
            <img
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="w-full h-[60vh] object-contain"
            />
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            >
              ←
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            >
              →
            </button>
          </div>
          <div className="mt-4 flex justify-between text-black">
            <span>
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={onClose}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              ปิด
            </button>
          </div>
        </div>
      </div>
    );
  };

  const View360 = ({ url }: { url: string }) => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
      >
        {t("Motorhome.textview6")}
      </a>
    </div>
  );

  return (
    <div className=" bg-white p-4 md:p-8 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="relative flex-1 h-[400px] md:h-[600px] rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentView?.view360Url ? (
              <View360 url={currentView.view360Url} />
            ) : (
              <>
                <img
                  src={currentView?.image}
                  alt={currentView?.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                {showPins && currentView?.pins && (
                  <div className="absolute inset-0">
                    {currentView.pins.map((pin, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handlePinClick(pin.images)}
                        className="absolute w-6 h-6 cursor-pointer"
                        style={{ top: pin.top, left: pin.left }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <img
                          src="/img/Sesstion/GalleryM/carryboy-logo-red-circle-symbol-brand.png"
                          alt="pin"
                          className="w-full h-full"
                        />
                      </motion.button>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => setShowPins(!showPins)}
                  className="absolute bottom-4 right-4 bg-red-600 px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors text-white"
                >
                  {showPins
                    ? t("Motorhome.textview7")
                    : t("Motorhome.textview8")}
                </button>
              </>
            )}
          </motion.div>

          <div className="w-full md:w-64 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-black mb-4">
                {t("Motorhome.textview9")}
              </h2>
              <div className="space-y-2">
                {interiorViews.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setSelectedView(view.id)}
                    className={`w-full text-left px-4 py-2 transition-all text-black ${
                      selectedView === view.id
                        ? "border-b-2 border-[#CC0000]"
                        : "border-b border-[#CCCCCC]"
                    }`}
                  >
                    {view.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-black mb-4">
                {t("Motorhome.textview10")}
              </h2>
              <div className="space-y-2">
                {exteriorViews.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setSelectedView(view.id)}
                    className={`w-full text-left px-4 py-2 transition-all text-black ${
                      selectedView === view.id
                        ? "border-b-2 border-[#CC0000]"
                        : "border-b border-[#CCCCCC]"
                    }`}
                  >
                    {view.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={closeGallery}
        images={selectedGallery}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};

export default Index;
