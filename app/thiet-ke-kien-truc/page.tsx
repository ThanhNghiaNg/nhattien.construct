import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Thiết Kế Kiến Trúc - Dịch Vụ Thiết Kế Chuyên Nghiệp | Nhất Tiến",
  description:
    "Dịch vụ thiết kế kiến trúc chuyên nghiệp: nhà xưởng, showroom, nhà phố, biệt thự, cà phê, karaoke, bar vũ trường. Thiết kế sáng tạo, hiện đại.",
  keywords: "thiết kế kiến trúc, thiết kế nhà xưởng, thiết kế showroom, thiết kế biệt thự, thiết kế nhà phố",
}

const architectureServices = [
  {
    title: "Thiết kế nhà xưởng",
    description: "Thiết kế nhà xưởng công nghiệp, kho bãi với không gian tối ưu",
    href: "/thiet-ke-kien-truc/nha-xuong",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Tối ưu không gian", "Thông thoáng", "An toàn lao động", "Tiết kiệm chi phí"],
  },
  {
    title: "Thiết kế showroom",
    description: "Showroom bán hàng đẹp, đa dạng kiểu cách thu hút khách hàng",
    href: "/thiet-ke-kien-truc/showroom",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Bố trí hợp lý", "Ánh sáng đẹp", "Tạo ấn tượng", "Tăng doanh số"],
  },
  {
    title: "Thiết kế nhà phố",
    description: "Nhà phố hiện đại, tối ưu diện tích với thiết kế thông minh",
    href: "/thiet-ke-kien-truc/nha-pho",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Thiết kế thông minh", "Tối ưu diện tích", "Ánh sáng tự nhiên", "Phong cách hiện đại"],
  },
  {
    title: "Thiết kế biệt thự",
    description: "Biệt thự sang trọng với kiến trúc độc đáo và không gian rộng rãi",
    href: "/thiet-ke-kien-truc/biet-thu",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Kiến trúc độc đáo", "Không gian rộng", "Vật liệu cao cấp", "Thiết kế sang trọng"],
  },
  {
    title: "Thiết kế cà phê",
    description: "Quán cà phê ấm cúng, thu hút với không gian độc đáo",
    href: "/thiet-ke-kien-truc/ca-phe",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Không gian ấm cúng", "Thiết kế độc đáo", "Âm thanh tốt", "Bố trí hợp lý"],
  },
  {
    title: "Thiết kế karaoke",
    description: "Phòng karaoke VIP với âm thanh chuyên nghiệp và thiết kế sang trọng",
    href: "/thiet-ke-kien-truc/karaoke",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Cách âm chuyên nghiệp", "Thiết kế VIP", "Ánh sáng đẹp", "Không gian riêng tư"],
  },
  {
    title: "Thiết kế bar - vũ trường",
    description: "Bar và vũ trường với thiết kế hiện đại, hệ thống âm thanh ánh sáng chuyên nghiệp",
    href: "/thiet-ke-kien-truc/bar-vu-truong",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Hệ thống âm thanh", "Ánh sáng chuyên nghiệp", "Thiết kế hiện đại", "Không gian sôi động"],
  },
]

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thiết Kế Kiến Trúc</h1>
            <p className="text-xl mb-8 text-slate-300">
              Dịch vụ thiết kế kiến trúc chuyên nghiệp cho mọi loại công trình
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lien-he"
                className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Tư vấn miễn phí
              </Link>
              <Link
                href="/du-an"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors"
              >
                Xem dự án
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dịch Vụ Thiết Kế Kiến Trúc</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cung cấp dịch vụ thiết kế kiến trúc đa dạng cho mọi loại công trình
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1 h-1 bg-slate-600 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tại Sao Chọn Thiết Kế Kiến Trúc Nhất Tiến?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Đội Ngũ Chuyên Nghiệp</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Kiến trúc sư có bằng cấp chuyên môn</li>
                  <li>• Hơn 10 năm kinh nghiệm thiết kế</li>
                  <li>• Cập nhật xu hướng thiết kế mới nhất</li>
                  <li>• Tư vấn miễn phí 24/7</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quy Trình Chuyên Nghiệp</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Khảo sát và tư vấn chi tiết</li>
                  <li>• Thiết kế 3D chân thực</li>
                  <li>• Hồ sơ pháp lý đầy đủ</li>
                  <li>• Giám sát thi công chất lượng</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bắt Đầu Dự Án Thiết Kế Của Bạn</h2>
          <p className="text-xl mb-8 text-slate-300">
            Liên hệ với chúng tôi để được tư vấn miễn phí về dự án thiết kế kiến trúc
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Liên hệ ngay
            </Link>
            <a
              href="tel:0908592690"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors"
            >
              Gọi: 0908592690
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
