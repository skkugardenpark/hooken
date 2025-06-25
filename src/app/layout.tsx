import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "후켄(HOOKEN) - 통통한 맛, 전통의 한입",
  description: "1997년부터 이어온 전통 치킨 & 호프 전문점 후켄. 27년간 사랑받아온 검증된 프랜차이즈 브랜드로 창업의 기회를 제공합니다.",
  keywords: "후켄, HOOKEN, 치킨, 호프, 치맥, 후라이드, 양념치킨, 전통치킨, 동네맛집, 프랜차이즈, 가맹점, 창업",
  authors: [{ name: "후켄" }],
  creator: "후켄",
  publisher: "후켄",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "후켄(HOOKEN) - 통통한 맛, 전통의 한입",
    description: "1997년부터 이어온 전통 치킨 & 호프 전문점. 27년간 사랑받아온 검증된 프랜차이즈 브랜드",
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "후켄(HOOKEN)",
    images: [
      {
        url: "/images/썸네일.png",
        width: 1200,
        height: 630,
        alt: "후켄(HOOKEN) - 통통한 맛, 전통의 한입",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "후켄(HOOKEN) - 통통한 맛, 전통의 한입",
    description: "1997년부터 이어온 전통 치킨 & 호프 전문점. 27년간 사랑받아온 검증된 프랜차이즈 브랜드",
    images: ["/images/썸네일.png"],
  },
  icons: {
    icon: "/images/hooken-logo.png",
    shortcut: "/images/hooken-logo.png",
    apple: "/images/hooken-logo.png",
  },
  metadataBase: new URL("https://hooken.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
