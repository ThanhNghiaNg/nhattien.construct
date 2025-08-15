import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Không Gian Sống - Thiết Kế Môi Trường Sống | Nhất Tiến",
  description:
    "Tạo không gian sống lý tưởng: văn phòng sáng tạo, kiến trúc độc đáo, khách sạn tương lai. Thiết kế môi trường sống hiện đại và tiện nghi.",
  keywords: "không gian sống, thiết kế văn phòng, kiến trúc độc đáo, khách sạn hiện đại, môi trường sống",
}

const articles = [
  {
    title: "Văn phòng của người lớn khiến trẻ con cũng mê",
    description:
      "Chú khủng long khổng lồ ở sảnh hay những bộ bàn ghế hình nấm, máy chơi games đều có ở công ty Chartboost.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Văn phòng",
  },
  {
    title: "Kiến trúc độc đáo của tòa nhà FPT",
    description:
      "Công trình 7 tầng có mặt tiền được thiết kế ô vuông đặc rỗng so le với cây xanh trồng xen kẽ đem tới môi trường thoáng mát cho các thầy cô giáo và sinh viên.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Kiến trúc",
  },
  {
    title: "Ngắm 8 khách sạn tương lai sang trọng nhất hành tinh",
    description:
      "Những khách sạn dưới đây được đánh giá là có thiết kế tương lai bởi sự độc đáo cũng như nội thất vô cùng sang trọng của chúng.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Khách sạn",
  },
]

const livingSpaceConcepts = [
  {
    title: "Không Gian Mở",
    description: "Thiết kế không gian mở tạo cảm giác rộng rãi và kết nối",
    features: ["Tăng tương tác", "Ánh sáng tự nhiên", "Linh hoạt sử dụng", "Tiết kiệm diện tích"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Không Gian Xanh",
    description: "Tích hợp thiên nhiên vào không gian sống",
    features: ["Cây xanh trong nhà", "Vườn trên mái", "Tường xanh", "Ánh sáng tự nhiên"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Không Gian Thông Minh",
    description: "Ứng dụng công nghệ vào không gian sống",
    features: ["Điều khiển tự động", "Tiết kiệm năng lượng", "An ninh thông minh", "Kết nối IoT"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

const designPrinciples = [
  {
    principle: "Chức Năng",
    description: "Không gian phải đáp ứng đúng nhu cầu sử dụng",
    icon: "🎯",
  },
  {
    principle: "Thẩm Mỹ",
    description: "Tạo ra không gian đẹp mắt và hài hòa",
    icon: "🎨",
  },
  {
    principle: "Tiện Nghi",
    description: "Đảm bảo sự thoải mái và tiện lợi cho người sử dụng",
    icon: "🏠",
  },
  {
    principle: "Bền Vững",
    description: "Thiết kế thân thiện với môi trường và tiết kiệm năng lượng",
    icon: "🌱",
  },
]

export default function LivingSpacePage() {
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
            <span className="text-gray-800">Không gian sống</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Không Gian Sống</h1>
            <p className="text-xl mb-8 text-indigo-100">
              Tạo môi trường sống lý tưởng với thiết kế hiện đại và tiện nghi
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Không Gian Sống Đặc Biệt</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
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

      {/* Living Space Concepts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Xu Hướng Không Gian Sống</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {livingSpaceConcepts.map((concept, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image src={concept.image || "/placeholder.svg"} alt={concept.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{concept.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{concept.description}</p>
                  <div className="space-y-1">
                    {concept.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1 h-1 bg-indigo-600 rounded-full mr-2"></span>
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

      {/* Design Principles */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nguyên Tắc Thiết Kế Không Gian Sống</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{principle.principle}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Thiết Kế Không Gian Sống Của Bạn</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Liên hệ với chúng tôi để được tư vấn thiết kế không gian sống lý tưởng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Tư vấn miễn phí
            </Link>
            <a
              href="tel:0908592690"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Hotline: 0908592690
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
