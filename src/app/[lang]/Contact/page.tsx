"use client";
import { useState } from "react";
import HeroSectionN from "@/sessions/header/HeroSessionN";

interface MainPageProps {
  params: { lang: string }; // รับค่า lang จาก dynamic route
}

const Contact = ({ params: { lang } }: MainPageProps) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    isError: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setNotification({
        show: true,
        message: "กรุณากรอกข้อมูลให้ครบถ้วน",
        isError: true,
      });
      setTimeout(
        () => setNotification({ show: false, message: "", isError: false }),
        3000
      );
      return;
    }

    setNotification({
      show: true,
      message: "ส่งข้อมูลสำเร็จ",
      isError: false,
    });
    setTimeout(
      () => setNotification({ show: false, message: "", isError: false }),
      3000
    );

    setForm({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <>
      {" "}
      {/* <HeroSectionN lang={lang} /> */}
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white p-4 md:p-8 mt-28">
        {notification.show && (
          <div
            className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-all transform animate-fade-in ${
              notification.isError ? "bg-red-500" : "bg-green-500"
            } text-white`}
          >
            {notification.message}
          </div>
        )}

        <div className="animate-fade-in max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h4 className="text-xl text-gray-600">MotorHome</h4>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                Contact us
              </h2>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Grand Carryboy Marketing Company Limited
              </h3>
              <h4 className="text-gray-600 mb-4">
                26/12 Village No. 7, Bangna-Trad Road, Bang Kaeo Subdistrict,
                Bang Phli District, Samut Prakan Province 10540
              </h4>
              <div className="space-y-2 text-gray-700">
                <h3>Tel : 02-752-8585</h3>
                <h3>Email : grand@carryboy.com</h3>
                <h3>Line id : @cargobox</h3>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate-slide-in">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="animate-slide-in">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="animate-slide-in">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div className="animate-slide-in">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent h-32"
                  placeholder="Enter your message"
                  style={{ resize: "none" }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors duration-200 hover:scale-105 active:scale-95 transform"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d135.54434726946056!2d100.68045759595087!3d13.651356971155316!2m3!1f33.830614034532516!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x311d5e496d10318f%3A0xc1295769214ed021!2sGrand%20Carryboy%20Marketing%20Company%20Limited!5e1!3m2!1sen!2sth!4v1694594572625!5m2!1sen!2sth"
                className="w-full h-[300px] rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
