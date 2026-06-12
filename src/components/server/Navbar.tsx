"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe, BrainCircuit } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { usePrice } from "@/context/PriceContext";

// Types
interface MenuItem {
  title: string;
  href: string;
  description?: string;
  subItems?: MenuItem[];
}

interface MenuSection {
  category: string;
  items: MenuItem[];
}

interface NavItem {
  id: string;
  label: string;
  type: "link" | "dropdown";
  href?: string;
  menu?: MenuSection[];
}

interface NavbarProps {
  lang?: string;
}

// NavDropdown Component
const NavDropdown: React.FC<{ sections: MenuSection[]; isOpen: boolean }> = ({
  sections,
  isOpen,
}) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const t = useTranslations("Hero");

  return (
    <div
      className={`${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      } fixed top-[50px] left-0 right-0 w-full bg-white/95 backdrop-blur shadow-sm transition-all duration-500 ease-in-out transform-gpu z-50 border-b border-gray-100`}
    >
      <div className="container max-w-[1440px] mx-auto px-8 py-12">
        <div className="grid grid-cols-3 gap-12">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[250px]"
              style={{
                transition: "all 0.5s ease-out",
                transitionDelay: `${idx * 150}ms`,
              }}
            >
              <h3 className="text-sm font-medium text-tesla-gray tracking-wide uppercase mb-8">
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveSubMenu(
                              activeSubMenu === item.title ? null : item.title
                            )
                          }
                          className="w-full text-left group"
                        >
                          <div className="flex items-center justify-between text-[15px] text-tesla-gray hover:text-black transition-all duration-300 transform group-hover:translate-x-2">
                            <span className="font-medium">{item.title}</span>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                activeSubMenu === item.title ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </button>
                        <AnimatePresence>
                          {activeSubMenu === item.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-4 ml-4 space-y-4"
                            >
                              {item.subItems.map((subItem, subIdx) => (
                                <motion.a
                                  key={subIdx}
                                  href={subItem.href}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIdx * 0.1 }}
                                  className="block text-[14px] text-tesla-gray hover:text-black transition-all duration-300 transform hover:translate-x-2"
                                >
                                  {subItem.title}
                                </motion.a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block text-[15px] text-tesla-gray hover:text-black transition-all duration-300 transform hover:translate-x-2"
                      >
                        <div className="font-medium">{item.title}</div>
                        {item.description && (
                          <div className="text-sm text-tesla-gray-light mt-2">
                            {item.description}
                          </div>
                        )}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// NavMobile Component
const NavMobile: React.FC<{
  menuItems: NavItem[];
  activeDropdown: string | null;
  toggleDropdown: (id: string) => void;
  currentLang: string;
  toggleLanguage: () => void;
}> = ({
  menuItems,
  activeDropdown,
  toggleDropdown,
  currentLang,
  toggleLanguage,
}) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const router = useRouter();
  const t = useTranslations("Hero");

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden fixed inset-0 top-[55px] bg-white/95 backdrop-blur-md z-50 overflow-hidden"
    >
      <div className="h-full overflow-y-auto pb-32 z-50">
        <div className="p-6 space-y-6">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="border-b border-gray-100 pb-6"
            >
              {item.type === "link" ? (
                <a
                  href={item.href}
                  className="block w-full text-left py-2 text-tesla-gray hover:text-black transition-colors duration-300"
                >
                  <span className="text-[15px] font-medium">{item.label}</span>
                </a>
              ) : (
                <>
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="w-full flex items-center justify-between py-2 text-tesla-gray hover:text-black transition-colors duration-300"
                  >
                    <span className="text-[15px] font-medium">
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        activeDropdown === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.id && item.menu && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-6 pl-4"
                      >
                        {item.menu.map((section, sectionIdx) => (
                          <motion.div
                            key={sectionIdx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: sectionIdx * 0.1,
                            }}
                            className="space-y-4"
                          >
                            <h3 className="text-sm font-medium text-tesla-gray tracking-wide uppercase">
                              {section.category}
                            </h3>
                            <div className="space-y-4">
                              {section.items.map((menuItem, itemIdx) => (
                                <div key={itemIdx} className="space-y-3">
                                  {menuItem.subItems ? (
                                    <div>
                                      <button
                                        onClick={() =>
                                          setActiveSubMenu(
                                            activeSubMenu === menuItem.title
                                              ? null
                                              : menuItem.title
                                          )
                                        }
                                        className="w-full flex items-center justify-between text-[15px] text-tesla-gray hover:text-black transition-colors duration-300"
                                      >
                                        <span className="font-medium">
                                          {menuItem.title}
                                        </span>
                                        <ChevronDown
                                          className={`h-4 w-4 transition-transform duration-300 ${
                                            activeSubMenu === menuItem.title
                                              ? "rotate-180"
                                              : ""
                                          }`}
                                        />
                                      </button>
                                      <AnimatePresence>
                                        {activeSubMenu === menuItem.title && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                              height: "auto",
                                              opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="mt-3 ml-4 space-y-3"
                                          >
                                            {menuItem.subItems.map(
                                              (subItem, subIdx) => (
                                                <motion.a
                                                  key={subIdx}
                                                  href={subItem.href}
                                                  initial={{
                                                    opacity: 0,
                                                    x: -20,
                                                  }}
                                                  animate={{ opacity: 1, x: 0 }}
                                                  transition={{
                                                    delay: subIdx * 0.1,
                                                  }}
                                                  className="block text-[14px] text-tesla-gray hover:text-black transition-colors duration-300"
                                                >
                                                  {subItem.title}
                                                </motion.a>
                                              )
                                            )}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  ) : (
                                    <a
                                      href={menuItem.href}
                                      className="block text-[15px] text-tesla-gray hover:text-black transition-colors duration-300"
                                    >
                                      <div className="font-medium">
                                        {menuItem.title}
                                      </div>
                                      {menuItem.description && (
                                        <div className="text-sm text-tesla-gray-light mt-2">
                                          {menuItem.description}
                                        </div>
                                      )}
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex items-center justify-between pt-4"
          >
            <a
              href={`/${currentLang === "en-US"}/Contact`}
              className="flex items-center space-x-2 text-tesla-gray hover:text-black transition-colors duration-300"
            >
              <BrainCircuit className="h-5 w-5" />
              <span className="text-sm font-medium">Contact</span>
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-tesla-gray hover:text-black transition-colors duration-300"
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium">{currentLang}</span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Navbar Component
const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState(lang || "th-TH");
  const router = useRouter();
  const pathname = usePathname();

  const { finalPrice, totalPrice, totalAdditionalCosts } = usePrice();

  const t = useTranslations("Hero");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 0);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const toggleDropdown = (modelId: string) => {
    setActiveDropdown(activeDropdown === modelId ? null : modelId);
  };

  const toggleLanguage = () => {
    const newLang = currentLang === "th-TH" ? "en-US" : "th-TH";
    setCurrentLang(newLang);
    router.push(`/${newLang}`);
  };

  // Menu Data
  const afterSalesSubItems: MenuItem[] = [
    { title: "ตรวจสอบสถานะการซ่อม", href: "#" },
    { title: "ตรวจสอบสถานะการซ่อม", href: "#" },
    { title: "ศูนย์บริการใกล้บ้าน", href: "#" },
    { title: "แพ็คเกจบำรุงรักษา", href: "#" },
  ];

  const createMenuSection = (
    category: string,
    items: Array<{
      title: string;
      href: string;
      description?: string;
      subItems?: MenuItem[];
    }>
  ) => ({
    category,
    items,
  });

  const modelSMenu: MenuSection[] = [
    createMenuSection("รถยนต์", [
      { title: "Model S", href: "#", description: "เริ่มต้นที่ ฿6,599,990" },
      {
        title: "Model S Plaid",
        href: "#",
        description: "เริ่มต้นที่ ฿7,699,990",
      },
    ]),
    createMenuSection("การซื้อ", [
      { title: "รถยนต์ที่มีอยู่", href: "#" },
      { title: "รถยนต์ใหม่", href: "#" },
      { title: "รถยนต์มือสอง", href: "#" },
      { title: "ไดรฟ์ทดสอบ", href: "#" },
    ]),
    createMenuSection("ข้อมูลเพิ่มเติม", [
      { title: "ข้อมูลจำเพาะ", href: "#" },
      { title: "การรับประกัน", href: "#" },
      { title: "คู่มือการใช้งาน", href: "#" },
      { title: "บริการหลังการขาย", href: "#", subItems: afterSalesSubItems },
    ]),
  ];

  const model3Menu = modelSMenu.map((section) => ({
    ...section,
    items:
      section.category === "รถยนต์"
        ? [
            {
              title: "Model 3",
              href: "#",
              description: "เริ่มต้นที่ ฿1,599,990",
            },
            {
              title: "Model 3 Performance",
              href: "#",
              description: "เริ่มต้นที่ ฿2,099,990",
            },
          ]
        : section.items,
  }));

  const modelXMenu = modelSMenu.map((section) => ({
    ...section,
    items:
      section.category === "รถยนต์"
        ? [
            {
              title: "Model X",
              href: "#",
              description: "เริ่มต้นที่ ฿5,599,990",
            },
            {
              title: "Model X Plaid",
              href: "#",
              description: "เริ่มต้นที่ ฿6,599,990",
            },
          ]
        : section.items,
  }));

  const modelYMenu = modelSMenu.map((section) => ({
    ...section,
    items:
      section.category === "รถยนต์"
        ? [
            {
              title: "Model Y",
              href: "#",
              description: "เริ่มต้นที่ ฿1,959,990",
            },
            {
              title: "Model Y Performance",
              href: "#",
              description: "เริ่มต้นที่ ฿2,509,990",
            },
          ]
        : section.items,
  }));

  const menuItems: NavItem[] = [
    { id: "home", label: t("Motorhome.hbutton1"), type: "link", href: "/" },
    {
      id: "videopage",
      label: t("Motorhome.hbutton2"),
      type: "link",
      href: `/${lang}/videopage`,
    },
    {
      id: "home2",
      label: t("Motorhome.hbutton3"),
      type: "link",
      href: `/${lang}/buildrv`,
    },
    {
      id: "home3",
      label: t("Motorhome.hbutton4"),
      type: "link",
      href: `/${lang}/Gallery`,
    },
    {
      id: "home4",
      label: t("Motorhome.hbutton5"),
      type: "link",
      href: `/${lang}/Contact`,
    },

    // { id: "model-s", label: "Model S", type: "dropdown", menu: modelSMenu },
    // { id: "model-3", label: "Model 3", type: "dropdown", menu: model3Menu },
    // { id: "model-x", label: "Model X", type: "dropdown", menu: modelXMenu },

    {
      id: "Brochure",
      label: t("Motorhome.hbutton6"),
      type: "link",
      href: `/${lang}/Brochure`,
    },
    // {
    //   id: "model-y",
    //   label: t("Motorhome.hbutton7"),
    //   type: "dropdown",
    //   menu: modelYMenu,
    // },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? "bg-white/75 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between px-8 py-2">
          <div className="flex-none lg:flex-1">
            <a href="/" className="block w-full">
              <img alt="" src="/img/logo/logo.png" className="h-7 w-auto" />
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-2 flex-1 justify-center">
            {menuItems.map((item) =>
              item.type === "link" ? (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                    isScrolled ? "text-tesla-gray" : "text-black"
                  } hover:bg-black/5 rounded-md transition-colors duration-200`}
                >
                  {item.label}
                </a>
              ) : (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className={`px-4 py-2 text-sm font-medium ${
                      isScrolled ? "text-tesla-gray" : "text-black"
                    } hover:bg-black/5 rounded-md flex items-center gap-1 transition-colors duration-200 whitespace-nowrap`}
                    aria-expanded={activeDropdown === item.id}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {item.menu && (
                    <NavDropdown
                      sections={item.menu}
                      isOpen={activeDropdown === item.id}
                    />
                  )}
                </div>
              )
            )}
          </div>

          <div className="flex-none lg:flex-1 flex items-center justify-end space-x-4">
            {/* <a
              href="/contact"
              className={`hidden lg:flex items-center p-2 hover:bg-black/5 rounded-md transition-colors duration-200 ${
                isScrolled ? "text-tesla-gray" : "text-black"
              }`}
            >
              <BrainCircuit className="h-5 w-5" />
            </a> */}
            {(pathname === `/th-TH/buildrv/` ||
              pathname === `/en-US/buildrv/`) && (
              <div className="text-red-500 font-semibold text-sm p-2   rounded">
                Total Price : {totalPrice.toLocaleString()} THB
              </div>
            )}
            <button
              onClick={toggleLanguage}
              className={`hidden lg:flex items-center space-x-1 p-2 hover:bg-black/5 rounded-md transition-colors duration-200 ${
                isScrolled ? "text-tesla-gray" : "text-black"
              }`}
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium">
                {currentLang === "en-US" ? "TH" : "EN"}
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 hover:bg-black/5 rounded-md transition-colors duration-200 ${
                isScrolled ? "text-tesla-gray" : "text-black"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <NavMobile
              menuItems={menuItems}
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              currentLang={currentLang === "en-US" ? "TH" : "EN"}
              toggleLanguage={toggleLanguage}
            />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
