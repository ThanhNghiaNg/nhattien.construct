import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Cẩm Nang Xây Dựng - Kiến Thức Xây Nhà | Nhất Tiến",
  description:
    "Cẩm nang xây dựng đầy đủ: quy trình xây nhà, phong thủy, nội ngoại thất, không gian sống. Kiến thức hữu ích cho người xây nhà.",
  keywords: "cẩm nang xây dựng, quy trình xây nhà, phong thủy xây nhà, kiến thức xây dựng",
}

const categories = [
  {
    title: "Cẩm Nang Xây Nhà",
    description: "Quy trình xây nhà từ A-Z, các bước cần thiết khi xây dựng",
    href: "/cam-nang-xay-dung/xay-nha",
    image: "/placeholder.svg?height=300&width=400",
    articles: 2,
  },
  {
    title: "Phong Thủy",
    description: "Kiến thức phong thủy trong xây dựng và thiết kế nhà ở",
    href: "/cam-nang-xay-dung/phong-thuy",
    image: "/placeholder.svg?height=300&width=400",
    articles: 12,
  },
  {
    title: "Nội Ngoại Thất",
    description: "Thiết kế và bố trí nội thất, ngoại thất hài hòa",
    href: "/cam-nang-xay-dung/noi-ngoai-that",
    image: "/placeholder.svg?height=300&width=400",
    articles: 5,
  },
  {
    title: "Không Gian Sống",
    description: "Tạo không gian sống lý tưởng cho gia đình",
    href: "/cam-nang-xay-dung/khong-gian-song",
    image: "/placeholder.svg?height=300&width=400",
    articles: 3,
  },
]

const featuredArticles = [
  {
    title: "Mang màu xanh của thiên nhiên vào nhà ống",
    description: "Kiến trúc sư đã tạo ra khoảng giếng trời, vườn tường, hồ nước trong không gian ở.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Nội ngoại thất",
  },
  {
    title: "Quy trình xây nhà",
    description:
      "Xây nhà là một trong ba việc trọng đại trong cuộc đời mỗi người, bởi ngôi nhà không chỉ đơn giản là nơi che mưa, che nắng mà nó còn phải đạt được những yêu cầu về công năng, tính thẩm mỹ.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Cẩm nang xây nhà",
  },
  {
    title: "Màu sắc của mệnh Thủy theo phong thủy",
    description:
      "Đối với nhiều người Á Đông, trong đó có Việt Nam, màu sắc ngôi nhà còn được sử dụng và tính toán dựa trên các quy luật ngũ hành tương sinh - tương khắc theo quan niệm về phong thủy.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Phong thủy",
  },
]

export default function ConstructionGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cẩm Nang Xây Dựng</h1>
            <p className="text-xl mb-8 text-green-100">
              Kiến thức toàn diện về xây dựng, phong thủy và thiết kế không gian sống
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lien-he"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Tư vấn miễn phí
              </Link>
              <Link
                href="/dich-vu"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Xem dịch vụ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Danh Mục Cẩm Nang</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá các chủ đề quan trọng trong xây dựng và thiết kế nhà ở
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
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
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {category.articles} bài
                  </div>
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

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Bài Viết Nổi Bật</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Những bài viết hữu ích nhất về xây dựng và thiết kế</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
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

      {/* Why Choose Our Guide */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tại Sao Chọn Cẩm Nang Của Chúng Tôi?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kinh Nghiệm Thực Tế</h3>
                <p className="text-gray-600 mb-4">
                  Được biên soạn từ kinh nghiệm thực tế của đội ngũ kiến trúc sư và kỹ sư xây dựng có hơn 10 năm kinh
                  nghiệm.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Hơn 500 dự án đã hoàn thành</li>
                  <li>• Đội ngũ chuyên gia giàu kinh nghiệm</li>
                  <li>• Cập nhật xu hướng mới nhất</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nội Dung Toàn Diện</h3>
                <p className="text-gray-600 mb-4">
                  Bao gồm đầy đủ các khía cạnh từ quy trình xây dựng, phong thủy đến thiết kế nội ngoại thất.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Quy trình xây dựng chi tiết</li>
                  <li>• Kiến thức phong thủy ứng dụng</li>
                  <li>• Thiết kế không gian sống</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bắt Đầu Dự Án Xây Dựng Của Bạn</h2>
          <p className="text-xl mb-8 text-green-100">Liên hệ với chúng tôi để được tư vấn miễn phí về dự án xây dựng</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Liên hệ ngay
            </Link>
            <a
              href="tel:0908592690"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Gọi: 0908.592.690
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
