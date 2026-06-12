"use client";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  xTerrainImages,
  xRiderImages,
  getRelatedImages,
} from "./data/carImages";

import { useTranslations } from "next-intl";

type ModelType = "xterrain" | "xrider";

interface DetailImage {
  url: string;
  title: string;
  description: string;
  relatedImages?: string[];
}

interface TouchState {
  touchStart: number | null;
  touchEnd: number | null;
}

const Index = () => {
  const t = useTranslations("Hero");

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentModel, setCurrentModel] = useState<ModelType | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [currentDetailImages, setCurrentDetailImages] = useState<DetailImage[]>(
    []
  );
  const [currentDetailIndex, setCurrentDetailIndex] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
    };
  }, []);

  const handleImageClick = (index: number, model: ModelType): void => {
    const images = model === "xterrain" ? xTerrainImages : xRiderImages;
    const selectedImageData = images[index];

    if (selectedImageData) {
      const relatedImages = getRelatedImages(images, selectedImageData);
      setCurrentDetailImages(relatedImages);
      setCurrentDetailIndex(0);
      setSelectedImage(index);
      setCurrentModel(model);
    }
  };

  const handleClose = (): void => {
    setSelectedImage(null);
    setCurrentModel(null);
    setCurrentDetailImages([]);
    setCurrentDetailIndex(0);
  };

  const handlePrevious = (): void => {
    if (currentDetailImages.length > 1) {
      setCurrentDetailIndex(
        (prev) =>
          (prev - 1 + currentDetailImages.length) % currentDetailImages.length
      );
    }
  };

  const handleNext = (): void => {
    if (currentDetailImages.length > 1) {
      setCurrentDetailIndex((prev) => (prev + 1) % currentDetailImages.length);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (): void => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrevious();
  };

  const renderImageGrid = (
    images: DetailImage[],
    model: ModelType
  ): JSX.Element => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {images.map((image: DetailImage, index: number) => (
          <div key={index} className="relative group ">
            <div
              className="relative cursor-pointer"
              onClick={() => handleImageClick(index, model)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-42 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2 ">
                    <h4 className="text-sm font-semibold">{image.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {image.description}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <p className="text-sm text-center mt-2">{image.title}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {t("canopy.texth1")}
      </h2>
      <span className="inline-block text-center text-xl mb-12">
        {t("canopy.texth2")}
      </span>
      <br />
      <div className="space-y-16">
        <div ref={section1Ref} className="opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div
              className="w-full cursor-pointer"
              onClick={() => handleImageClick(0, "xterrain")}
            >
              <img
                src={xTerrainImages[0].url}
                alt="D-MAX"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="bg-gray-100 p-8 flex items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  TOP OF THE RANGE <span className="inline-block">D-MAX</span>
                </h3>
                <p className="text-gray-700 mb-6">
                  Experience new levels of comfort and convenience in the{" "}
                  <span className="inline-block">X-TERRAIN</span>, with premium
                  leather accented and heated front seats, auto-dimming rear
                  view mirror and heated side mirrors. Built for adventure and
                  towing, every <span className="inline-block">X-TERRAIN</span>{" "}
                  also comes with a factory-fitted tow bar receiver.
                </p>
                {renderImageGrid(xTerrainImages, "xterrain")}
              </div>
            </div>
          </div>
        </div>

        <div ref={section2Ref} className="opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div
              className="w-full md:order-2 cursor-pointer"
              onClick={() => handleImageClick(0, "xrider")}
            >
              <img
                src={xRiderImages[0].url}
                alt="D-MAX"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="bg-gray-100 p-8 flex items-center md:order-1">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  THE ULTIMATE ALL-ROUNDER
                </h3>
                <p className="text-gray-700 mb-6">
                  Whether you re ruling off-road or roaming the city, the{" "}
                  <span className="inline-block">Isuzu D-MAX</span>{" "}
                  <span className="inline-block">X-RIDER</span> is the ultimate
                  all-rounder for your adventures. The{" "}
                  <span className="inline-block">Isuzu D-MAX X-RIDER</span>{" "}
                  combines a signature toughness with sleek styling that allows
                  you to stand out from the crowd.
                </p>
                {renderImageGrid(xRiderImages, "xrider")}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => handleClose()}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/90">
          <div
            className="relative w-full h-full flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Button
              variant="ghost"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 md:block hidden"
              onClick={handlePrevious}
              disabled={currentDetailImages.length <= 1}
            >
              ←
            </Button>

            {currentDetailImages.length > 0 &&
              currentDetailImages[currentDetailIndex] && (
                <div className="relative">
                  <img
                    src={currentDetailImages[currentDetailIndex].url}
                    alt={currentDetailImages[currentDetailIndex].title}
                    className="max-w-full max-h-[90vh] object-contain cursor-grab active:cursor-grabbing"
                  />
                  <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                    <p className="text-sm">
                      {currentDetailImages[currentDetailIndex].title}
                    </p>
                    <p className="text-xs text-gray-300 mt-1">
                      {currentDetailIndex + 1} / {currentDetailImages.length}{" "}
                      รูปที่เกี่ยวข้อง
                    </p>
                  </div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                      >
                        <ArrowRight className="h-6 w-6" />
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          {currentDetailImages[currentDetailIndex].title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {currentDetailImages[currentDetailIndex].description}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              )}

            <Button
              variant="ghost"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 md:block hidden"
              onClick={handleNext}
              disabled={currentDetailImages.length <= 1}
            >
              →
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
