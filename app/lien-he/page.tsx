import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Liên Hệ - Công ty TNHH Tư vấn Thiết kế Xây dựng Nhất Tiến",
  description:
    "Liên hệ với Nhất Tiến để được tư vấn miễn phí về thiết kế và thi công xây dựng. Hotline: 0908592690, Email: tkxdnhattien@gmail.com. Địa chỉ: 39/5C Đường 22, P.Linh Đông, TP.Thủ Đức.",
  keywords: "liên hệ nhất tiến, tư vấn xây dựng, hotline xây dựng, địa chỉ công ty xây dựng thủ đức",
}

export default function LienHePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              <Home className="h-4 w-4" />
            </Link>
            <span>/</span>
            <span className="text-gray-900">Liên hệ</span>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Liên Hệ Với Chúng Tôi</h1>
            <p className="text-xl mb-8 text-blue-100">Sẵn sàng tư vấn miễn phí và hỗ trợ khách hàng 24/7</p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Thông Tin Liên Hệ</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Phone className="h-6 w-6 text-blue-600" />
                      Hotline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-lg font-semibold">0908592690</div>
                      <div className="text-gray-600">Mr. Tiến - Giám đốc</div>
                      <div className="text-lg font-semibold">0866.579.463</div>
                      <div className="text-gray-600">Tư vấn kỹ thuật</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Mail className="h-6 w-6 text-blue-600" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg">tkxdnhattien@gmail.com</div>
                    <div className="text-gray-600">Gửi yêu cầu tư vấn qua email</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      Địa Chỉ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold">39/5C Đường 22, KP7</div>
                    <div className="text-gray-600">P.Linh Đông, TP.Thủ Đức, TP.HCM</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-blue-600" />
                      Giờ Làm Việc
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <div>
                        <strong>Thứ 2 - Thứ 7:</strong> 8:00 - 17:30
                      </div>
                      <div>
                        <strong>Chủ nhật:</strong> 8:00 - 12:00
                      </div>
                      <div className="text-sm text-gray-600 mt-2">Hỗ trợ khẩn cấp 24/7</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Gửi Yêu Cầu Tư Vấn</CardTitle>
                  <CardDescription>Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong 24h</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Họ và tên *
                        </label>
                        <Input id="name" placeholder="Nhập họ và tên" required />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Số điện thoại *
                        </label>
                        <Input id="phone" type="tel" placeholder="Nhập số điện thoại" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Nhập địa chỉ email" />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Dịch vụ quan tâm
                      </label>
                      <select
                        id="service"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Chọn dịch vụ</option>
                        <option value="thiet-ke-biet-thu">Thiết kế biệt thự</option>
                        <option value="thiet-ke-nha-pho">Thiết kế nhà phố</option>
                        <option value="thi-cong-xay-dung">Thi công xây dựng</option>
                        <option value="thiet-ke-nha-xuong">Thiết kế nhà xưởng</option>
                        <option value="giam-sat-cong-trinh">Giám sát công trình</option>
                        <option value="khac">Khác</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Nội dung tư vấn *
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Mô tả chi tiết về dự án, yêu cầu thiết kế, ngân sách dự kiến..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Gửi yêu cầu tư vấn
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vị Trí Văn Phòng</h2>
            <p className="text-lg text-gray-600">39/5C Đường 22, KP7, P.Linh Đông, TP.Thủ Đức, TP.HCM</p>
          </div>

          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p>Bản đồ Google Maps sẽ được tích hợp tại đây</p>
              <p className="text-sm mt-2">39/5C Đường 22, KP7, P.Linh Đông, TP.Thủ Đức, TP.HCM</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Cần Hỗ Trợ Ngay?</h2>
          <p className="text-xl mb-8 text-blue-100">Gọi hotline để được tư vấn trực tiếp</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="tel:0908592690">
                <Phone className="mr-2 h-5 w-5" />
                Gọi ngay: 0908592690
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="https://zalo.me/0908592690" target="_blank">
                Chat Zalo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
