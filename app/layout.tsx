import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG NHẤT TIẾN",
  description:
    "Công ty TNHH Tư vấn Thiết kế Xây dựng Nhất Tiến - Thực hiện ước mơ của bạn. Chuyên thiết kế và thi công các công trình dân dụng, biệt thự, nhà phố, cao ốc văn phòng tại TP.HCM và các tỉnh lân cận.",
  keywords:
    "thiết kế xây dựng, công ty xây dựng nhất tiến, thi công nhà ở, thiết kế biệt thự, xây dựng dân dụng, xây dựng công nghiệp, thủ đức, hcm",
  authors: [{ name: "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG NHẤT TIẾN" }],
  creator: "Nhất Tiến Construction",
  publisher: "Nhất Tiến Construction",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "http://thietkexaydungnhattien.com",
    siteName: "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG NHẤT TIẾN",
    title: "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG NHẤT TIẾN",
    description:
      "Công ty TNHH Tư vấn Thiết kế Xây dựng Nhất Tiến - Thực hiện ước mơ của bạn. Chuyên thiết kế và thi công các công trình dân dụng.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG NHẤT TIẾN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG NHẤT TIẾN",
    description:
      "Công ty TNHH Tư vấn Thiết kế Xây dựng Nhất Tiến - Thực hiện ước mơ của bạn. Chuyên thiết kế và thi công các công trình dân dụng.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "http://thietkexaydungnhattien.com",
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Construction & Architecture",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG NHẤT TIẾN",
              alternateName: "NhatTien building Design Consultants Company Limited",
              url: "http://thietkexaydungnhattien.com",
              logo: "http://thietkexaydungnhattien.com/logo.png",
              description:
                "Công ty TNHH Tư vấn Thiết kế Xây dựng Nhất Tiến - Thực hiện ước mơ của bạn. Chuyên thiết kế và thi công các công trình dân dụng, biệt thự, nhà phố.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "39/5C ĐƯỜNG 22, KP7, P.LINH ĐÔNG",
                addressLocality: "TP.THỦ ĐỨC",
                addressRegion: "TP.HCM",
                addressCountry: "VN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+84-908-592-690",
                  contactType: "customer service",
                  availableLanguage: "Vietnamese",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+84-866-579-463",
                  contactType: "sales",
                  availableLanguage: "Vietnamese",
                },
              ],
              email: "tkxdnhattien@gmail.com",
              founder: {
                "@type": "Person",
                name: "ĐẶNG VĂN TIẾN",
                jobTitle: "Giám Đốc",
              },
              foundingDate: "2013-09-09",
              taxID: "0312451054",
              serviceArea: {
                "@type": "Place",
                name: "TP.HCM và các tỉnh lân cận",
              },
              areaServed: ["Ho Chi Minh City", "Dong Nai", "Binh Duong", "Long An", "Tay Ninh"],
              priceRange: "$$",
              openingHours: ["Mo-Sa 08:00-17:30", "Su 08:00-12:00"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Dịch vụ xây dựng",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Thiết kế kiến trúc",
                      description: "Thiết kế biệt thự, nhà phố, nhà xưởng chuyên nghiệp",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Thi công xây dựng",
                      description: "Thi công xây dựng chìa khóa trao tay với chất lượng cao",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Giám sát công trình",
                      description: "Giám sát chất lượng thi công đảm bảo tiến độ",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Thiết kế nhà online",
                      description: "Dịch vụ thiết kế nhà online nhanh chóng, tiện lợi",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Khách hàng hài lòng",
                  },
                  reviewBody: "Dịch vụ thiết kế và thi công chuyên nghiệp, chất lượng cao, đúng tiến độ.",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Trang chủ",
                  item: "http://thietkexaydungnhattien.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Dịch vụ",
                  item: "http://thietkexaydungnhattien.com/dich-vu",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Dự án",
                  item: "http://thietkexaydungnhattien.com/du-an",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
