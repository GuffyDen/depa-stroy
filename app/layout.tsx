import type { Metadata } from "next";
import "./globals.css";
import { companyConfig } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL("https://depa-stroy.vercel.app"),
  title: `${companyConfig.brandName} — пространства, в которых хочется жить`,
  description:
    "Современные частные интерьеры во Владивостоке: комплексный ремонт квартир под ключ, продуманный до последней детали.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: `${companyConfig.brandName} — пространства, в которых хочется жить`,
    description:
      "Создаём современные частные интерьеры, продуманные до последней детали.",
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/og.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyConfig.brandName} — пространства, в которых хочется жить`,
    description: "Современные частные интерьеры во Владивостоке.",
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
