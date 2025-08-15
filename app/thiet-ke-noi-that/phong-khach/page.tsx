import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Nội Thất Phòng Khách - Thiết Kế Hiện Đại | Nhất Tiến",
  description:
    "Thiết kế nội thất phòng khách đẹp, hiện đại cho nhà đại gia. Sử dụng chất liệu kim loại, inox, kính với màu sắc trắng đen tương phản.",
  keywords: "nội thất phòng khách, thiết kế phòng khách đẹp, phòng khách hiện đại, nội thất văn phòng",
}

const livingRoomProjects = [
  {
    title: "10 thiết kế phòng khách đẹp nhà đại gia với nội thất hiện đại",
    description:
      "Thiết kế phòng khách đẹp sử dụng nội thất mang phong cách rất hiện đại bởi sự kết hợp các chất liệu kim loại, inox, kính, màu sắc trắng đen tương phản, cùng các đường nét",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Chất liệu kim loại, inox", "Kính cường lực", "Màu sắc trắng đen", "Đường nét hiện đại"],
  },
  {
    title: "Mẫu nội thất phòng khách đẹp cho văn phòng",
    description: "Nội thất phòng khách đẹp trong thiết kế văn phòng, mẫu của Hàn Quốc",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Phong cách Hàn Quốc", "Thiết kế văn phòng", "Không gian mở", "Nội thất đa năng"],
  },
]

const designStyles = [
  {
    title: "Phong Cách Hiện Đại",
    description: "Sử dụng chất liệu kim loại, kính, màu sắc tương phản",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Phong Cách Tối Giản",
    description: "Thiết kế đơn giản, tập trung vào chức năng",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Phong Cách Sang Trọng",
    description: "Nội thất cao cấp, vật liệu đắt tiền",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function LivingRoomPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Trang chủ
            </Link>
            <span className="mx-2">/</span>
            <Link href="/thiet-ke-noi-that" className="hover:text-blue-600">
              Thiết kế nội thất
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Nội thất phòng khách</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nội Thất Phòng Khách</h1>
            <p className="text-xl mb-8 text-gray-300">
              Thiết kế phòng khách đẹp, hiện đại với nội thất cao cấp và phong cách độc đáo
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dự Án Nội Thất Phòng Khách Nổi Bật</h2>
          </div>

          <div className="space-y-12">
            {livingRoomProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Đặc điểm nổi bật:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/lien-he"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Tư vấn thiết kế
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Styles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Phong Cách Thiết Kế Phòng Khách</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cung cấp nhiều phong cách thiết kế khác nhau để phù hợp với sở thích của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {designStyles.map((style, index) => (
              <div key={index} className="text-center">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src={style.image || "/placeholder.svg"} alt={style.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{style.title}</h3>
                <p className="text-gray-600">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Dịch Vụ Thiết Kế Phòng Khách</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tư Vấn Thiết Kế</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Khảo sát không gian thực tế</li>
                  <li>• Tư vấn phong cách thiết kế</li>
                  <li>• Lựa chọn màu sắc và vật liệu</li>
                  <li>• Bố trí nội thất hợp lý</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Thi Công Hoàn Thiện</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Thi công theo đúng thiết kế</li>
                  <li>• Sử dụng vật liệu chất lượng</li>
                  <li>• Đội ngũ thợ lành nghề</li>
                  <li>• Bảo hành 1 năm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Thiết Kế Phòng Khách Của Bạn Ngay Hôm Nay</h2>
          <p className="text-xl mb-8 text-blue-100">Liên hệ với chúng tôi để được tư vấn miễn phí</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Tư vấn miễn phí
            </Link>
            <a
              href="tel:0908592690"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Hotline: 0908592690
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
