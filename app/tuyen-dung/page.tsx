import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tuyển Dụng - Cơ Hội Nghề Nghiệp | Nhất Tiến",
  description:
    "Tuyển dụng nhân sự cho các vị trí: kiến trúc sư, kỹ sư xây dựng, thợ xây, giám sát công trình. Môi trường làm việc chuyên nghiệp, lương thưởng hấp dẫn.",
  keywords: "tuyển dụng, việc làm xây dựng, kiến trúc sư, kỹ sư xây dựng, thợ xây",
}

const jobPositions = [
  {
    title: "Kiến Trúc Sư",
    department: "Thiết kế",
    type: "Toàn thời gian",
    salary: "15-25 triệu",
    requirements: [
      "Tốt nghiệp đại học chuyên ngành Kiến trúc",
      "Có kinh nghiệm 2-3 năm",
      "Thành thạo AutoCAD, SketchUp, 3D Max",
      "Có khả năng làm việc nhóm",
    ],
    benefits: ["Lương cạnh tranh", "Thưởng dự án", "Bảo hiểm đầy đủ", "Đào tạo nâng cao"],
  },
  {
    title: "Kỹ Sư Xây Dựng",
    department: "Thi công",
    type: "Toàn thời gian",
    salary: "12-20 triệu",
    requirements: [
      "Tốt nghiệp đại học chuyên ngành Xây dựng",
      "Có kinh nghiệm giám sát công trình",
      "Hiểu biết về vật liệu xây dựng",
      "Có trách nhiệm và tính kỷ luật cao",
    ],
    benefits: ["Lương theo năng lực", "Phụ cấp công trình", "Bảo hiểm tai nạn", "Cơ hội thăng tiến"],
  },
  {
    title: "Thợ Xây Chính",
    department: "Thi công",
    type: "Toàn thời gian",
    salary: "8-15 triệu",
    requirements: [
      "Có kinh nghiệm xây dựng từ 3 năm trở lên",
      "Thành thạo các kỹ thuật xây dựng",
      "Có khả năng đọc bản vẽ",
      "Sức khỏe tốt, chịu được áp lực công việc",
    ],
    benefits: ["Lương theo sản phẩm", "Thưởng hoàn thành", "Hỗ trợ ăn trưa", "Nghỉ phép có lương"],
  },
  {
    title: "Giám Sát Công Trình",
    department: "Quản lý",
    type: "Toàn thời gian",
    salary: "10-18 triệu",
    requirements: [
      "Tốt nghiệp cao đẳng/đại học xây dựng",
      "Có kinh nghiệm giám sát từ 2 năm",
      "Có chứng chỉ hành nghề",
      "Có xe máy, biết lái xe",
    ],
    benefits: ["Lương cố định", "Phụ cấp xăng xe", "Bảo hiểm xã hội", "Thưởng cuối năm"],
  },
]

const companyBenefits = [
  {
    icon: "💰",
    title: "Lương Thưởng Hấp Dẫn",
    description: "Mức lương cạnh tranh, thưởng theo hiệu quả công việc",
  },
  {
    icon: "🏥",
    title: "Bảo Hiểm Đầy Đủ",
    description: "Bảo hiểm xã hội, y tế, tai nạn lao động",
  },
  {
    icon: "📚",
    title: "Đào Tạo Nâng Cao",
    description: "Cơ hội học hỏi, nâng cao kỹ năng chuyên môn",
  },
  {
    icon: "🚀",
    title: "Cơ Hội Thăng Tiến",
    description: "Môi trường phát triển, cơ hội thăng tiến rõ ràng",
  },
]

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tuyển Dụng</h1>
            <p className="text-xl mb-8 text-green-100">
              Gia nhập đội ngũ Nhất Tiến - Nơi phát triển sự nghiệp trong lĩnh vực xây dựng
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#jobs"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Xem vị trí tuyển dụng
              </Link>
              <Link
                href="/lien-he"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Liên hệ HR
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tại Sao Chọn Làm Việc Tại Nhất Tiến?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết tạo môi trường làm việc tốt nhất cho nhân viên
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section id="jobs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vị Trí Đang Tuyển Dụng</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobPositions.map((job, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                      <p className="text-gray-600 text-sm">{job.department}</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {job.type}
                      </span>
                      <p className="text-green-600 font-semibold mt-1">{job.salary}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Yêu cầu:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Quyền lợi:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.benefits.map((benefit, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/lien-he"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block"
                  >
                    Ứng tuyển ngay
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quy Trình Ứng Tuyển</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Nộp Hồ Sơ</h3>
              <p className="text-gray-600 text-sm">Gửi CV và thư xin việc qua email hoặc trực tiếp</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sàng Lọc</h3>
              <p className="text-gray-600 text-sm">HR sẽ liên hệ và sàng lọc hồ sơ phù hợp</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Phỏng Vấn</h3>
              <p className="text-gray-600 text-sm">Phỏng vấn trực tiếp với quản lý bộ phận</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Nhận Việc</h3>
              <p className="text-gray-600 text-sm">Thông báo kết quả và ký hợp đồng lao động</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn Sàng Gia Nhập Đội Ngũ Nhất Tiến?</h2>
          <p className="text-xl mb-8 text-green-100">Hãy liên hệ với chúng tôi để bắt đầu hành trình sự nghiệp</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Liên hệ HR
            </Link>
            <a
              href="mailto:tkxdnhattien@gmail.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Gửi CV: tkxdnhattien@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
