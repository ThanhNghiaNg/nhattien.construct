import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Cẩm Nang Xây Nhà - Quy Trình Xây Dựng | Nhất Tiến",
  description:
    "Hướng dẫn quy trình xây nhà từ A-Z. Các bước cần thiết khi xây dựng ngôi nhà, từ thiết kế đến hoàn thiện.",
  keywords: "cẩm nang xây nhà, quy trình xây nhà, các bước xây nhà, hướng dẫn xây dựng",
}

const constructionSteps = [
  {
    step: 1,
    title: "Khảo sát và thiết kế",
    description: "Khảo sát địa hình, thiết kế bản vẽ kiến trúc và kết cấu",
    details: ["Đo đạc địa hình", "Thiết kế kiến trúc", "Thiết kế kết cấu", "Lập hồ sơ pháp lý"],
  },
  {
    step: 2,
    title: "Chuẩn bị mặt bằng",
    description: "San lấp mặt bằng, đào móng và chuẩn bị vật liệu",
    details: ["San lấp mặt bằng", "Đào móng", "Chuẩn bị vật liệu", "Dựng rào chắn"],
  },
  {
    step: 3,
    title: "Thi công phần ngầm",
    description: "Đổ móng, làm cống thoát nước và hệ thống điện nước",
    details: ["Đổ bê tông móng", "Lắp đặt cống thoát nước", "Hệ thống điện nước ngầm", "Chống thấm móng"],
  },
  {
    step: 4,
    title: "Xây dựng phần thô",
    description: "Xây tường, đổ sàn, dựng khung mái",
    details: ["Xây tường gạch", "Đổ sàn bê tông", "Dựng khung mái", "Lợp mái"],
  },
  {
    step: 5,
    title: "Hoàn thiện",
    description: "Thi công điện nước, sơn tường, lát gạch",
    details: ["Lắp đặt điện nước", "Sơn tường", "Lát gạch", "Lắp cửa"],
  },
  {
    step: 6,
    title: "Bàn giao",
    description: "Kiểm tra chất lượng, dọn dẹp và bàn giao công trình",
    details: ["Kiểm tra chất lượng", "Dọn dẹp công trình", "Bàn giao hồ sơ", "Hướng dẫn sử dụng"],
  },
]

const articles = [
  {
    title: "Quy trình xây nhà",
    description:
      "Xây nhà là một trong ba việc trọng đại trong cuộc đời mỗi người, bởi ngôi nhà không chỉ đơn giản là nơi che mưa, che nắng mà nó còn phải đạt được những yêu cầu về công năng, tính thẩm mỹ.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Quy trình xây nhà P2",
    description: "Bước số 6 trong Quy trình xây nhà: Xây dựng phần khung nhà (phần thô)",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function BuildingGuidePage() {
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
            <span className="text-gray-800">Cẩm nang xây nhà</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cẩm Nang Xây Nhà</h1>
            <p className="text-xl mb-8 text-blue-100">
              Hướng dẫn chi tiết quy trình xây nhà từ A-Z cho người mới bắt đầu
            </p>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quy Trình Xây Nhà 6 Bước</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Quy trình xây dựng chuẩn được áp dụng bởi các chuyên gia</p>
          </div>

          <div className="space-y-8">
            {constructionSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-4 gap-6 p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      href="/lien-he"
                      className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Tư vấn chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Bài Viết Chi Tiết</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                  <Link href="/lien-he" className="inline-block text-blue-600 hover:text-blue-700 font-semibold">
                    Đọc thêm →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Lưu Ý Quan Trọng Khi Xây Nhà</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Chuẩn Bị Trước Khi Xây</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Hoàn thiện thủ tục pháp lý</li>
                  <li>• Chuẩn bị đầy đủ tài chính</li>
                  <li>• Chọn đơn vị thi công uy tín</li>
                  <li>• Thiết kế phù hợp với nhu cầu</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Trong Quá Trình Thi Công</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Giám sát chất lượng thường xuyên</li>
                  <li>• Kiểm tra vật liệu đầu vào</li>
                  <li>• Theo dõi tiến độ thi công</li>
                  <li>• Đảm bảo an toàn lao động</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bắt Đầu Xây Nhà Mơ Ước Của Bạn</h2>
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
