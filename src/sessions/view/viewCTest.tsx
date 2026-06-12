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
import { useTypeCar } from "@/context/TypeCarContext";

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
  const { typeCar } = useTypeCar();
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
          "/img/type_b/In/70-MOTORHOME TYPE B.png",
        ],
      },
    },
    {
      id: 3,
      name: t("Motorhome.textview20"),
      isSelected: false,
      media: {
        images: ["/img/type_b/Ex/Solar 2.png"],
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

  return (
    <div className="bg-gray-100 text-black">
      <div className="w-[90%] md:max-w-6xl mx-auto bg-white p-4 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 relative">
            <div className="relative">
              {selectedFeature && (
                <>
                  {selectedFeature.media.video && showVideo ? (
                    <video
                      className="w-full object-contain rounded-lg"
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
                            <div className="w-full h-full md:max-h-[400px] flex items-center justify-center">
                              <img
                                src={image}
                                alt={`${selectedFeature.name} - ${index + 1}`}
                                className="w-full h-full object-cover cursor-pointer rounded-lg"
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
            </div>
          </div>

          <div className="w-full md:w-1/3 p-2 py-8 md:p-8">
            <h2 className="text-2xl font-semibold pb-4 flex items-center gap-2" >
              {t("Motorhome.textview17")}
              <span className="text-red-600">{typeCar}</span>
            </h2>
            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => handleFeatureClick(feature)}
                  className={`py-2 border-b transition-all duration-200 hover:bg-gray-50 cursor-pointer ${selectedFeature?.id === feature.id
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
