"use client";

import { motion } from "framer-motion";

interface SocialLink {
  href: string;
  imgSrc: string;
  alt: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/CarryboyClub/",
    imgSrc: "/img/footerI/facebook.png",
    alt: "Facebook",
  },
  {
    href: "https://www.youtube.com/user/CARRYBOYONLINE",
    imgSrc: "/img/footerI/youtube.png",
    alt: "Youtube",
  },
  {
    href: "https://www.instagram.com/carryboy_official_thailand/",
    imgSrc: "/img/footerI/instagram.png",
    alt: "Instagram",
  },
];

const Index = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-black">
      <div className="container mx-auto px-4 py-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-0"
          >
            <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
            <div className="space-y-0">
              <h3 className="text-xl text-gray-800">
                Grand Carryboy Marketing Company Limited
              </h3>
              <h4 className="text-gray-600 leading-relaxed">
                26/12 Village No. 7, Bangna-Trad Road, Bang Kaeo Subdistrict,
                Bang Phli District, Samut Prakan Province 10540
              </h4>
            </div>

            <div className="space-y-0">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Tel:</span>
                <a
                  href="tel:02-752-8585"
                  className="text-gray-900 hover:text-blue-600 transition-colors"
                >
                  02-752-8585
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Email:</span>
                <a
                  href="mailto:grand@carryboy.com"
                  className="text-gray-900 hover:text-blue-600 transition-colors"
                >
                  grand@carryboy.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Line id:</span>
                <a
                  href="https://line.me/R/ti/p/%40127eomim"
                  target="_blank"
                  className="text-gray-900 hover:text-blue-600 transition-colors"
                >
                  @cargobox
                </a>
              </div>
            </div>

            <motion.div
              className="flex space-x-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src={link.imgSrc}
                    alt={link.alt}
                    width={25}
                    height={25}
                    className=""
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <a
              href="https://line.me/R/ti/p/%40127eomim"
              target="_blank"
              className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors mb-6"
            >
              Line QR code
            </a>
            <img
              src="/img/footerI/M_127eomim_GW.png"
              alt="Line QR Code"
              className="w-48 h-48 rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-200 mt-4 pt-2"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-0 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full">
                <img src="/img/logo/Carryboy-Chevrons.png" alt="Logo" />
              </div>
              <a
                href="/#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                CARRYBOY MOTORHOME
              </a>
            </div>
            <div className="text-gray-500 text-sm">
              © T.K.D FIBER CO.,LTD 2023. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Index;
