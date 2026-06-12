/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Share, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import HeroSectionN from "@/sessions/header/HeroSessionN";
import imgList from "./imgList.json";

interface ImageModalProps {
  images: Array<{ src: string; alt: string }>;
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const ImageModal = ({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: ImageModalProps) => {
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([currentIndex, 0]);

  useEffect(() => {
    setPage([currentIndex, 0]);
  }, [currentIndex]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 "
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="relative w-full max-w-7xl h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X size={32} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={images[page].src}
              alt={images[page].alt}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  onNext();
                } else if (swipe > swipeConfidenceThreshold) {
                  onPrevious();
                }
              }}
              className="max-w-full max-h-full object-contain"
            />
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 transition-all"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 transition-all"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};
interface MainPageProps {
  params: { lang: string }; // รับค่า lang จาก dynamic route
}

const IMAGES_PER_LOAD = 20;

const Index = ({ params: { lang } }: MainPageProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_LOAD);

  const images = imgList;
  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + IMAGES_PER_LOAD, images.length));
  };

  const handlePrevious = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1
    );
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1
    );
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (selectedImageIndex === null) return;

    if (event.key === "ArrowLeft") {
      handlePrevious();
    } else if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "Escape") {
      setSelectedImageIndex(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImageIndex]);

  return (
    <>
      {/* <HeroSectionN lang={lang} /> */}
      <div className="bg-gray-50 mt-28">
        <motion.div
          className="text-center py-12 bg-gradient-to-r from-red-500 to-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-white text-xl mb-2">Car Gallery</h4>
          <h2 className="text-white text-4xl font-bold">
            Beautiful Cars Collection
          </h2>
        </motion.div>

        <motion.div
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {visibleImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <Share
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={24}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-8">
              <motion.button
                onClick={loadMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition-colors"
              >
                โหลดเพิ่มเติม ({images.length - visibleCount} รูปที่เหลือ)
              </motion.button>
            </div>
          )}
        </motion.div>

        <AnimatePresence>
          {selectedImageIndex !== null && (
            <ImageModal
              images={images}
              currentIndex={selectedImageIndex}
              onClose={() => setSelectedImageIndex(null)}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Index;
