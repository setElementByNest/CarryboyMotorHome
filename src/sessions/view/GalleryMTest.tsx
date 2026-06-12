/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useTypeCar } from "@/context/TypeCarContext";

interface PinProps {
  top: string;
  left: string;
  images: string[];
  alt?: string;
}

interface ViewOption {
  id: number;
  name: string;
  image: string;
  pins?: PinProps[];
  view360Url?: string;
  view360Iframe?: string;
}

const Index = () => {
  const { typeCar, typeCar_list } = useTypeCar();

  const [showPins, setShowPins] = useState(true);
  const [selectedView, setSelectedView] = useState<number>(1);
  const [selectedGallery, setSelectedGallery] = useState<string[]>([]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = useTranslations("Hero");

  const interiorViews: ViewOption[] = [
    {
      id: 1,
      name: t("Motorhome.textview1"),
      image: "/img/type_a/In/interior 4.jpg",
      pins: [
        { // box top
          top: "20%",
          left: "70%",
          images: [
            "/img/type_a/In/boxtop/IMG_1176.jpg",
            "/img/type_a/In/boxtop/IMG_1175.jpg",
            "/img/type_a/In/boxtop/IMG_1174.jpg",
          ],
        },
        { // sink
          top: "48%",
          left: "53%",
          images: [
            "/img/type_a/In/basin/IMG_1198 copy.jpg",
            "/img/type_a/In/basin/In 02.jpg",
          ],
        },
        { // bed
          top: "60%",
          left: "58%",
          images: [
            "/img/type_a/In/bed/IMG_1209.jpg",
            "/img/type_a/In/bed/IMG_1211.jpg",
            "/img/type_a/In/bed/IMG_1212.jpg",
          ],
        },
        { // toilet
          top: "50%",
          left: "45%",
          images: [
            "/img/type_a/In/toilet/toilet.jpg",
            "/img/type_a/In/toilet/toilet2.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet2.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet3.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet4.jpg",
          ],
        },
        { // air
          top: "30%",
          left: "56%",
          images: [
            "/img/type_a/In/air/Rv carryboy Air type A.jpg",
            "/img/type_a/In/air/Rv carryboy Air type A-1.jpg",
          ],
        },
        { // accessory
          top: "47%",
          left: "28%",
          images: [
            "/img/GalleryM/6/carryboy-motorhome-rv-interior-accessory-tv-microwave.jpg",
            "/img/type_a/In/accessory/IMG_1202.jpg",
          ],
        },
        { // electrical panel
          top: "28%",
          left: "32%",
          images: [
            "/img/GalleryM/carryboy-motorhome-interior-modern-luxury-bedroom-dining-space.jpg",
          ],
        },
      ],
    },
    {
      id: 2,
      name: t("Motorhome.textview2"),
      image: "/img/type_a/In/interior 5.jpg",
      pins: [
        { // skyview
          top: "36%",
          left: "50%",
          images: [
            "/img/type_a/Ex/skyview/S__111599832_0.jpg",
            "/img/type_a/Ex/skyview/S__111599834_0.jpg",
          ],
        },
        { // loft bedroom
          top: "46%",
          left: "50%",
          images: [
            "/img/type_a/In/bedtop/bed01.jpg",
          ],
        },
        { // box top
          top: "20%",
          left: "78%",
          images: [
            "/img/type_a/In/boxtop/IMG_1176.jpg",
            "/img/type_a/In/boxtop/IMG_1175.jpg",
            "/img/type_a/In/boxtop/IMG_1174.jpg",
          ],
        },
        { // window shade
          top: "58%",
          left: "54%",
          images: [
            "/img/GalleryM/View2/3/carryboy-motorhome-window-shade-modern-privacy-design-1.jpg",
            "/img/GalleryM/View2/3/carryboy-motorhome-window-shade-modern-privacy-design-2.jpg",
          ],
        },
        { // window side
          top: "45%",
          left: "80%",
          images: [
            "/img/type_a/Ex/window/windown 1.jpg",
          ],
        },
        { // power outlet
          top: "90%",
          left: "32%",
          images: [
            "/img/type_a/In/bed/IMG_1317_0.jpg",
            "/img/type_a/In/bed/interior 3_0.jpg",
            "/img/type_a/In/bed/IMG_1207_0.jpg",
            "/img/type_a/In/bed/IMG_1209.jpg",
            "/img/type_a/In/bed/IMG_1211.jpg",
            "/img/type_a/In/bed/IMG_1212.jpg",
          ],
        },
        { // accessory
          top: "70%",
          left: "85%",
          images: [
            "/img/type_a/In/accessory/IMG_1202.jpg",
          ],
        },
      ],
    },
    {
      id: 3,
      // name: t("Motorhome.textview3"),
      name: "360° - Inside View 1",
      image:
        "/img/GalleryM/View2/5/carryboy-motorhome-bathroom-compact-shower-toilet-design-1.jpg",
      // view360Url:
      //   "https://www.youtube.com/watch?v=jF8v0s6uo94",
      view360Iframe: "https://momento360.com/e/u/3bc2da5ed1714668b0597864f531dcd0?utm_campaign=embed&amp;utm_source=other&amp;heading=0&amp;pitch=0&amp;field-of-view=75&amp;size=medium&amp;display-plan=true",
    },
    {
      id: 4,
      name: "360° - Inside View 2",
      image:
        "/img/GalleryM/View2/5/carryboy-motorhome-bathroom-compact-shower-toilet-design-1.jpg",
      // view360Url:
      //   "https://www.youtube.com/watch?v=C0r72_ghnrg",
      view360Iframe: "https://momento360.com/e/u/78b607f420ce43f99d37abd4cb88cac7?utm_campaign=embed&amp;utm_source=other&amp;heading=539.07&amp;pitch=-2.98&amp;field-of-view=75&amp;size=medium&amp;display-plan=true",
    },
    {
      id: 5,
      name: "360° - Toilet View",
      image:
        "/img/GalleryM/View2/5/carryboy-motorhome-bathroom-compact-shower-toilet-design-1.jpg",
      // view360Url:
      //   "https://www.youtube.com/watch?v=IRsmtZLvdQA",
      view360Iframe: "https://momento360.com/e/u/b8792479c3204ae7883d28684d9d5d50?utm_campaign=embed&amp;utm_source=other&amp;heading=-103.57&amp;pitch=-0.44&amp;field-of-view=100&amp;size=medium&amp;display-plan=true",
    },
  ];

  const exteriorViews: ViewOption[] = [
    {
      id: 6,
      name: t("Motorhome.textview5"),
      image: "/img/type_a/Travo-A.jpg",
      pins: [
        { // skyview
          top: "24%",
          left: "40%",
          images: [
            "/img/type_a/Ex/skyview/S__111599832_0.jpg",
            "/img/type_a/Ex/skyview/S__111599834_0.jpg",
          ],
        },
        { // awning
          top: "22%",
          left: "75%",
          images: [
            "/img/type_a/Ex/awning/24 MOTORHOME Type A.png",
          ],
        },
        { // door
          top: "43%",
          left: "80%",
          images: [
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-1.jpg",
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-2.jpg",
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-3.jpg",
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-4.jpg",
          ],
        },
        { // water connection
          top: "58%",
          left: "74%",
          images: [
            "/img/type_a/Ex/water/tank-3.jpg",
            "/img/type_a/Ex/water/tank-2.jpg",
            // "/img/GalleryM/EView2/3/carryboy-motorhome-exterior-water-connection-utility-design-1.jpg",
          ],
        },
        { // step
          top: "70%",
          left: "80%",
          images: [
            "/img/GalleryM/EView2/6/carryboy-motorhome-rv-exterior-step-1.jpg",
            "/img/GalleryM/EView2/6/carryboy-motorhome-rv-exterior-step-2.jpg",
            "/img/GalleryM/EView2/6/carryboy-motorhome-rv-exterior-step-3.jpg",
          ],
        },
      ],
    },
    {
      id: 7,
      name: t("Motorhome.textview4"),
      image: "/img/type_a/Ex/13 MOTORHOME Type A.png",
      pins: [
        { // window side
          top: "28%",
          left: "60%",
          images: [
            "/img/type_a/Ex/window/windown 1.jpg",
          ],
        },
        { // battery
          top: "54%",
          left: "64%",
          images: [
            "/img/type_a/Ex/bat/power EV.jpg",
          ],
        },
        { // bin
          top: "54%",
          left: "47%",
          images: [
            "/img/GalleryM/EView1/E4/carryboy-motorhome-rv-exterior-sewage.jpg",
          ],
        },
        // { // rack
        //   top: "68%",
        //   left: "20%",
        //   images: [
        //     "/img/type_a/Ex/rack/Rack Motor.png",
        //   ],
        // },
        { // ladder
          top: "30%",
          left: "28%",
          images: [
            "/img/GalleryM/EView2/4/carryboy-motorhome-rv-exterior-back.jpg",
          ],
        },
        { // box back
          top: "60%",
          left: "18%",
          images: [
            "/img/GalleryM/EView2/5/carryboy-motorhome-rv-exterior-boxback1.jpg",
            "/img/GalleryM/EView2/5/carryboy-motorhome-rv-exterior-boxback2.jpg",
          ],
        },
        { // camera
          top: "10%",
          left: "22%",
          images: [
            "/img/type_a/Ex/Camera/58-MOTORHOME TYPE B.png",
            "/img/type_a/Ex/Camera/360 camera.jpg",
          ],
        },
        { // water connectio
          top: "51%",
          left: "53%",
          images: [
            "/img/GalleryM/EView2/3/carryboy-motorhome-exterior-water-connection-utility-design-1.jpg",
          ],
        },
        { // Com air
          top: "20%",
          left: "18%",
          images: [
            "/img/type_a/Ex/comair/Air 1_0.jpg",
          ],
        },
        { // Support
          top: "73%",
          left: "36%",
          images: [
            "/img/type_a/Ex/support/Electronic Support  legs x2.jpg",
          ],
        },
      ],
    },
  ];

  const interiorViews_type_b: ViewOption[] = [
    {
      id: 1,
      name: t("Motorhome.textview1"),
      image:
        "/img/Sesstion/GalleryM/interior 5.jpg",
      pins: [
        { // box overhead
          top: "22%",
          left: "35%",
          images: [
            "/img/type_b/In/71-MOTORHOME TYPE B.png",
            "/img/GalleryM/2/carryboy-motorhome-rv-interior-compartment1.jpg",
            "/img/GalleryM/2/carryboy-motorhome-rv-interior-compartment2.jpg",
            "/img/GalleryM/2/carryboy-motorhome-rv-interior-compartment3.jpg",
            "/img/GalleryM/2/carryboy-motorhome-rv-interior-compartment4.jpg",
          ],
        },
        { // air
          top: "23%",
          left: "25%",
          images: [
            "/img/type_b/In/70-MOTORHOME TYPE B.png",
          ],
        },
        { // basin
          top: "43%",
          left: "53%",
          images: [
            "/img/GalleryM/3/IMG_1030_0.jpg",
            // "/img/GalleryM/4/carryboy-motorhome-stainless-steel-sink-modern-design1.jpg",
            // "/img/GalleryM/4/carryboy-motorhome-stainless-steel-sink-modern-design2.jpg",
          ],
        },
        { // bedroom
          top: "68%",
          left: "40%",
          images: [
            "/img/type_b/In/interior 9_1.jpg",
            "/img/type_b/In/seat belt logo1_0.jpg",
            "/img/type_b/In/interior 12_0.jpg",
            "/img/type_b/In/seat electric logo_0.jpg",
            "/img/type_b/In/seat electric logo1_0.jpg",
            "/img/type_b/In/interior 8.jpg",
          ],
        },
        { // bathroom 1
          top: "42%",
          left: "42%",
          images: [
            "/img/GalleryM/3/toilet 1_0.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet4.jpg",
          ],
        },
        { // bathroom 2
          top: "42%",
          left: "64%",
          images: [
            "/img/GalleryM/3/86-MOTORHOME TYPE B_0.png",
            "/img/GalleryM/3/toilet 2_0.jpg",
            // "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet2.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet3.jpg",
          ],
        },
        { // sink
          top: "60%",
          left: "70%",
          images: [
            "/img/type_b/In/interior 6.jpg",
            "/img/type_b/In/Shink 2.jpg",
            "/img/type_b/In/Shinl.jpg",
          ],
        },
        // {
        //   top: "47%",
        //   left: "28%",
        //   images: [
        //     "/img/GalleryM/6/carryboy-motorhome-rv-interior-accessory-tv-microwave.jpg",
        //   ],
        // },
        { // electrical panel
          top: "25%",
          left: "71%",
          images: [
            "/img/type_b/In/81-MOTORHOME TYPE B.png",
          ],
        },
        { // light sink
          top: "35%",
          left: "70%",
          images: [
            "/img/type_b/In/80-MOTORHOME TYPE B.png",
          ],
        },
      ],
    },
    {
      id: 2,
      name: t("Motorhome.textview2"),
      image:
        "/img/Sesstion/GalleryM/interior 1.jpg",
      pins: [
        { // skyview
          top: "25%",
          left: "50%",
          images: [
            "/img/type_b/Ex/skyview/S__111599832_0.jpg",
            "/img/type_b/Ex/skyview/S__111599834_0.jpg",
          ],
        },
        { // loft bedroom
          top: "38%",
          left: "50%",
          images: [
            "/img/type_b/In/67-MOTORHOME TYPE B.png",
          ],
        },
        { // window shade
          top: "52%",
          left: "48%",
          images: [
            "/img/GalleryM/View2/3/carryboy-motorhome-window-shade-modern-privacy-design-1.jpg",
            "/img/GalleryM/View2/3/carryboy-motorhome-window-shade-modern-privacy-design-2.jpg",
          ],
        },
        { // exhaust hood
          top: "20%",
          left: "22%",
          images: [
            "/img/type_b/In/interior 8_0.jpg",
          ],
        },
        { // sink 
          top: "65%",
          left: "22%",
          images: [
            "/img/type_b/In/Shink 2.jpg",
            "/img/type_b/In/Shinl.jpg",
          ],
        },
        { // microwave
          top: "72%",
          left: "36%",
          images: [
            "/img/type_b/In/interior 9_0.jpg",
            "/img/type_b/In/interior 6.jpg",
          ],
        },
        { // bed
          top: "63%",
          left: "70%",
          images: [
            "/img/type_b/In/interior 8.jpg",
          ],
        },
        { // window side
          top: "40%",
          left: "80%",
          images: [
            "/img/GalleryM/View2/4/DJI_20251108100147_0269_D.jpg",
            "/img/GalleryM/View2/4/DJI_20251108100158_0270_D.jpg",
            "/img/GalleryM/View2/4/windown 1.jpg",
          ],
        },
        // {
        //   top: "82%",
        //   left: "12%",
        //   images: [
        //     "/img/GalleryM/View2/5/carryboy-motorhome-power-outlet-modern-electrical-design-1.jpg",
        //   ],
        // },
      ],
    },
    {
      id: 3,
      name: "360° - Inside View",
      image: "",
      // view360Url: "https://www.youtube.com/watch?v=eb6-J0yPrZI",
      view360Iframe: "https://momento360.com/e/u/358c2cd24b414db5a04caf9de35829b4?utm_campaign=embed&amp;utm_source=other&amp;heading=1.2&amp;pitch=3.03&amp;field-of-view=100&amp;size=medium&amp;display-plan=true",
    },
    // {
    //   id: 4,
    //   name: "360° - Inside View 2",
    //   image: "",
    //   view360Url: "https://www.youtube.com/watch?v=LX7z_--rQg0",
    // },
    {
      id: 4,
      name: "360° - Toilet View",
      image: "",
      // view360Url: "https://www.youtube.com/watch?v=35X7ZGF8u5c",
      view360Iframe: "https://momento360.com/e/u/514b1f173b16463694a719aeb5f5fc90?utm_campaign=embed&amp;utm_source=other&amp;heading=-97.88&amp;pitch=-1.53&amp;field-of-view=75&amp;size=medium&amp;display-plan=true",
    },
  ];

  const exteriorViews_type_b: ViewOption[] = [
    {
      id: 6,
      name: t("Motorhome.textview4"),
      image: "/img/Sesstion/GalleryM/11-MOTORHOME TYPE B.png",
      pins: [
        { // skyview
          top: "10%",
          left: "44%",
          images: [
            "/img/type_b/Ex/skyview/S__111599832_0.jpg",
            "/img/type_b/Ex/skyview/S__111599834_0.jpg",
          ],
        },
        { // window side
          top: "24%",
          left: "80%",
          images: [
            "/img/GalleryM/View2/4/windown 1.jpg",
            "/img/GalleryM/View2/4/DJI_20251108100147_0269_D.jpg",
            "/img/GalleryM/View2/4/DJI_20251108100158_0270_D.jpg",
          ],
        },
        { // bin
          top: "46%",
          left: "84%",
          images: [
            "/img/type_b/Ex/water/tank-3.jpg",
          ],
        },
        { // water in
          top: "48%",
          left: "88%",
          images: [
            "/img/type_b/Ex/water/tank-2.jpg",
          ],
        },
        { // awning
          top: "8%",
          left: "82%",
          images: [
            "/img/type_b/Ex/awning/38-MOTORHOME TYPE B.png",
          ],
        },
        { // step
          top: "66%",
          left: "72%",
          images: [
            "/img/GalleryM/EView2/6/carryboy-motorhome-rv-exterior-step-1.jpg",
            "/img/GalleryM/EView2/6/carryboy-motorhome-rv-exterior-step-2.jpg",
            "/img/GalleryM/EView2/6/carryboy-motorhome-rv-exterior-step-3.jpg",
          ],
        },
        { // door
          top: "36%",
          left: "72%",
          images: [
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-1.jpg",
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-2.jpg",
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-3.jpg",
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-4.jpg",
          ],
        },
        { // CCTV
          top: "48%",
          left: "61%",
          images: [
            "/img/option/Option1/CCTV.jpg",
          ],
        },
      ],
    },
    {
      id: 7,
      name: t("Motorhome.textview5"),
      image: "/img/Sesstion/GalleryM/05-MOTORHOME TYPE B.png",
      pins: [
        { // battery
          top: "58%",
          left: "60%",
          images: [
            "/img/type_b/Ex/bat/power1_0.jpg",
            "/img/type_b/Ex/bat/port change.png",
            "/img/type_b/Ex/bat/power EV.jpg",
          ],
        },
        { // box back
          top: "60%",
          left: "25%",
          images: [
            "/img/GalleryM/EView2/5/carryboy-motorhome-rv-exterior-boxback1.jpg",
            "/img/GalleryM/EView2/5/carryboy-motorhome-rv-exterior-boxback2.jpg",
          ],
        },
        { // window side
          top: "38%",
          left: "56%",
          images: [
            "/img/type_a/Ex/window/windown 1.jpg",
          ],
        },
        { // ladder
          top: "30%",
          left: "32%",
          images: [
            "/img/type_b/Ex/fan/53-MOTORHOME TYPE B.png",
          ],
        },
        { // camera
          top: "24%",
          left: "28%",
          images: [
            "/img/type_b/Ex/Camera/58-MOTORHOME TYPE B.png",
            "/img/type_b/Ex/Camera/360 camera.jpg",
          ],
        },
        { // rack
          top: "70%",
          left: "22%",
          images: [
            "/img/type_b/Ex/rack/Rack Motor.png",
          ],
        },
        { // Support
          top: "73%",
          left: "36%",
          images: [
            "/img/type_a/Ex/support/Electronic Support  legs x2.jpg",
          ],
        },
        { // Back light
          top: "52%",
          left: "35%",
          images: [
            "/img/type_b/Ex/Led 1.jpg",
          ],
        },
      ],
    },
  ];

  const interiorViews_type_la: ViewOption[] = [
    {
      id: 1,
      name: t("Motorhome.textview1"),
      image: "/img/type_l/In/interior-typeLA-1.jpg",
      pins: [
        { // box top
          top: "33%",
          left: "30%",
          images: [
            "/img/type_a/In/boxtop/IMG_1176.jpg",
            "/img/type_a/In/boxtop/IMG_1175.jpg",
            "/img/type_a/In/boxtop/IMG_1174.jpg",
          ],
          alt: "Box Top",
        },
        { // sink
          top: "68%",
          left: "30%",
          images: [
            "/img/type_a/In/basin/IMG_1198 copy.jpg",
            "/img/type_a/In/basin/In 02.jpg",
          ],
          alt: "Sink",
        },
        { // bed
          top: "70%",
          left: "60%",
          images: [
            "/img/type_a/In/bed/IMG_1209.jpg",
            "/img/type_a/In/bed/IMG_1211.jpg",
            "/img/type_a/In/bed/IMG_1212.jpg",
          ],
          alt: "Bed",
        },
        { // toilet
          top: "50%",
          left: "52%",
          images: [
            "/img/type_a/In/toilet/toilet.jpg",
            "/img/type_a/In/toilet/toilet2.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet2.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet3.jpg",
            "/img/GalleryM/3/carryboy-motorhome-bathroom-compact-design-modern-toilet4.jpg",
          ],
          alt: "Toilet",
        },
        { // air
          top: "20%",
          left: "80%",
          images: [
            "/img/type_a/In/air/Rv carryboy Air type A.jpg",
            "/img/type_a/In/air/Rv carryboy Air type A-1.jpg",
          ],
          alt: "Air Conditioning",
        },
        { // accessory
          top: "85%",
          left: "35%",
          images: [
            "/img/GalleryM/6/carryboy-motorhome-rv-interior-accessory-tv-microwave.jpg",
            "/img/type_a/In/accessory/IMG_1202.jpg",
          ],
          alt: "Accessory",
        },
        { // electrical panel
          top: "31%",
          left: "66%",
          images: [
            "/img/GalleryM/carryboy-motorhome-interior-modern-luxury-bedroom-dining-space.jpg",
          ],
          alt: "Electrical Panel",
        },
      ],
    },
    {
      id: 2,
      name: t("Motorhome.textview2"),
      image: "/img/type_l/In/interior-typeLA.jpg",
      pins: [
        { // skyview
          top: "34%",
          left: "50%",
          images: [
            "/img/type_a/Ex/skyview/S__111599832_0.jpg",
            "/img/type_a/Ex/skyview/S__111599834_0.jpg",
          ],
          alt: "Skyview",
        },
        { // loft bedroom
          top: "46%",
          left: "50%",
          images: [
            "/img/type_a/In/bedtop/bed01.jpg",
          ],
          alt: "Loft Bedroom",
        },
        { // box top
          top: "20%",
          left: "78%",
          images: [
            "/img/type_a/In/boxtop/IMG_1176.jpg",
            "/img/type_a/In/boxtop/IMG_1175.jpg",
            "/img/type_a/In/boxtop/IMG_1174.jpg",
          ],
          alt: "Box Top",
        },
        { // window shade
          top: "58%",
          left: "54%",
          images: [
            "/img/GalleryM/View2/3/carryboy-motorhome-window-shade-modern-privacy-design-1.jpg",
            "/img/GalleryM/View2/3/carryboy-motorhome-window-shade-modern-privacy-design-2.jpg",
          ],
          alt: "Window Shade",
        },
        { // window side
          top: "40%",
          left: "80%",
          images: [
            "/img/type_a/Ex/window/windown 1.jpg",
          ],
          alt: "Window Side",
        },
        { // bed function
          top: "65%",
          left: "35%",
          images: [
            "/img/type_a/In/bed/IMG_1317_0.jpg",
            "/img/type_a/In/bed/interior 3_0.jpg",
            "/img/type_a/In/bed/IMG_1207_0.jpg",
            "/img/type_a/In/bed/IMG_1209.jpg",
            "/img/type_a/In/bed/IMG_1211.jpg",
            "/img/type_a/In/bed/IMG_1212.jpg",
          ],
          alt: "Bed Function",
        },
      ],
    },
    {
      id: 3,
      name: "360° - Inside View",
      image:
        "/img/GalleryM/View2/5/carryboy-motorhome-bathroom-compact-shower-toilet-design-1.jpg",
      view360Iframe:
        "https://momento360.com/e/u/4fd86869eed64305a00315ee234da2dc?utm_campaign=embed&amp;utm_source=other&amp;heading=0&amp;pitch=0&amp;field-of-view=75&amp;size=medium&amp;display-plan=true",
    },
    {
      id: 4,
      name: "360° - Toilet View",
      image:
        "/img/GalleryM/View2/5/carryboy-motorhome-bathroom-compact-shower-toilet-design-1.jpg",
      view360Iframe:
        "https://momento360.com/e/u/1911af3de8554decaded44bf53009a81?utm_campaign=embed&amp;utm_source=other&amp;heading=-335.94&amp;pitch=-8.63&amp;field-of-view=90&amp;size=medium&amp;display-plan=true",
    },
  ];

  const exteriorViews_type_la: ViewOption[] = [
    {
      id: 6,
      name: t("Motorhome.textview5"),
      image: "/img/type_l/out/RV-Type LA-4.jpg",
      pins: [
        { // skyview
          top: "19%",
          left: "40%",
          images: [
            "/img/type_a/Ex/skyview/S__111599832_0.jpg",
            "/img/type_a/Ex/skyview/S__111599834_0.jpg",
          ],
          alt: "Skyview",
        },
        { // awning
          top: "17%",
          left: "74%",
          images: [
            "/img/type_a/Ex/awning/24 MOTORHOME Type A.png",
          ],
          alt: "Awning",
        },
        { // door
          top: "40%",
          left: "79%",
          images: [
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-1.jpg",
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-2.jpg",
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-3.jpg",
            "/img/GalleryM/EView2/2/carryboy-motorhome-rv-exterior-door-4.jpg",
          ],
          alt: "Door",
        },
        { // water connection
          top: "50%",
          left: "84%",
          images: [
            "/img/type_a/Ex/water/tank-3.jpg",
            "/img/type_a/Ex/water/tank-2.jpg",
            // "/img/GalleryM/EView2/3/carryboy-motorhome-exterior-water-connection-utility-design-1.jpg",
          ],
          alt: "Water Connection",
        },
        { // step
          top: "60%",
          left: "80%",
          images: [
            "/img/GalleryM/EView2/6/carryboy-motorhome-rv-exterior-step-1.jpg",
            "/img/GalleryM/EView2/6/carryboy-motorhome-rv-exterior-step-2.jpg",
            "/img/GalleryM/EView2/6/carryboy-motorhome-rv-exterior-step-3.jpg",
          ],
          alt: "Step",
        },
      ],
    },
    {
      id: 7,
      name: t("Motorhome.textview4"),
      image: "/img/type_l/out/RV-Type LA-3.jpg",
      pins: [
        { // window side
          top: "35%",
          left: "70%",
          images: [
            "/img/type_a/Ex/window/windown 1.jpg",
          ],
          alt: "Window Side",
        },
        { // battery
          top: "58%",
          left: "72%",
          images: [
            "/img/type_a/Ex/bat/power EV.jpg",
          ],
          alt: "Battery",
        },
        { // box back
          top: "66%",
          left: "32%",
          images: [
            "/img/GalleryM/EView2/5/carryboy-motorhome-rv-exterior-boxback1.jpg",
            "/img/GalleryM/EView2/5/carryboy-motorhome-rv-exterior-boxback2.jpg",
          ],
          alt: "Box Back",
        },
        { // camera
          top: "17%",
          left: "30%",
          images: [
            "/img/type_a/Ex/Camera/58-MOTORHOME TYPE B.png",
            "/img/type_a/Ex/Camera/360 camera.jpg",
          ],
          alt: "Camera",
        },
        { // Com air
          top: "30%",
          left: "23%",
          images: [
            "/img/type_a/Ex/comair/Air 1_0.jpg",
          ],
          alt: "Com Air",
        },
        { // Support
          top: "78%",
          left: "50%",
          images: [
            "/img/type_a/Ex/support/Electronic Support  legs x2.jpg",
          ],
          alt: "Support",
        },
      ],
    },
  ];

  const activeInteriorViews =
    typeCar === typeCar_list[0][2] || typeCar === typeCar_list[1][2]
      ? interiorViews_type_b
      : typeCar === typeCar_list[1][1]
        ? interiorViews_type_la
        : interiorViews;
  const activeExteriorViews =
    typeCar === typeCar_list[0][2] || typeCar === typeCar_list[1][2]
      ? exteriorViews_type_b
      : typeCar === typeCar_list[1][1]
        ? exteriorViews_type_la
        : exteriorViews;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const activeViews = [...activeInteriorViews, ...activeExteriorViews];
  const currentView = activeViews.find((view) => view.id === selectedView);
  // const view_disable = typeCar === typeCar_list[1][2] ? true : false;
  const view_disable = false;

  useEffect(() => {
    if (!activeViews.some((view) => view.id === selectedView) && activeViews.length > 0) {
      setSelectedView(activeViews[0].id);
    }
  }, [activeViews, selectedView]);

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

  const View360Youtube = ({ url }: { url: string }) => {
    // Extract video ID from YouTube URL
    const getYouTubeEmbedUrl = (url: string) => {
      const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0`;
    };

    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <iframe
          src={getYouTubeEmbedUrl(url)}
          className="w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="360 View"
        />
      </div>
    );
  };

  const View360Iframe = ({ url }: { url: string }) => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <iframe
        src={url}
        className="w-full h-full rounded-lg"
        allowFullScreen
        title="360 View"
      />
    </div>
  );

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
    <div className={"bg-gray-100 text-black" + (view_disable ? " hidden" : "")}>
      <div className="w-[90%] md:max-w-6xl mx-auto bg-white p-4 rounded-xl shadow-lg overflow-hidden flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-8" >
          {/* <div className="flex flex-col md:flex-row gap-8" style={{ display: typeCar === typeCar_list[1][1] || typeCar === typeCar_list[1][2] ? "none" : "" }}> */}
          <motion.div
            className="relative flex-1 h-[400px] md:h-[600px] rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentView?.view360Iframe ? (
              <View360Iframe url={currentView.view360Iframe} />
            ) : currentView?.view360Url ? (
              <View360Youtube url={currentView.view360Url} />
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
                        title={pin.alt}
                        aria-label={pin.alt ?? "pin"}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <img
                          src="/img/Sesstion/GalleryM/carryboy-logo-red-circle-symbol-brand.png"
                          alt={pin.alt ?? "pin"}
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
            <h2 className="text-2xl pt-4 font-semibold flex flex-wrap gap-2" >
              {"ภาพรวม รถบ้าน"}
              <span className="text-red-600 pr-4">{typeCar}</span>
            </h2>
            <div>
              <h2 className="text-xl font-semibold text-black mb-4">
                {t("Motorhome.textview9")}
              </h2>
              <div className="space-y-2">
                {activeInteriorViews.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setSelectedView(view.id)}
                    className={`w-full text-left px-4 py-2 transition-all text-black ${selectedView === view.id
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
              <h2 className="text-xl font-semibold text-black mb-4">
                {t("Motorhome.textview10")}
              </h2>
              <div className="space-y-2">
                {activeExteriorViews.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setSelectedView(view.id)}
                    className={`w-full text-left px-4 py-2 transition-all text-black ${selectedView === view.id
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
