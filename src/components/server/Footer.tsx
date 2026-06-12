"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FooterSection {
  title: string;
  links: {
    text: string;
    url: string;
    external?: boolean;
  }[];
}

const footerData: FooterSection[] = [
  {
    title: "ต้องการซื้อ",
    links: [
      { text: "ทดลองขับ", url: "/test-drive", external: true },
      { text: "ใบเสนอราคา", url: "/quotation", external: true },
      { text: "ราคารถ", url: "/price-list" },
      { text: "โปรโมชั่นพิเศษ", url: "/special-offers" },
      { text: "แคมเปญพิเศษ", url: "/campaigns" },
      { text: "ข้อเสนอสุดพิเศษ", url: "/exclusive-offers" },
      { text: "จองรถออนไลน์", url: "/online-booking" },
      { text: "สินเชื่อรถยนต์", url: "/car-loan" },
    ],
  },
  {
    title: "รุ่นรถยนต์",
    links: [
      { text: "รถยนต์นั่งส่วนบุคคล", url: "/personal-cars" },
      { text: "รถอเนกประสงค์", url: "/suv" },
      { text: "รถตู้", url: "/van" },
      { text: "รถเพื่อการพาณิชย์", url: "/commercial" },
      { text: "รถไฮบริด", url: "/hybrid" },
      { text: "รถไฟฟ้า", url: "/ev" },
      { text: "รถสปอร์ต", url: "/sports" },
      { text: "รถกระบะ", url: "/pickup" },
    ],
  },
  {
    title: "บริการ",
    links: [
      { text: "บริการหลังการขาย", url: "/after-sales" },
      { text: "ศูนย์บริการ", url: "/service-centers" },
      { text: "นัดหมายเข้ารับบริการ", url: "/service-appointment" },
      { text: "Toyota Care", url: "/toyota-care", external: true },
      { text: "ประกันภัยรถยนต์", url: "/insurance" },
      { text: "อะไหล่แท้โตโยต้า", url: "/genuine-parts" },
      { text: "บริการฉุกเฉิน", url: "/emergency-service" },
      { text: "ตรวจสภาพรถ", url: "/car-inspection" },
    ],
  },
  {
    title: "ข่าวสารและกิจกรรม",
    links: [
      { text: "ข่าวล่าสุด", url: "/news" },
      { text: "กิจกรรมพิเศษ", url: "/events" },
      { text: "ยอดขาย", url: "/sales" },
      { text: "CSR", url: "/csr" },
      { text: "นวัตกรรมล่าสุด", url: "/innovation" },
      { text: "รางวัลและความสำเร็จ", url: "/awards" },
      { text: "กิจกรรมการตลาด", url: "/marketing-events" },
    ],
  },
  {
    title: "เกี่ยวกับเรา",
    links: [
      { text: "ข้อมูลบริษัท", url: "/about" },
      { text: "ร่วมงานกับเรา", url: "/careers" },
      { text: "นโยบายความเป็นส่วนตัว", url: "/privacy" },
      { text: "เงื่อนไขการใช้งาน", url: "/terms" },
      { text: "ความยั่งยืน", url: "/sustainability" },
      { text: "นักลงทุนสัมพันธ์", url: "/investor-relations" },
    ],
  },
  {
    title: "ศูนย์อะไหล่และบริการ",
    links: [
      { text: "ค้นหาศูนย์บริการ", url: "/find-service-center" },
      { text: "อะไหล่แท้", url: "/genuine-parts" },
      { text: "บริการซ่อมตัวถังและสี", url: "/body-and-paint" },
      { text: "โปรแกรมบำรุงรักษา", url: "/maintenance" },
      { text: "คู่มือการใช้งาน", url: "/manuals" },
    ],
  },
  {
    title: "โปรแกรมพิเศษ",
    links: [
      { text: "Toyota Elite Club", url: "/elite-club" },
      { text: "สิทธิพิเศษลูกค้า", url: "/privileges" },
      { text: "แลกคะแนนสะสม", url: "/points" },
      { text: "กิจกรรมสมาชิก", url: "/member-activities" },
      { text: "บัตรเครดิตโตโยต้า", url: "/credit-card" },
    ],
  },
  {
    title: "การเงินและประกันภัย",
    links: [
      { text: "สินเชื่อรถยนต์", url: "/car-loan" },
      { text: "ประกันภัยชั้น 1", url: "/first-class-insurance" },
      { text: "ประกันภัยชั้น 2+", url: "/second-class-plus-insurance" },
      { text: "ประกันภัยชั้น 3+", url: "/third-class-plus-insurance" },
      { text: "คำนวณค่างวด", url: "/calculator" },
    ],
  },
  {
    title: "นวัตกรรมและเทคโนโลยี",
    links: [
      { text: "ระบบความปลอดภัย", url: "/safety-system" },
      { text: "เทคโนโลยีไฮบริด", url: "/hybrid-tech" },
      { text: "ระบบมัลติมีเดีย", url: "/multimedia" },
      { text: "ระบบนำทาง", url: "/navigation" },
      { text: "แอพพลิเคชั่น", url: "/applications" },
    ],
  },
  {
    title: "ข้อมูลเพิ่มเติม",
    links: [
      { text: "คำถามที่พบบ่อย", url: "/faq" },
      { text: "ติดต่อเรา", url: "/contact" },
      { text: "ร้องเรียน/เสนอแนะ", url: "/feedback" },
      { text: "แผนผังเว็บไซต์", url: "/sitemap" },
      { text: "นโยบายคุกกี้", url: "/cookie-policy" },
    ],
  },
];

const socialIcons = [
  {
    icon: "/img/icon/youtube.webp",
    url: "https://www.youtube.com/@toyotathailand",
  },
  { icon: "/img/icon/fb.webp", url: "https://www.facebook.com/toyotamotor.th" },
  {
    icon: "/img/icon/ig.webp",
    url: "https://www.instagram.com/toyotamotorthailandofficial",
  },
  {
    icon: "/img/icon/threads.svg",
    url: "https://www.threads.net/@toyotamotorthailandofficial",
  },
  { icon: "/img/icon/x.webp", url: "https://x.com/ToyotaMotorTH" },
  {
    icon: "/img/icon/tiktok.svg",
    url: "https://www.tiktok.com/@toyotamotorth",
  },
  { icon: "/img/icon/line.webp", url: "https://lin.ee/dSOeLR9" },
];

const Index = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (sectionTitle: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  return (
    <footer className="bg-white mt-8">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Mobile View */}
          <div className="lg:hidden w-full">
            {footerData.map((section, index) => (
              <div key={section.title} className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex justify-between items-center py-4 text-lg font-semibold text-gray-800"
                >
                  {section.title}
                  <motion.span
                    animate={{ rotate: openSections[section.title] ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="transform"
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openSections[section.title] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-3 pl-4 pb-4">
                        {section.links.map((link) => (
                          <motion.li
                            key={link.text}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <a
                              href={link.url}
                              target={link.external ? "_blank" : undefined}
                              rel={
                                link.external
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="text-gray-600 hover:text-primary transition-colors duration-200"
                            >
                              {link.text}
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden lg:block lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {footerData.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="font-semibold text-lg text-gray-800">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.text}>
                        <a
                          href={link.url}
                          target={link.external ? "_blank" : undefined}
                          rel={
                            link.external ? "noopener noreferrer" : undefined
                          }
                          className="text-gray-600 hover:text-primary transition-colors duration-200"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                ศูนย์ลูกค้าสัมพันธ์
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  โทร.{" "}
                  <a
                    href="tel:1486"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    1486
                  </a>
                </p>
                <p className="text-sm text-gray-500">
                  บริการ 24 ชั่วโมง ด้วยเทคโนโลยี Voice Bot
                  <br />
                  และบริการช่วยเหลือฉุกเฉินบนท้องถนน
                </p>
                <p className="text-gray-600">
                  อีเมล:{" "}
                  <a
                    href="mailto:contactcenter@toyota.co.th"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    contactcenter@toyota.co.th
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-800">
                ช่องทางออนไลน์
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={social.icon}
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-[#00B900] text-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">
                Line Official Account
              </h3>
              <div className="flex items-center space-x-4">
                <img
                  src="/img/qr-line.png"
                  alt="Line QR Code"
                  className="w-32 h-32 bg-white p-2 rounded-lg"
                />
                <div>
                  <p className="text-white/90 mb-2">Line ID: @toyotathailand</p>
                  <a
                    href="https://lin.ee/dSOeLR9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-[#00B900] px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    เพิ่มเพื่อน
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} บริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัด
            สงวนลิขสิทธิ์
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Index;
