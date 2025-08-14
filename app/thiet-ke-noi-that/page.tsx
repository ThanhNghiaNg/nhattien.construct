import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Thiết Kế Nội Thất - Công ty Nhất Tiến",
  description:
    "Dịch vụ thiết kế nội thất chuyên nghiệp: phòng khách, phòng ngủ, phòng tắm, nhà bếp. Mẫu thiết kế đẹp, hiện đại, sang trọng.",
  keywords: "thiết kế nội thất, nội thất phòng khách, nội thất phòng ngủ, nội thất phòng tắm, nội thất nhà bếp",
}

const interiorCategories = [
  {
    title: "Nội thất phòng khách",
    description: "Thiết kế phòng khách đẹp với nội thất hiện đại, sang trọng",
    href: "/thiet-ke-noi-that/phong-khach",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Nội thất phòng ngủ",
    description: "Mẫu phòng ngủ đẹp cho bố mẹ và trẻ em, thiết kế sang trọng",
    href: "/thiet-ke-noi-that/phong-ngu",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Nội thất phòng tắm",
    description: "Thiết kế phòng tắm hiện đại với vật liệu cao cấp",
    href: "/thiet-ke-noi-that/phong-tam",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Nội thất nhà bếp",
    description: "Mẫu bếp đẹp, phòng ăn kết hợp nội thất phòng bếp",
    href: "/thiet-ke-noi-that/nha-bep",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const featuredProjects = [
  {
    title: "Mẫu bếp đẹp",
    description: "Bộ thiết kế mẫu bếp đẹp do công ty Nhất Tiến thiết kế",
    image: "/placeholder.svg?height=250&width=350",
  },
  {
    title: "10 thiết kế phòng khách đẹp nhà đại gia",
    description: "Thiết kế phòng khách với nội thất hiện đại, chất liệu kim loại, inox, kính",
    image: "/placeholder.svg?height=250&width=350",
  },
  {
    title: "Mẫu phòng ngủ đẹp hiện đại",
    description: "8 thiết kế nội thất phòng ngủ hiện đại được tạp chí bình chọn đẹp nhất 2014",
    image: "/placeholder.svg?height=250&width=350",
  },
]

export default function InteriorDesignPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thiết Kế Nội Thất Chuyên Nghiệp</h1>
            <p className="text-xl mb-8 text-blue-100">
              Tạo không gian sống đẹp và tiện nghi với dịch vụ thiết kế nội thất của Nhất Tiến
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lien-he"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Tư vấn miễn phí
              </Link>
              <Link
                href="/du-an"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Xem dự án
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Danh Mục Thiết Kế Nội Thất</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cung cấp dịch vụ thiết kế nội thất cho mọi không gian trong ngôi nhà của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interiorCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dự Án Nội Thất Nổi Bật</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá những mẫu thiết kế nội thất đẹp và ấn tượng nhất của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Dịch Vụ Thiết Kế Nội Thất</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Thiết Kế 3D</h3>
                <p className="text-gray-600 mb-4">
                  Tạo mô hình 3D chi tiết giúp bạn hình dung rõ ràng không gian nội thất trước khi thi công.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Thiết kế 3D chân thực</li>
                  <li>• Render chất lượng cao</li>
                  <li>• Tư vấn màu sắc và vật liệu</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Thi Công Nội Thất</h3>
                <p className="text-gray-600 mb-4">
                  Đội ngũ thợ lành nghề thực hiện thi công nội thất theo đúng thiết kế và tiến độ.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Thi công chuyên nghiệp</li>
                  <li>• Vật liệu chất lượng cao</li>
                  <li>• Bảo hành 1 năm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bắt Đầu Dự Án Nội Thất Của Bạn</h2>
          <p className="text-xl mb-8 text-blue-100">
            Liên hệ với chúng tôi để được tư vấn miễn phí về thiết kế nội thất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Liên hệ ngay
            </Link>
            <a
              href="tel:0908592690"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Gọi: 0908.592.690
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
