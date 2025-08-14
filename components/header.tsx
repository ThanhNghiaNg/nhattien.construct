"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/gioi-thieu" },
    {
      name: "Dịch vụ",
      href: "/dich-vu",
      dropdown: [
        { name: "Thiết kế nhà online", href: "/dich-vu/thiet-ke-nha-online" },
        { name: "Đơn giá thi công", href: "/dich-vu/don-gia-thi-cong" },
        { name: "Đơn giá thiết kế", href: "/dich-vu/don-gia-thiet-ke" },
        { name: "Chi tiết vật tư", href: "/dich-vu/chi-tiet-vat-tu" },
        { name: "Quy trình thiết kế", href: "/dich-vu/quy-trinh-thiet-ke" },
        { name: "Quy trình thi công", href: "/dich-vu/quy-trinh-thi-cong" },
      ],
    },
    {
      name: "Thiết kế kiến trúc",
      href: "/thiet-ke-kien-truc",
      dropdown: [
        { name: "Thiết kế nhà xưởng", href: "/thiet-ke-kien-truc/nha-xuong" },
        { name: "Thiết kế showroom", href: "/thiet-ke-kien-truc/showroom" },
        { name: "Thiết kế nhà phố", href: "/thiet-ke-kien-truc/nha-pho" },
        { name: "Thiết kế biệt thự", href: "/thiet-ke-kien-truc/biet-thu" },
        { name: "Thiết kế cà phê", href: "/thiet-ke-kien-truc/ca-phe" },
        { name: "Thiết kế karaoke", href: "/thiet-ke-kien-truc/karaoke" },
        { name: "Thiết kế bar - vũ trường", href: "/thiet-ke-kien-truc/bar-vu-truong" },
      ],
    },
    { name: "Thi công xây dựng", href: "/thi-cong-xay-dung" },
    {
      name: "Thiết kế nội thất",
      href: "/thiet-ke-noi-that",
      dropdown: [
        { name: "Nội thất phòng tắm", href: "/thiet-ke-noi-that/phong-tam" },
        { name: "Nội thất phòng ngủ", href: "/thiet-ke-noi-that/phong-ngu" },
        { name: "Nội thất phòng khách", href: "/thiet-ke-noi-that/phong-khach" },
        { name: "Nội thất nhà bếp", href: "/thiet-ke-noi-that/nha-bep" },
      ],
    },
    {
      name: "Cẩm nang xây dựng",
      href: "/cam-nang-xay-dung",
      dropdown: [
        { name: "Cẩm nang xây nhà", href: "/cam-nang-xay-dung/xay-nha" },
        { name: "Phong thủy", href: "/cam-nang-xay-dung/phong-thuy" },
        { name: "Nội ngoại thất", href: "/cam-nang-xay-dung/noi-ngoai-that" },
        { name: "Không gian sống", href: "/cam-nang-xay-dung/khong-gian-song" },
      ],
    },
    { name: "Tuyển dụng", href: "/tuyen-dung" },
    { name: "Liên hệ", href: "/lien-he" },
  ]

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <>
      {/* Top bar */}
      <div className="bg-gray-800 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Hotline: 0908.592.690</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>tkxdnhattien@gmail.com</span>
            </div>
          </div>
          <div className="text-sm">Thời gian làm việc: 8:00 - 17:30 (Thứ 2 - Thứ 7)</div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">NT</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-serif font-bold text-xl text-gray-800">Nhất Tiến</h1>
                <p className="text-sm text-gray-600">Thiết kế & Xây dựng</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-sm"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                      </button>
                      {activeDropdown === item.name && (
                        <div
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-sm"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/lien-he">Tư vấn miễn phí</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="pl-4 py-2 space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100 last:border-b-0 block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Button asChild className="bg-blue-600 hover:bg-blue-700 mt-4">
                  <Link href="/lien-he" onClick={() => setIsMenuOpen(false)}>
                    Tư vấn miễn phí
                  </Link>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
