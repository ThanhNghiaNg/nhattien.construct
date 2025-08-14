import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Giới thiệu - CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG NHẤT TIẾN",
  description:
    "Tìm hiểu về Công ty TNHH Tư vấn Thiết kế Xây dựng Nhất Tiến - Thực hiện ước mơ của bạn với hơn 10 năm kinh nghiệm trong lĩnh vực thiết kế và thi công.",
}

export default function GioiThieuPage() {
  return (
    <main>
      <Header />

      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Giới thiệu về Nhất Tiến</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Nơi bạn gửi trọn niềm tin - Thực hiện ước mơ của bạn
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Company Introduction */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">I. Lời Ngõ</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Công ty TNHH tư vấn thiết kế xây dựng Nhất Tiến là một công ty hàng đầu trong lĩnh vực thiết kế công
                trình dân dụng tại Tp. Hồ Chí Minh và các tỉnh lân cận, công ty TNHH tư vấn thiết kế xây dựng Nhất Tiến
                với đội ngũ nhân viên thiết kế gồm Kiến Trúc Sư, Kỹ Sư lành nghề luôn bảo đảm công tác thiết kế được
                sáng tạo, hiện đại và chính xác cho từng công trình dân dụng.
              </p>
              <p>
                Trong lĩnh vực thi công, với nhân sự chuyên nghiệp gồm Kỹ Sư Giám Sát Dự Án nhiệt huyết cùng hơn đội ngũ
                công nhân lành nghề được chia thành nhiều đội như: đội Xây Dựng, Các Đội Hoàn Thiện, Xưởng Nội Thất,
                Xưởng Cơ Khí, Đội Điện Nước, Đội Sơn Nước… công ty TNHH tư vấn thiết kế xây dựng Nhất Tiến cam kết với
                khách hàng một công trình hoàn hảo nhất.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg my-8">
                <p className="text-blue-900 font-semibold text-xl text-center italic">"Thực hiện ước mơ của bạn"</p>
                <p className="text-blue-800 font-medium text-lg text-center mt-2">
                  "Nhất Tiến - nơi bạn gửi trọn niềm tin"
                </p>
              </div>
              <p>
                Với tiêu chí <em>chuyên nghiệp trong công việc, tận tâm trong dịch vụ và chu đáo khi hậu mãi</em>, công
                ty TNHH tư vấn thiết kế xây dựng Nhất Tiến luôn là một nhà thiết kế và nhà thầu chính được tín nhiệm
                hiện nay. Công ty TNHH tư vấn thiết kế xây dựng Nhất Tiến đã thiết kế và thi công nhiều công trình các
                loại như Biệt Thự, Cao ốc Văn Phòng, Siêu Thị, Khách Sạn, Nhà Phố…
              </p>
              <p>
                Công ty TNHH tư vấn thiết kế xây dựng Nhất Tiến luôn lớn mạnh trong niềm tin của khách hàng để hoàn
                thành công trình của bạn vì chúng tôi cam kết lấy chất lượng và uy tín làm mục tiêu hoạt động.
              </p>
            </div>
          </section>

          {/* Company Information */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">II. Thông Tin Chung</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tên công ty:</h3>
                    <p className="text-gray-700">CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG NHẤT TIẾN</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tên tiếng Anh:</h3>
                    <p className="text-gray-700">NhatTien building Design Consurtants Company Limited</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Người đại diện:</h3>
                    <p className="text-gray-700">Ông ĐẶNG VĂN TIẾN - Giám Đốc</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Địa chỉ trụ sở:</h3>
                    <p className="text-gray-700">39/5C Đường 22, KP7, P.Linh Đông, TP.Thủ Đức, TP.HCM</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Điện thoại:</h3>
                    <p className="text-gray-700">0866579463</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hotline:</h3>
                    <p className="text-gray-700">0908592690</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email:</h3>
                    <p className="text-gray-700">tkxdnhattien@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">GPKD:</h3>
                    <p className="text-gray-700">0312451054 - Ngày cấp: 9/9/2013</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Mã số thuế:</h3>
                    <p className="text-gray-700">0312451054</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Ngành nghề kinh doanh:</h3>
                <p className="text-gray-700">Thiết kế và thi công, giám sát các công trình dân dụng và công nghiệp.</p>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Dịch vụ chính</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏗️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Thiết kế kiến trúc</h3>
                <p className="text-gray-600 text-sm">Thiết kế sáng tạo, hiện đại và chính xác cho từng công trình</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔨</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Thi công xây dựng</h3>
                <p className="text-gray-600 text-sm">Đội ngũ công nhân lành nghề, cam kết chất lượng hoàn hảo</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👁️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Giám sát công trình</h3>
                <p className="text-gray-600 text-sm">Kỹ sư giám sát chuyên nghiệp, đảm bảo tiến độ và chất lượng</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-blue-900 text-white p-8 rounded-lg text-center">
            <h2 className="font-serif text-2xl font-bold mb-4">Hân hạnh phục vụ quý khách hàng</h2>
            <p className="text-blue-100 mb-6">
              Liên hệ với chúng tôi để được tư vấn miễn phí và nhận những phần quà hấp dẫn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0908592690"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                📞 Gọi ngay: 0908.592.690
              </a>
              <a
                href="mailto:tkxdnhattien@gmail.com"
                className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                ✉️ Email: tkxdnhattien@gmail.com
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
