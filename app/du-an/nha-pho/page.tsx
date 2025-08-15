import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Eye, ArrowLeft, Home, Ruler } from "lucide-react"

export const metadata: Metadata = {
  title: "Thiết Kế Nhà Phố - Dự Án Nhất Tiến",
  description:
    "Bộ sưu tập mẫu nhà phố đẹp, hiện đại: nhà phố 1 trệt 1 lầu, 2 lầu, mặt tiền 4m, 5m, 6m tại TP.HCM và các tỉnh lân cận.",
  keywords: "thiết kế nhà phố, mẫu nhà phố đẹp, nhà phố hiện đại, nhà phố mặt tiền hẹp, thi công nhà phố",
}

const townhouseProjects = [
  {
    title: "Nhà Phố TP. Thủ Đức",
    description: "Mẫu nhà 6x18m, hai mặt tiền hiện đại, 1 trệt 1 lầu mái BTCT kết hợp mái lợp ngói",
    location: "TP. Thủ Đức, TP.HCM",
    date: "2023",
    area: "6x18m",
    floors: "1 trệt 1 lầu",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/nha-pho-thu-duc",
  },
  {
    title: "Nhà Phố Giang Điền, Đồng Nai",
    description: "Thiết kế nhà phố 2 mặt tiền hiện đại, kích thước 6x12m với sân trước, sân sau, bên hông",
    location: "Giang Điền, Đồng Nai",
    date: "2023",
    area: "6x12m",
    floors: "2 mặt tiền",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/nha-pho-giang-dien",
  },
  {
    title: "Nhà Phố Anh Vy, Thủ Đức",
    description: "Mẫu nhà phố hiện đại 1 trệt, 2 lầu, 1 sân thượng, mái bằng BTCT trên khu đất hình thù phức tạp",
    location: "Quận Thủ Đức, TP.HCM",
    date: "2023",
    area: "Đất hình thù đặc biệt",
    floors: "1 trệt 2 lầu",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/nha-pho-anh-vy",
  },
  {
    title: "Nhà Phố Anh Cát, Quận 9",
    description: "Thiết kế 1 hầm, 1 trệt, 2 lầu, sân thượng với hầm để xe và kho chứa hàng xuất khẩu",
    location: "Quận 9, TP.HCM",
    date: "2022",
    area: "Đa chức năng",
    floors: "1 hầm 1 trệt 2 lầu",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/nha-pho-quan-9",
  },
  {
    title: "Nhà Sự Đường 22, Thủ Đức",
    description: "Thiết kế 1 trệt, 1 lửng, 2 lầu, 1 mái bằng với phong cách hiện đại trẻ trung",
    location: "Đường 22, Quận Thủ Đức",
    date: "2022",
    area: "Mặt tiền đường 22",
    floors: "1 trệt 1 lửng 2 lầu",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/nha-su-duong-22",
  },
  {
    title: "Nhà Phố Bình Hưng, Bình Chánh",
    description: "Thiết kế theo quy hoạch 1 trệt, 2 lầu, sân thượng, mái BTCT cho đôi vợ chồng trẻ",
    location: "Xã Bình Hưng, Huyện Bình Chánh",
    date: "2022",
    area: "Theo quy hoạch",
    floors: "1 trệt 2 lầu",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/nha-pho-binh-hung",
  },
  {
    title: "Nhà Phố An Dương Vương, Q.6",
    description: "Nhà phố 351/25a thiết kế 1 trệt, 2 lầu, 1 sân thượng, mái BTCT cho gia đình trẻ",
    location: "An Dương Vương, Q.6, TP.HCM",
    date: "2021",
    area: "Mặt tiền An Dương Vương",
    floors: "1 trệt 2 lầu",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/nha-pho-an-duong-vuong",
  },
  {
    title: "Nhà Phố 2 Mặt Tiền 5x14m",
    description: "Thiết kế nhà phố 4 tầng hiện đại phong cách Âu - Mỹ với 2 mặt tiền",
    location: "TP.HCM",
    date: "2021",
    area: "5x14m",
    floors: "4 tầng",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/nha-pho-2-mat-tien",
  },
  {
    title: "Nhà Phố Mặt Tiền 7m",
    description: "Mẫu thiết kế biệt thự phố mặt tiền 7m 3 tầng sang trọng và hiện đại",
    location: "TP.HCM",
    date: "2020",
    area: "Mặt tiền 7m",
    floors: "3 tầng",
    image: "/placeholder.svg?height=300&width=400",
    href: "/du-an/nha-pho-mat-tien-7m",
  },
]

export default function NhaPhoPage() {
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
            <span className="text-gray-900">Thiết kế nhà phố</span>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thiết Kế Nhà Phố</h1>
            <p className="text-xl mb-8 text-green-100">
              Bộ sưu tập mẫu nhà phố đẹp, hiện đại và tối ưu không gian sống
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="px-4 py-2">
                40+ Nhà phố hoàn thành
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Từ 100.000đ/m²
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Thi công từ 5.2tr/m²
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
            {townhouseProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600">{project.floors}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                    {project.title}
                  </CardTitle>
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
                    <div className="flex items-center gap-1">
                      <Ruler className="h-3 w-3" />
                      {project.area}
                    </div>
                    <div>Tầng: {project.floors}</div>
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
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Cần Thiết Kế Nhà Phố?</h2>
          <p className="text-xl mb-8 text-green-100">
            Liên hệ ngay để được tư vấn thiết kế nhà phố tối ưu không gian và phù hợp với ngân sách
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/lien-he">Tư vấn thiết kế</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-green-600"
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
