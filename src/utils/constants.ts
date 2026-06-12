import { Archivo } from "next/font/google";

const isProduction = process.env.NODE_ENV === "production";
export const basePath = isProduction ? "/projects/ssg_i18n_next" : "";

export const archivo = Archivo({
  subsets: ["latin"],
});

export const timezone = "America/Sao_Paulo";
export const i18nConfig = {
  locales: ["en-US", "th-TH"],
  defaultLocale: "th-TH",
};
