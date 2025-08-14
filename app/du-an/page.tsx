import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Eye, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Dự Án & Portfolio - Công ty TNHH Tư vấn Thiết kế Xây dựng Nhất Tiến",
  description:
    "Khám phá các dự án thiết kế và thi công đã hoàn thành: biệt thự, nhà phố, nhà xưởng, showroom, cafe, karaoke tại TP.HCM và các tỉnh lân cận.",
  keywords: "dự án xây dựng, portfolio thiết kế, biệt thự đẹp, nhà phố hiện đại, nhà xưởng, showroom",
}

const projectCategories = [
  {
    title: "Thiết Kế Biệt Thự",
    description: "Các mẫu biệt thự đẹp, hiện đại và sang trọng",
    count: "25+ dự án",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/biet-thu",
    color: "bg-blue-600",
  },
  {
    title: "Thiết Kế Nhà Phố",
    description: "Nhà phố hiện đại, tối ưu không gian sống",
    count: "40+ dự án",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/nha-pho",
    color: "bg-green-600",
  },
  {
    title: "Thiết Kế Nhà Xưởng",
    description: "Nhà xưởng công nghiệp, kho bãi chuyên nghiệp",
    count: "15+ dự án",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/nha-xuong",
    color: "bg-orange-600",
  },
  {
    title: "Thiết Kế Showroom",
    description: "Showroom bán hàng đẹp, thu hút khách hàng",
    count: "12+ dự án",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/showroom",
    color: "bg-purple-600",
  },
  {
    title: "Thiết Kế Cafe & Bar",
    description: "Không gian cafe, bar độc đáo và ấn tượng",
    count: "18+ dự án",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/cafe-bar",
    color: "bg-red-600",
  },
  {
    title: "Thiết Kế Karaoke",
    description: "Phòng karaoke VIP, âm thanh và ánh sáng chuyên nghiệp",
    count: "8+ dự án",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/karaoke",
    color: "bg-indigo-600",
  },
]

const featuredProjects = [
  {
    title: "Biệt Thự Trảng Bom, Đồng Nai",
    description: "Biệt thự hiện đại một tầng + áp mái, phong cách tân cổ điển",
    location: "Trảng Bom, Đồng Nai",
    date: "2023",
    category: "Biệt Thự",
    image: "/placeholder.svg?height=250&width=400",
    href: "/du-an/biet-thu-trang-bom",
  },
  {
    title: "Nhà Phố TP. Thủ Đức",
    description: "Mẫu nhà 6x18m, hai mặt tiền hiện đại, 1 trệt 1 lầu",
    location: "TP. Thủ Đức, TP.HCM",
    date: "2023",
    category: "Nhà Phố",
    image: "/placeholder.svg?height=250&width=400",
    href: "/du-an/nha-pho-thu-duc",
  },
  {
    title: "Nhà Cấp 4 Hiện Đại",
    description: "Nhà cấp 4 10x19.5m, mái BTCT xiên trong khuôn viên 865m²",
    location: "P. Tân Phú, TP. Thủ Đức",
    date: "2023",
    category: "Nhà Cấp 4",
    image: "/placeholder.svg?height=250&width=400",
    href: "/du-an/nha-cap-4-hien-dai",
  },
  {
    title: "Quán Cafe Container",
    description: "Quán cà phê từ 6 container tái chế, không gian độc đáo",
    location: "TP.HCM",
    date: "2022",
    category: "Cafe",
    image: "/placeholder.svg?height=250&width=400",
    href: "/du-an/cafe-container",
  },
]

export default function DuAnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dự Án & Portfolio</h1>
            <p className="text-xl mb-8 text-slate-300">
              Khám phá những công trình tiêu biểu đã được thiết kế và thi công bởi Nhất Tiến
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="px-4 py-2">
                100+ Dự án hoàn thành
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                15+ Năm kinh nghiệm
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Bảo hành 1 năm
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Danh Mục Dự Án</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chúng tôi chuyên thiết kế và thi công đa dạng các loại công trình từ dân dụng đến công nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute top-4 left-4 ${category.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {category.count}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full group">
                    <Link href={category.href}>
                      Xem dự án
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dự Án Nổi Bật</h2>
            <p className="text-lg text-gray-600">Những công trình tiêu biểu được khách hàng đánh giá cao</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{project.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
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
              <Link href="/du-an/tat-ca">Xem tất cả dự án</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Dự án hoàn thành</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Năm kinh nghiệm</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Khách hàng hài lòng</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Hỗ trợ khách hàng</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bạn Có Dự Án Cần Thiết Kế?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/lien-he">Liên hệ tư vấn</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="tel:0908592690">Hotline: 0908.592.690</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
