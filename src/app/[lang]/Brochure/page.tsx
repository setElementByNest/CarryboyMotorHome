"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Share,
  FileText,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import HeroSectionN from "@/sessions/header/HeroSessionN";

interface Document {
  title: string;
  url: string;
  thumbnailUrl: string;
  description: string;
}

interface MainPageProps {
  params: { lang: string }; // รับค่า lang จาก dynamic route
}

const DocumentCard = ({
  title,
  description,
  thumbnailUrl,
  onClick,
}: {
  title: string;
  description: string;
  thumbnailUrl: string;
  onClick: () => void;
}) => {
  return (
    <motion.div
      className="relative group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <AspectRatio ratio={16 / 21} className="bg-muted">
        <Image
          src={thumbnailUrl}
          alt={`Preview of ${title}`}
          className="w-full h-full object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </AspectRatio>
      <div className="p-6">
        {/* <div className="flex items-center justify-center mb-4 text-purple-500">
          <FileText size={28} />
        </div> */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <Share
          className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          size={24}
        />
      </motion.div>
    </motion.div>
  );
};

const PDFModal = ({
  documents,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: {
  documents: Document[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-4xl bg-white rounded-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mt-4">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              {documents[currentIndex].title}
            </h2>
            <p className="text-gray-600">
              {documents[currentIndex].description}
            </p>

            <AspectRatio
              ratio={16 / 9}
              className="bg-muted rounded-lg overflow-hidden"
            >
              <Image
                src={documents[currentIndex].thumbnailUrl}
                alt={`Preview of ${documents[currentIndex].title}`}
                className="w-full h-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              />
            </AspectRatio>

            <a
              href={documents[currentIndex].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Download size={18} />
              View PDF
            </a>
          </motion.div>

          <div className="flex justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onPrevious}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ChevronLeft size={16} />
              Previous
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onNext}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Next
              <ChevronRight size={16} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Index = ({ params: { lang } }: MainPageProps) => {
  const [selectedDocIndex, setSelectedDocIndex] = useState<number | null>(null);

  const documents = [
    {
      title: "CAMPER VAN",
      url: "/pdf/AW_Catalog CAMPERVAN_FARIZON.pdf",
      thumbnailUrl: "/pdf/img/CARRYBOY_CAMPERVAN.PNG",
      description: "Product warranty terms and conditions",
    },
    {
      title: "2026 Slide-On - Benz",
      url: "/pdf/RV Benz/AW_Catalog Slide on BENZ copy.pdf",
      thumbnailUrl: "/pdf/RV Benz/AW_Catalog Slide on BENZ copy-1.jpg",
      description: "Product warranty terms and conditions",
    },
    {
      title: "2026 Motorhome - Mitsubishi",
      url: "/pdf/RV Motorhome/New Brochure Mitsu 2026 create final-01.pdf",
      thumbnailUrl: "/pdf/RV Motorhome/New Brochure Mitsu 2026 create final-08.jpg",
      description: "Product warranty terms and conditions",
    },
    {
      title: "2026 Motorhome - Travo",
      url: "/pdf/RV Motorhome/New Brochure Travo 2026-final_compressed.pdf",
      thumbnailUrl: "/pdf/RV Motorhome/New Brochure Travo 2026-final-08.jpg",
      description: "Product warranty terms and conditions",
    },
    {
      title: "2026 Venture",
      url: "/pdf/VT/2026-Carryboy-VT.pdf",
      thumbnailUrl: "/pdf/VT/28_11_2025-VT catalog-01.jpg",
      description: "Product warranty terms and conditions",
    },
    {
      title: "Slide-In Camper",
      url: "/pdf/Slide-In-Camper.pdf",
      thumbnailUrl: "/pdf/img/Slide-In-Camper.png",
      description: "Important safety information and precautions",
    },
    {
      title: "Slide-On Camper",
      url: "/pdf/Slide-On-Camper.pdf",
      thumbnailUrl: "/pdf/img/Slide-On-Camper.png",
      description: "Product warranty terms and conditions",
    },
    {
      title: "Slide-On Office",
      url: "/pdf/Slide-On-Office.pdf",
      thumbnailUrl: "/pdf/img/Slide-On-Office.png",
      description: "Product warranty terms and conditions",
    },
    {
      title: "Toyota-Revo Champ",
      url: "/pdf/Toyota-Revo-Champ-04-2.pdf",
      thumbnailUrl: "/pdf/img/Toyota-Revo-Champ-04-2.png",
      description: "Product warranty terms and conditions",
    },
  ];

  const handlePrevious = () => {
    if (selectedDocIndex === null) return;
    setSelectedDocIndex(
      selectedDocIndex === 0 ? documents.length - 1 : selectedDocIndex - 1
    );
  };

  const handleNext = () => {
    if (selectedDocIndex === null) return;
    setSelectedDocIndex(
      selectedDocIndex === documents.length - 1 ? 0 : selectedDocIndex + 1
    );
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (selectedDocIndex === null) return;

    if (event.key === "ArrowLeft") {
      handlePrevious();
    } else if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "Escape") {
      setSelectedDocIndex(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDocIndex]);

  return (
    <>
      {/* <HeroSectionN lang={lang} /> */}

      <div className="min-h-screen bg-gray-50 mt-10">
        <motion.div
          className="text-center py-12 bg-gradient-to-r from-red-500 to-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-white text-xl mb-2">Document Library</h4>
          <h2 className="text-white text-4xl font-bold">
            Download PDF Documents
          </h2>
        </motion.div>

        <motion.div
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {documents.map((doc, index) => (
              <DocumentCard
                key={index}
                title={doc.title}
                description={""}
                thumbnailUrl={doc.thumbnailUrl}
                onClick={() => setSelectedDocIndex(index)}
              />
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedDocIndex !== null && (
            <PDFModal
              documents={documents}
              currentIndex={selectedDocIndex}
              onClose={() => setSelectedDocIndex(null)}
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
