"use client";
import { motion } from "framer-motion";

interface ContentSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  reverse?: boolean;
}

const ContentSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  reverse = false,
}: ContentSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } w-full`}
    >
      <motion.div
        className="w-full md:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="p-8 md:p-12 flex items-center h-full">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
            <a
              href={href}
              className="inline-block w-full md:w-auto px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 hover:shadow-lg text-center mt-4"
            >
              ดูรายละเอียดเพิ่มเติม
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 text-black">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          STAND OUT WITH THE
          <br />
          <span className="inline-block">X-TERRAIN</span> &{" "}
          <span className="inline-block">X-RIDER</span>
        </motion.h2>

        <div className="space-y-0">
          <ContentSection
            title="TOP OF THE RANGE D-MAX"
            description="Experience new levels of comfort and convenience in the X-TERRAIN, with premium leather accented§ and heated front seats, auto-dimming rear view mirror and heated side mirrors. Built for adventure and towing, every X-TERRAIN also comes with a factory-fitted tow bar receiver."
            imageSrc="https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/x-terrain-explore.webp"
            imageAlt="D-MAX X-TERRAIN"
            href="/#"
          />

          <ContentSection
            title="THE ULTIMATE ALL-ROUNDER"
            description="Whether you're ruling off-road or roaming the city, the Isuzu D-MAX X-RIDER is the ultimate all-rounder for your adventures. The Isuzu D-MAX X-RIDER combines a signature toughness with sleek styling that allows you to stand out from the crowd."
            imageSrc="https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/x-rider-ultimate.webp"
            imageAlt="D-MAX X-RIDER"
            href="/#G"
            reverse
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
