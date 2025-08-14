import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Shield, Heart, Zap, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Dịch Vụ Thiết Kế Nhà Online - Nhất Tiến",
  description:
    "Dịch vụ thiết kế nhà online nhanh, rẻ, an toàn, hợp phong thủy, đúng ý. Quy trình 7 bước chuyên nghiệp với giá từ 100.000đ/m².",
  keywords: "thiết kế nhà online, thiết kế nhà phố, thiết kế biệt thự, 3D phối cảnh, hồ sơ kỹ thuật",
}

const processSteps = [
  {
    step: 1,
    title: "Tìm hiểu nhu cầu khách hàng",
    description:
      "Trao đổi thông tin sơ bộ: nhu cầu, chi phí dự trù, thói quen, sở thích, phong thủy, phong cách thiết kế, thông tin khu đất, pháp lý...",
  },
  {
    step: 2,
    title: "Triển khai hồ sơ thiết kế",
    description:
      "Giai đoạn 1: Thiết kế cơ sở - Trình bày online phương án mặt bằng tổng thể, mặt bằng các công trình và ký hợp đồng thiết kế",
  },
  {
    step: 3,
    title: "Bàn giao hồ sơ giai đoạn 1",
    description: "Gửi hồ sơ qua mail, qua zalo bằng file PDF và file ảnh",
  },
  {
    step: 4,
    title: "Triển khai giai đoạn 2",
    description:
      "Thiết kế kỹ thuật: Hồ sơ giai đoạn 1 cập nhật, hình ảnh phối cảnh công trình mặt ngoài, mặt trong các phối cảnh nội thất, Review 3D mặt bằng",
  },
  {
    step: 5,
    title: "Bàn giao hồ sơ giai đoạn 2",
    description: "Gửi hồ sơ qua mail, qua zalo bằng file PDF và file ảnh",
  },
  {
    step: 6,
    title: "Triển khai giai đoạn 3",
    description: "Kỹ thuật thi công: Hồ sơ kỹ thuật thi công bao gồm các phần Kiến Trúc, Kết Cấu, Điện, Cấp Thoát Nước",
  },
  {
    step: 7,
    title: "Bàn giao trọn bộ hồ sơ",
    description:
      "Gửi hồ sơ qua mail, qua zalo bằng file PDF và file ảnh. Sau khi thanh toán, in 2 bộ hồ sơ gửi qua bưu điện hoặc shipper",
  },
]

const pricing = [
  {
    type: "Thiết kế nhà phố",
    price: "120.000đ/m²",
    includes: "Thiết kế 3D nội, ngoại thất + Hồ sơ thiết kế kỹ thuật thi công: kiến trúc, điện, nước, kết cấu",
    popular: true,
  },
  {
    type: "Thiết kế biệt thự",
    price: "150.000đ/m²",
    includes: "Thiết kế 3D nội, ngoại thất + Hồ sơ thiết kế kỹ thuật thi công: kiến trúc, điện, nước, kết cấu",
    popular: false,
  },
]

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Nhanh chóng",
    description: "Quy trình làm việc tối ưu, giao hồ sơ đúng tiến độ",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "An toàn",
    description: "Đảm bảo an toàn thông tin và chất lượng thiết kế",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Hợp phong thủy",
    description: "Thiết kế theo nguyên tắc phong thủy phù hợp gia chủ",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Đúng ý khách hàng",
    description: "Lắng nghe và thực hiện đúng yêu cầu của khách hàng",
  },
]

export default function ThietKeNhaOnlinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dịch Vụ Thiết Kế Nhà Online</h1>
            <p className="text-xl mb-8 text-green-100">Nhanh - Rẻ - An Toàn - Hợp Phong Thủy - Đúng Ý</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="tel:0908592690">
                  <Phone className="mr-2 h-5 w-5" />
                  Hotline: 0908.592.690
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-green-600"
                asChild
              >
                <Link href="mailto:tkxdnhattien@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Tư vấn ngay
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại Sao Chọn Dịch Vụ Online?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quy Trình Thiết Kế Nhà Online</h2>
            <p className="text-lg text-gray-600">7 bước thiết kế nhà online chuyên nghiệp</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bảng Báo Giá Thiết Kế Online</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? "border-green-500 shadow-lg" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                    Phổ biến nhất
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.type}</CardTitle>
                  <div className="text-3xl font-bold text-green-600">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{plan.includes}</p>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link href="tel:0908592690">Liên hệ báo giá</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Thiết Kế Nhà Đẹp Chưa Bao Giờ Đơn Giản Đến Vậy</h2>
          <p className="text-xl mb-8 text-green-100">Còn chần chờ gì nữa mà không nhấn nút gọi ngay!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="tel:0908592690">
                <Phone className="mr-2 h-5 w-5" />
                Gọi ngay: 0908.592.690
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-green-600"
              asChild
            >
              <Link href="https://zalo.me/0908592690" target="_blank">
                Nhắn tin Zalo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
