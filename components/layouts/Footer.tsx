// components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Bot,
  FileText,
  Github,
  Map,
  Mail,
  School,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 relative overflow-hidden">
      {/* --- Decoration Top Border --- */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600"></div>

      {/* --- Background Pattern --- */}
      <div
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* --- CỘT 1: GIỚI THIỆU & SỨ MỆNH (Chiếm 4 phần) --- */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="font-serif text-2xl text-white font-bold tracking-tight">
                Philosophy <span className="text-yellow-500">&</span> Code
              </h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                Nhóm Nghiên cứu FPT University
              </p>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm">
              Dự án tiên phong trong việc vận dụng{" "}
              <strong>Phép biện chứng duy vật</strong> để giải mã sự tiến hóa
              của kiến trúc phần mềm. <br />
              Chúng tôi chứng minh rằng công nghệ không thay đổi ngẫu nhiên, mà
              tuân theo quy luật <em>Phủ định của phủ định</em>.
            </p>

            <div className="flex gap-4">
              {/* Link Github nếu có */}
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-700 bg-slate-900 hover:bg-white hover:text-slate-900 transition-colors"
              >
                <Github className="w-4 h-4" />
              </Button>
              {/* Link trường học */}
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-700 bg-slate-900 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors"
              >
                <School className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* --- CỘT 2: LỘ TRÌNH NGHIÊN CỨU (Sitemap) (Chiếm 3 phần) --- */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-bold text-white flex items-center gap-2">
              <Map className="w-4 h-4 text-yellow-500" /> Lộ trình (Sitemap)
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/research"
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-yellow-500 transition-colors"></span>
                  1. Khám phá & Đặt câu hỏi
                </Link>
              </li>
              <li>
                <Link
                  href="/case-study"
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-yellow-500 transition-colors"></span>
                  2. Thực chứng (Case Study)
                </Link>
              </li>
              <li>
                <Link
                  href="/simulation"
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-yellow-500 transition-colors"></span>
                  3. Mô phỏng Kỹ thuật
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-yellow-500 transition-colors"></span>
                  4. Tin tức & Bài viết
                </Link>
              </li>
            </ul>
          </div>

          {/* --- CỘT 3: TÀI NGUYÊN & ĐÓNG GÓP (Chiếm 3 phần) --- */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-yellow-500" /> Tài nguyên
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="/docs/Bao_Cao_Tieu_Luan_Nhom_X.pdf"
                  download
                  className="group block"
                >
                  <div className="text-slate-300 font-medium group-hover:text-yellow-400 transition-colors flex items-center gap-2">
                    Báo cáo Tiểu luận (.pdf){" "}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Full 20 trang phân tích chi tiết
                  </p>
                </a>
              </li>
              <li>
                <div className="group block cursor-not-allowed opacity-70">
                  <div className="text-slate-300 font-medium flex items-center gap-2">
                    Source Code Demo
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Next.js, Tailwind, Framer Motion
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* --- CỘT 4: MINH BẠCH & LIÊN HỆ (Chiếm 2 phần) --- */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-white flex items-center gap-2">
              Thông tin
            </h4>

            {/* AI Transparency Button */}
            <Link href="/ai-usage">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2 border-slate-700 bg-transparent text-slate-400 hover:text-yellow-400 hover:border-yellow-500 hover:bg-slate-900/50 transition-all mb-4"
              >
                <Bot className="w-4 h-4" />
                AI Usage Report
              </Button>
            </Link>

            <div className="space-y-2 text-sm text-slate-500">
              <p className="flex items-center gap-2">
                <Mail className="w-3 h-3" /> nhom7@fpt.edu.vn
              </p>
              <p>FPT University HCMC</p>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-600">
          <p>© 2026 Philosophy Research Group. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built with Next.js 15</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>Tailwind CSS</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>Shadcn UI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
