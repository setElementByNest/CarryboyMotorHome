/* eslint-disable @next/next/no-img-element */
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
  type?: string;
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
  type?: string;
}
interface OptionVehicle {
  name: string;
  price: { [key: string]: number };
  image: { [key: string]: string };
  description?: { [key: string]: string };
}

interface ConfigSection {
  options: Option[];
  selected: Option | null;
  selectedModel?: Option | null;
  selectedType?: Option | null;
  detail?: string;
}
interface ConfigSectionVehicle {
  options: OptionVehicle[];
  selected: OptionVehicle | null;
}

interface ConfigSection2 {
  options1: Option[];
  options2: Option[];
  options3: Option[];
  selected: Option | null;
  detail?: string;
  title1: string;
  title2: string;
  title3: string;
}

interface Config {
  "Type": ConfigSection;
  "Vehicle": ConfigSectionVehicle;
  // "Design Type": ConfigSection;
  "Decoration theme": ConfigSection;
  "Scooter": ConfigSection;
  "Rear Decoration": ConfigSection;
  "Air Condition": ConfigSection;
  // "Battery": ConfigSection;
  "Battery": ConfigSection2;
  // "Power Generator": ConfigSection;
  "Rear Box": ConfigSection;
  "Side storage": ConfigSection;
  "Suspension": ConfigSection;
  // "Tires": ConfigSection;
  "Rack Motorcycle": ConfigSection;
  "Electric Support": ConfigSection;
  "Utilities": ConfigSection;
  "Tent Room": ConfigSection;
  "RV CCTV": ConfigSection;
  "Electric Suction Door": ConfigSection;
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
    "/img/option/Untitled-3.jpg"
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
    "Type": {
      options: [
        {
          name: "Standard",
          price: 0,
          image: "/img/type_a/Travo-A.jpg",
          description: t("textD0"),
          description2: "",
          models: [
            {
              name: "Type-A",
              price: 0,
              image: "/img/type_a/Travo-A.jpg",
              description: t("textDesignType1"),
            },
            {
              name: "Type-B",
              price: 0,
              image: "/img/type_b/TravoB copy.png",
              description: t("textDesignType2"),
            },
          ],
        },
        {
          name: "Extended",
          price: 0,
          image: "/img/type_l/LA Ex.jpg",
          description: t("textD5"),
          models: [
            {
              name: "Type-LA",
              price: 0,
              image: "/img/type_l/LA Ex.jpg",
              description: t("textDesignType1"),
            },
            {
              name: "Type-LB",
              price: 0,
              image: "/img/type_l/LB ex.png",
              description: t("textDesignType2"),
            },
          ],
        },
      ],
      selected: null,
      selectedType: null,
    },
    // "Vehicle": {
    //   options: [
    //     {
    //       name: "TOYOTA TRAVO",
    //       price: 0,
    //       image: "/img/type_a/Travo-A.jpg",
    //       image2:
    //         "/img/type_a/Travo-A.jpg",
    //       description: t("textD0"),
    //       description2: "",
    //       models: [
    //         {
    //           name: "4TREX 2.8 A/T 4WD",
    //           price: 2250000,
    //           image: "/img/type_a/Travo-A.jpg",
    //           image2:
    //             "/img/type_a/Travo-A.jpg",
    //           description: "[ TYPE-A ]",
    //           description2: [],
    //           type: "Type-A",
    //         },
    //         {
    //           name: "4TREX 2.8 A/T 4WD",
    //           price: 2280000,
    //           image: "/img/type_b/TravoB copy.png",
    //           image2:
    //             "/img/type_b/TravoB copy.png",
    //           description: "[ TYPE-B ]",
    //           description2: [],
    //           type: "Type-B",
    //         },
    //         {
    //           name: "TRAVO (test) 1",
    //           price: 2350000,
    //           image: "/img/type_b/TravoB copy.png",
    //           image2:
    //             "/img/type_b/TravoB copy.png",
    //           description: "[ TYPE-LA ]",
    //           description2: [],
    //           type: "Type-LA",
    //         },
    //         {
    //           name: "TRAVO (test) 2",
    //           price: 2380000,
    //           image: "/img/type_b/TravoB copy.png",
    //           image2:
    //             "/img/type_b/TravoB copy.png",
    //           description: "[ TYPE-LB ]",
    //           description2: [],
    //           type: "Type-LB",
    //         },
    //       ],
    //     },
    //     {
    //       name: "TOYOTA CHAMP",
    //       price: 0,
    //       image: "/img/type_a/Champ Type B.png",
    //       image2:
    //         "/img/type_a/Champ Type B.png",
    //       description: t("textD5"),
    //       description2: "",
    //       models: [
    //         {
    //           name: "2.4 A/T 2WD LWB",
    //           price: 2002000,
    //           image: "/img/type_a/Champ Type B.png",
    //           image2:
    //             "/img/type_a/Champ Type B.png",
    //           description: "[ TYPE-A ]",
    //           description2: [],
    //           type: "Type-A",
    //         },
    //         {
    //           name: "2.4 A/T 2WD LWB",
    //           price: 2032000,
    //           image: "/img/type_b/Champ.jpg",
    //           image2:
    //             "/img/type_b/Champ.jpg",
    //           description: "[ TYPE-B ]",
    //           description2: [],
    //           type: "Type-B",
    //         },
    //         {
    //           name: "Champ (test) 1",
    //           price: 2102000,
    //           image: "/img/type_b/TravoB copy.png",
    //           image2:
    //             "/img/type_b/TravoB copy.png",
    //           description: "[ TYPE-LA ]",
    //           description2: [],
    //           type: "Type-LA",
    //         },
    //         {
    //           name: "Champ (test) 2",
    //           price: 2132000,
    //           image: "/img/type_b/TravoB copy.png",
    //           image2:
    //             "/img/type_b/TravoB copy.png",
    //           description: "[ TYPE-LB ]",
    //           description2: [],
    //           type: "Type-LB",
    //         },
    //       ],
    //     },
    //     {
    //       name: "MITSUBISHI TRITON",
    //       price: 0,
    //       image: "/img/type_a/Mitsu Type A.png",
    //       image2:
    //         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    //       description: t("textD5"),
    //       description2: "",
    //       models: [
    //         {
    //           name: "2.4 4WD A/T",
    //           price: 2180000,
    //           image: "/img/type_a/Mitsu Type A.png",
    //           image2:
    //             "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    //           description: "[ TYPE-A ]",
    //           description2: [],
    //           type: "Type-A",
    //         },
    //         {
    //           name: "2.4 4WD A/T",
    //           price: 2210000,
    //           image: "/img/type_b/Mitsu Type B.png",
    //           image2:
    //             "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    //           description: "[ TYPE-B ]",
    //           description2: [],
    //           type: "Type-B",
    //         },
    //         {
    //           name: "TRITON (test) 1",
    //           price: 2280000,
    //           image: "/img/type_b/TravoB copy.png",
    //           image2:
    //             "/img/type_b/TravoB copy.png",
    //           description: "[ TYPE-LA ]",
    //           description2: [],
    //           type: "Type-LA",
    //         },
    //         {
    //           name: "TRITON (test) 2",
    //           price: 2310000,
    //           image: "/img/type_b/TravoB copy.png",
    //           image2:
    //             "/img/type_b/TravoB copy.png",
    //           description: "[ TYPE-LB ]",
    //           description2: [],
    //           type: "Type-LB",
    //         },
    //       ],
    //     },
    //   ],
    //   selected: null,
    //   selectedModel: null,
    // },
    "Vehicle": {
      options: [
        {
          name: "TOYOTA TRAVO",
          price: {
            "Type-A": 2250000,
            "Type-B": 2280000,
            "Type-LA": 2350000,
            "Type-LB": 2380000,
          },
          image: {
            "Type-A": "/img/type_a/Travo-A.jpg",
            "Type-B": "/img/type_b/TravoB copy.png",
            "Type-LA": "/img/type_l/LA Ex.jpg",
            "Type-LB": "/img/type_l/LB ex.png",
          },
          description: {
            "Type-A": "4TREX 2.8 A/T 4WD | Type-A",
            "Type-B": "4TREX 2.8 A/T 4WD | Type-B",
            "Type-LA": "4TREX 2.8 A/T 4WD | Type-LA",
            "Type-LB": "4TREX 2.8 A/T 4WD | Type-LB",
          },
        },
        {
          name: "TOYOTA CHAMP",
          price: {
            "Type-A": 2002000,
            "Type-B": 2032000,
            "Type-LA": 2102000,
            "Type-LB": 2132000,
          },
          image: {
            "Type-A": "/img/type_a/Champ Type B.png",
            "Type-B": "/img/type_b/Champ.jpg",
            "Type-LA": "/img/type_a/Champ Type B.png",
            "Type-LB": "/img/type_b/Champ.jpg",
          },
          description: {
            "Type-A": "2.4 A/T 2WD LWB | Type-A",
            "Type-B": "2.4 A/T 2WD LWB | Type-B",
            "Type-LA": "2.4 A/T 2WD LWB | Type-LA",
            "Type-LB": "2.4 A/T 2WD LWB | Type-LB",
          },
        },
        {
          name: "MITSUBISHI TRITON",
          price: {
            "Type-A": 2180000,
            "Type-B": 2210000,
            "Type-LA": 2280000,
            "Type-LB": 2310000,
          },
          image: {
            "Type-A": "/img/type_a/Mitsu Type A.png",
            "Type-B": "/img/type_b/Mitsu Type B.png",
            "Type-LA": "/img/type_l/Type L Mitsu-1.jpg",
            "Type-LB": "/img/type_l/LB triton ex.png",
          },
          description: {
            "Type-A": "2.4 4WD A/T | Type-A",
            "Type-B": "2.4 4WD A/T | Type-B",
            "Type-LA": "2.4 4WD A/T | Type-LA",
            "Type-LB": "2.4 4WD A/T | Type-LB",
          },
        },
      ],
      selected: null,
    },
    "Decoration theme": {
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
    "Rear Decoration": {
      detail: "For Type-A only",
      options: [
        {
          name: "Pantry",
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
    "Air Condition": {
      options: [
        {
          name: "Standard",
          price: 0,
          image: "/img/type_a/In/air/Rv carryboy Air type A-1.jpg",
          image2:
            "/img/type_a/In/air/Rv carryboy Air type A-1.jpg",
          description: "DC build in",
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
          price: 55000,
          image: "/img/buildrv/Ari-con-2.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "(Can't apply with solar roof)",
          // description: t("textD14") + "(Can't apply with solar roof)",
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
    // "Battery": {
    //   options: [
    //     {
    //       name: "9,600 Wh",
    //       namesub: String("(" + t("textD15") + " 8,160 Wh)"),
    //       price: 0,
    //       image: "/img/buildrv/bat_A01.jpg",
    //       image2:
    //         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    //       description: "",
    //       description2: "",
    //     },
    //     {
    //       name: "19,200 Wh",
    //       namesub: String("(" + t("textD15") + " 16,320 Wh)"),
    //       price: 95000,
    //       image: "/img/buildrv/bat_A02.jpg",
    //       image2:
    //         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    //       description: "",
    //       description2: "",
    //     },
    //     {
    //       name: "28,800 Wh",
    //       namesub: String("(" + t("textD15") + " 24,480 Wh)"),
    //       price: 190000,
    //       image: "/img/buildrv/bat_A03.jpg",
    //       image2:
    //         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    //       description: "",
    //       description2: "",
    //     },
    //   ],
    //   selected: null,
    // },
    "Battery": {
      title1: "Tonybox",
      title2: "Jib",
      title3: "Oasis",
      options1: [
        {
          name: "8,160 Wh (Tonybox)",
          namesub: "",
          price: 0,
          image: "/img/battery/Batt8160_0.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "",
          description2: "",
        },
        {
          name: "16,320 Wh (Tonybox)",
          namesub: "",
          price: 95000,
          image: "/img/battery/Batt16320_0.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "",
          description2: "",
        },
        {
          name: "24,480 Wh (Tonybox)",
          namesub: "",
          price: 190000,
          image: "/img/battery/Batt24480_0.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "",
          description2: "",
        },
      ],
      options2: [
        {
          name: "9,600 Wh (Jib)",
          namesub: "",
          price: 8000,
          image: "/img/battery/Batt9600_0.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "",
          description2: "",
        },
        {
          name: "19,200 Wh (Jib)",
          namesub: "",
          price: 95500,
          image: "/img/battery/Batt19200_0.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "",
          description2: "",
        },
        {
          name: "28,800 Wh (Jib)",
          namesub: "",
          price: 190000,
          image: "/img/battery/Batt28800_0.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "",
          description2: "",
        },
      ],
      options3: [
        {
          name: "7,200 Wh (Oasis)",
          namesub: "",
          price: 0,
          image: "/img/battery/Batt7200_0.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "",
          description2: "",
        },
        {
          name: "14,400 Wh (Oasis)",
          namesub: "",
          price: 65000,
          image: "/img/battery/Batt14400_0.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "ถ้าเป็นรุ่น a จุดติดตั้งใต้เก้าอี้ slide storage ม้านั่งไม่สารถติดครัวสไลด์ได้",
          description2: "",
        },
      ],
      selected: null,
    },
    "Electric Support": {
      options: [
        {
          name: "Support 2 Legs",
          price: 0,
          image: "/img/option/Option1/2leg support.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "Electric Support",
          description2: [],
        },
        {
          name: "Support 4 Legs",
          price: 15000,
          image: "/img/option/Option1/Electronic Support  legs x4.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "Electric Support",
          description2: [],
        },
      ],
      selected: null,
    },
    // "Power Generator": {
    //   options: [
    //     {
    //       name: "MXR3300",
    //       price: 0,
    //       image:
    //         "/img/buildrv/carryboy-motorhome-rv-feature-generator-Standard.jpg",
    //       image2:
    //         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    //       description: t("textD18"),
    //       description2: [
    //         "• รุ่น: MXR3300",
    //         "• กำลังไฟฟ้า: 3,300 วัตต์",
    //         "• ระบบ: อินเวอร์เตอร์ลดเสียงรบกวน",
    //         "• เชื้อเพลิง: น้ำมันเบนซิน",
    //         "• การใช้งาน: รองรับอุปกรณ์ไฟฟ้าหลายประเภท",
    //         "• น้ำหนัก: 28 กิโลกรัม",
    //         "• การติดตั้ง: ติดตั้งผนังด้วยตัวยึดมาตรฐาน",
    //         "• ความทนทาน: ตัวเครื่องแข็งแรง พร้อมใช้งานในสภาพแวดล้อมหลากหลาย",
    //       ],
    //     },
    //     {
    //       name: "Dometic PGE121",
    //       price: 0,
    //       image:
    //         "/img/buildrv/carryboy-motorhome-rv-feature-generator-Dometic.jpg",
    //       image2:
    //         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    //       description: t("textD19"),
    //       description2: [
    //         "• รุ่น: Dometic PGE121",
    //         "• กำลังไฟฟ้า: 2,100 วัตต์",
    //         "• ระบบ: สมาร์ทอินเวอร์เตอร์",
    //         "• เชื้อเพลิง: น้ำมันเบนซิน",
    //         "• การใช้งาน: ออกแบบเพื่อการใช้งานในรถบ้าน",
    //         "• น้ำหนัก: 25 กิโลกรัม",
    //         "• การติดตั้ง: ติดตั้งผนังแบบประหยัดพื้นที่",
    //         "• คุณสมบัติพิเศษ: ลดเสียงรบกวนและประหยัดพลังงาน",
    //       ],
    //     },
    //   ],
    //   selected: null,
    // },
    "Utilities": {
      options: [
        {
          name: "Utilities Box-290",
          price: 15000,
          image: "/img/option/Option1/Full box 290 liter.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "290 Liters",
          description2: [],
        },
        {
          name: "Utilities Box-150 + Ladder",
          price: 8000,
          image: "/img/option/Option1/Half box 150 liter + rear ladder.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "150 Liters + Ladder",
          description2: [],
        },
      ],
      selected: null,
    },
    "Rear Box": {
      detail: "For standard size",
      options: [
        {
          name: "Black",
          price: 0,
          image: "/img/buildrv/boxback-black.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD20"),
          description2: "",
        },
        {
          name: "White",
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
    "Side storage": {
      options: [
        {
          name: "Slide Kitchen",
          price: 40000,
          image: "/img/buildrv/draft_1_1.png",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD22"),
          description2: "",
        },
        {
          name: "Slide Fridge (Alpicool C15)",
          price: 7900,
          image: "/img/option/Option1/freezer rv.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "15 Liters",
          description2: "",
        },
        {
          name: "Blank",
          price: 0,
          image: "/img/buildrv/draft_1_2.png",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: t("textD23"),
          description2: "",
        },
      ],
      selected: null,
    },
    "Electric Suction Door": {
      options: [
        {
          name: "Electric Suction Door",
          price: 25000,
          image: "/img/option/Option1/door2.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "Electric soft close + central lock",
          description2: [],
        },
      ],
      selected: null,
    },
    "Suspension": {
      options: [
        // {
        //   name: "Standard Suspension",
        //   price: 0,
        //   image: "/img/buildrv/set_01.jpg",
        //   image2:
        //     "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        //   description: t("textD24"),
        //   description2: [
        //     "• Front shock absorber / Monotube(Explorer REVO 4wd GT-series)",
        //     "• Front shock absorber / Monotube(Explorer REVO 4wd GT-series)",
        //     "• Rear shock absorber / SUBTANK 8 LEVEL(Explorer REVO 4wd M16 series)",
        //     "• Standard stabilizer arm",
        //     "• 9-10” shakle",
        //     "• Standard leaf spring",
        //   ],
        // },
        {
          name: "Suspension by AC Power",
          price: 95000,
          image: "/img/buildrv/set_03.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "ระบบช่วงล่างปรับเซ็ตพิเศษ รองรับน้ำหนักบรรทุกสูง เพิ่มความนุ่มและเสถียรบนทางวิบาก เหมาะกับรถแต่งออฟโรดเต็มรูปแบบ",
          description2: [
            "• Rear shock absorber / SUBTANK 8 LEVEL(Explorer REVO 4wd M16 series)",
            "• Front & Rear stabilizer arm",
            "• Suspension tune-up by AC power",
            "• 9-10” shakle",
            "• Standard leaf spring",
          ],
        },
        {
          name: "Suspension by Ironman",
          price: 65000,
          image: "/img/option/Option1/Suspention-ironman.jpg",
          image2:
            "/img/option/Option1/Suspention-ironman.jpg",
          description: "มาตรฐานออสเตรเลีย นุ่มแน่น ขับสบาย เหมาะกับใช้งานทุกวัน ดูแลรักษาง่าย อะไหล่หาง่าย",
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
    // "Tires": {
    //   options: [
    //     {
    //       name: "Standard Tires",
    //       price: 0,
    //       image: "/img/buildrv/tires_01.png",
    //       image2:
    //         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    //       description: t("textD26"),
    //       description2: [
    //         "• BRIDGESTONE AT-002",
    //         "• Better adaptation & reaction over different types of terrains",
    //       ],
    //     },
    //     {
    //       name: "BF Goodrich Tires",
    //       price: 20000,
    //       image: "/img/buildrv/tires_02.png",
    //       image2:
    //         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    //       description: t("textD27"),
    //       description2: [
    //         "• BFGoodrich All-Terrain KO2",
    //         "• On-road and off-road tires for 4x4s, SUVs and pickup trucks.",
    //       ],
    //     },
    //   ],
    //   selected: null,
    // },
    "Rack Motorcycle": {
      detail: "Combo with Solar EV get 10% discount",
      options: [
        {
          name: "Rack Motorcycle",
          price: 25000,
          image: "/img/option/Option1/Rack Motor.png",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "Option",
          description2: [],
        }
      ],
      selected: null,
    },
    "Scooter": {
      options: [
        // {
        //   name: "BRIX STANDARD",
        //   price: 24900,
        //   image: "/img/buildrv/Brix.png",
        //   image2: "/img/buildrv/motor.jpg",
        //   description: t("textD44"),
        //   description2: [
        //     "• ดีไซน์ทันสมัย สีดำสปอร์ต",
        //     "• ขนาดกะทัดรัด เหมาะกับการขับขี่ในเมือง",
        //     "• แบตเตอรี่ 48V ประสิทธิภาพสูง",
        //     "• เบาะนั่งเดี่ยวพร้อมความสบาย",
        //     "• ไฟหน้าและไฟท้าย LED เพิ่มความปลอดภัย",
        //     "• ที่พักเท้าพับได้สำหรับการจัดเก็บสะดวก",
        //     "• มอเตอร์ไฟฟ้ารักษ์โลก",
        //     "• กระจกมองหลัง เพิ่มทัศนวิสัยการขับขี่",
        //   ],
        //   color: "#8B4513",
        // },
        {
          name: "BRIX PRO",
          price: 28900,
          image: "/img/buildrv/Brix_Pro.png",
          image2: "/img/buildrv/Brix_Pro.png",
          description: "KEEWAY EV Type 1 Pro",
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
        // {
        //   name: "AVA STANDARD",
        //   price: 25900,
        //   image: "/img/buildrv/AVA.png",
        //   image2: "/img/buildrv/motor.jpg",
        //   description: t("textD46"),
        //   description2: [
        //     "• ดีไซน์น้ำหนักเบา เคลื่อนย้ายสะดวก",
        //     "• สีขาวคลาสสิก ดูสะอาดตา",
        //     "• เบาะนั่งเดี่ยว สะดวกสบาย",
        //     "• แบตเตอรี่ 36V วิ่งได้นานขึ้น",
        //     "• ไฟหน้า LED เพิ่มความปลอดภัย",
        //     "• ช่องเก็บของด้านหลัง (อุปกรณ์เสริม)",
        //     "• ระบบควบคุมการขับขี่ที่ใช้งานง่าย",
        //     "• มอเตอร์ไฟฟ้ารักษ์โลก",
        //   ],
        //   color: "#FFFFFF",
        // },
        {
          name: "AVA PRO",
          price: 30900,
          image: "/img/buildrv/AVA-Pro.png",
          image2: "/img/buildrv/motor.jpg",
          description: "KEEWAY EV Type 2 Pro",
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
        // {
        //   name: "NARVI STANDARD",
        //   price: 25900,
        //   image: "/img/buildrv/Narvi.png",
        //   image2: "/img/buildrv/motor.jpg",
        //   description: t("textD48"),
        //   description2: [
        //     "• ดีไซน์เรียบง่าย สีขาวสะอาดตา",
        //     "• เบาะนั่งเดี่ยวพร้อมเบาะกว้าง นั่งสบาย",
        //     "• แบตเตอรี่ 48V ประสิทธิภาพสูง",
        //     "• ไฟหน้าและไฟท้าย LED",
        //     "• ระบบช่วงล่างดูดซับแรงสั่นสะเทือน",
        //     "• แร็คด้านหลังแบบพับได้ (อุปกรณ์เสริม)",
        //     "• ระบบขับเคลื่อนไฟฟ้าเงียบและรักษ์โลก",
        //     "• แพลตฟอร์มวางเท้าป้องกันลื่น",
        //   ],
        //   color: "#8B4513",
        // },
        {
          name: "NARVI PRO",
          price: 32900,
          image: "/img/buildrv/Narvi-Pro.png",
          image2: "/img/buildrv/motor.jpg",
          description: "KEEWAY EV Type 2ADV Pro",
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
    "Tent Room": {
      options: [
        {
          name: "Tent Room",
          price: 15000,
          image: "/img/option/Option1/room tent.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "",
          description2: [],
        },
      ],
      selected: null,
    },
    "RV CCTV": {
      options: [
        {
          name: "RV CCTV",
          price: 18000,
          image: "/img/option/Option1/CCTV.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "",
          description2: [],
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
        setSelectedImage("/img/option/Untitled-3.jpg");
        setSelectedDetails(null);
        // setAlertTitle(`${t("textD28")}`);
        // setAlertMessage(`${t("textD29")} ${option.name}`);
        // setShowAlert(true);
      } else {
        setSelectedImage(option.image);
        setSelectedDetails(option);
      }

      if (sectionKey === "Type") {
        setConfig((prevConfig) => {
          const vehicleSection = prevConfig.Vehicle;
          return {
            ...prevConfig,
            Vehicle: {
              ...vehicleSection,
              selectedModel: null,
              selectedType: null,
            },
          };
        });
      }

      return {
        ...prev,
        [sectionKey]: {
          ...prev[sectionKey],
          selected: isDeselecting ? null : option,
          selectedModel: null,
          selectedType: null,
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
        const isDeselecting = prev.Vehicle.selected?.name === model.name;
        // const isDeselecting = prev.Vehicle.selectedModel?.name === model.name;
        console.log("Selected Model:", model.name);
        console.log("Currently Selected Model:", prev.Vehicle.selected?.name);
        // console.log("Currently Selected Model:", prev.Vehicle.selectedModel?.name);
        console.log("Is Deselecting:", isDeselecting);
        if (isDeselecting) {
          setSelectedImage("/img/option/Untitled-3.jpg");
          setSelectedDetails(null);
          // setAlertTitle(`${t("textD28")}`);
          // setAlertMessage(`${t("textD29")}  ${model.name}`);
          // setShowAlert(true);
        } else {
          setSelectedImage(model.image);
          setSelectedDetails(model);
        }
        console.log("Updating Vehicle section with model:", isDeselecting ? "Deselecting" : model.name);

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

  const handleTypeSelect = (type: Option): void => {
    setConfig((prev) => {
      if (prev.Type.selected) {
        const isDeselecting = prev.Type.selectedType?.name === type.name;

        if (isDeselecting) {
          setSelectedImage("/img/option/Untitled-3.jpg");
          setSelectedDetails(null);
          // setAlertTitle(`${t("textD28")}`);
          // setAlertMessage(`${t("textD29")}  ${model.name}`);
          // setShowAlert(true);
        } else {
          setSelectedImage(type.image);
          setSelectedDetails(type);
        }

        setConfig((prevConfig) => {
          const vehicleSection = prevConfig.Vehicle;
          return {
            ...prevConfig,
            Vehicle: {
              ...vehicleSection,
              selectedModel: null,
              selected: null,
            },
          };
        });
        return {
          ...prev,
          Type: {
            ...prev.Type,
            selectedType: isDeselecting ? null : type,
          },
        };
      }
      return prev;
    });
  };

  const calculateTotalPrice = (): number => {
    let total = 0;
    const selectedTypeName = config.Type.selectedType?.name;
    Object.values(config).forEach((section) => {
      if (section === config.Vehicle) {
        if (section.selected && selectedTypeName) {
          total += section.selected.price[selectedTypeName] || 0;
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
          const selectedTypeName = config.Type.selectedType?.name;
          selectedItems[key] = {
            name: section.selected.name,
            price:
              key === "Vehicle" && selectedTypeName
                ? section.selected.price[selectedTypeName] || 0
                : section.selected.price,
            description:
              key === "Vehicle" && selectedTypeName
                ? section.selected.description?.[selectedTypeName] || ""
                : section.selected.description || "",
          };

          if (key === "Vehicle" && section.selectedModel) {
            selectedItems[key].model = section.selectedModel.name;
            selectedItems[key].model_price = section.selectedModel.price;
            selectedItems[key].model_description =
              section.selectedModel.description || "";
          }
          if (key === "Type" && section.selectedType) {
            selectedItems[key].model = section.selectedType.name;
            selectedItems[key].model_price = section.selectedType.price;
            selectedItems[key].model_description =
              section.selectedType.description || "";
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
    if (config.Vehicle.selected && config.Type.selectedType) {
      // if (config.Vehicle.selectedModel && config.Type.selectedType) {
      setShowPaymentDialog(true);
    } else {
      setAlertTitle(`${t("textD36")}`);
      setAlertMessage(`${t("textD38")} or select car type.`);
      setShowAlert(true);
    }
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
                      src={
                        key === "Vehicle"
                          ? section.selected.image[
                          config.Type.selectedType?.name || ""
                          ] || Object.values(section.selected.image)[0]
                          : section.selected.image
                      }
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
                            {key === "Vehicle" && (
                              <span className="block text-green-600">
                                {section.selected.description?.[
                                    config.Type.selectedType?.name || ""
                                  ] || ""}
                              </span>
                            )}
                          </p>
                          {/* <p className="text-xs lg:text-sm text-gray-600 mt-1">
                            {section.selected.description}
                          </p> */}
                          <p className="text-red-600 text-sm lg:text-base">
                            {key === "Type" && section.selectedType && (
                              <span className="block text-green-600">
                                {section.selectedType.name}
                              </span>
                            )}
                          </p>
                        </div>
                        <p className={"font-medium text-gray-800 text-sm lg:text-base" + (key === "Type" ? " hidden" : "")}>
                          {key === "Vehicle"
                            ? `${(
                              section.selected.price[
                              config.Type.selectedType?.name || ""
                              ] || 0
                            ).toLocaleString()} THB`
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
        className="w-full lg:w-2/3 bg-white p-4 lg:p-8 shadow-lg lg:sticky lg:top-0 h-[50vh] lg:h-[96vh] fixed top-0 left-0 right-0 z-10"
      >
        <img
          src={selectedImage}
          alt="Selected Option"
          className="w-full h-full object-contain rounded-xl shadow-2xl"
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
            // (config.Type.selectedType !== null || key !== "Vehicle") &&
            (config.Type.selectedType !== null && config.Vehicle.selected !== null) ||
            // (config.Type.selectedType !== null && config.Vehicle.selectedModel !== null) ||
            (key === "Type") || (config.Type.selectedType !== null && key === "Vehicle")
          ) && (
              <div key={key} className="bg-white rounded-xl p-4 lg:p-6 shadow-md">
                <div className="flex flex-col mb-4">
                  <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">
                    {key === "BRIX" ? "BRIX" : key}
                  </h2>
                  <h4 className="text-red-500">{section.detail}</h4>
                </div>
                {
                  (config.Type.selectedType === null && key === "Type") && (
                    <p className="text-red-600 mb-2">โปรดเลือกประเภทรถบ้าน </p>
                  )
                }
                {
                  (config.Vehicle.selected === null && key === "Vehicle") && (
                    // (config.Vehicle.selectedModel === null && key === "Vehicle") && (
                    <p className="text-red-600 mb-2">โปรดเลือกโมเดลรถ </p>
                  )
                }

                <div className="grid grid-cols-1 gap-4">
                  {key === "Decoration theme" || key === "BRIX" ? (
                    <div className="grid grid-cols-2 gap-4">
                      {section.options.map((option: Option) => (
                        <button
                          key={option.name}
                          type="button"
                          onClick={() =>
                            handleOptionSelect(key as keyof Config, option)
                          }
                          className={`p-4 rounded-xl border transition-all ${section.selected?.name === option.name
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
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() =>
                            handleOptionSelect(key as keyof Config, {
                              name: "Decide later",
                              price: 0,
                              image: "/img/buildrv/int_01.jpg",
                              description: "Decide later",
                              description2: [],
                            })
                          }
                          className={`w-full p-3 lg:p-4 border rounded-xl transition-all duration-300 ${section.selected?.name === "Decide later"
                            ? "bg-red-500 text-white border-red-600 shadow-lg"
                            : "hover:bg-red-50 border-gray-200"
                            }`}
                        >
                          <div className="flex gap-3 lg:gap-4">
                            <div className="flex justify-center flex-col gap-1 lg:gap-2 text-left">
                              <span className="font-semibold text-base lg:text-lg">
                                {"Decide later"}
                              </span>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  ) : (section.options) ? (
                    section.options.map((option: Option) => (
                      <div key={option.name} className="relative">
                        {key !== "Vehicle" && (
                          <button
                            type="button"
                            onClick={() =>
                              handleOptionSelect(key as keyof Config, option)
                            }
                            className={`w-full p-3 lg:p-4 border rounded-xl transition-all duration-300 ${section.selected?.name === option.name
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
                                {/* {key == "Type" ? (
                              <></>
                            ) : (
                              <p className="text-xs lg:text-sm opacity-90">
                                {option.description}
                              </p>
                            )} */}
                                {key == "Vehicle" || key == "Type" ? (
                                  null
                                ) : 
                                  option.description !== "" && (
                                    <p className="text-xs lg:text-sm opacity-90">
                                      {option.description}
                                    </p>
                                )}

                                {/* <span className="font-medium text-sm lg:text-base">
                              {option.price === 0
                                ? t("textD37")
                                : `${option.price.toLocaleString()} THB`}
                            </span> */}
                                {key == "Vehicle" ? (
                                  <></>
                                ) : option.price === 0 ? (
                                  <></>
                                ) : (
                                  <span className="font-medium text-sm lg:text-base">
                                    {option.price.toLocaleString()} THB
                                  </span>
                                )}
                              </div>
                            </div>
                          </button>
                        )}
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
                        {key === "Vehicle" && (
                          <button
                            key={option.name}
                            type="button"
                            onClick={() => {
                              const selectedTypeName = config.Type.selectedType?.name;
                              const vehicleOption = option as unknown as OptionVehicle;
                              const fallbackImage = Object.values(vehicleOption.image)[0];

                              setConfig((prev) => ({
                                ...prev,
                                Vehicle: {
                                  ...prev.Vehicle,
                                  selected:
                                    prev.Vehicle.selected?.name === vehicleOption.name
                                      ? null
                                      : vehicleOption,
                                },
                              }));

                              if (selectedTypeName) {
                                setSelectedImage(
                                  vehicleOption.image[selectedTypeName] || fallbackImage
                                );
                              } else {
                                setSelectedImage(fallbackImage);
                              }
                            }}
                            className={`w-full p-3 lg:p-4 border rounded-xl transition-all duration-300 ${section.selected?.name === option.name
                              ? "bg-red-500 text-white border-red-600 shadow-lg"
                              : "hover:bg-red-50 border-gray-200"
                              }`}
                          >
                            <div className="flex gap-3">
                              <img
                                src={
                                  (option as unknown as OptionVehicle).image[
                                  config.Type.selectedType?.name || ""
                                  ] || Object.values((option as unknown as OptionVehicle).image)[0]
                                }
                                alt={option.name}
                                className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-lg"
                              />
                              <div className="flex flex-col text-left">
                                <span className="font-semibold text-base lg:text-lg">
                                  {option.name}
                                </span>
                                <p className="text-sm opacity-90">
                                  {(option as unknown as OptionVehicle).description?.[
                                    config.Type.selectedType?.name || ""
                                  ] || ""}
                                </p>
                                <span className="font-medium text-sm lg:text-base">
                                  {(
                                    (option as unknown as OptionVehicle).price[
                                    config.Type.selectedType?.name || ""
                                    ] || 0
                                  ).toLocaleString()} THB{" "}
                                </span>
                              </div>
                            </div>
                          </button>
                        )}
                        {/* {key === "Vehicle" && config.Type.selectedType?.name &&
                          section.selected?.name === option.name &&
                          option.models && (
                            <>
                              <div className="mt-4 ml-8 space-y-4">
                                <h3 className="text-lg font-medium text-gray-700">
                                  {t("textD38")}
                                </h3>
                                {option.models.map((model: Option) =>
                                  config.Type.selectedType?.name === model?.type && (
                                    <button
                                      key={model.name}
                                      type="button"
                                      onClick={() => handleModelSelect(model)}
                                      className={`w-full p-3 border rounded-lg transition-all ${section.selectedModel?.name === model.name
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
                                            {model.description}asdasd
                                          </p>
                                          <span className="text-sm font-medium">
                                            {model.price.toLocaleString()} THB{" "}
                                          </span>
                                        </div>
                                      </div>
                                      {/* <div className="flex gap-3">
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
            )} */}
                        {key === "Type" &&
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
                                {option.models.map((model: Option) => (
                                  <button
                                    key={model.name}
                                    type="button"
                                    onClick={() => handleTypeSelect(model)}
                                    className={`w-full p-3 border rounded-lg transition-all ${section.selectedType?.name === model.name
                                      ? "bg-gray-800 text-white border-gray-800"
                                      : "hover:bg-gray-50 border-gray-200"
                                      }`}
                                  >
                                    <div className="flex gap-3 items-center">
                                      <img
                                        src={model.image}
                                        alt={model.name}
                                        className="w-14 h-14 object-cover rounded-lg"
                                      />
                                      <div className="flex flex-col text-left">
                                        <span className="font-medium">
                                          {model.name}
                                        </span>
                                      </div>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                      </div>
                    ))
                  ) : (
                    ["1", "2", "3"].map((num) => (
                      <div key={num}>
                        <h3 className="text-xl font-normal mb-2 text-red-500">{section[`title${num}`]}</h3>

                        {section[`options${num}`]?.map((option: Option) => (
                          <div key={option.name} className="relative">
                            <button
                              type="button"
                              onClick={() =>
                                handleOptionSelect(key as keyof Config, option)
                              }
                              className={`w-full p-3 lg:p-4 border rounded-xl transition-all duration-300 ${section.selected?.name === option.name
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

                                  {option.namesub && (
                                    <p className="text-xs lg:text-sm">{option.namesub}</p>
                                  )}

                                  {option.price > 0 && (
                                    <span className="font-medium text-sm lg:text-base">
                                      + {option.price.toLocaleString()} THB
                                    </span>
                                  )}
                                </div>
                              </div>
                            </button>
                          </div>
                        ))}
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))
          }
        </div >

        <button
          type="button"
          onClick={handlePurchaseClick}
          className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          {t("textH0")}
        </button>
      </motion.div >

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
                    className={`p-4 rounded-lg border transition-all ${paymentType === "full"
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
                    className={`p-4 rounded-lg border transition-all ${paymentType === "installment"
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
                          className={`p-4 rounded-lg border transition-all ${installmentMonths === months
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
    </form >
  );
};

export default RVConfigurator;
