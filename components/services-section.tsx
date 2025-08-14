import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Building2, Palette, Wrench, FileText, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Thiết kế nhà ở",
    description: "Thiết kế nhà ở hiện đại, phù hợp với nhu cầu và phong cách sống của gia đình.",
    features: ["Thiết kế 2D, 3D", "Tối ưu không gian", "Phong thủy hợp lý"],
    href: "/dich-vu/thiet-ke-nha-o",
  },
  {
    icon: Building2,
    title: "Xây dựng biệt thự",
    description: "Thi công biệt thự cao cấp với chất lượng hoàn thiện tốt nhất.",
    features: ["Vật liệu cao cấp", "Thi công chuyên nghiệp", "Bàn giao đúng hạn"],
    href: "/dich-vu/xay-dung-biet-thu",
  },
  {
    icon: Palette,
    title: "Thiết kế nội thất",
    description: "Thiết kế nội thất sang trọng, tiện nghi và phù hợp với không gian.",
    features: ["Phong cách đa dạng", "Tối ưu công năng", "Màu sắc hài hòa"],
    href: "/dich-vu/noi-that",
  },
  {
    icon: Wrench,
    title: "Sửa chữa nhà",
    description: "Dịch vụ sửa chữa, cải tạo nhà cũ thành không gian mới hiện đại.",
    features: ["Cải tạo toàn diện", "Nâng cấp tiện nghi", "Tiết kiệm chi phí"],
    href: "/dich-vu/sua-chua",
  },
  {
    icon: FileText,
    title: "Xin phép xây dựng",
    description: "Hỗ trợ làm thủ tục xin phép xây dựng nhanh chóng, đúng quy định.",
    features: ["Thủ tục nhanh gọn", "Đúng quy định pháp luật", "Hỗ trợ toàn diện"],
    href: "/dich-vu/xin-phep",
  },
  {
    icon: Building2,
    title: "Xây dựng công nghiệp",
    description: "Thiết kế và thi công các công trình công nghiệp, nhà xưởng.",
    features: ["Quy mô lớn", "Tiêu chuẩn kỹ thuật cao", "Tiến độ đảm bảo"],
    href: "/dich-vu/cong-nghiep",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Dịch vụ của chúng tôi</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Chúng tôi cung cấp đầy đủ các dịch vụ từ thiết kế, thi công đến hoàn thiện, đáp ứng mọi nhu cầu xây dựng của
            khách hàng.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Tìm hiểu thêm
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/dich-vu">
              Xem tất cả dịch vụ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
