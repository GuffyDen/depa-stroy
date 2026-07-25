import type { Metadata } from "next";
import "./globals.css";
import { companyConfig } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL("https://depa-stroy.vercel.app"),
  title: `${companyConfig.brandName} — комплексный ремонт квартир во Владивостоке`,
  description:
    "Комплексный ремонт квартир под ключ: проектирование, инженерные работы, комплектация, управление и технический контроль.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: `${companyConfig.brandName} — ремонт, в котором всё продумано`,
    description:
      "Берём на себя весь процесс ремонта квартиры — от технического проекта до сдачи готового интерьера.",
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/og.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyConfig.brandName} — комплексный ремонт квартир`,
    description: "Спокойный и управляемый ремонт под ключ во Владивостоке.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
