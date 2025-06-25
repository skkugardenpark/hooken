import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "후켄(HOOKEN) - 통통한 맛, 전통의 한입",
  description: "1997년부터 이어온 전통 치킨 & 호프 전문점 후켄. 통통한 맛과 정겨운 분위기의 동네 치킨 맛집입니다.",
  keywords: "후켄, HOOKEN, 치킨, 호프, 치맥, 후라이드, 양념치킨, 전통치킨, 동네맛집",
  openGraph: {
    title: "후켄(HOOKEN) - 통통한 맛, 전통의 한입",
    description: "1997년부터 이어온 전통 치킨 & 호프 전문점",
    type: "website",
    locale: "ko_KR",
  },
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
