import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Calculator, FileText, Wrench, Eye, DollarSign, Building, Home, Factory } from "lucide-react"

export const metadata: Metadata = {
  title: "Dịch Vụ - Công ty TNHH Tư vấn Thiết kế Xây dựng Nhất Tiến",
  description:
    "Dịch vụ thiết kế xây dựng chuyên nghiệp: thiết kế nhà online, thi công xây dựng, giám sát công trình với đơn giá cạnh tranh và chất lượng cao.",
  keywords: "dịch vụ xây dựng, thiết kế nhà online, thi công xây dựng, giám sát công trình, đơn giá xây dựng",
}

const services = [
  {
    title: "Dịch Vụ Thiết Kế Nhà Online",
    description: "Thiết kế nhà online nhanh, rẻ, an toàn, hợp phong thủy, đúng ý khách hàng",
    icon: <Home className="h-8 w-8" />,
    href: "/dich-vu/thiet-ke-nha-online",
    price: "Từ 100.000đ/m²",
  },
  {
    title: "Chi Tiết Vật Tư Phần Thô",
    description: "Danh sách chi tiết vật tư xây dựng phần thô và hoàn thiện chất lượng cao",
    icon: <Building className="h-8 w-8" />,
    href: "/dich-vu/chi-tiet-vat-tu",
    price: "Báo giá chi tiết",
  },
  {
    title: "Quy Trình Thiết Kế Xây Dựng",
    description: "Quy trình thiết kế chuyên nghiệp từ ý tưởng đến bản vẽ hoàn chỉnh",
    icon: <FileText className="h-8 w-8" />,
    href: "/dich-vu/quy-trinh-thiet-ke",
    price: "Tư vấn miễn phí",
  },
  {
    title: "Quy Trình Thi Công Xây Dựng",
    description: "Quy trình thi công xây dựng chuẩn, đảm bảo chất lượng và tiến độ",
    icon: <Wrench className="h-8 w-8" />,
    href: "/dich-vu/quy-trinh-thi-cong",
    price: "Tư vấn miễn phí",
  },
  {
    title: "Đơn Giá Thi Công Xây Dựng",
    description: "Bảng đơn giá thi công xây dựng cập nhật, minh bạch và cạnh tranh",
    icon: <DollarSign className="h-8 w-8" />,
    href: "/dich-vu/don-gia-thi-cong",
    price: "Từ 3.4tr/m²",
  },
  {
    title: "Đơn Giá Thiết Kế Xây Dựng",
    description: "Bảng giá thiết kế kiến trúc, kết cấu, 3D phối cảnh chuyên nghiệp",
    icon: <Calculator className="h-8 w-8" />,
    href: "/dich-vu/don-gia-thiet-ke",
    price: "Từ 100.000đ/m²",
  },
  {
    title: "Đơn Giá Giám Sát Công Trình",
    description: "Dịch vụ giám sát công trình chuyên nghiệp, đảm bảo chất lượng xây dựng",
    icon: <Eye className="h-8 w-8" />,
    href: "/dich-vu/don-gia-giam-sat",
    price: "Liên hệ báo giá",
  },
  {
    title: "Hợp Đồng Mẫu Thiết Kế",
    description: "Mẫu hợp đồng thiết kế chuẩn pháp lý, bảo vệ quyền lợi khách hàng",
    icon: <FileText className="h-8 w-8" />,
    href: "/dich-vu/hop-dong-thiet-ke",
    price: "Miễn phí",
  },
  {
    title: "Hợp Đồng Mẫu Thi Công",
    description: "Mẫu hợp đồng thi công xây dựng đầy đủ, rõ ràng và minh bạch",
    icon: <Factory className="h-8 w-8" />,
    href: "/dich-vu/hop-dong-thi-cong",
    price: "Miễn phí",
  },
]

export default function DichVuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dịch Vụ Xây Dựng Chuyên Nghiệp</h1>
            <p className="text-xl mb-8 text-blue-100">
              Công ty TNHH Tư vấn Thiết kế Xây dựng Nhất Tiến - Thực hiện ước mơ của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="tel:0908592690">
                  <Phone className="mr-2 h-5 w-5" />
                  Hotline: 0908592690
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link href="mailto:tkxdnhattien@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email tư vấn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Các Dịch Vụ Của Chúng Tôi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cam kết bảo hành 1 năm và sẵn sàng hỗ trợ khách hàng 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-blue-600">{service.icon}</div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                    <Button asChild variant="outline">
                      <Link href={service.href}>Xem chi tiết</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn Sàng Bắt Đầu Dự Án Của Bạn?</h2>
          <p className="text-xl mb-8 text-blue-100">Liên hệ ngay để được tư vấn miễn phí và báo giá chi tiết</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/lien-he">Liên hệ tư vấn</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/du-toan">
                <Calculator className="mr-2 h-5 w-5" />
                Tính giá xây dựng
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
