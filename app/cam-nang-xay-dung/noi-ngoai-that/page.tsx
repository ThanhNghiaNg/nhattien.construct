import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Nội Ngoại Thất - Thiết Kế Không Gian Sống | Nhất Tiến",
  description:
    "Thiết kế nội ngoại thất hài hòa: mang màu xanh thiên nhiên vào nhà, căn hộ tiện nghi, thiết kế cổng đẹp, không gian 80m2 tối ưu.",
  keywords: "nội ngoại thất, thiết kế không gian, nhà ống xanh, căn hộ tiện nghi, thiết kế cổng",
}

const articles = [
  {
    title: "Mang màu xanh của thiên nhiên vào nhà ống",
    description: "Kiến trúc sư đã tạo ra khoảng giếng trời, vườn tường, hồ nước trong không gian ở.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Thiết kế xanh",
  },
  {
    title: "Căn hộ thiết kế đơn giản nhưng tiện nghi",
    description:
      "Nhược điểm khu bếp quá kín và tối được khắc phục giúp căn hộ 140 m2 ở Hà Nội đáp ứng mọi yêu cầu của chủ nhà.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Căn hộ",
  },
  {
    title: "Thiết kế cổng đẹp",
    description:
      "Những chiếc cổng nhà giá trăm triệu đồng ở Sài Gòn. Được mạ đồng, mạ vàng và chạm trổ hoa văn, những chiếc cổng không chỉ bảo vệ ngôi nhà mà còn thu hút mọi ánh nhìn.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Ngoại thất",
  },
  {
    title: "Thiết kế nhà đẹp diện tích 80m2",
    description:
      "Ngôi nhà có mặt tiền rộng 4m, sâu 20m bao gồm 1 bán tầng hầm, 1 tầng lửng và 3 tầng trên được dựng lên bởi khung bê-tông và tường gạch trên bề mặt sàn 80m2.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Nhà nhỏ",
  },
  {
    title: "14 phòng ngủ mê hoặc",
    description:
      "Bạn có muốn sau này được ngủ trong những căn phòng thế này? Phòng ngủ hiện đại với độ tương phản cao màu đen và trắng với ánh sáng tuyệt vời.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Phòng ngủ",
  },
]

const designTips = [
  {
    title: "Tối Ưu Không Gian Nhỏ",
    tips: [
      "Sử dụng màu sáng để mở rộng không gian",
      "Nội thất đa năng tiết kiệm diện tích",
      "Ánh sáng tự nhiên tạo cảm giác rộng rãi",
    ],
  },
  {
    title: "Kết Hợp Nội Ngoại Thất",
    tips: ["Thống nhất phong cách thiết kế", "Màu sắc hài hòa giữa trong và ngoài", "Vật liệu bền đẹp chống thời tiết"],
  },
  {
    title: "Thiết Kế Xanh",
    tips: [
      "Tích hợp cây xanh vào không gian",
      "Sử dụng vật liệu thân thiện môi trường",
      "Tối ưu ánh sáng và thông gió tự nhiên",
    ],
  },
]

export default function InteriorExteriorPage() {
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
            <Link href="/cam-nang-xay-dung" className="hover:text-blue-600">
              Cẩm nang xây dựng
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Nội ngoại thất</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nội Ngoại Thất</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Thiết kế không gian sống hài hòa giữa nội thất và ngoại thất
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Bài Viết Nội Ngoại Thất</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Bí Quyết Thiết Kế Nội Ngoại Thất</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {designTips.map((tip, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{tip.title}</h3>
                <ul className="space-y-2">
                  {tip.tips.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Thiết Kế Không Gian Sống Hoàn Hảo</h2>
          <p className="text-xl mb-8 text-emerald-100">Liên hệ với chúng tôi để được tư vấn thiết kế nội ngoại thất</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Tư vấn miễn phí
            </Link>
            <a
              href="tel:0908592690"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Hotline: 0908.592.690
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
