import type { Metadata } from "next";
import "./globals.css";
import { companyConfig } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL("https://depa-stroy.vercel.app"),
  title: `${companyConfig.brandName} — ремонт квартир под ключ во Владивостоке`,
  description:
    "Ремонт квартир под ключ, дизайн, комплектация и приёмка квартиры от застройщика во Владивостоке.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: `${companyConfig.brandName} — квартира, готовая к жизни`,
    description:
      "Ремонт квартир под ключ и приёмка от застройщика во Владивостоке.",
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/images/v2/og.jpg", width: 1400, height: 735 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyConfig.brandName} — квартира, готовая к жизни`,
    description:
      "Ремонт квартир под ключ и приёмка от застройщика во Владивостоке.",
    images: ["/images/v2/og.jpg"],
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
