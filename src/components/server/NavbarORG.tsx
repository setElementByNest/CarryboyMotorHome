"use client";
import { useTranslations } from "next-intl";

import { Fragment, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"; // ใช้ router สำหรับเปลี่ยน URL
import { motion } from "framer-motion"; // Import framer-motion
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface Props {
  params: {
    lang: string;
  };
}
import { getNavigationData } from "./navigationData";

// กำหนดประเภทสำหรับภาษา
type Locale = "en-US" | "th-TH";

export default function Navbar({ lang }: any) {
  const t = useTranslations("Navigation");

  const navigation = getNavigationData(t);

  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [isSecondaryDropdownOpen, setIsSecondaryDropdownOpen] = useState(false);

  const [isMainDropdownOpen2, setIsMainDropdownOpen2] = useState(false);
  const [isSecondaryDropdownOpen2, setIsSecondaryDropdownOpen2] =
    useState(false);

  const toggleMainDropdown = () => setIsMainDropdownOpen(!isMainDropdownOpen);
  const toggleSecondaryDropdown = () =>
    setIsSecondaryDropdownOpen(!isSecondaryDropdownOpen);

  const toggleMainDropdown2 = () =>
    setIsMainDropdownOpen2(!isMainDropdownOpen2);
  const toggleSecondaryDropdown2 = () =>
    setIsSecondaryDropdownOpen2(!isSecondaryDropdownOpen2);

  const [open, setOpen] = useState(false);
  const [showDeliveryBanner, setShowDeliveryBanner] = useState(true);
  const [locale, setLocale] = useState<Locale>("th-TH"); // ค่าเริ่มต้นเป็นภาษาอังกฤษ

  const router = useRouter();
  const pathname = usePathname();

  const people = [
    {
      id: 1,
      name: "Wade Cooper",
      avatar:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Arlene Mccoy",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const [selected, setSelected] = useState(people[3]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowDeliveryBanner(false);
      } else {
        setShowDeliveryBanner(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update selected language in localStorage and URL path
  useEffect(() => {
    const storedLocale = localStorage.getItem("lang") as Locale | null;
    if (storedLocale) setLocale(storedLocale);
  }, []);

  const handleLanguageChange = (newLocale: Locale) => {
    if (locale !== newLocale) {
      setLocale(newLocale);
      const newPathname = `/${newLocale}${pathname.substring(6)}`;
      router.push(newPathname);
      localStorage.setItem("lang", newLocale);
    }
  };

  const languages = [
    { id: "en-US", name: "English (EN)", icon: "" },
    { id: "th-TH", name: "ไทย (TH)", icon: "" },
  ];

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-lm transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="flex flex-wrap -mb-px space-x-2 px-2">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pb-8 pt-10"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-2 gap-x-4"
                    >
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img
                              alt={item.imageAlt}
                              src={item.imageSrc}
                              className="object-cover object-center"
                            />
                          </div>
                          <a
                            href={item.href}
                            className="mt-6 block font-medium text-gray-900"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </a>
                          {/* <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p> */}
                        </div>
                      ))}
                    </motion.div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-gray-900"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-2 block p-2 text-gray-500"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {t("labels.home")}
                  </a>
                </div>
              ))}
            </div>

            <div className="relative">
              <Listbox value={locale} onChange={handleLanguageChange}>
                <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <span className="flex items-center">
                    <span className="text-lg">
                      {languages.find((l) => l.id === locale)?.icon}
                    </span>
                    <span className="ml-3 block truncate">
                      {languages.find((l) => l.id === locale)?.name}
                    </span>
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {languages.map((language) => (
                    <Listbox.Option
                      key={language.id}
                      value={language.id}
                      className="cursor-default select-none relative py-2 pl-3 pr-9 text-gray-900"
                    >
                      <div className="flex items-center">
                        <span className="text-lg">{language.icon}</span>
                        <span className="ml-3 block truncate">
                          {language.name}
                        </span>
                      </div>
                      {locale === language.id && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                          <CheckIcon className="h-5 w-5" />
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="fixed top-0 z-40 w-full bg-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: showDeliveryBanner ? 1 : 0,
            y: showDeliveryBanner ? 0 : -50,
          }}
          transition={{ duration: 0.5 }}
        >
          {showDeliveryBanner && (
            <nav
              aria-label="Top"
              className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hidden lg:block"
            >
              <div className="border-b border-gray-200">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-16 items-center"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  {/* Logo */}
                  <div className="ml-4 lg:ml-0">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        src="/img/logo/logo.png"
                        className="h-12 w-auto"
                      />
                    </a>
                  </div>

                  {/* Flyout menus */}
                  <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                    <div className="flex h-full space-x-8">
                      {/* {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                          <div className="relative flex">
                            <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                              {category.name}
                            </PopoverButton>
                          </div>

                          <PopoverPanel
                            transition
                            className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 top-1/2 bg-white shadow"
                            />

                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-8">
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5 }}
                                  className="grid grid-cols-2 gap-x-8 gap-y-10 py-16"
                                >
                                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                    {category.featured.map((item) => (
                                      <div
                                        key={item.name}
                                        className="group relative text-base sm:text-sm"
                                      >
                                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                          <img
                                            alt={item.imageAlt}
                                            src={item.imageSrc}
                                            className="object-cover object-center"
                                          />
                                        </div>
                                        <a
                                          href={item.href}
                                          className="mt-6 block font-medium text-gray-900"
                                        >
                                          <span
                                            aria-hidden="true"
                                            className="absolute inset-0 z-10"
                                          />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        <p
                                          id={`${section.name}-heading`}
                                          className="font-medium text-gray-900"
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`${section.name}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                className="hover:text-gray-800"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </Popover>
                      ))} */}

                      {navigation.pages.map((page) => (
                        <a
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          {t("labels.home")}
                        </a>
                      ))}
                    </div>
                  </PopoverGroup>

                  <div className="ml-auto flex items-center">
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      <a
                        href="#"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {t("labels.about")}
                      </a>
                      <a
                        href="#"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {t("labels.applyforwork")}
                      </a>
                      <a
                        href="#"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {t("labels.installation")}
                      </a>
                    </div>

                    <span
                      aria-hidden="true"
                      className="h-6 w-px bg-gray-200 m-2"
                    />
                    {/* Search */}
                    <div className="flex space-x-2">
                      {/* <a
                        href="#"
                        className="p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon
                          aria-hidden="true"
                          className="h-6 w-6"
                        />
                      </a> */}
                      <a href="#!" role="button">
                        {/* <!-- Whatsapp --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="currentColor"
                          style={{ color: "#128c7e" }}
                          viewBox="0 0 24 24"
                        >
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                      </a>
                      <a href="#!" role="button">
                        {/* <!-- Facebook --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="currentColor"
                          style={{ color: "#1877f2" }}
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a href="#!" role="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="36"
                          height="36"
                          viewBox="0 0 52 52 "
                        >
                          <path
                            fill="#00c300"
                            d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z"
                          ></path>
                        </svg>
                      </a>
                      {/* <!-- Youtube --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        style={{ color: "#ff0000" }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                      {/* <!-- TikTok --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="h-7 w-7"
                        style={{ color: "#6a76ac" }}
                      >
                        {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                        <path
                          fill="currentColor"
                          d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                        />
                      </svg>
                    </div>

                    <span
                      aria-hidden="true"
                      className="h-6 w-px bg-gray-200 m-2"
                    />
                    <div className="relative inline-block text-left z-50">
                      <button
                        onClick={toggleMainDropdown}
                        className="text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center "
                        type="button"
                      >
                        {t("labels.dealership")}
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      {/* Main Dropdown Menu */}
                      {isMainDropdownOpen && (
                        <div className="absolute z-10 mt-20 w-56 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-200">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <button
                                onClick={toggleSecondaryDropdown}
                                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black"
                                type="button"
                              >
                                {t("labels.roofdistributor")}
                                <svg
                                  className="w-2.5 h-2.5 ms-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                  />
                                </svg>
                              </button>

                              {/* Secondary Dropdown Menu */}
                              {isSecondaryDropdownOpen && (
                                <div className="absolute left-full top-0 mt-0 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        {t("labels.fiberglassroof")}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </li>
                            <li>
                              <button
                                onClick={toggleSecondaryDropdown2}
                                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black"
                                type="button"
                              >
                                {t("labels.caraccessorydistributor")}
                                <svg
                                  className="w-2.5 h-2.5 ms-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                  />
                                </svg>
                              </button>

                              {/* Secondary Dropdown Menu */}
                              {isSecondaryDropdownOpen2 && (
                                <div className="absolute left-full top-0 mt-0 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        {t("labels.bangkokandmetropolitanarea")}
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        {t("labels.centralregion")}
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        {t("labels.northernregion")}
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        {t("labels.northeasternregion")}
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        {t("labels.easternregion")}
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        {t("labels.southernregion")}
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        {t("labels.westernregion")}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <span
                      aria-hidden="true"
                      className="h-6 w-px bg-gray-200 m-2"
                    />

                    <div className="relative">
                      <Listbox value={locale} onChange={handleLanguageChange}>
                        <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                          <span className="flex items-center">
                            <span className="text-lg">
                              {languages.find((l) => l.id === locale)?.icon}
                            </span>
                            <span className="ml-3 block truncate">
                              {languages.find((l) => l.id === locale)?.name}
                            </span>
                          </span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                          </span>
                        </Listbox.Button>
                        <Listbox.Options className="absolute mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {languages.map((language) => (
                            <Listbox.Option
                              key={language.id}
                              value={language.id}
                              className="cursor-default select-none relative py-2 pl-3 pr-9 text-gray-900"
                            >
                              <div className="flex items-center">
                                <span className="text-lg">{language.icon}</span>
                                <span className="ml-3 block truncate">
                                  {language.name}
                                </span>
                              </div>
                              {locale === language.id && (
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                                  <CheckIcon className="h-5 w-5" />
                                </span>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </div>
                  </div>
                </motion.div>
              </div>
            </nav>
          )}
        </motion.div>

        <div
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex h-16 items-center lg:justify-center"
            >
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 lg:ml-0 block lg:hidden">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="/img/logo/Carryboy-Chevrons.png"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch ">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 top-1/2 bg-white shadow"
                        />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              className="grid grid-cols-1 gap-x-8 gap-y-10 py-16"
                            >
                              {/* <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-base sm:text-sm"
                                  >
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <img
                                        alt={item.imageAlt}
                                        src={item.imageSrc}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <a
                                      href={item.href}
                                      className="mt-6 block font-medium text-gray-900"
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="absolute inset-0 z-10"
                                      />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div> */}
                              <div className="row-start-1 grid grid-cols-8 gap-x-4 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.name}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a
                                            href={item.href}
                                            className="hover:text-gray-800"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {/* {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))} */}
                </div>
              </PopoverGroup>
            </motion.div>
          </div>
        </div>
      </header>
    </div>
  );
}
