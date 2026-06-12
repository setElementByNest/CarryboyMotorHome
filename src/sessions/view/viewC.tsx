"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

interface Feature {
  id: number;
  name: string;
  isSelected: boolean;
  media: {
    video?: string;
    images: string[];
  };
}

interface CarFeature {
  icon: string;
  description: string;
}

const Index = () => {
  const t = useTranslations("Hero");

  const [features] = useState<Feature[]>([
    {
      id: 1,
      name: t("Motorhome.textview18"),
      isSelected: true,
      media: {
        images: [
          "/img/viewC/1/carryboy-motorhome-rooftop-sunset-adventure-design-1.jpg",
          "/img/viewC/1/carryboy-motorhome-rooftop-sunset-adventure-design-2.jpg",
        ],
      },
    },
    {
      id: 2,
      name: t("Motorhome.textview19"),
      isSelected: false,
      media: {
        images: [
          "/img/viewC/2/carryboy-motorhome-air-conditioning-modern-climate-control-1.jpg",
          "/img/viewC/2/carryboy-motorhome-air-conditioning-modern-climate-control-2.jpg",
        ],
      },
    },
    {
      id: 3,
      name: t("Motorhome.textview20"),
      isSelected: false,
      media: {
        images: ["/img/viewC/3/sola.jpg", "/img/viewC/3/sola2.jpg"],
      },
    },

    {
      id: 4,
      name: t("Motorhome.textview21"),
      isSelected: false,
      media: {
        video:
          "/img/features-video/carryboy-motorhome-rv-exterior-awning-video.mp4",
        images: [],
      },
    },
    {
      id: 5,
      name: t("Motorhome.textview22"),
      isSelected: false,
      media: {
        video: "/video/carryboy-motorhome-rv-exterior-ladder-video.mp4",
        images: [],
      },
    },
    {
      id: 6,
      name: t("Motorhome.textview23"),
      isSelected: false,
      media: {
        images: [
          "/img/viewC/4/carryboy-motorhome-portable-generator-mxr3700-power-supply.jpg",
        ],
      },
    },
  ]);

  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(
    features[0] // Set the default selected feature to "หลังคา Skyview"
  );
  const [showVideo, setShowVideo] = useState(!!features[0].media.video);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);
    setShowVideo(!!feature.media.video);
  };

  const toggleMedia = () => {
    if (selectedFeature?.media.video) {
      setShowVideo(!showVideo);
    }
  };

  const toggleFullscreen = (index: number) => {
    setCurrentImageIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const handlePreviousImage = () => {
    if (selectedFeature) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedFeature.media.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedFeature) {
      setCurrentImageIndex((prev) =>
        prev === selectedFeature.media.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const carFeatures: CarFeature[] = [
    {
      icon: "/img/viewC/5/iconsitem-1.png",
      description: t("Motorhome.textview24"),
    },
    {
      icon: "/img/viewC/5/iconsitem-2.png",
      description: t("Motorhome.textview25"),
    },
    {
      icon: "/img/viewC/5/iconsitem-3.png",
      description: t("Motorhome.textview26"),
    },
    {
      icon: "/img/viewC/5/iconsitem-4.png",
      description: t("Motorhome.textview27"),
    },
    {
      icon: "/img/viewC/5/iconsitem-5.png",
      description: t("Motorhome.textview28"),
    },
    {
      icon: "/img/viewC/5/iconsitem-6.png",
      description: t("Motorhome.textview29"),
    },
  ];

  const tritonFeatures = [...carFeatures];
  tritonFeatures[5] = {
    ...carFeatures[5],
    description: t("Motorhome.textview30"),
  };

  return (
    <div className="bg-gray-100 p-4 text-black">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 relative">
            <div className="relative">
              {selectedFeature && (
                <>
                  {selectedFeature.media.video && showVideo ? (
                    <video
                      className="w-full h-[400px] object-contain"
                      controls
                      autoPlay
                      loop
                      src={selectedFeature.media.video}
                    />
                  ) : (
                    <Carousel className="w-full relative">
                      <CarouselContent>
                        {selectedFeature.media.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="w-full h-[400px] flex items-center justify-center">
                              <img
                                src={image}
                                alt={`${selectedFeature.name} - ${index + 1}`}
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => toggleFullscreen(index)}
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                        <div className="pointer-events-auto">
                          <CarouselPrevious className="relative left-0 translate-x-0" />
                        </div>
                        <div className="pointer-events-auto">
                          <CarouselNext className="relative right-0 translate-x-0" />
                        </div>
                      </div>
                    </Carousel>
                  )}
                </>
              )}

              <div className="absolute top-4 right-4 space-x-2">
                {selectedFeature?.media.video && (
                  <button
                    onClick={toggleMedia}
                    className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    {showVideo ? "🖼️" : "🎥"}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6">
            <h2 className="text-2xl mb-6 font-normal">
              {t("Motorhome.textview17")}
            </h2>
            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => handleFeatureClick(feature)}
                  className={`py-2 border-b transition-all duration-200 hover:bg-gray-50 cursor-pointer ${
                    selectedFeature?.id === feature.id
                      ? "border-red-600 border-b-2"
                      : "border-gray-300"
                  }`}
                >
                  {feature.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Placeholder for alignment */}
            <div>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                Toyota Hilux Champ
              </h2>
              <div className="space-y-4">
                {carFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={feature.icon}
                      alt={`Feature icon ${index}`}
                      className="w-12 h-12 object-contain mr-4 brightness-0"
                    />
                    <h3 className="text-sm font-medium text-gray-700">
                      {feature.description}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Toyota Hilux Revo Features */}
            <div>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                Toyota Hilux Revo
              </h2>
              <div className="space-y-4">
                {carFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={feature.icon}
                      alt={`Feature icon ${index}`}
                      className="w-12 h-12 object-contain mr-4 brightness-0"
                    />
                    <h3 className="text-sm font-medium text-gray-700">
                      {feature.description}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Mitsubishi Triton Features */}
            <div>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                Mitsubishi Triton
              </h2>
              <div className="space-y-4">
                {tritonFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={feature.icon}
                      alt={`Feature icon ${index}`}
                      className="w-12 h-12 object-contain mr-4 brightness-0"
                    />
                    <h3 className="text-sm font-medium text-gray-700">
                      {feature.description}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isFullscreen} onOpenChange={closeFullscreen}>
        <DialogPortal>
          <DialogOverlay className="bg-black/90" />
          <DialogContent className="max-w-[95vw] max-h-[95vh] border-none bg-transparent p-0">
            <div className="relative w-full h-full flex items-center justify-center">
              {selectedFeature && (
                <>
                  <img
                    src={selectedFeature.media.images[currentImageIndex]}
                    alt={`${selectedFeature.name} - fullscreen`}
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                  <button
                    onClick={handlePreviousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>
                  <button
                    onClick={closeFullscreen}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
};

export default Index;
