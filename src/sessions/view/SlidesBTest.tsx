"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface OptionItem {
  img: string;
  title: string;
  description: string;
}

const Index = () => {
  const t = useTranslations("Hero");

  // ✅ ใช้ optionlist เดิมของคุณ (ไม่ต้องพิมพ์ซ้ำ)
  const optionlist: OptionItem[] = [
    { img: "/img/option/Option1/Electronic Support  legs x4.jpg", title: "Electronic Support", description: "ขาค้ำรถยนต์ (legs x4)" },
    { img: "/img/option/Option1/Suppension Type A.jpg", title: "SUSPENSION PACKAGE", description: "custom by AC POWER" },
    { img: "/img/option/Option1/Suspention-ironman.jpg", title: "SUSPENSION PACKAGE", description: "custom by IRONMAN" },
    { img: "/img/option/Option1/Full box 290 liter.jpg", title: "UTILITIES BOX-290", description: "กล่องเก็บของอเนกประสงค์ ขนาด 290 ลิตร" },
    { img: "/img/option/Option1/Half box 150 liter + rear ladder.jpg", title: "UTILITIES BOX-150", description: "กล่องเก็บของ ขนาด 150 ลิตร พร้อมบันได" },
    { img: "/img/option/Option1/kitchen.jpg", title: "SLIDE KITCHEN", description: "ครัวสไลด์ ทำจาก Stainless เกรด 304" },
    { img: "/img/option/Option1/freezer rv.jpg", title: "SLIDE-OUT FRIDGE", description: "ตู้แช่สไลด์ขนาด 15 ลิตร" },
    { img: "/img/option/Option1/door2.jpg", title: "ELECTRIC SUCTION DOOR", description: "ชุดประตูไฟฟ้า พร้อมระบบ Central Lock" },
    { img: "/img/option/Option1/room tent.jpg", title: "Tent Room", description: "ห้องเสริม Awning" },
    { img: "/img/option/Option1/Rooftop Air.jpg", title: "ROOF TOP AIRCON", description: "แอร์ RV แบบ Rooftop" },
    { img: "/img/option/Option1/CCTV.jpg", title: "RV CCTV", description: "เดินระบบ CCTV ภายนอกรอบคัน 4 จุด" },
    { img: "/img/option/Option1/Rack Motor.png", title: "RACK MOTORCYLE", description: "แร็ครถจักรยานยนต์ท้ายรถ" },
    { img: "/img/option/Option1/AVA-Pro.jpg", title: "SCOOTER ไฟฟ้า", description: "แบรนด์ SOLAR" },
  ];

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const [stepPx, setStepPx] = useState(0);
  const [active, setActive] = useState(0);

  // วัด "ระยะเลื่อนต่อ 1 คลิก" = card width + gap
  useEffect(() => {
    const calc = () => {
      if (!itemRef.current) return;
      const card = itemRef.current.getBoundingClientRect().width;

      // gap-4 = 16px (Tailwind default)
      const gap = 16;

      setStepPx(card + gap);
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // อัปเดต dot ตามตำแหน่งสกรอลล์
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || stepPx <= 0) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const idx = Math.round(el.scrollLeft / stepPx);
        setActive(Math.max(0, Math.min(optionlist.length - 1, idx)));
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, [stepPx, optionlist.length]);

  const scrollByOne = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el || stepPx <= 0) return;

    el.scrollBy({
      left: dir === "next" ? stepPx : -stepPx,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el || stepPx <= 0) return;

    el.scrollTo({
      left: i * stepPx,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-100 text-black ">
      <div className="w-[90%] md:max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-4">
        <div className="flex items-center justify-between px-0 md:px-6">
          <h2 className="text-2xl md:text-2xl font-semibold">{t("Motorhome.textview49")}</h2>

          <div className="flex gap-3">
            <button
              onClick={() => scrollByOne("prev")}
              className="group relative overflow-hidden bg-red-600 hover:bg-red-400 text-white p-1 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 relative z-10" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>

            <button
              onClick={() => scrollByOne("next")}
              className={"group relative overflow-hidden bg-red-600 hover:bg-red-400 text-white p-1 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"}
            >
              <ChevronRight className="w-6 h-6 relative z-10" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* ✅ เลื่อนทีละ 1 ใบด้วย scroll */}
        <div
          ref={scrollerRef}
          className="
            flex gap-4 overflow-x-auto scroll-smooth
            snap-x snap-mandatory
            [scrollbar-width:none] [-ms-overflow-style:none]
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* ซ่อน scrollbar บน Webkit */}
          <style>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>

          {optionlist.map((item, i) => (
            <div
              key={`${item.img}-${i}`}
              ref={i === 0 ? itemRef : undefined}
              className="
                shrink-0 snap-start
                w-[85%] sm:w-[48%] lg:w-[32%]
                p-2
              "
            >
              <div className="flex flex-col p-3 rounded-xl shadow-md bg-gray-50 h-full transition-transform duration-300 hover:-translate-y-1">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-60 rounded-lg mb-3 object-cover"
                  draggable={false}
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-base font-extralight">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Dots: ไป index แบบเลื่อนจริง */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap hidden">
          {optionlist.map((_, i) => {
            if (i <= 10) {
            return (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-red-600" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
              />
                )} else {
                  return null;
                }
              })}
        </div>
      </div>
    </div>
  );
};

export default Index;
