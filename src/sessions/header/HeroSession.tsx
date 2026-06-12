"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Index = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Transform for vertical position - now toggles between bottom and top
  const navbarPosition = useTransform(scrollY, [0, 100], ["bottom-0", "top-0"]);

  const navbarBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.9)"]
  );

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  return (
    <div className="relative min-h-[200vh]">
      {/* วิดีโอพื้นหลัง */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-10">
        <iframe
          src="https://www.youtube.com/embed/1774bq6WoJE?autoplay=1&mute=1&controls=0&loop=1&playlist=1774bq6WoJE"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute w-[100vw] h-[100vh] object-cover"
          style={{
            pointerEvents: "none",
            border: "none",
            transform: "scale(1.5)",
          }}
        />
        <div className="absolute inset-0" />
      </div>

      {/* เนื้อหาส่วน Hero */}
      <div className="relative h-screen flex items-center justify-center text-white px-4">
        {/* แถบนำทาง */}
        <motion.div
          style={{
            backgroundColor: navbarBg,
          }}
          animate={{
            bottom: isScrolled ? "unset" : 0,
            top: isScrolled ? 0 : "unset",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="fixed left-0 w-full h-12 flex items-center justify-between px-16 py-4 transition-colors duration-300 z-40 mt-16"
        >
          {/* โลโก้ */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-xl font-bold">LOGO</span>
            </div>
          </div>

          {/* เมนูสำหรับหน้าจอใหญ่ */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              หน้าแรก
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              เกี่ยวกับเรา
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              บริการ
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              ติดต่อ
            </a>
          </div>

          {/* ลิงก์โซเชียลสำหรับหน้าจอใหญ่ */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* ปุ่มเปิด-ปิดเมนูมือถือ */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>

        {/* เมนูมือถือแบบเต็มจอ */}
        <motion.div
          initial={false}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : 20,
          }}
          className={`fixed inset-0 bg-black/95 z-30 flex flex-col items-center justify-center ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center space-y-8 text-xl">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              หน้าแรก
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              เกี่ยวกับเรา
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              บริการ
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              ติดต่อ
            </a>
          </div>
          <div className="mt-12 flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
