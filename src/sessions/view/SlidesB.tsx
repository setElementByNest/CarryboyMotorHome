"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

interface OptionItem {
  title: string;
  description: string;
  imageClass: string;
  additionalImages: string[];
}

const Index = () => {
  const t = useTranslations("Hero");

  const [options] = useState<OptionItem[]>([
    {
      title: t("Motorhome.textview45"),
      description: t("Motorhome.textview44"),
      imageClass:
        "bg-[url('/img/SlidesB/1/carryboy-motorhome-rear-suspension-system-off-road-stability.jpg')] hover:scale-105",
      additionalImages: [
        "/img/SlidesB/1/carryboy-motorhome-rear-suspension-system-off-road-stability1.jpg",
      ],
    },
    {
      title: t("Motorhome.textview46"),
      description: t("Motorhome.textview44"),
      imageClass:
        "bg-[url('/img/SlidesB/2/carryboy-motorhome-rear-suspension-system-off-road-stability2.png')] hover:scale-105",
      additionalImages: [
        "/img/SlidesB/2/carryboy-motorhome-rear-suspension-system-off-road-stability1.jpg",
        "/img/SlidesB/2/carryboy-motorhome-rear-suspension-system-off-road-stability3.png",
      ],
    },
    {
      title: t("Motorhome.textview47"),
      description: t("Motorhome.textview44"),
      imageClass:
        "bg-[url('/img/SlidesB/3/carryboy-motorhome-rear-suspension-system-off-road-stability3.jpg')] hover:scale-105",
      additionalImages: [
        "/img/SlidesB/3/carryboy-motorhome-rear-suspension-system-off-road-stability2.jpg",
      ],
    },
    {
      title: t("Motorhome.textview48"),
      description: t("Motorhome.textview44"),
      imageClass:
        "bg-[url('/img/SlidesB/4/carryboy-motorhome-rear-suspension-system-off-road-stability4.jpg')] hover:scale-105",
      additionalImages: [
        "/img/SlidesB/4/carryboy-motorhome-rear-suspension-system-off-road-stability4.jpg",
      ],
    },
    // {
    //   title: "ระบบไฟฟ้า",
    //   description: "ข้อมูลเพิ่มเติม",
    //   imageClass: "bg-[url('/placeholder.svg')] hover:scale-105",
    //   additionalImages: [
    //     "/placeholder.svg",
    //     "/placeholder.svg",
    //     "/placeholder.svg",
    //   ],
    // },
    // {
    //   title: "ระบบน้ำ",
    //   description: "ข้อมูลเพิ่มเติม",
    //   imageClass: "bg-[url('/placeholder.svg')] hover:scale-105",
    //   additionalImages: [
    //     "/placeholder.svg",
    //     "/placeholder.svg",
    //     "/placeholder.svg",
    //   ],
    // },
  ]);

  return (
    <div className="bg-gray-100 p-4 md:p-8 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-normal">
              {t("Motorhome.textview49")}
            </h2>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {options.map((option, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/4"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="group relative h-64 rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer">
                        <div
                          className={`absolute inset-0 ${option.imageClass} bg-cover bg-center transition-transform duration-300`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-xl font-medium mb-2">
                            {option.title}
                          </h3>
                          <div className="flex items-center text-sm opacity-90">
                            <span>{option.description}</span>
                            <svg
                              className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {option.additionalImages.map((image, imageIndex) => (
                            <CarouselItem key={imageIndex}>
                              <div className="aspect-video">
                                <img
                                  src={image}
                                  alt={`${option.title} - รูปที่ ${
                                    imageIndex + 1
                                  }`}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Index;
