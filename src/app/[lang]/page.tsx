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


// import { Kanit } from "next/font/google";
// import HeroSectionN from "@/sessions/header/HeroSessionN";
// import HeroSectionP from "@/sessions/header/HeroSessionP";
// import HeroSectionV from "@/sessions/header/HeroSession";
// import Overview1 from "@/sessions/overview/Overview";
// import Overview from "@/sessions/view/Overview";
// import GalleryM from "@/sessions/view/GalleryM";
// import SizesIM from "@/sessions/view/sizesIM";
// import ViewC from "@/sessions/view/viewC";
// import VideoC from "@/sessions/view/VideoC";
// import SlidesB from "@/sessions/view/SlidesB";

// import Sessions2 from "@/sessions/sessions2/sessions2";
// import Sessions3 from "@/sessions/sessions3/sessions3";
// import Sessions4 from "@/sessions/sessions4/sessions4";
// import Sessions5 from "@/sessions/sessions5/sessions5";
// import Sessions6 from "@/sessions/sessions6/sessions6";
// import Sessions7 from "@/sessions/sessions7/sessions7";
// import Sessions8 from "@/sessions/sessions8/sessions8";
// import { GetStaticProps, GetStaticPaths } from "next";

// const inter = Kanit({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

// // Define Props interface

// // Props interface
// interface MainPageProps {
//   params: { lang: string }; // รับค่า lang จาก dynamic route
// }

// // Generate static params for dynamic routes
// export async function generateStaticParams() {
//   const supportedLangs = ["en-US", "th-TH"]; // ระบุภาษาที่รองรับ
//   return supportedLangs.map((lang) => ({ lang }));
// }

// export default function MainPage({ params: { lang } }: MainPageProps) {
//   return (
//     <>
//       <div
//         className={`relative min-h-screen select-none overflow-hidden text-white antialiased`}
//       >
//         {/* <HeroSectionN lang={lang} /> */}
//         <HeroSectionP lang={lang} />
//         <Overview lang={lang} />
//         <GalleryM />
//         <SizesIM />
//         <ViewC />
//         <VideoC />
//         <SlidesB />
//       </div>
//     </>
//   );
// }
