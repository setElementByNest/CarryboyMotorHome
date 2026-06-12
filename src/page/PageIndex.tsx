"use client";
import { useState } from "react";
import HeroSectionP from "@/sessions/header/HeroSessionP";
import Overview from "@/sessions/view/OverviewTest";
import GalleryM from "@/sessions/view/GalleryMTest";
import SizesIM from "@/sessions/view/sizesIMTest";
import ViewC from "@/sessions/view/viewCTest";
import Highlight from "@/sessions/view/Highlight";
import Available from "@/sessions/view/Available";
import SlidesB from "@/sessions/view/SlidesBTest";
import { useTypeCar } from "@/context/TypeCarContext";

interface MainPageProps {
    params: { lang: string }; // รับค่า lang จาก dynamic route
}

export default function PageIndex({ params: { lang } }: MainPageProps) {
    const { typeCar, typeCar_list } = useTypeCar();
    return (
        <>
            <div
                className={`relative min-h-screen select-none overflow-hidden text-white antialiased flex flex-col gap-8 bg-gray-100 pb-8`}
            >
                {/* <HeroSectionN lang={lang} /> */}
                <HeroSectionP lang={lang} />
                <Overview lang={lang} />
                <div className={`${typeCar == typeCar_list[0][0] ? "hidden" : "flex flex-col gap-8"}`} >
                    <Highlight />
                    <GalleryM />
                    <SizesIM />
                    <ViewC />
                    <Available lang={lang} />
                    
                    {/* <VideoC /> */}
                    <SlidesB />
                </div>
            </div>
        </>
    );
}
