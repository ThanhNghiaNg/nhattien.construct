import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Calculator, Info, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Đơn Giá Thi Công Xây Dựng - Nhất Tiến",
  description:
    "Bảng đơn giá thi công xây dựng cập nhật 2024: nhà cấp 4, nhà phố, biệt thự. Giá cạnh tranh từ 3.4tr/m² đến 6tr/m² chìa khóa trao tay.",
  keywords: "đơn giá thi công, giá xây nhà, thi công xây dựng, nhà phố, biệt thự, nhà cấp 4",
}

const constructionPrices = [
  {
    type: "Nhà Cấp 4",
    laborCost: "1.6 - 1.8 triệu/m²",
    turnkeyPrice: "4.2 - 5 triệu/m²",
    description: "Phù hợp cho nhà ở đơn giản, tiết kiệm chi phí",
    popular: false,
  },
  {
    type: "Nhà Phố",
    laborCost: "1.6 - 1.8 triệu/m²",
    roughFinish: "3.45 - 3.8 triệu/m²",
    turnkeyPrice: "5.2 - 5.8 triệu/m²",
    description: "Thiết kế hiện đại, phù hợp khu đô thị",
    popular: true,
  },
  {
    type: "Biệt Thự",
    laborCost: "1.8 - 2.0 triệu/m²",
    roughFinish: "3.8 - 4.0 triệu/m²",
    turnkeyPrice: "Từ 6 triệu/m²",
    description: "Cao cấp, thiết kế độc đáo, vật liệu chất lượng",
    popular: false,
  },
]

const otherPrices = [
  {
    category: "Khách sạn, Nhà hàng",
    roughPrice: "3.5 - 3.6 triệu/m²",
    turnkeyPrice: "Từ 6 triệu/m²",
  },
  {
    category: "Cao ốc Văn phòng",
    roughPrice: "3.4 - 4.2 triệu/m²",
    turnkeyPrice: "Từ 5.5 triệu/m²",
  },
  {
    category: "Nhà xưởng, nhà kho",
    roughPrice: "",
    turnkeyPrice: "Từ 3.4 triệu/m²",
  },
]

const calculationRules = [
  "Móng cọc: 30% diện tích sàn trệt, móng băng 45% diện tích tầng trệt",
  "Trệt, các lầu và sàn mái (chuồng cú) tính: 100% diện tích",
  "Các ô trống, giếng trời nhỏ hơn 8m² tính: 100% diện tích",
  "Các ô trống, giếng trời lớn hơn 8m² tính: 50% diện tích",
  "Mái bê tông cốt thép 50%, mái ngói: 70% diện tích",
  "Mái bê tông dán ngói tính thành 100% diện tích",
  "Mái tole: 30% diện tích (nhân hệ số nghiêng)",
  "Phần sân có mái che phủ tính 100% diện tích",
  "Phần sân nếu diện tích <10m² thì tính 100% diện tích. Nếu sân lớn >10m² thì tính 50% diện tích",
]

const includedServices = [
  "Tổ chức công trường, lán trại cho công nhân, kho bãi",
  "Dọn dẹp, vệ sinh, phát quang mặt bằng, định vị mặt bằng, cốt cao độ",
  "Đào đất, lấp đất móng, hầm phốt, hố ga",
  "Thi công móng (nếu là móng cọc: từ đầu cọc ép, đầu cọc cọc khoan nhồi trở lên)",
  "Thi công bê tông cốt thép dầm, sàn, vách tầng hầm (nếu có)",
  "Thi công bê tông cốt thép móng, dầm móng, đài cọc, cổ cột, đà kiềng",
  "Thi công hầm phốt, hố ga, bể đựng bồn nước ngầm",
  "Thi công bê tông cốt thép cột, bê tông cốt thép dầm sàn các tầng",
  "Thi công bê tông cốt thép cầu thang, xây bậc bằng gạch",
  "Xây tô tường bao, tường ngăn, vách theo bản vẽ thiết kế",
  "Lắp đặt hệ thống đường dây âm tường (điện, cáp TV, cáp ADSL, cáp điện thoại)",
  "Lắp đặt ống cấp & thoát nước lạnh uPVC",
  "Thi công chống thấm WC, ban công, sân thượng",
]

export default function DonGiaThiCongPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Đơn Giá Thi Công Xây Dựng</h1>
            <p className="text-xl mb-8 text-orange-100">
              Bảng giá thi công xây dựng cập nhật, minh bạch và cạnh tranh nhất thị trường
            </p>
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
                className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600"
                asChild
              >
                <Link href="/du-toan">
                  <Calculator className="mr-2 h-5 w-5" />
                  Tính giá xây dựng
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bảng Đơn Giá Thi Công Chính</h2>
            <p className="text-lg text-gray-600">
              Giá đã bao gồm coppha, dàn giáo, công đào đất móng và chi phí ăn ở cho thợ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {constructionPrices.map((price, index) => (
              <Card key={index} className={`relative ${price.popular ? "border-orange-500 shadow-lg scale-105" : ""}`}>
                {price.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600">
                    Phổ biến nhất
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{price.type}</CardTitle>
                  <p className="text-gray-600">{price.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-b pb-2">
                    <div className="text-sm text-gray-500">Nhân công</div>
                    <div className="text-lg font-semibold">{price.laborCost}</div>
                  </div>
                  {price.roughFinish && (
                    <div className="border-b pb-2">
                      <div className="text-sm text-gray-500">Phần thô + hoàn thiện</div>
                      <div className="text-lg font-semibold">{price.roughFinish}</div>
                    </div>
                  )}
                  <div className="border-b pb-2">
                    <div className="text-sm text-gray-500">Chìa khóa trao tay</div>
                    <div className="text-xl font-bold text-orange-600">{price.turnkeyPrice}</div>
                  </div>
                  <Button className="w-full" variant={price.popular ? "default" : "outline"} asChild>
                    <Link href="tel:0908592690">Liên hệ báo giá</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Prices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Đơn Giá Công Trình Khác</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPrices.map((price, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{price.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {price.roughPrice && (
                      <div>
                        <div className="text-sm text-gray-500">Phần thô</div>
                        <div className="font-semibold">{price.roughPrice}</div>
                      </div>
                    )}
                    <div>
                      <div className="text-sm text-gray-500">Chìa khóa trao tay</div>
                      <div className="font-semibold text-orange-600">{price.turnkeyPrice}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculation Rules */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cách Tính Hệ Số Xây Dựng (m² sàn)</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Quy tắc tính diện tích
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {calculationRules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Các Hạng Mục Bao Gồm</h2>
            <Card>
              <CardHeader>
                <CardTitle>Hạng mục cung cấp cả nhân công & vật tư thô</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {includedServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Cần Báo Giá Chi Tiết Cho Dự Án?</h2>
          <p className="text-xl mb-8 text-orange-100">Liên hệ ngay để được tư vấn và báo giá chính xác nhất</p>
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
              className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600"
              asChild
            >
              <Link href="mailto:tkxdnhattien@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email tư vấn
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
