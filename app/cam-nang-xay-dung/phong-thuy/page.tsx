import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Phong Thủy Xây Nhà - Cẩm Nang Phong Thủy | Nhất Tiến",
  description:
    "Kiến thức phong thủy trong xây dựng: màu sắc theo mệnh, hướng nhà, bố trí không gian. Hướng dẫn áp dụng phong thủy khi xây nhà.",
  keywords: "phong thủy xây nhà, màu sắc theo mệnh, hướng nhà phong thủy, bố trí phong thủy",
}

const fengShuiTopics = [
  {
    title: "Màu Sắc Theo Mệnh",
    description: "Chọn màu sắc phù hợp với mệnh của gia chủ",
    articles: [
      "Màu sắc của mệnh Thủy theo phong thủy",
      "Màu sắc của mệnh Mộc theo phong thủy",
      "Màu sắc của mệnh Kim theo phong thủy",
      "Màu sắc của mệnh Hỏa theo phong thủy",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Thủ Tục Phong Thủy",
    description: "Các thủ tục cần thiết khi xây nhà theo phong thủy",
    articles: [
      "Thủ tục về nhà mới khi mượn tuổi làm nhà",
      "Chọn năm xây nhà",
      "Bảng tra tuổi xây nhà",
      "Cung bát quái theo tuổi",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Bố Trí Không Gian",
    description: "Cách bố trí các phòng theo nguyên tắc phong thủy",
    articles: [
      "Phong thủy cho phòng làm việc",
      "Xây nhà bếp sao cho hợp phong thủy",
      "Chọn màu theo mệnh tuổi",
      "Thước đo Lỗ Ban",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
]

const elementColors = [
  {
    element: "Mệnh Thủy",
    colors: ["Xanh dương", "Đen", "Xám"],
    description: "Màu sắc ngôi nhà được tính toán dựa trên quy luật ngũ hành tương sinh - tương khắc",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    element: "Mệnh Mộc",
    colors: ["Xanh lá", "Nâu", "Be"],
    description: "Không gian nội thất có tính ngẫu hứng, mộc mạc và yếu tố tự nhiên chủ nghĩa",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    element: "Mệnh Kim",
    colors: ["Trắng", "Vàng", "Bạc"],
    description: "Chủ nhà mệnh Kim lựa chọn màu sắc theo nguyên tắc tương sinh và tương khắc",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    element: "Mệnh Hỏa",
    colors: ["Đỏ", "Hồng", "Tím"],
    description: "Có thể chọn màu của Mộc (xanh lá) vì Mộc sinh Hỏa hay màu bản mệnh",
    image: "/placeholder.svg?height=150&width=200",
  },
]

export default function FengShuiPage() {
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
            <span className="text-gray-800">Phong thủy</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Phong Thủy Xây Nhà</h1>
            <p className="text-xl mb-8 text-purple-100">
              Kiến thức phong thủy ứng dụng trong xây dựng và thiết kế nhà ở
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Chủ Đề Phong Thủy</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fengShuiTopics.map((topic, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src={topic.image || "/placeholder.svg"} alt={topic.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{topic.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{topic.description}</p>
                  <div className="space-y-2">
                    {topic.articles.map((article, idx) => (
                      <div key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1 h-1 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {article}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Element Colors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Màu Sắc Theo Ngũ Hành</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chọn màu sắc phù hợp với mệnh của gia chủ theo nguyên tắc ngũ hành
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {elementColors.map((element, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-32">
                  <Image
                    src={element.image || "/placeholder.svg"}
                    alt={element.element}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{element.element}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {element.colors.map((color, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                        {color}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-xs">{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feng Shui Principles */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Nguyên Tắc Phong Thủy Cơ Bản</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ngũ Hành Tương Sinh</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Kim sinh Thủy (Kim → Thủy)</li>
                  <li>• Thủy sinh Mộc (Thủy → Mộc)</li>
                  <li>• Mộc sinh Hỏa (Mộc → Hỏa)</li>
                  <li>• Hỏa sinh Thổ (Hỏa → Thổ)</li>
                  <li>• Thổ sinh Kim (Thổ → Kim)</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ngũ Hành Tương Khắc</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Kim khắc Mộc (Kim ⚔ Mộc)</li>
                  <li>• Mộc khắc Thổ (Mộc ⚔ Thổ)</li>
                  <li>• Thổ khắc Thủy (Thổ ⚔ Thủy)</li>
                  <li>• Thủy khắc Hỏa (Thủy ⚔ Hỏa)</li>
                  <li>• Hỏa khắc Kim (Hỏa ⚔ Kim)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Tư Vấn Phong Thủy Cho Ngôi Nhà</h2>
          <p className="text-xl mb-8 text-purple-100">Liên hệ với chúng tôi để được tư vấn phong thủy miễn phí</p>
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
