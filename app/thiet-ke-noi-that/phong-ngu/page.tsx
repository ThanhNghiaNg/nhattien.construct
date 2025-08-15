import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Nội Thất Phòng Ngủ - Thiết Kế Sang Trọng | Nhất Tiến",
  description:
    "Thiết kế nội thất phòng ngủ đẹp cho bố mẹ và trẻ em. Mẫu phòng ngủ hiện đại, sang trọng với không gian sáng tạo và ấn tượng.",
  keywords: "nội thất phòng ngủ, thiết kế phòng ngủ đẹp, phòng ngủ trẻ em, phòng ngủ hiện đại",
}

const bedroomProjects = [
  {
    title: "Mẫu phòng ngủ bố mẹ và trẻ em sang trọng",
    description:
      "Phòng ngủ trẻ em được thiết kế sáng tạo và ấn tượng tạo nên không gian vừa là chỗ ngủ, chỗ chơi, và thể hiện cá tính của trẻ em, với các tông màu mạnh, hình khối",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Thiết kế sáng tạo", "Tông màu mạnh", "Không gian đa năng", "An toàn cho trẻ em"],
  },
  {
    title: "Mẫu phòng ngủ đẹp hiện đại",
    description: "8 thiết kế nội thất phòng ngủ hiện đại được tạp chí bình chọn đẹp nhất 2014",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Thiết kế hiện đại", "Được tạp chí bình chọn", "Phong cách tối giản", "Nội thất cao cấp"],
  },
]

const bedroomTypes = [
  {
    title: "Phòng Ngủ Master",
    description: "Thiết kế sang trọng cho phòng ngủ chính",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Phòng Ngủ Trẻ Em",
    description: "Không gian vui tươi, an toàn cho bé",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Phòng Ngủ Khách",
    description: "Thiết kế tiện nghi cho khách nghỉ lại",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function BedroomPage() {
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
            <span className="text-gray-800">Nội thất phòng ngủ</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nội Thất Phòng Ngủ</h1>
            <p className="text-xl mb-8 text-purple-100">
              Tạo không gian nghỉ ngơi hoàn hảo với thiết kế phòng ngủ sang trọng và tiện nghi
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dự Án Phòng Ngủ Nổi Bật</h2>
          </div>

          <div className="space-y-12">
            {bedroomProjects.map((project, index) => (
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
                            <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/lien-he"
                      className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
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

      {/* Bedroom Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Các Loại Phòng Ngủ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi thiết kế phòng ngủ phù hợp với mọi đối tượng và nhu cầu sử dụng
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bedroomTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src={type.image || "/placeholder.svg"} alt={type.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tips */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Bí Quyết Thiết Kế Phòng Ngủ Đẹp</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Màu Sắc & Ánh Sáng</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Sử dụng màu sắc nhẹ nhàng, dễ chịu</li>
                  <li>• Ánh sáng tự nhiên và đèn trang trí</li>
                  <li>• Tạo điểm nhấn với màu sắc tương phản</li>
                  <li>• Phù hợp với tính cách chủ nhân</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Bố Trí & Không Gian</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Tối ưu hóa không gian lưu trữ</li>
                  <li>• Bố trí nội thất hợp lý</li>
                  <li>• Tạo không gian thư giãn</li>
                  <li>• Đảm bảo thông thoáng</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Thiết Kế Phòng Ngủ Mơ Ước Của Bạn</h2>
          <p className="text-xl mb-8 text-purple-100">Để chúng tôi giúp bạn tạo ra không gian nghỉ ngơi hoàn hảo</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Tư vấn miễn phí
            </Link>
            <a
              href="tel:0908592690"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Hotline: 0908592690
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
