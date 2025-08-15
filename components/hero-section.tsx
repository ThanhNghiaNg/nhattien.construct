import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Công ty TNHH Tư vấn
                <span className="text-blue-600 block">Thiết kế Xây dựng</span>
                <span className="text-orange-500 block">Nhất Tiến</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                <strong className="text-blue-700">"Thực hiện ước mơ của bạn"</strong> - Nhất Tiến nơi bạn gửi trọn niềm
                tin. Chuyên thiết kế và thi công các công trình dân dụng, biệt thự, nhà phố, cao ốc văn phòng tại TP.HCM
                và các tỉnh lân cận.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Thiết kế sáng tạo, hiện đại",
                "Thi công chuyên nghiệp",
                "Cam kết bảo hành 1 năm",
                "Hỗ trợ khách hàng 24/7",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                <Link href="/lien-he">
                  Tư vấn miễn phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link href="/du-an">Xem dự án</Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-3">Liên hệ ngay để nhận ưu đãi:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Hotline:</span>
                  <a href="tel:0908592690" className="block font-semibold text-blue-600 hover:text-blue-700">
                    0908592690
                  </a>
                </div>
                <div>
                  <span className="text-gray-600">Email:</span>
                  <a
                    href="mailto:tkxdnhattien@gmail.com"
                    className="block font-semibold text-blue-600 hover:text-blue-700"
                  >
                    tkxdnhattien@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Công trình xây dựng Nhất Tiến"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Chất lượng A+</div>
                  <div className="text-sm text-gray-600">Đảm bảo tiêu chuẩn</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">24/7</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Hỗ trợ</div>
                  <div className="text-sm text-gray-600">Tư vấn miễn phí</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
