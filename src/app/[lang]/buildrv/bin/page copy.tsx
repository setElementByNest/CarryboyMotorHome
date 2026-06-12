"use client";
import React, { useState, useRef, FormEvent } from "react";
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
import HeroSectionN from "@/sessions/header/HeroSessionN";

interface VehicleModel {
  name: string;
  price: number;
  image: string;
  image2?: string;
  description?: string;
}

interface Option {
  name: string;
  price: number;
  image: string;
  image2?: string;
  description?: string;
  color?: string;
  models?: VehicleModel[];
}

interface ConfigSection {
  options: Option[];
  selected: Option | null;
  selectedModel?: Option | null;
}

interface Config {
  รถยนต์: ConfigSection;
  วัสดุตกแต่ง: ConfigSection;
  ประเภทท้ายรถ: ConfigSection;
  ระบบปรับอากาศ: ConfigSection;
  แบตเตอรี่: ConfigSection;
  เครื่องกำเนิดไฟฟ้า: ConfigSection;
  กล่องท้ายรถ: ConfigSection;
  ระบบกันสะเทือน: ConfigSection;
  ยางรถยนต์: ConfigSection;
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

interface MainPageProps {
  params: { lang: string }; // รับค่า lang จาก dynamic route
}

type PaymentType = "full" | "installment";
type InstallmentMonths = 24 | 36 | 48;

function RVConfigurator({ params: { lang } }: MainPageProps) {
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

  const [config, setConfig] = useState<Config>({
    รถยนต์: {
      options: [
        {
          name: "TOYOTA HILUX REVO",
          price: 2058000,
          image: "/img/buildrv/toyota/Vehicle_rv_toyota_e_01.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "รถกระบะสำหรับการใช้งานหลากหลาย",
          models: [
            {
              name: "2.4 ENTRY 2WD A/T",
              price: 2058000,
              image: "/img/buildrv/toyota/Vehicle_rv_toyota_e_01.jpg",
              image2:
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
              description: "รุ่นประหยัด เหมาะสำหรับการใช้งานทั่วไป",
            },
            {
              name: "2.8 ENTRY 2WD M/T",
              price: 2063000,
              image: "/img/buildrv/toyota/Vehicle_rv_toyota_e_02.jpg",
              image2:
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              description: "รุ่นมาตรฐาน เหมาะสำหรับครอบครัว",
            },
            {
              name: "2.8 ENTRY 4WD M/T",
              price: 2173000,
              image: "/img/buildrv/toyota/Vehicle_rv_toyota_e_03.jpg",
              image2:
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              description: "รุ่นสูงสุด เหมาะสำหรับการลุยทุกเส้นทาง",
            },
            {
              name: "2.8 ENTRY 4WD A/T",
              price: 2225000,
              image: "/img/buildrv/toyota/Vehicle_rv_toyota_e_04.jpg",
              image2:
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              description: "รุ่นสูงสุด เหมาะสำหรับการลุยทุกเส้นทาง",
            },
          ],
        },
        {
          name: "TOYOTA HILUX CHAMP",
          price: 1997000,
          image: "/img/buildrv/HILUX/Vehicle_rv_toyota_champ.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "รุ่นสมรรถนะสูง เหมาะสำหรับนักผจญภัย",
          models: [
            {
              name: "2.4 Diesel AT LWB",
              price: 1997000,
              image: "/img/buildrv/HILUX/Vehicle_rv_toyota_champ.jpg",
              image2:
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              description: "รุ่นประหยัด แต่มาพร้อมสมรรถนะที่ดี",
            },
          ],
        },
        {
          name: "MITSUBISHI TRITON",
          price: 1997000,
          image: "/img/buildrv/mitsubishi/Vehicle_rv_mitsu_e.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "ดีไซน์สปอร์ต สมรรถนะเยี่ยม",
          models: [
            {
              name: "Mega Cab 2.4 GL",
              price: 1997000,
              image: "/img/buildrv/mitsubishi/Vehicle_rv_mitsu_e.jpg",
              image2:
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              description: "รุ่นพื้นฐาน เหมาะสำหรับการใช้งานเชิงพาณิชย์",
            },
          ],
        },
      ],
      selected: null,
      selectedModel: null,
    },
    วัสดุตกแต่ง: {
      options: [
        {
          name: "Classic White",
          price: 0,
          image: "/img/buildrv/int_01.jpg",
          image2: "/img/buildrv/lite.png",
          description: "สีขาวคลาสสิก ดูสะอาดตา",
          color: "#FFFFFF",
        },
        {
          name: "Warm Wood",
          price: 20000,
          image: "/img/buildrv/int_02.jpg",
          image2: "/img/buildrv/classic.png",
          description: "ลายไม้โทนอบอุ่น",
          color: "#8B4513",
        },
      ],
      selected: null,
    },
    ประเภทท้ายรถ: {
      options: [
        {
          name: "Counter",
          price: 0,
          image: "/img/buildrv/int_03.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "เคาน์เตอร์อเนกประสงค์",
        },
        {
          name: "Wardrobe",
          price: 15000,
          image: "/img/buildrv/int_04.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "ตู้เสื้อผ้าพร้อมพื้นที่เก็บของ",
        },
      ],
      selected: null,
    },
    ระบบปรับอากาศ: {
      options: [
        {
          name: "Standard",
          price: 0,
          image: "/img/buildrv/Ari-con-1.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "ระบบปรับอากาศมาตรฐาน",
        },
        {
          name: "HARRIER Plus",
          price: 67500,
          image: "/img/buildrv/Ari-con-2.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "ระบบปรับอากาศสมรรถนะสูง",
        },
      ],
      selected: null,
    },
    แบตเตอรี่: {
      options: [
        {
          name: "9,600 Wh",
          price: 0,
          image: "/img/buildrv/bat_A01.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "แบตเตอรี่มาตรฐาน",
        },
        {
          name: "19,200 Wh",
          price: 95000,
          image: "/img/buildrv/bat_A01.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "แบตเตอรี่ความจุสูง",
        },
        {
          name: "28,800 Wh",
          price: 190000,
          image: "/img/buildrv/bat_A01.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "แบตเตอรี่ประสิทธิภาพสูงสุด",
        },
      ],
      selected: null,
    },
    เครื่องกำเนิดไฟฟ้า: {
      options: [
        {
          name: "Standard Black",
          price: 0,
          image:
            "/img/buildrv/carryboy-motorhome-rv-feature-generator-Dometic.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "เครื่องปั่นไฟมาตรฐานสีดำ",
        },
        {
          name: "Deluxe Silver",
          price: 15000,
          image:
            "/img/buildrv/carryboy-motorhome-rv-feature-generator-Standard.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "เครื่องปั่นไฟพรีเมียมสีเงิน",
        },
      ],
      selected: null,
    },
    กล่องท้ายรถ: {
      options: [
        {
          name: "Matte Black + Slide Kitchen",
          price: 25000,
          image: "/img/buildrv/boxback-black.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "กล่องด้านหลังสีดำด้านพร้อมครัวสไลด์",
        },
        {
          name: "Glossy White + Slide Kitchen",
          price: 30000,
          image: "/img/buildrv/boxback-white.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "กล่องด้านหลังสีขาวเงาพร้อมครัวสไลด์",
        },
      ],
      selected: null,
    },
    ระบบกันสะเทือน: {
      options: [
        {
          name: "Standard Suspension",
          price: 0,
          image: "/img/buildrv/draft_1_2.png",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "ระบบกันสะเทือนมาตรฐาน",
        },
        {
          name: "Air Suspension",
          price: 55000,
          image: "/img/buildrv/draft_1_1.png",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "ระบบกันสะเทือนอากาศ",
        },
      ],
      selected: null,
    },
    ยางรถยนต์: {
      options: [
        {
          name: "Standard Tires",
          price: 0,
          image: "/img/buildrv/set_01.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "ยางมาตรฐาน",
        },
        {
          name: "All-Terrain Tires",
          price: 20000,
          image: "/img/buildrv/set_03.jpg",
          image2:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          description: "ยางทุกสภาพถนน",
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
        setAlertTitle("แจ้งเตือน");
        setAlertMessage(`ยกเลิกการเลือก ${option.name} แล้ว`);
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

  const handleModelSelect = (model: Option): void => {
    setConfig((prev) => {
      if (prev.รถยนต์.selected) {
        const isDeselecting = prev.รถยนต์.selectedModel?.name === model.name;

        if (isDeselecting) {
          setSelectedImage("/img/buildrv/02.jpg");
          setSelectedDetails(null);
          setAlertTitle("แจ้งเตือน");
          setAlertMessage(`ยกเลิกการเลือก ${model.name} แล้ว`);
          setShowAlert(true);
        } else {
          setSelectedImage(model.image);
          setSelectedDetails(model);
        }

        return {
          ...prev,
          รถยนต์: {
            ...prev.รถยนต์,
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
      if (section === config.รถยนต์) {
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

  const calculateVAT = (price: number): number => {
    const additionalCosts = calculateAdditionalCosts();
    const totalAdditionalCosts = Object.values(additionalCosts).reduce(
      (a, b) => a + b,
      0
    );
    const basePrice = price + totalAdditionalCosts;

    if (paymentType === "full") {
      return basePrice * 0.07;
    } else {
      const interestRate = 0.069;
      const monthlyInterestRate = interestRate / 12;
      const totalWithInterest =
        basePrice * (1 + monthlyInterestRate * installmentMonths);
      return totalWithInterest * 0.07;
    }
  };

  const calculateMonthlyPayment = (
    totalAmount: number,
    months: number
  ): number => {
    const interestRate = 0.069;
    const monthlyInterestRate = interestRate / 12;
    const payment =
      (totalAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, months)) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);
    return payment;
  };

  const handlePaymentSubmit = async (): Promise<void> => {
    if (!firstName || !lastName || !phone || !email) {
      setAlertTitle("ข้อผิดพลาด");
      setAlertMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
      setShowAlert(true);
      return;
    }

    const totalPrice = calculateTotalPrice();
    const additionalCosts = calculateAdditionalCosts();
    const totalAdditionalCosts = Object.values(additionalCosts).reduce(
      (a, b) => a + b,
      0
    );
    const vat = calculateVAT(totalPrice);
    const finalPrice = totalPrice + vat + totalAdditionalCosts;

    const orderDetails = Object.entries(config)
      .map(([key, section]) => {
        if (key === "รถยนต์") {
          return section.selectedModel
            ? `${key}: ${section.selected?.name} - ${section.selectedModel.name} (${section.selectedModel.price} THB)`
            : section.selected
            ? `${key}: ${section.selected.name} (${section.selected.price} THB)`
            : null;
        }
        return (
          section.selected &&
          `${key}: ${section.selected.name} (${section.selected.price} THB)`
        );
      })
      .filter(Boolean)
      .join("\n");

    try {
      const SERVICE_ID = "service_xdihl1b";
      const TEMPLATE_ID = "template_6n6mqs6";
      const PUBLIC_KEY = "HX7TtmNCzNASGiLjK";

      const templateParams: EmailJSTemplateParams = {
        to_name: `${firstName} ${lastName}`,
        from_name: "RV Builder",
        message: `
          Order Details:
          ${orderDetails}
          
          Total Price: ${totalPrice.toLocaleString()} THB
          Additional Costs: ${totalAdditionalCosts.toLocaleString()} THB
          VAT (7%): ${vat.toLocaleString()} THB
          Final Price: ${finalPrice.toLocaleString()} THB
          
          Payment Type: ${
            paymentType === "full"
              ? "Full Payment"
              : `Installment (${installmentMonths} months)`
          }
          ${
            paymentType === "installment"
              ? `Monthly Payment: ${calculateMonthlyPayment(
                  finalPrice,
                  installmentMonths
                ).toLocaleString()} THB`
              : ""
          }
          
          Contact Information:
          Name: ${firstName} ${lastName}
          Phone: ${phone}
          Email: ${email}
        `,
        to_email: email,
      };

      emailjs.init(PUBLIC_KEY);

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      if (result.status === 200) {
        setAlertTitle("สำเร็จ");
        setAlertMessage("คำสั่งจองถูกส่งเรียบร้อยแล้ว!");
        setShowAlert(true);
        setShowPaymentDialog(false);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setAlertTitle("ข้อผิดพลาด");
      setAlertMessage("เกิดข้อผิดพลาดในการส่งคำสั่งจอง กรุณาลองใหม่อีกครั้ง");
      setShowAlert(true);
    }
  };

  const handlePurchaseClick = (): void => {
    setShowPaymentDialog(true);
  };

  const handleDialogClose = (): void => {
    setShowPaymentDialog(false);
  };

  const totalPrice = calculateTotalPrice();
  const additionalCosts = calculateAdditionalCosts();
  const totalAdditionalCosts = Object.values(additionalCosts).reduce(
    (a, b) => a + b,
    0
  );
  const vat = calculateVAT(totalPrice);
  const finalPrice = totalPrice + vat;
  const monthlyPayment =
    paymentType === "installment"
      ? calculateMonthlyPayment(finalPrice, installmentMonths)
      : 0;

  interface OrderSummaryProps {
    config: Config;
  }

  const OrderSummary: React.FC<OrderSummaryProps> = ({ config }) => {
    return (
      <div className="lg:col-span-2 ">
        <div className="bg-gray-50 p-3 lg:p-4 rounded-lg space-y-3 lg:space-y-4 ">
          <h3 className="font-semibold text-base lg:text-lg border-b pb-2">
            รายการสินค้าที่เลือก
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
                            {key === "รถยนต์" && section.selectedModel && (
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
                          {key === "รถยนต์" && section.selectedModel
                            ? `${section.selectedModel.price.toLocaleString()} THB`
                            : section.selected.price === 0
                            ? "รวมในชุด"
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
    <>
      {/* <HeroSectionN lang={lang} /> */}
      <form
        ref={formRef}
        className="min-h-screen bg-gray-100 flex flex-col lg:flex-row mt-28"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-2/3 bg-white p-4 lg:p-8 lg:sticky lg:top-0 h-[50vh] lg:h-screen fixed top-0 left-0 right-0 z-10"
        >
          <img
            src={selectedImage}
            alt="Selected Option"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/3 bg-gray-50 p-4 lg:p-8 overflow-y-auto h-auto lg:h-screen mt-[50vh] lg:mt-0"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl lg:text-4xl font-bold text-red-600">
              สร้าง RV ของคุณ
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:gap-8">
            {Object.entries(config).map(([key, section]) => (
              <div
                key={key}
                className="bg-white rounded-xl p-4 lg:p-6 shadow-md"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">
                    {key}
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {key === "วัสดุตกแต่ง" ? (
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
                                ? "รวมในชุด"
                                : `${option.price.toLocaleString()} THB`}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    section.options.map((option: Option) => (
                      <div key={option.name}>
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
                            <div className="flex flex-col gap-1 lg:gap-2 text-left">
                              <span className="font-semibold text-base lg:text-lg">
                                {option.name}
                              </span>
                              <p className="text-xs lg:text-sm opacity-90">
                                {option.description}
                              </p>
                              <span className="font-medium text-sm lg:text-base">
                                {option.price === 0
                                  ? "รวมในชุด"
                                  : `${option.price.toLocaleString()} THB`}
                              </span>
                            </div>
                          </div>
                        </button>

                        {key === "รถยนต์" &&
                          section.selected?.name === option.name &&
                          option.models && (
                            <div className="mt-4 ml-8 space-y-4">
                              <h3 className="text-lg font-medium text-gray-700">
                                เลือกรุ่น
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
                                        {model.price.toLocaleString()} THB
                                      </span>
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          )}
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
            สั่งซื้อ
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
                ตกลง
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Dialog open={showPaymentDialog} onOpenChange={handleDialogClose}>
          <DialogContent className="w-[95vw] lg:max-w-[95vw] p-4 lg:p-6 max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl lg:text-2xl font-bold mb-4">
                สรุปรายการสั่งจอง
              </DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              <OrderSummary config={config} />

              <div className="lg:col-span-1 space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">
                    ข้อมูลติดต่อ
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
                  <h3 className="font-semibold">เลือกวิธีการชำระเงิน</h3>
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
                      ชำระเต็มจำนวน
                      <div className="text-sm text-gray-600 mt-1">
                        {(finalPrice + totalAdditionalCosts).toLocaleString()}{" "}
                        THB
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
                      ผ่อนชำระรายเดือน
                    </button>
                  </div>

                  {paymentType === "installment" && (
                    <div className="space-y-4">
                      <h4 className="font-medium">ระยะเวลาผ่อนชำระ</h4>
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
                            {months} เดือน
                            <div className="text-sm text-gray-600 mt-1">
                              {monthlyPayment.toLocaleString(undefined, {
                                maximumFractionDigits: 0,
                              })}
                              THB/เดือน
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
                  <div className="flex justify-between text-lg">
                    <span>ราคารวม</span>
                    <span>{totalPrice.toLocaleString()} THB</span>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="border-t pt-2">
                      <h4 className="font-medium mb-2">ค่าใช้จ่ายเพิ่มเติม</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Insurance costs and the Act</span>
                          <span>43,662 THB</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Vehicle registration fee</span>
                          <span>20,000 THB</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Red license plate (refundable)</span>
                          <span>3,000 THB</span>
                        </div>
                        <div className="flex justify-between font-medium pt-2 border-t">
                          <span>Total cost at pickup day</span>
                          <span>66,662 THB</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>
                      VAT 7%{" "}
                      {paymentType === "installment"
                        ? `(รวมดอกเบี้ย ${installmentMonths} เดือน)`
                        : ""}
                    </span>
                    <span>{vat.toLocaleString()} THB</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl border-t pt-2">
                    <span>ยอดรวมทั้งสิ้น</span>
                    <span>
                      {(finalPrice + totalAdditionalCosts).toLocaleString()} THB
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handlePaymentSubmit}
                    className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold mt-4"
                  >
                    ยืนยันการสั่งจอง
                  </button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </form>
    </>
  );
}

export default RVConfigurator;
