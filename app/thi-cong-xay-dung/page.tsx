import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Thi Công Xây Dựng - Dịch Vụ Xây Dựng Chuyên Nghiệp | Nhất Tiến",
  description:
    "Dịch vụ thi công xây dựng chuyên nghiệp: nhà phố, biệt thự, nhà xưởng, showroom. Đội ngũ thợ lành nghề, chất lượng cao, tiến độ đúng hẹn.",
  keywords: "thi công xây dựng, xây nhà phố, xây biệt thự, thi công nhà xưởng, xây dựng chuyên nghiệp",
}

const constructionServices = [
  {
    title: "Thi công nhà phố",
    description: "Thi công nhà phố từ móng đến hoàn thiện với chất lượng cao",
    image: "/placeholder.svg?height=250&width=350",
    features: ["Móng chắc chắn", "Kết cấu an toàn", "Hoàn thiện đẹp", "Đúng tiến độ"],
  },
  {
    title: "Thi công biệt thự",
    description: "Xây dựng biệt thự cao cấp với vật liệu chất lượng",
    image: "/placeholder.svg?height=250&width=350",
    features: ["Vật liệu cao cấp", "Kỹ thuật hiện đại", "Thiết kế sang trọng", "Giám sát chặt chẽ"],
  },
  {
    title: "Thi công nhà xưởng",
    description: "Xây dựng nhà xưởng công nghiệp với quy mô lớn",
    image: "/placeholder.svg?height=250&width=350",
    features: ["Quy mô lớn", "Kết cấu thép", "Thi công nhanh", "Chi phí hợp lý"],
  },
]

const constructionProcess = [
  {
    step: 1,
    title: "Khảo sát và báo giá",
    description: "Khảo sát thực địa, lập báo giá chi tiết",
  },
  {
    step: 2,
    title: "Ký hợp đồng",
    description: "Ký kết hợp đồng thi công rõ ràng, minh bạch",
  },
  {
    step: 3,
    title: "Chuẩn bị thi công",
    description: "Chuẩn bị nhân lực, vật tư, máy móc",
  },
  {
    step: 4,
    title: "Thi công thực hiện",
    description: "Thi công theo đúng thiết kế và tiến độ",
  },
  {
    step: 5,
    title: "Giám sát chất lượng",
    description: "Kiểm tra chất lượng từng hạng mục",
  },
  {
    step: 6,
    title: "Bàn giao công trình",
    description: "Nghiệm thu và bàn giao công trình hoàn chỉnh",
  },
]

export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thi Công Xây Dựng</h1>
            <p className="text-xl mb-8 text-orange-100">
              Dịch vụ thi công xây dựng chuyên nghiệp với chất lượng cao và tiến độ đúng hẹn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lien-he"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Báo giá miễn phí
              </Link>
              <Link
                href="/du-an"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Xem dự án
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dịch Vụ Thi Công</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi thi công đa dạng loại công trình với chất lượng đảm bảo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {constructionServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1 h-1 bg-orange-600 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quy Trình Thi Công</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tại Sao Chọn Thi Công Nhất Tiến?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Chất Lượng Đảm Bảo</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Đội ngũ thợ lành nghề có kinh nghiệm</li>
                  <li>• Vật liệu chính hãng, chất lượng cao</li>
                  <li>• Giám sát kỹ thuật chặt chẽ</li>
                  <li>• Bảo hành công trình 1 năm</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tiến Độ Đúng Hẹn</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Lập kế hoạch thi công chi tiết</li>
                  <li>• Chuẩn bị đầy đủ nhân lực, vật tư</li>
                  <li>• Theo dõi tiến độ hàng ngày</li>
                  <li>• Cam kết hoàn thành đúng hạn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bắt Đầu Dự Án Xây Dựng Của Bạn</h2>
          <p className="text-xl mb-8 text-orange-100">Liên hệ với chúng tôi để được báo giá miễn phí</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Báo giá ngay
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
