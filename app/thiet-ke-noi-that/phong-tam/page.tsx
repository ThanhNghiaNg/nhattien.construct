import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Nội Thất Phòng Tắm - Thiết Kế Hiện Đại | Nhất Tiến",
  description:
    "Thiết kế nội thất phòng tắm hiện đại với vật liệu cao cấp. Phòng tắm rộng cho biệt thự VIP với trang thiết bị hiện đại và đồng bộ.",
  keywords: "nội thất phòng tắm, thiết kế phòng tắm hiện đại, phòng tắm biệt thự, phòng tắm cao cấp",
}

const bathroomProjects = [
  {
    title: "Mẫu nội thất phòng tắm",
    description: "Nội thất phòng tắm thiết kế rất rộng cho biệt thự VIP ở nước ngoài",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Thiết kế rộng rãi", "Dành cho biệt thự VIP", "Phong cách quốc tế", "Vật liệu cao cấp"],
  },
  {
    title: "Mẫu thiết kế phòng tắm hiện đại",
    description:
      "Thiết kế phòng tắm bằng các vật liệu không thua kém gì phòng khách hay các sảnh trang trí khách sạn, đi kèm các trang thiết bị hiện đại và đồng bộ không những đã đem lại sự hài hòa, bắt mắt",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Vật liệu cao cấp", "Thiết bị hiện đại", "Thiết kế đồng bộ", "Phong cách khách sạn"],
  },
]

const bathroomStyles = [
  {
    title: "Phòng Tắm Hiện Đại",
    description: "Thiết kế tối giản với công nghệ thông minh",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Phòng Tắm Spa",
    description: "Không gian thư giãn như resort cao cấp",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Phòng Tắm Cổ Điển",
    description: "Phong cách sang trọng với chi tiết tinh xảo",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const bathroomFeatures = [
  {
    icon: "🚿",
    title: "Hệ Thống Vòi Sen",
    description: "Vòi sen thông minh với nhiều chế độ massage",
  },
  {
    icon: "🛁",
    title: "Bồn Tắm Cao Cấp",
    description: "Bồn tắm massage với hệ thống sục khí",
  },
  {
    icon: "💡",
    title: "Hệ Thống Ánh Sáng",
    description: "Đèn LED thông minh điều chỉnh được",
  },
  {
    icon: "🌡️",
    title: "Điều Hòa Nhiệt Độ",
    description: "Hệ thống sưởi ấm sàn và điều hòa",
  },
]

export default function BathroomPage() {
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
            <span className="text-gray-800">Nội thất phòng tắm</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nội Thất Phòng Tắm</h1>
            <p className="text-xl mb-8 text-teal-100">
              Thiết kế phòng tắm hiện đại với vật liệu cao cấp và trang thiết bị đồng bộ
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dự Án Phòng Tắm Nổi Bật</h2>
          </div>

          <div className="space-y-12">
            {bathroomProjects.map((project, index) => (
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
                            <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/lien-he"
                      className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
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

      {/* Bathroom Styles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Phong Cách Thiết Kế Phòng Tắm</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Đa dạng phong cách từ hiện đại đến cổ điển, phù hợp với mọi sở thích
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bathroomStyles.map((style, index) => (
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

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Trang Thiết Bị Hiện Đại</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi sử dụng những trang thiết bị cao cấp nhất để tạo nên phòng tắm hoàn hảo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bathroomFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Vật Liệu Cao Cấp</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Đá Tự Nhiên</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Đá marble cao cấp</li>
                  <li>• Đá granite chống thấm</li>
                  <li>• Đá travertine tự nhiên</li>
                  <li>• Bề mặt chống trượt an toàn</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Gạch Ceramic & Porcelain</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Gạch porcelain chống thấm 100%</li>
                  <li>• Gạch mosaic nghệ thuật</li>
                  <li>• Gạch vân gỗ chống nước</li>
                  <li>• Gạch 3D tạo điểm nhấn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Tạo Phòng Tắm Sang Trọng Như Khách Sạn 5 Sao</h2>
          <p className="text-xl mb-8 text-teal-100">Liên hệ với chúng tôi để được tư vấn thiết kế phòng tắm cao cấp</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Tư vấn miễn phí
            </Link>
            <a
              href="tel:0908592690"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Hotline: 0908.592.690
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
