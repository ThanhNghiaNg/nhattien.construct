import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Nội Thất Nhà Bếp - Thiết Kế Hiện Đại | Nhất Tiến",
  description:
    "Thiết kế nội thất nhà bếp đẹp, hiện đại. Mẫu bếp đẹp, phòng ăn kết hợp với hệ thống tủ bếp và thiết bị hiện đại sang trọng.",
  keywords: "nội thất nhà bếp, thiết kế nhà bếp đẹp, mẫu bếp hiện đại, tủ bếp cao cấp, phòng ăn đẹp",
}

const kitchenProjects = [
  {
    title: "Mẫu bếp đẹp",
    description: "Bộ thiết kế mẫu bếp đẹp do công ty Nhất Tiến thiết kế",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Thiết kế độc quyền", "Bố trí hợp lý", "Màu sắc hài hòa", "Tiện nghi hiện đại"],
  },
  {
    title: "Mẫu phòng ăn đẹp kết hợp nội thất phòng bếp",
    description: "Phòng ăn đẹp kết hợp nội thất phòng bếp, mẫu của nước ngoài",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Kết hợp đa năng", "Phong cách quốc tế", "Không gian mở", "Thiết kế thông minh"],
  },
  {
    title: "Mẫu nội thất phòng bếp đẹp",
    description:
      "Nội thất phòng bếp đẹp của các hãng nổi tiếng với giá cũng cực đắt, được thiết kế với hệ thống tủ bếp và những thiết bị hiện đại sẽ đem đến không gian tiện nghi, sang trọng và an toàn",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Thương hiệu nổi tiếng", "Thiết bị cao cấp", "Hệ thống tủ bếp", "An toàn tuyệt đối"],
  },
]

const kitchenStyles = [
  {
    title: "Bếp Hiện Đại",
    description: "Thiết kế tối giản với công nghệ thông minh",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Bếp Cổ Điển",
    description: "Phong cách truyền thống ấm cúng",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Bếp Mở",
    description: "Kết hợp với phòng khách, phòng ăn",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function KitchenPage() {
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
            <span className="text-gray-800">Nội thất nhà bếp</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nội Thất Nhà Bếp</h1>
            <p className="text-xl mb-8 text-orange-100">
              Thiết kế nhà bếp hiện đại với hệ thống tủ bếp và thiết bị cao cấp
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dự Án Nhà Bếp Nổi Bật</h2>
          </div>

          <div className="space-y-12">
            {kitchenProjects.map((project, index) => (
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
                            <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/lien-he"
                      className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
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

      {/* Kitchen Styles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Phong Cách Thiết Kế Nhà Bếp</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Đa dạng phong cách thiết kế từ hiện đại đến cổ điển, phù hợp với mọi gia đình
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {kitchenStyles.map((style, index) => (
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

      {/* Kitchen Equipment */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Thiết Bị Nhà Bếp Hiện Đại</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Thiết Bị Nấu Nướng</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Bếp từ cao cấp tiết kiệm điện</li>
                  <li>• Lò nướng đa chức năng</li>
                  <li>• Máy hút mùi công suất lớn</li>
                  <li>• Bếp gas an toàn</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Thiết Bị Bảo Quản</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Tủ lạnh side by side</li>
                  <li>• Tủ đông mini tiện lợi</li>
                  <li>• Tủ rượu điều hòa nhiệt độ</li>
                  <li>• Kệ gia vị thông minh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quy Trình Thiết Kế Nhà Bếp</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Khảo Sát</h3>
              <p className="text-gray-600 text-sm">Đo đạc không gian và tìm hiểu nhu cầu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Thiết Kế</h3>
              <p className="text-gray-600 text-sm">Tạo bản vẽ 2D/3D chi tiết</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Báo Giá</h3>
              <p className="text-gray-600 text-sm">Lập báo giá chi tiết vật tư và thi công</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Thi Công</h3>
              <p className="text-gray-600 text-sm">Thực hiện thi công và bàn giao</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Tạo Nhà Bếp Mơ Ước Cho Gia Đình Bạn</h2>
          <p className="text-xl mb-8 text-orange-100">Liên hệ với chúng tôi để được tư vấn thiết kế nhà bếp miễn phí</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Tư vấn miễn phí
            </Link>
            <a
              href="tel:0908592690"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Hotline: 0908592690
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
