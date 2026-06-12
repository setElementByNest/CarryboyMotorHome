"use client";
import { useState, useRef } from "react";
import { useTranslations } from "next-intl";

interface SmartFeature {
  type: "control" | "display";
  icon: string;
  title: string;
}

const Index = () => {
  const t = useTranslations("Hero");

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const features: SmartFeature[] = [
    { type: "control", icon: "🌡️", title: t("Motorhome.textview35") },
    { type: "control", icon: "🪑", title: t("Motorhome.textview36") },
    { type: "control", icon: "💡", title: t("Motorhome.textview37") },
    { type: "control", icon: "🚿", title: t("Motorhome.textview38") },
    { type: "display", icon: "⚡", title: t("Motorhome.textview39") },
    { type: "display", icon: "🔋", title: t("Motorhome.textview40") },
    { type: "display", icon: "📊", title: t("Motorhome.textview41") },
    { type: "display", icon: "💧", title: t("Motorhome.textview42") },
    { type: "display", icon: "🚰", title: t("Motorhome.textview43") },
  ];

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).mozRequestFullScreen) {
        (videoRef.current as any).mozRequestFullScreen();
      } else if ((videoRef.current as any).msRequestFullscreen) {
        (videoRef.current as any).msRequestFullscreen();
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-8 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800 text-center mb-8 animate-fade-in">
          {t("Motorhome.textview31")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Video Section */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white animate-scale-in h-full relative">
            <div
              className="relative w-full h-0"
              style={{ paddingBottom: "75%" }}
            >
              <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full"
                src="/video/Smart system.mp4"
                title="Smart Home System"
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
            <button
              onClick={toggleFullscreen}
              className="absolute bottom-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            >
              🔍 {t("Motorhome.textview34")}
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-scale-in flex flex-col justify-center items-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-sm text-primary mb-2">
                  {feature.type === "control"
                    ? t("Motorhome.textview32")
                    : t("Motorhome.textview33")}
                </div>
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h4 className="text-sm font-medium text-gray-700">
                  {feature.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
