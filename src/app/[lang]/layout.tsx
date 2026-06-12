import { Kanit } from "next/font/google";
import { getTranslationMessages } from "@/utils/functions";
export { generateStaticParams, generateMetadata } from "@/utils/functions";

import { Header } from "@/components/server";
import { Footer } from "@/components/server";

import { timezone } from "@/utils/constants";
import { NextIntlClientProvider } from "next-intl";
import { AppProviders } from "@/context/AppProviders";

// กำหนดประเภทของ Props ที่ใช้ใน Layout
interface InternationalizedLayoutProps {
  children: React.ReactNode; // รองรับการส่ง React children
  params: { lang: string }; // กำหนด lang เป็น string
}

const inter = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default async function InternationalizedLayout({
  children,
  params: { lang },
}: InternationalizedLayoutProps) {
  const messages = await getTranslationMessages(lang); // ดึงข้อความแปลภาษาตาม lang

  return (
    <html lang={lang}>
      <body>
        <NextIntlClientProvider
          locale={lang}
          messages={messages}
          timeZone={timezone}
          now={new Date()}
        >
          <AppProviders>
            <main className={`${inter.className} min-h-screen flex flex-col`}>
              <Header lang={lang} />
              {children}
              <Footer />
            </main>
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
