"use client";
import { motion } from "framer-motion";

interface BannerProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Banner = ({ title, description, imageUrl }: BannerProps) => {
  return (
    <div className="min-h-full bg-white text-black">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto py-16 px-4 text-center"
      >
        <h3 className="text-3xl font-bold mb-6">
          {title}
          <sup className="text-sm">+</sup>
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      </motion.div>

      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full relative"
      >
        <div className="absolute top-0 left-0 right-0 bg-gray-900 py-6 z-10">
          <h2 className="text-white text-center text-4xl font-bold">
            {title}
            <sup className="text-sm">+</sup>
          </h2>
        </div>
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src={imageUrl}
          alt="D-MAX"
          className="w-full h-[600px] object-cover"
        />
      </motion.div>
    </div>
  );
};

const Index = () => {
  const bannerData = {
    title: "3.5 TONNE TOWING",
    description:
      "The renowned 3.0L Isuzu turbo-diesel engine is built for towing with an impressive 450Nm of torque. Coupled with either the 6-speed manual or intuitive 6-speed automatic, the D-MAX takes the sweat out of shifting heavy loads.",
    imageUrl:
      "https://media.adtorqueedge.com/new-cars/isuzu-au/d-max/towing1.webp",
  };

  return <Banner {...bannerData} />;
};

export default Index;
