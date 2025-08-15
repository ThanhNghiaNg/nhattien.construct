import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Star, Users, Award, Shield, ArrowRight, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "Công ty TNHH Tư vấn Thiết kế Xây dựng Nhất Tiến - Thực hiện ước mơ của bạn",
  description:
    "Công ty Nhất Tiến chuyên thiết kế và thi công xây dựng: biệt thự, nhà phố, nhà xưởng, showroom. Cam kết bảo hành 1 năm, hỗ trợ 24/7. Hotline: 0908592690",
  keywords:
    "thiết kế xây dựng, thi công nhà phố, thiết kế biệt thự, xây dựng nhà xưởng, công ty xây dựng TP.HCM, Nhất Tiến",
  openGraph: {
    title: "Công ty TNHH Tư vấn Thiết kế Xây dựng Nhất Tiến",
    description: "Thực hiện ước mơ của bạn - Thiết kế và thi công xây dựng chuyên nghiệp",
    url: "https://thietkexaydungnhattien.com",
    siteName: "Nhất Tiến Construction",
    locale: "vi_VN",
    type: "website",
  },
}

const featuredProjects = [
  {
    title: "Biệt Thự Trảng Bom, Đồng Nai",
    description: "Biệt thự hiện đại một tầng + áp mái, phong cách tân cổ điển",
    location: "Trảng Bom, Đồng Nai",
    category: "Biệt Thú",
    image: "/placeholder.svg?height=250&width=400",
    href: "/du-an/biet-thu-trang-bom",
  },
  {
    title: "Nhà Phố TP. Thủ Đức",
    description: "Mẫu nhà 6x18m, hai mặt tiền hiện đại, 1 trệt 1 lầu",
    location: "TP. Thủ Đức, TP.HCM",
    category: "Nhà Phố",
    image: "/placeholder.svg?height=250&width=400",
    href: "/du-an/nha-pho-thu-duc",
  },
  {
    title: "Quán Cafe Container",
    description: "Quán cà phê từ 6 container tái chế, không gian độc đáo",
    location: "TP.HCM",
    category: "Cafe",
    image: "/placeholder.svg?height=250&width=400",
    href: "/du-an/cafe-container",
  },
]

const companyStats = [
  { icon: <Users className="h-8 w-8" />, number: "500+", label: "Khách hàng hài lòng" },
  { icon: <Award className="h-8 w-8" />, number: "100+", label: "Dự án hoàn thành" },
  { icon: <Clock className="h-8 w-8" />, number: "15+", label: "Năm kinh nghiệm" },
  { icon: <Shield className="h-8 w-8" />, number: "1 năm", label: "Bảo hành công trình" },
]

const whyChooseUs = [
  {
    icon: <Star className="h-6 w-6" />,
    title: "Chất lượng đảm bảo",
    description: "Sử dụng vật liệu chất lượng cao, quy trình thi công chuẩn",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Đội ngũ chuyên nghiệp",
    description: "KTS và KS nhiều năm kinh nghiệm, tay nghề cao",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Bảo hành 1 năm",
    description: "Cam kết bảo hành toàn bộ công trình trong 1 năm",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Hỗ trợ 24/7",
    description: "Sẵn sàng tư vấn và hỗ trợ khách hàng mọi lúc",
  },
]

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dự Án Nổi Bật</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những công trình tiêu biểu được khách hàng đánh giá cao
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{project.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full group bg-transparent">
                    <Link href={project.href}>
                      <Eye className="mr-2 h-4 w-4" />
                      Xem chi tiết
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/du-an">
                Xem tất cả dự án
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Thành Tựu Của Chúng Tôi</h2>
            <p className="text-xl text-blue-100">Những con số ấn tượng sau 15 năm hoạt động</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại Sao Chọn Nhất Tiến?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến dịch vụ tốt nhất với chất lượng đảm bảo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sẵn Sàng Bắt Đầu Dự Án Của Bạn?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold">Hotline</div>
                  <div className="text-sm text-gray-600">0908592690</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-gray-600">tkxdnhattien@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold">Địa chỉ</div>
                  <div className="text-sm text-gray-600">39/5C Đường 22, P.Linh Đông</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/lien-he">Liên hệ tư vấn</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:0908592690">
                  <Phone className="mr-2 h-5 w-5" />
                  Gọi ngay
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
