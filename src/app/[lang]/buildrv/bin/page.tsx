"use client";
import { useTranslations } from "next-intl";
import React, { useState, useRef, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertCircle } from "lucide-react";
import { usePrice } from "@/context/PriceContext";
import { Kanit } from "next/font/google";

const inter = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface VehicleModel {
  name: string;
  price: number;
  image: string;
  image2?: string;
  description?: string;
  description2?: string | string[];
}

interface Option {
  name: string;
  price: number;
  image: string;
  image2?: string;
  description?: string;
  description2?: string | string[];
  color?: string;
  models?: VehicleModel[];
  namesub?: string;
}

interface ConfigSection {
  options: Option[];
  selected: Option | null;
  selectedModel?: Option | null;
}

interface Config {
  Vehicle: ConfigSection;
  Laminate: ConfigSection;
  OptionsRack: ConfigSection;
  Scooter: ConfigSection;
  RearType: ConfigSection;
  AirCondition: ConfigSection;
  Battery: ConfigSection;
  PowerGenerator: ConfigSection;
  RearBox: ConfigSection;
  SlideKitchen: ConfigSection;
  Suspension: ConfigSection;
  Tires: ConfigSection;
}

interface AdditionalCosts {
  insurance: number;
  registration: number;
  redPlate: number;
}

interface EmailJSTemplateParams {
  to_name: string;
  from_name: string;
  message: string;
  to_email: string;
  [key: string]: unknown;
}

type PaymentType = "full" | "installment";
type InstallmentMonths = 24 | 36 | 48;

const RVConfigurator: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedImage, setSelectedImage] = useState<string>(
    "/img/buildrv/02.jpg"
  );
  const [selectedDetails, setSelectedDetails] = useState<Option | null>(null);
  const [showPaymentDialog, setShowPaymentDialog] = useState<boolean>(false);
  const [paymentType, setPaymentType] = useState<PaymentType>("full");
  const [installmentMonths, setInstallmentMonths] =
    useState<InstallmentMonths>(24);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [alertTitle, setAlertTitle] = useState<string>("");

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const t = useTranslations("buildrv");

  const [showDetailDialog, setShowDetailDialog] = useState<boolean>(false);
  const [detailTitle, setDetailTitle] = useState<string>("");
  const [detailDescription, setDetailDescription] = useState<string>("");
  const [expandedOption, setExpandedOption] = useState<string | null>(null); // State สำหรับเก็บสินค้าที่ต้องการแสดง description2

  const [config, setConfig] = useState<Config>({
    Vehicle: {
      options: [
        {
          name: "TOYOTA HILUX REVO",
          price: 0,
          image: "/img/buildrv/toyota/Vehicle_rv_toyota_e_01.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD0"),
          description2: "",
          models: [
            {
              name: "2.4 ENTRY 2WD A/T",
              price: 2058000,
              image: "/img/buildrv/toyota/Vehicle_rv_toyota_e_01.jpg",
              image2:
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
              description: t("textD1"),
              description2: [
                "• 360° Camera",
                "• Hot Water Shower",
                "• Toilet",
                "• Battery 9,600 Watt",
                "• 80 L. fridge",
                "• Fresh Water Tank 120 L.",
                "• 32 Smart TV",
                "• Electric Entry Step",
                "• Standard Suspension",
                "• Rear ladder",
              ],
            },
            {
              name: "2.8 ENTRY 2WD M/T",
              price: 2063000,
              image: "/img/buildrv/toyota/Vehicle_rv_toyota_e_02.jpg",
              image2:
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              description: t("textD2"),
              description2: [
                "• 360° Camera",
                "• Hot Water Shower",
                "• Toilet",
                "• Battery 9,600 Watt",
                "• 80 L. fridge",
                "• Fresh Water Tank 120 L.",
                "• 32 Smart TV",
                "• Electric Entry Step",
                "• Standard Suspension",
                "• Rear ladder",
              ],
            },
            {
              name: "2.8 ENTRY 4WD M/T",
              price: 2173000,
              image: "/img/buildrv/toyota/Vehicle_rv_toyota_e_03.jpg",
              image2:
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              description: t("textD3"),
              description2: [
                "• 360° Camera",
                "• Hot Water Shower",
                "• Toilet",
                "• Battery 9,600 Watt",
                "• 80 L. fridge",
                "• Fresh Water Tank 120 L.",
                "• 32 Smart TV",
                "• Electric Entry Step",
                "• Standard Suspension",
                "• Rear ladder",
              ],
            },
            {
              name: "2.8 ENTRY 4WD A/T",
              price: 2225000,
              image: "/img/buildrv/toyota/Vehicle_rv_toyota_e_04.jpg",
              image2:
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              description: t("textD4"),
              description2: [
                "• 360° Camera",
                "• Hot Water Shower",
                "• Toilet",
                "• Battery 9,600 Watt",
                "• 80 L. fridge",
                "• Fresh Water Tank 120 L.",
                "• 32 Smart TV",
                "• Electric Entry Step",
                "• Standard Suspension",
                "• Rear ladder",
              ],
            },
          ],
        },
        {
          name: "TOYOTA HILUX CHAMP",
          price: 0,
          image: "/img/buildrv/HILUX/Vehicle_rv_toyota_champ.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD5"),
          description2: "",
          models: [
            {
              name: "2.4 Diesel AT LWB",
              price: 1997000,
              image: "/img/buildrv/HILUX/Vehicle_rv_toyota_champ.jpg",
              image2:
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              description: t("textD6"),
              description2: [
                "• 360° Camera",
                "• Hot Water Shower",
                "• Toilet",
                "• Battery 9,600 Watt",
                "• 80 L. fridge",
                "• Fresh Water Tank 100 L.",
                "• 32 Smart TV",
                "• Electric Entry Step",
                "• Standard Suspension",
                "• Rear ladder",
              ],
            },
          ],
        },
        {
          name: "MITSUBISHI TRITON",
          price: 0,
          image: "/img/buildrv/mitsubishi/Vehicle_rv_mitsu_e.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD7"),
          description2: "",
          models: [
            {
              name: "2.4 Pro 4WD A/T",
              price: 2170000,
              image: "/img/buildrv/mitsubishi/Vehicle_rv_mitsu_e.jpg",
              image2:
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              description: t("textD8"),
              description2: [
                "• 360° Camera",
                "• Hot Water Shower",
                "• Toilet",
                "• Battery 9,600 Watt",
                "• 80 L. fridge",
                "• Fresh Water Tank 80 L.",
                "• 32 Smart TV",
                "• Electric Entry Step",
                "• Standard Suspension",
                "• Rear ladder",
              ],
            },
          ],
        },
        // {
        //   name: "MERCEDES BENZ",
        //   price: 0,
        //   image: "/img/buildrv/benz/mercedes-benz.png",
        //   image2:
        //     "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        //   description: t("textD7"),
        //   description2: "",
        //   models: [
        //     {
        //       name: "MERCEDES BENZ X CLASS",
        //       price: 5900000,
        //       image: "/img/buildrv/benz/mercedes-benz.png",
        //       image2:
        //         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        //       description: t("textD8"),
        //       description2: [
        //         "• 360° Camera",
        //         "• Hot Water Shower",
        //         "• Toilet",
        //         "• Battery 9,600 Watt",
        //         "• 120 L. fridge",
        //         "• Fresh Water Tank 120 L.",
        //         "• 32 Smart TV",
        //         "• Electric Entry Step",
        //         "• Standard Suspension",
        //         "• Rear ladder",
        //       ],
        //     },
        //   ],
        // },
      ],
      selected: null,
      selectedModel: null,
    },

    Laminate: {
      options: [
        {
          name: "Lite",
          price: 0,
          image: "/img/buildrv/int_01.jpg",
          image2: "/img/buildrv/lite.png",
          description: t("textD9"),
          description2: "",
          color: "#FFFFFF",
        },
        {
          name: "Classic",
          price: 0,
          image: "/img/buildrv/int_02.jpg",
          image2: "/img/buildrv/classic.png",
          description: t("textD10"),
          description2: "",
          color: "#8B4513",
        },
      ],
      selected: null,
    },
    RearType: {
      options: [
        {
          name: "Counter",
          price: 0,
          image: "/img/buildrv/int_03.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD11"),
          description2: "",
        },
        {
          name: "Wardrobe",
          price: 0,
          image: "/img/buildrv/int_04.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD12"),
          description2: "",
        },
      ],
      selected: null,
    },
    AirCondition: {
      options: [
        {
          name: "Standard",
          price: 0,
          image: "/img/buildrv/Ari-con-1.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD13"),
          description2: [
            "• รุ่น: Dometic FreshJet 1700",
            "• ความแรง: 7,000 BTU",
            "• การกระจายลม: แนวยาวทั่วพื้นที่",
            "• การควบคุม: หน้าจอดิจิทัลพร้อมรีโมทคอนโทรล",
            "• พลังงาน: ใช้ไฟฟ้ากระแสสลับ 230V",
            "• น้ำหนัก: 20 กิโลกรัม",
            "• การติดตั้ง: ติดผนังแบบประหยัดพื้นที่",
            "• คุณสมบัติพิเศษ: ระบบลดเสียงรบกวนขณะทำงาน",
          ],
        },
        {
          name: "Roof Air Conditioner",
          price: 61000,
          image: "/img/buildrv/Ari-con-2.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD14"),
          description2: [
            "• รุ่น: Dometic FreshJet 2200",
            "• ประสิทธิภาพความเย็น: 3,000 Watts หรือ 10,200 BTU/h",
            "• ช่วงอุณหภูมิการทำงาน: 16 - 30 องศาเซลเซียส",
            "• ทนทุกสภาพอากาศ: ทำงานได้ที่อุณหภูมิ -2 ถึง 55 องศาเซลเซียส",
            "• การใช้พลังงาน: 1,200 Watts",
            "• ระบบ: Compressor Inverter ลดการสั่นสะเทือนและเสียงรบกวน",
            "• การควบคุม: Remote Control และปุ่ม Touch Screen",
            "• การเชื่อมต่อ: ใช้งานผ่าน Application ด้วย Bluetooth",
            "• การป้องกัน: มาตรฐาน IP55 กันน้ำและฝุ่น",
            "• ระบบไฟฟ้า: ใช้ไฟ 220 - 240 VAC",
            "• คุณสมบัติพิเศษ: ADB (Air Distribution Box) พร้อมไฟ LED หลายสี",
            "• ขนาด (กว้าง x ลึก x สูง): 718 x 1,107 x 225 มม.",
            "• น้ำหนัก: 35.8 กิโลกรัม",
            "• การติดตั้ง: รูปร่างบาง ติดตั้งง่าย เหมาะสำหรับรถบ้าน",
          ],
        },
      ],
      selected: null,
    },
    Battery: {
      options: [
        {
          name: "9,600 Wh",
          namesub: String("(" + t("textD15") + " 8,160 Wh)"),
          price: 0,
          image: "/img/buildrv/bat_A01.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "",
          description2: "",
        },
        {
          name: "19,200 Wh",
          namesub: String("(" + t("textD15") + " 16,320 Wh)"),
          price: 95000,
          image: "/img/buildrv/bat_A02.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "",
          description2: "",
        },
        {
          name: "28,800 Wh",
          namesub: String("(" + t("textD15") + " 24,480 Wh)"),
          price: 190000,
          image: "/img/buildrv/bat_A03.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "",
          description2: "",
        },
      ],
      selected: null,
    },
    PowerGenerator: {
      options: [
        {
          name: "MXR3300",
          price: 0,
          image:
            "/img/buildrv/carryboy-motorhome-rv-feature-generator-Standard.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD18"),
          description2: [
            "• รุ่น: MXR3300",
            "• กำลังไฟฟ้า: 3,300 วัตต์",
            "• ระบบ: อินเวอร์เตอร์ลดเสียงรบกวน",
            "• เชื้อเพลิง: น้ำมันเบนซิน",
            "• การใช้งาน: รองรับอุปกรณ์ไฟฟ้าหลายประเภท",
            "• น้ำหนัก: 28 กิโลกรัม",
            "• การติดตั้ง: ติดตั้งผนังด้วยตัวยึดมาตรฐาน",
            "• ความทนทาน: ตัวเครื่องแข็งแรง พร้อมใช้งานในสภาพแวดล้อมหลากหลาย",
          ],
        },
        {
          name: "Dometic PGE121",
          price: 0,
          image:
            "/img/buildrv/carryboy-motorhome-rv-feature-generator-Dometic.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD19"),
          description2: [
            "• รุ่น: Dometic PGE121",
            "• กำลังไฟฟ้า: 2,100 วัตต์",
            "• ระบบ: สมาร์ทอินเวอร์เตอร์",
            "• เชื้อเพลิง: น้ำมันเบนซิน",
            "• การใช้งาน: ออกแบบเพื่อการใช้งานในรถบ้าน",
            "• น้ำหนัก: 25 กิโลกรัม",
            "• การติดตั้ง: ติดตั้งผนังแบบประหยัดพื้นที่",
            "• คุณสมบัติพิเศษ: ลดเสียงรบกวนและประหยัดพลังงาน",
          ],
        },
      ],
      selected: null,
    },
    RearBox: {
      options: [
        {
          name: "Matte Black",
          price: 0,
          image: "/img/buildrv/boxback-black.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD20"),
          description2: "",
        },
        {
          name: "Glossy White",
          price: 0,
          image: "/img/buildrv/boxback-white.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD21"),
          description2: "",
        },
      ],
      selected: null,
    },
    SlideKitchen: {
      options: [
        {
          name: "Storage",
          price: 0,
          image: "/img/buildrv/draft_1_2.png",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD23"),
          description2: "",
        },
        {
          name: "Slide Kitchen",
          price: 40000,
          image: "/img/buildrv/draft_1_1.png",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD22"),
          description2: "",
        },
      ],
      selected: null,
    },
    Suspension: {
      options: [
        {
          name: "Standard Suspension",
          price: 0,
          image: "/img/buildrv/set_01.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD24"),
          description2: [
            "• Front shock absorber / Monotube(Explorer REVO 4wd GT-series)",
            "• Front shock absorber / Monotube(Explorer REVO 4wd GT-series)",
            "• Rear shock absorber / SUBTANK 8 LEVEL(Explorer REVO 4wd M16 series)",
            "• Standard stabilizer arm",
            "• 9-10” shakle",
            "• Standard leaf spring",
          ],
        },
        {
          name: "Suspension Package",
          price: 95000,
          image: "/img/buildrv/set_03.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD25"),
          description2: [
            "• Rear shock absorber / SUBTANK 8 LEVEL(Explorer REVO 4wd M16 series)",
            "• Front & Rear stabilizer arm",
            "• Suspension tune-up by AC power",
            "• 9-10” shakle",
            "• Standard leaf spring",
          ],
        },
      ],
      selected: null,
    },
    Tires: {
      options: [
        {
          name: "Standard Tires",
          price: 0,
          image: "/img/buildrv/tires_01.png",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD26"),
          description2: [
            "• BRIDGESTONE AT-002",
            "• Better adaptation & reaction over different types of terrains",
          ],
        },
        {
          name: "All-Terrain Tires",
          price: 20000,
          image: "/img/buildrv/tires_02.png",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD27"),
          description2: [
            "• BFGoodrich All-Terrain KO2",
            "• On-road and off-road tires for 4x4s, SUVs and pickup trucks.",
          ],
        },
      ],
      selected: null,
    },
    Scooter: {
      options: [
        {
          name: "BRIX STANDARD",
          price: 24900,
          image: "/img/buildrv/Brix.png",
          image2: "/img/buildrv/motor.jpg",
          description: t("textD44"),
          description2: [
            "• ดีไซน์ทันสมัย สีดำสปอร์ต",
            "• ขนาดกะทัดรัด เหมาะกับการขับขี่ในเมือง",
            "• แบตเตอรี่ 48V ประสิทธิภาพสูง",
            "• เบาะนั่งเดี่ยวพร้อมความสบาย",
            "• ไฟหน้าและไฟท้าย LED เพิ่มความปลอดภัย",
            "• ที่พักเท้าพับได้สำหรับการจัดเก็บสะดวก",
            "• มอเตอร์ไฟฟ้ารักษ์โลก",
            "• กระจกมองหลัง เพิ่มทัศนวิสัยการขับขี่",
          ],
          color: "#8B4513",
        },
        {
          name: "BRIX PRO",
          price: 27900,
          image: "/img/buildrv/Brix_Pro.png",
          image2: "/img/buildrv/Brix_Pro.png",
          description: t("textD45"),
          description2: [
            "• สีดำพรีเมียมพร้อมดีเทลสีเหลือง",
            "• เบาะคู่เหมาะสำหรับสองคน",
            "• กล่องเก็บสัมภาระด้านหลังใช้งานสะดวก",
            "• แบตเตอรี่ 48V ความจุสูง",
            "• ไฟหน้า LED และไฟเลี้ยวครบครัน",
            "• ระบบช่วงล่างขั้นสูง เหมาะกับทุกสภาพถนน",
            "• พอร์ตชาร์จ USB สำหรับอุปกรณ์พกพา",
            "• ระบบควบคุมอัจฉริยะ ใช้งานง่าย",
          ],
          color: "#8B4513",
        },
        {
          name: "AVA STANDARD",
          price: 25900,
          image: "/img/buildrv/AVA.png",
          image2: "/img/buildrv/motor.jpg",
          description: t("textD46"),
          description2: [
            "• ดีไซน์น้ำหนักเบา เคลื่อนย้ายสะดวก",
            "• สีขาวคลาสสิก ดูสะอาดตา",
            "• เบาะนั่งเดี่ยว สะดวกสบาย",
            "• แบตเตอรี่ 36V วิ่งได้นานขึ้น",
            "• ไฟหน้า LED เพิ่มความปลอดภัย",
            "• ช่องเก็บของด้านหลัง (อุปกรณ์เสริม)",
            "• ระบบควบคุมการขับขี่ที่ใช้งานง่าย",
            "• มอเตอร์ไฟฟ้ารักษ์โลก",
          ],
          color: "#FFFFFF",
        },
        {
          name: "AVA PRO",
          price: 29900,
          image: "/img/buildrv/AVA-Pro.png",
          image2: "/img/buildrv/motor.jpg",
          description: t("textD47"),
          description2: [
            "• เบาะคู่พร้อมพนักพิง สะดวกสบายสำหรับสองคน",
            "• แร็คด้านหน้า สำหรับการเก็บสัมภาระ",
            "• แบตเตอรี่ 48V ให้พลังงานยาวนาน",
            "• ไฟหน้า LED พร้อมไฟกลางวัน",
            "• ระบบช่วงล่างที่พัฒนาเพิ่มความนุ่มนวล",
            "• สีขาวคลาสสิก พร้อมดีไซน์ทันสมัย",
            "• พอร์ตชาร์จ USB สำหรับอุปกรณ์พกพา",
            "• ระบบขับเคลื่อนไฟฟ้าที่เป็นมิตรกับสิ่งแวดล้อม",
          ],
          color: "#FFFFFF",
        },
        {
          name: "NARVI STANDARD",
          price: 25900,
          image: "/img/buildrv/Narvi.png",
          image2: "/img/buildrv/motor.jpg",
          description: t("textD48"),
          description2: [
            "• ดีไซน์เรียบง่าย สีขาวสะอาดตา",
            "• เบาะนั่งเดี่ยวพร้อมเบาะกว้าง นั่งสบาย",
            "• แบตเตอรี่ 48V ประสิทธิภาพสูง",
            "• ไฟหน้าและไฟท้าย LED",
            "• ระบบช่วงล่างดูดซับแรงสั่นสะเทือน",
            "• แร็คด้านหลังแบบพับได้ (อุปกรณ์เสริม)",
            "• ระบบขับเคลื่อนไฟฟ้าเงียบและรักษ์โลก",
            "• แพลตฟอร์มวางเท้าป้องกันลื่น",
          ],
          color: "#8B4513",
        },
        {
          name: "NARVI PRO",
          price: 31900,
          image: "/img/buildrv/Narvi-Pro.png",
          image2: "/img/buildrv/motor.jpg",
          description: t("textD49"),
          description2: [
            "• สีเขียวทนทานพร้อมดีไซน์โดดเด่น",
            "• เบาะคู่พร้อมพนักพิง สะดวกสบาย",
            "• แร็คด้านหน้าและด้านหลังสำหรับเก็บของ",
            "• แบตเตอรี่ 48V วิ่งได้ไกลขึ้น",
            "• ระบบช่วงล่างรองรับถนนขรุขระ",
            "• ไฟหน้า LED ให้ความสว่างสูง",
            "• พอร์ตชาร์จ USB เพิ่มความสะดวก",
            "• ระบบเบรกที่พัฒนาเพื่อความปลอดภัย",
          ],
          color: "#8B4513",
        },
      ],
      selected: null,
    },
    OptionsRack: {
      options: [
        {
          name: "Rear Carrier Rack",
          price: 15000,
          image: "/img/buildrv/motor.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD50"),
          description2: [
            "• BRIDGESTONE AT-002",
            "• Better adaptation & reaction over different types of terrains",
          ],
        },
      ],
      selected: null,
    },
  });

  const handleOptionSelect = (
    sectionKey: keyof Config,
    option: Option
  ): void => {
    setConfig((prev) => {
      const isDeselecting = prev[sectionKey].selected?.name === option.name;

      if (isDeselecting) {
        setSelectedImage("/img/buildrv/02.jpg");
        setSelectedDetails(null);
        setAlertTitle(`${t("textD28")}`);
        setAlertMessage(`${t("textD29")} ${option.name}`);
        setShowAlert(true);
      } else {
        setSelectedImage(option.image);
        setSelectedDetails(option);
      }

      return {
        ...prev,
        [sectionKey]: {
          ...prev[sectionKey],
          selected: isDeselecting ? null : option,
          selectedModel: null,
        },
      };
    });
  };

  const handleShowDetails = (
    e: React.MouseEvent<HTMLButtonElement>,
    key: string,
    section: ConfigSection
  ): void => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า
    const selected = section.selected;
    if (selected) {
      setDetailTitle(selected.name);
      setDetailDescription(selected.description || "ไม่มีรายละเอียด");
      setShowDetailDialog(true);
    }
  };

  const handleModelSelect = (model: Option): void => {
    setConfig((prev) => {
      if (prev.Vehicle.selected) {
        const isDeselecting = prev.Vehicle.selectedModel?.name === model.name;

        if (isDeselecting) {
          setSelectedImage("/img/buildrv/02.jpg");
          setSelectedDetails(null);
          setAlertTitle(`${t("textD28")}`);
          setAlertMessage(`${t("textD29")}  ${model.name}`);
          setShowAlert(true);
        } else {
          setSelectedImage(model.image);
          setSelectedDetails(model);
        }

        return {
          ...prev,
          Vehicle: {
            ...prev.Vehicle,
            selectedModel: isDeselecting ? null : model,
          },
        };
      }
      return prev;
    });
  };

  const calculateTotalPrice = (): number => {
    let total = 0;
    Object.values(config).forEach((section) => {
      if (section === config.Vehicle) {
        if (section.selectedModel) {
          total += section.selectedModel.price;
        } else if (section.selected) {
          total += section.selected.price;
        }
      } else {
        if (section.selected) {
          total += section.selected.price;
        }
      }
    });
    return total;
  };

  const calculateAdditionalCosts = (): AdditionalCosts => {
    return {
      insurance: 43662,
      registration: 20000,
      redPlate: 3000,
    };
  };

  const calculateDownPayment = (totalAmount: number): number => {
    return Math.round(totalAmount * 0.25);
  };

  const calculateMonthlyPayment = (
    totalAmount: number,
    months: number
  ): number => {
    const downPayment = calculateDownPayment(totalAmount);
    const loanAmount = totalAmount - downPayment;

    let annualInterestRate: number;
    switch (months) {
      case 24:
        annualInterestRate = 0.059;
        break;
      case 36:
        annualInterestRate = 0.069;
        break;
      case 48:
        annualInterestRate = 0.079;
        break;
      default:
        annualInterestRate = 0.069;
    }

    const monthlyInterestRate = annualInterestRate / 12;
    const monthlyPayment =
      (loanAmount *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months))) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);

    return Math.round(monthlyPayment);
  };

  const handlePaymentSubmit = async (): Promise<void> => {
    if (!firstName || !lastName || !phone || !email) {
      setAlertTitle(`${t("textD30")}`);
      setAlertMessage(`${t("textD31")}`);
      setShowAlert(true);
      return;
    }

    const totalPrice = calculateTotalPrice();
    const additionalCosts = calculateAdditionalCosts();
    const totalAdditionalCosts = Object.values(additionalCosts).reduce(
      (a, b) => a + b,
      0
    );
    const finalPrice = totalPrice + totalAdditionalCosts;

    const emailRecipients = [
      // { email: "wanchana.k3241@gmail.com", name: "Dev.POP" },
      { email: "webmaster@carryboy.com", name: "Webmaster" },
      // { email: "grand@carryboy.com", name: "Grand" },
      // { email: "phanich@carryboy.com", name: "Phanich" },
      // { email: "surapong.carryboy@gmail.com", name: "Surapong" },
      // { email: "siriwut@carryboy.com", name: "Siriwut" },
    ];

    try {
      const SERVICE_ID = "service_xdihl1b";
      const TEMPLATE_ID = "template_6n6mqs6";
      const PUBLIC_KEY = "HX7TtmNCzNASGiLjK";

      const selectedItems: Record<string, any> = {};

      Object.entries(config).forEach(([key, section]) => {
        if (section.selected) {
          selectedItems[key] = {
            name: section.selected.name,
            price: section.selected.price,
            description: section.selected.description || "",
          };

          if (key === "Vehicle" && section.selectedModel) {
            selectedItems[key].model = section.selectedModel.name;
            selectedItems[key].model_price = section.selectedModel.price;
            selectedItems[key].model_description =
              section.selectedModel.description || "";
          }
        }
      });

      const costBreakdown = {
        base_price: totalPrice.toLocaleString(),
        insurance_cost: additionalCosts.insurance.toLocaleString(),
        registration_fee: additionalCosts.registration.toLocaleString(),
        red_plate_fee: additionalCosts.redPlate.toLocaleString(),
        total_additional_costs: totalAdditionalCosts.toLocaleString(),
        final_price: finalPrice.toLocaleString(),
        payment_type:
          paymentType === "full"
            ? t("textH13")
            : `${t("textH6")} ${installmentMonths} ${t("textH7")}`,
        down_payment:
          paymentType === "installment"
            ? calculateDownPayment(finalPrice).toLocaleString()
            : "N/A",
        monthly_payment:
          paymentType === "installment"
            ? calculateMonthlyPayment(
                finalPrice,
                installmentMonths
              ).toLocaleString()
            : "N/A",
        installment_months:
          paymentType === "installment" ? installmentMonths.toString() : "N/A",
        interest_rate:
          paymentType === "installment"
            ? installmentMonths === 24
              ? "5.9%"
              : installmentMonths === 36
              ? "6.9%"
              : "7.9%"
            : "N/A",
      };

      emailjs.init(PUBLIC_KEY);

      // วนลูปส่งอีเมลไปยังผู้รับหลายคน
      for (const recipient of emailRecipients) {
        const templateParams: EmailJSTemplateParams = {
          to_name: recipient.name,
          from_name: "RV Builder",
          to_email: recipient.email,
          customer_phone: phone,
          message: `${t("textD32")}  ${firstName} ${lastName}`,
          ...selectedItems,
          ...costBreakdown,
        };

        const result = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams
        );

        if (result.status === 200) {
          console.log(`Email sent successfully to ${recipient.email}`);
        } else {
          console.error(`Failed to send email to ${recipient.email}`);
        }
      }

      setAlertTitle(`${t("textD33")}`);
      setAlertMessage(`${t("textD34")}`);
      setShowAlert(true);
      setShowPaymentDialog(false);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setAlertTitle(`${t("textD30")}`);
      setAlertMessage(`${t("textD35")}`);
      setShowAlert(true);
    }
  };

  const handlePurchaseClick = (): void => {
    setShowPaymentDialog(true);
  };

  const handleDialogClose = (): void => {
    setShowPaymentDialog(false);
  };

  const { setFinalPrice, setTotalPrice, setTotalAdditionalCosts } = usePrice();

  const totalPrice = calculateTotalPrice();
  const additionalCosts = calculateAdditionalCosts();
  const totalAdditionalCosts = Object.values(additionalCosts).reduce(
    (a, b) => a + b,
    0
  );
  const finalPrice = totalPrice + totalAdditionalCosts;
  const monthlyPayment =
    paymentType === "installment"
      ? calculateMonthlyPayment(finalPrice, installmentMonths)
      : 0;

  interface OrderSummaryProps {
    config: Config;
  }

  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setTotalPrice(totalPrice);
    setTotalAdditionalCosts(totalAdditionalCosts);
    setFinalPrice(finalPrice);
  }, [
    totalPrice,
    totalAdditionalCosts,
    finalPrice,
    setTotalPrice,
    setTotalAdditionalCosts,
    setFinalPrice,
  ]);

  const OrderSummary: React.FC<OrderSummaryProps> = ({ config }) => {
    return (
      <div className={`${inter.className} lg:col-span-2`}>
        <div className="bg-gray-50 p-3 lg:p-4 rounded-lg space-y-3 lg:space-y-4">
          <h3 className="font-semibold text-base lg:text-lg border-b pb-2">
            {t("textH3")}
          </h3>
          {Object.entries(config).map(
            ([key, section]) =>
              section.selected && (
                <div
                  key={key}
                  className="bg-white p-3 lg:p-4 rounded-lg shadow-sm"
                >
                  <div className="flex gap-3 lg:gap-4">
                    <img
                      src={section.selected.image}
                      alt={section.selected.name}
                      className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800 text-sm lg:text-base">
                            {key}
                          </h4>
                          <p className="text-red-600 text-sm lg:text-base">
                            {section.selected.name}
                            {key === "Vehicle" && section.selectedModel && (
                              <span className="block text-green-600">
                                {section.selectedModel.name}
                              </span>
                            )}
                          </p>
                          <p className="text-xs lg:text-sm text-gray-600 mt-1">
                            {section.selected.description}
                          </p>
                        </div>
                        <p className="font-medium text-gray-800 text-sm lg:text-base">
                          {key === "Vehicle" && section.selectedModel
                            ? `${section.selectedModel.price.toLocaleString()} THB`
                            : section.selected.price === 0
                            ? t("textD37")
                            : `${section.selected.price.toLocaleString()} THB`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    );
  };

  return (
    <form
      ref={formRef}
      className={`${inter.className} bg-gray-100 flex flex-col lg:flex-row mt-10`}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-2/3 bg-white p-4 lg:p-8 shadow-lg lg:sticky lg:top-0 h-[50vh] lg:h-screen fixed top-0 left-0 right-0 z-10"
      >
        <img
          src={selectedImage}
          alt="Selected Option"
          className="w-full h-full object-cover rounded-xl shadow-2xl"
        />
        {/* {selectedDetails && (
          <button
            onClick={(event) => {
              event.preventDefault(); // ป้องกันการรีเฟรชหน้า
              setShowDetails(true);
            }}
            className="absolute top-8 right-8 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white/90 transition-colors"
            aria-label="Show more details"
          >
            <AlertCircle className="w-6 h-6 text-blue-600" />
          </button>
        )} */}

        <Dialog open={showDetails} onOpenChange={setShowDetails}>
          <DialogContent className="max-w-7xl w-full p-4 sm:p-6 lg:p-8">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-center lg:text-left">
                {selectedDetails?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* ภาพ */}
              <div>
                <img
                  src={selectedImage}
                  alt={selectedDetails?.name}
                  className="w-full h-[250px] sm:h-[300px] lg:h-[600px] object-cover rounded-lg shadow-lg"
                />
              </div>
              {/* รายละเอียด */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {selectedDetails?.description}
                </p>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {(Array.isArray(selectedDetails?.description2)
                    ? selectedDetails.description2
                    : [selectedDetails?.description2]
                  ).map((item, index) => (
                    <span key={index} className="block">
                      {item}
                    </span>
                  ))}
                </p>
                {selectedDetails?.price !== undefined && (
                  <p className="text-base sm:text-lg lg:text-xl font-semibold text-blue-600">
                    {selectedDetails.price > 0
                      ? `ราคา: ${selectedDetails.price.toLocaleString()} บาท`
                      : ""}
                  </p>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/3 bg-gray-50 p-4 lg:p-8 overflow-y-auto h-auto lg:h-screen mt-[50vh] lg:mt-0"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-red-600">
            {t("textD36")}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:gap-8">
          {Object.entries(config).map(([key, section]) => (
            <div key={key} className="bg-white rounded-xl p-4 lg:p-6 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">
                  {key === "BRIX" ? "BRIX" : key}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {key === "Laminate" || key === "BRIX" ? (
                  <div className="grid grid-cols-2 gap-4">
                    {section.options.map((option: Option) => (
                      <button
                        key={option.name}
                        type="button"
                        onClick={() =>
                          handleOptionSelect(key as keyof Config, option)
                        }
                        className={`p-4 rounded-xl border transition-all ${
                          section.selected?.name === option.name
                            ? "bg-red-50 border-red-500"
                            : "hover:bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div className="flex flex-col gap-2">
                          <div className="grid grid-cols-2 gap-2">
                            <img
                              src={option.image}
                              alt={`${option.name} - View 1`}
                              className="w-full h-16 object-cover rounded-lg"
                            />
                            <img
                              src={option.image2 || option.image}
                              alt={`${option.name} - View 2`}
                              className="w-full h-16 object-cover rounded-lg"
                            />
                          </div>
                          <span className="font-medium">{option.name}</span>

                          <span className="text-sm text-gray-600">
                            {option.price === 0
                              ? t("textD37")
                              : `${option.price.toLocaleString()} THB`}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  section.options.map((option: Option) => (
                    <div key={option.name} className="relative">
                      <button
                        type="button"
                        onClick={() =>
                          handleOptionSelect(key as keyof Config, option)
                        }
                        className={`w-full p-3 lg:p-4 border rounded-xl transition-all duration-300 ${
                          section.selected?.name === option.name
                            ? "bg-red-500 text-white border-red-600 shadow-lg"
                            : "hover:bg-red-50 border-gray-200"
                        }`}
                      >
                        <div className="flex gap-3 lg:gap-4">
                          <img
                            src={option.image}
                            alt={option.name}
                            className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-lg"
                          />
                          <div className="flex justify-center flex-col gap-1 lg:gap-2 text-left">
                            <span className="font-semibold text-base lg:text-lg">
                              {option.name}
                            </span>
                            {String(option.namesub ?? "") == "" ? (
                              <></>
                            ) : (
                              <p className="text-xs lg:text-sm">
                                {option.namesub}
                              </p>
                            )}
                            {key == "Vehicle" ? (
                              <></>
                            ) : (
                              <p className="text-xs lg:text-sm opacity-90">
                                {option.description}
                              </p>
                            )}

                            {/* <span className="font-medium text-sm lg:text-base">
                              {option.price === 0
                                ? t("textD37")
                                : `${option.price.toLocaleString()} THB`}
                            </span> */}
                            {option.price === 0 ? (
                              <></>
                            ) : (
                              <span className="font-medium text-sm lg:text-base">
                                {option.price.toLocaleString()} THB
                              </span>
                            )}
                          </div>
                        </div>
                      </button>

                      {/* <div className="mt-2">
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            setExpandedOption(
                              expandedOption === option.name
                                ? null
                                : option.name
                            ); // สลับเปิด/ปิด
                          }}
                          className="text-blue-600 hover:text-blue-800 text-sm underline"
                          aria-label={`Show details for ${option.name}`}
                        >
                          {expandedOption === option.name
                            ? t("textD7")
                            : t("textD7")}
                        </button>
                      </div> */}

                      {/* แสดง description2 เมื่อ expandedOption ตรงกับสินค้าปัจจุบัน */}
                      {expandedOption === option.name &&
                        option.description2 && (
                          <div className="mt-2 text-sm text-gray-700">
                            {Array.isArray(option.description2) ? (
                              option.description2.map((desc, index) => (
                                <p key={index} className="mb-1">
                                  {desc}
                                </p>
                              ))
                            ) : (
                              <p>{option.description2}</p>
                            )}
                          </div>
                        )}

                      {key === "Vehicle" &&
                        section.selected?.name === option.name &&
                        option.models && (
                          <>
                            {/* <button
                              onClick={(event) => {
                                event.preventDefault(); // ป้องกันการรีเฟรชหน้า
                                setShowDetails(true);
                              }}
                              className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white/90 transition-colors"
                              aria-label="Show more details"
                            >
                              <AlertCircle className="w-6 h-6 text-blue-600" />
                            </button> */}
                            <div className="mt-4 ml-8 space-y-4">
                              <h3 className="text-lg font-medium text-gray-700">
                                {t("textD38")}
                              </h3>
                              {option.models.map((model: Option) => (
                                <button
                                  key={model.name}
                                  type="button"
                                  onClick={() => handleModelSelect(model)}
                                  className={`w-full p-3 border rounded-lg transition-all ${
                                    section.selectedModel?.name === model.name
                                      ? "bg-green-500 text-white border-green-600"
                                      : "hover:bg-green-50 border-gray-200"
                                  }`}
                                >
                                  <div className="flex gap-3">
                                    <img
                                      src={model.image}
                                      alt={model.name}
                                      className="w-14 h-14 object-cover rounded-lg"
                                    />
                                    <div className="flex flex-col text-left">
                                      <span className="font-medium">
                                        {model.name}
                                      </span>
                                      <p className="text-sm opacity-90">
                                        {model.description}
                                      </p>
                                      <span className="text-sm font-medium">
                                        {model.price.toLocaleString()} THB{" "}
                                      </span>
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                      {/* <div className="mt-2">
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            setExpandedOption(
                              expandedOption === option.name
                                ? null
                                : option.name
                            ); // สลับเปิด/ปิด
                          }}
                          className="text-blue-600 hover:text-blue-800 text-sm underline"
                          aria-label={`Show details for ${option.name}`}
                        >
                          {expandedOption === option.name
                            ? t("textD7-2")
                            : t("textD7-1")}
                        </button>
                      </div> */}
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handlePurchaseClick}
          className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          {t("textH0")}
        </button>
      </motion.div>

      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
            <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowAlert(false)}>
              {t("textD39")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={showPaymentDialog} onOpenChange={handleDialogClose}>
        <DialogContent
          className={`${inter.className} w-[95vw] lg:max-w-[95vw] p-4 lg:p-6 max-h-[90vh] overflow-y-auto`}
        >
          <DialogHeader>
            <DialogTitle className="text-xl lg:text-2xl font-bold mb-4">
              {t("textH2")}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <OrderSummary config={config} />

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">
                  {t("textH4")}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <input
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <input
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <input
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold"> {t("textH5")}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentType("full")}
                    className={`p-4 rounded-lg border transition-all ${
                      paymentType === "full"
                        ? "bg-red-50 border-red-500 text-red-700"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {t("textH13")}
                    <div className="text-sm text-gray-600 mt-1">
                      {finalPrice.toLocaleString()} THB
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentType("installment")}
                    className={`p-4 rounded-lg border transition-all ${
                      paymentType === "installment"
                        ? "bg-red-50 border-red-500 text-red-700"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {t("textH14")}
                    <div className="text-sm text-gray-600 mt-1">
                      {t("textH11")} 25%
                    </div>
                  </button>
                </div>

                {paymentType === "installment" && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">
                        {t("textH11")} (25%):{" "}
                        {calculateDownPayment(finalPrice).toLocaleString()} THB
                      </p>
                    </div>
                    <h4 className="font-medium">{t("textH15")}</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {[24, 36, 48].map((months) => (
                        <button
                          key={months}
                          type="button"
                          onClick={() =>
                            setInstallmentMonths(months as 24 | 36 | 48)
                          }
                          className={`p-4 rounded-lg border transition-all ${
                            installmentMonths === months
                              ? "bg-red-50 border-red-500 text-red-700"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          {months} {t("textH7")}
                          <div className="text-sm text-gray-600 mt-1">
                            {calculateMonthlyPayment(
                              finalPrice,
                              months
                            ).toLocaleString()}{" "}
                            THB/{t("textH7")}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
                <div className="flex justify-between text-lg">
                  <span>{t("textH8")}</span>
                  <span>{totalPrice.toLocaleString()} THB</span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="border-t pt-2">
                    <h4 className="font-medium mb-2">{t("textH9")}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>{t("textD40")}</span>
                        <span>43,662 THB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t("textD41")}</span>
                        <span>20,000 THB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t("textD42")} (refundable)</span>
                        <span>3,000 THB</span>
                      </div>
                      <div className="flex justify-between font-medium pt-2 border-t">
                        <span>{t("textD43")}</span>
                        <span>66,662 THB</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between font-bold text-xl border-t pt-2">
                  <span>{t("textH10")}</span>
                  <span>{finalPrice.toLocaleString()} THB</span>
                </div>
                {paymentType === "installment" && (
                  <div className="text-sm text-gray-600 border-t pt-2">
                    <div className="flex justify-between">
                      <span>{t("textH11")} (25%)</span>
                      <span>
                        {calculateDownPayment(finalPrice).toLocaleString()} THB
                      </span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span>{t("textH12")}</span>
                      <span>
                        {calculateMonthlyPayment(
                          finalPrice,
                          installmentMonths
                        ).toLocaleString()}{" "}
                        THB
                      </span>
                    </div>
                  </div>
                )}
                <button
                  type="button"
                  onClick={handlePaymentSubmit}
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold mt-4"
                >
                  {t("textH1")}
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default RVConfigurator;
