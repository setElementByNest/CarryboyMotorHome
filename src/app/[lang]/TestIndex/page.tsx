import PageIndex from "@/page/PageIndex";

interface MainPageProps {
  params: { lang: string }; // รับค่า lang จาก dynamic route
}

export async function generateStaticParams() {
  const supportedLangs = ["en-US", "th-TH"]; // ระบุภาษาที่รองรับ
  return supportedLangs.map((lang) => ({ lang }));
}

export default function MainPage({ params: { lang } }: MainPageProps) {
  return (
    <PageIndex params={{ lang }} />
  );
}
