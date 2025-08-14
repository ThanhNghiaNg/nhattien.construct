import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">NT</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">Nhất Tiến</h3>
                <p className="text-sm text-gray-400">Thiết kế & Xây dựng</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Công ty TNHH Tư vấn Thiết kế Xây dựng Nhất Tiến - "Thực hiện ước mơ của bạn". Đơn vị uy tín hàng đầu trong
              lĩnh vực thiết kế và thi công các công trình dân dụng, công nghiệp.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/gioi-thieu" className="text-gray-300 hover:text-white transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="text-gray-300 hover:text-white transition-colors">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/du-an" className="text-gray-300 hover:text-white transition-colors">
                  Dự án
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc" className="text-gray-300 hover:text-white transition-colors">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-gray-300 hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Dịch vụ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/dich-vu/thiet-ke-kien-truc" className="text-gray-300 hover:text-white transition-colors">
                  Thiết kế kiến trúc
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/thi-cong-xay-dung" className="text-gray-300 hover:text-white transition-colors">
                  Thi công xây dựng
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/giam-sat-cong-trinh" className="text-gray-300 hover:text-white transition-colors">
                  Giám sát công trình
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/biet-thu" className="text-gray-300 hover:text-white transition-colors">
                  Xây dựng biệt thự
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/nha-pho" className="text-gray-300 hover:text-white transition-colors">
                  Xây dựng nhà phố
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Thông tin liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">39/5C Đường 22, KP7, P.Linh Đông, TP.Thủ Đức, TP.HCM</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Hotline: 0908.592.690</p>
                  <p>ĐT: 0866.579.463</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">tkxdnhattien@gmail.com</p>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-800">
              <p className="text-gray-400 text-xs">GPKD: 0312451054</p>
              <p className="text-gray-400 text-xs">Ngày cấp: 9/9/2013</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Công ty TNHH Tư vấn Thiết kế Xây dựng Nhất Tiến. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
