import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Eye, ArrowLeft, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Thiết Kế Biệt Thự - Dự Án Nhất Tiến",
  description:
    "Bộ sưu tập các mẫu biệt thự đẹp đã thiết kế và thi công: biệt thự hiện đại, tân cổ điển, biệt thự vườn tại TP.HCM, Đồng Nai, Bình Dương.",
  keywords: "thiết kế biệt thự, mẫu biệt thự đẹp, biệt thự hiện đại, biệt thự vườn, thi công biệt thự",
}

const villaProjects = [
  {
    title: "Biệt Thự Trảng Bom, Đồng Nai",
    description: "Biệt thự hiện đại một tầng + áp mái, phong cách tân cổ điển với diện tích 200m²",
    location: "Trảng Bom, Đồng Nai",
    date: "2023",
    area: "200m²",
    style: "Tân cổ điển",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/biet-thu-trang-bom",
  },
  {
    title: "Biệt Thự Doanh Nghiệp Thanh Tùng",
    description: "Biệt thự kết hợp văn phòng làm việc, thiết kế sang trọng và chuyên nghiệp",
    location: "TP.HCM",
    date: "2023",
    area: "350m²",
    style: "Hiện đại",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/biet-thu-thanh-tung",
  },
  {
    title: "Biệt Thự Anh Sản, Xuân Lộc",
    description: "Biệt thự 10x22m trong khuôn viên rộng, thiết kế tối ưu không gian sống",
    location: "Xuân Lộc, Đồng Nai",
    date: "2022",
    area: "220m²",
    style: "Hiện đại",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/biet-thu-xuan-loc",
  },
  {
    title: "Biệt Thự Anh Điệu, Củ Chi",
    description: "Biệt thự 7.5x13.5m, thiết kế thông minh cho gia đình trẻ năng động",
    location: "Củ Chi, TP.HCM",
    date: "2022",
    area: "180m²",
    style: "Hiện đại",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/biet-thu-cu-chi",
  },
  {
    title: "Biệt Thự Hiện Đại 3 Tầng",
    description: "Biệt thự diện tích 56m² nhưng tối ưu không gian với 3 tầng hiện đại",
    location: "TP.HCM",
    date: "2022",
    area: "56m²",
    style: "Hiện đại",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/biet-thu-3-tang",
  },
  {
    title: "Biệt Thự Vườn 2 Tầng",
    description: "Biệt thự vườn 2000m² kết hợp kinh doanh nhà hàng, quán bar, cafe",
    location: "Bình Dương",
    date: "2021",
    area: "2000m²",
    style: "Tân cổ điển",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/biet-thu-vuon-2000m2",
  },
  {
    title: "Biệt Thự Vườn 1 Trệt 1 Lầu",
    description: "Biệt thự vườn không gian đẹp, hòa hợp với thiên nhiên",
    location: "Đồng Nai",
    date: "2021",
    area: "300m²",
    style: "Nhiệt đới",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/biet-thu-vuon-1-tang",
  },
  {
    title: "Biệt Thự Quận 9",
    description: "Biệt thự trong khu dân cư cao cấp, thiết kế hiện đại và tiện nghi",
    location: "Quận 9, TP.HCM",
    date: "2021",
    area: "250m²",
    style: "Hiện đại",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/biet-thu-quan-9",
  },
  {
    title: "Biệt Thự Lê Lam, Tân Phú",
    description: "Biệt thự số 124 Lê Lam, thiết kế tối ưu cho lô đất hẹp",
    location: "Q. Tân Phú, TP.HCM",
    date: "2020",
    area: "180m²",
    style: "Hiện đại",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/biet-thu-le-lam",
  },
]

export default function BietThuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              <Home className="h-4 w-4" />
            </Link>
            <span>/</span>
            <Link href="/du-an" className="hover:text-blue-600">
              Dự án
            </Link>
            <span>/</span>
            <span className="text-gray-900">Thiết kế biệt thự</span>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thiết Kế Biệt Thự</h1>
            <p className="text-xl mb-8 text-blue-100">
              Bộ sưu tập các mẫu biệt thự đẹp, sang trọng và hiện đại được thiết kế bởi Nhất Tiến
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="px-4 py-2">
                25+ Biệt thự hoàn thành
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Từ 150.000đ/m²
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Bảo hành 1 năm
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <Button variant="outline" asChild>
            <Link href="/du-an">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại dự án
            </Link>
          </Button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {villaProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{project.style}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </div>
                    <div>Diện tích: {project.area}</div>
                    <div>Phong cách: {project.style}</div>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Muốn Thiết Kế Biệt Thự Riêng?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Liên hệ ngay để được tư vấn thiết kế biệt thự theo phong cách và nhu cầu của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/lien-he">Tư vấn thiết kế</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="tel:0908592690">Hotline: 0908592690</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
