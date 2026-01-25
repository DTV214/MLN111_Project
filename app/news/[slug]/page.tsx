"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  User,
  Share2,
  Bookmark,
  Clock,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ArticlePage() {
  const params = useParams();
  const { slug } = params;

  return (
    <article className="min-h-screen bg-white pt-24 pb-20 font-sans">
      {/* --- HERO HEADER --- */}
      <div className="relative bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="container mx-auto px-4 py-20 max-w-4xl text-center relative z-10">
          <Link href="/news" className="inline-block mb-8">
            <Button
              variant="ghost"
              className="text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 rounded-full px-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại Thư viện
            </Button>
          </Link>

          <div className="flex justify-center gap-3 mb-6">
            <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 text-xs uppercase tracking-wider font-bold shadow-sm">
              Technology Analysis
            </Badge>
            <span className="text-slate-500 text-sm flex items-center bg-white px-3 py-1 rounded-full border border-slate-200">
              <Clock className="w-3 h-3 mr-2" /> 5 min read
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            {slug === "modular-monolith-trend"
              ? "Xu hướng Modular Monolith 2024: Sự trở lại của Vua"
              : "Bài viết chi tiết: " + slug}
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 border-t border-slate-200/60 pt-8 w-full md:w-fit mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                FPT
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-900">
                  Nhóm Nghiên Cứu
                </p>
                <p className="text-xs text-slate-500">Tác giả</p>
              </div>
            </div>
            <div className="hidden md:block h-8 w-[1px] bg-slate-300"></div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-full border border-slate-200 shadow-sm text-slate-500">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-900">
                  15 Tháng 01, 2026
                </p>
                <p className="text-xs text-slate-500">Ngày xuất bản</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT BODY --- */}
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12 max-w-6xl relative">
        {/* Side Bar (Sticky) */}
        <aside className="hidden lg:block w-1/4 sticky top-32 h-fit">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
            <p className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-6 border-b border-slate-200 pb-2">
              Mục lục nội dung
            </p>
            <nav className="space-y-1">
              <a
                href="#section-1"
                className="block text-sm text-slate-600 hover:text-yellow-700 py-2 px-3 rounded-lg hover:bg-yellow-50 transition-colors border-l-2 border-transparent hover:border-yellow-500 truncate"
              >
                1. Vấn đề của Microservices
              </a>
              <a
                href="#section-2"
                className="block text-sm text-slate-600 hover:text-yellow-700 py-2 px-3 rounded-lg hover:bg-yellow-50 transition-colors border-l-2 border-transparent hover:border-yellow-500 truncate"
              >
                2. Modular Monolith là gì?
              </a>
              <a
                href="#section-3"
                className="block text-sm text-slate-600 hover:text-yellow-700 py-2 px-3 rounded-lg hover:bg-yellow-50 transition-colors border-l-2 border-transparent hover:border-yellow-500 truncate"
              >
                3. Kết luận
              </a>
            </nav>
          </div>

          <div className="mt-6 flex gap-3">
            <Button
              variant="outline"
              className="flex-1 gap-2 border-slate-200 hover:bg-slate-50 text-slate-600"
            >
              <Share2 className="w-4 h-4" /> Chia sẻ
            </Button>
            <Button
              variant="outline"
              className="flex-1 gap-2 border-slate-200 hover:bg-slate-50 text-slate-600"
            >
              <Bookmark className="w-4 h-4" /> Lưu bài
            </Button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="w-full lg:w-3/4 max-w-3xl">
          <div className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-8 prose-a:text-yellow-600 hover:prose-a:text-yellow-700 prose-img:rounded-2xl prose-img:shadow-lg max-w-none">
            <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-400 mb-10 not-prose">
              <p className="text-lg text-slate-800 italic font-serif leading-relaxed">
                Trong một thế giới bị ám ảnh bởi Microservices, việc quay trở
                lại Monolith nghe có vẻ điên rồ. Nhưng Modular Monolith đang
                chứng minh điều ngược lại - một bước lùi để tiến hai bước.
              </p>
            </div>

            <h2 id="section-1" className="flex items-center gap-3">
              <span className="text-yellow-500 text-3xl">#</span> Tại sao
              Microservices không phải là thuốc tiên?
            </h2>
            <p>
              Microservices hứa hẹn sự tự do, khả năng mở rộng (scalability) và
              độc lập. Tuy nhiên, cái giá phải trả là sự phức tạp trong vận hành
              (DevOps complexity), độ trễ mạng (Network latency) và khó khăn
              trong việc debug phân tán.
            </p>
            <p>
              Theo báo cáo của <strong>Amazon Prime Video (2023)</strong>, việc
              chuyển đổi từ Serverless/Microservices về Monolith đã giúp họ giảm{" "}
              <strong>90% chi phí</strong> vận hành. Đây là một con số biết nói,
              thách thức niềm tin mù quáng vào kiến trúc phân tán.
            </p>

            <h2 id="section-2" className="flex items-center gap-3">
              <span className="text-yellow-500 text-3xl">#</span> Modular
              Monolith là gì?
            </h2>
            <p>
              Modular Monolith là một khối đơn nhất (deployment unit) nhưng bên
              trong mã nguồn được chia thành các module rạch ròi, chỉ giao tiếp
              qua các Public Interface xác định.
            </p>
            <ul className="bg-slate-50 p-6 rounded-xl list-none space-y-2 border border-slate-200">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>{" "}
                <span>
                  Không có độ trễ mạng (Network Latency) giữa các module.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>{" "}
                <span>Dễ dàng Refactor và thay đổi cấu trúc.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>{" "}
                <span>Quy trình Deploy đơn giản (Single Pipeline).</span>
              </li>
            </ul>

            <h2 id="section-3" className="flex items-center gap-3">
              <span className="text-yellow-500 text-3xl">#</span> Kết luận
            </h2>
            <p>
              Sự phát triển của công nghệ tuân theo đường xoáy ốc. Chúng ta quay
              lại Monolith, nhưng ở một trình độ cao hơn. Đây chính là minh
              chứng rõ nét cho quy luật <em>Phủ định của Phủ định</em> trong
              Triết học.
            </p>
          </div>

          {/* Footer Meta */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                <Tag className="w-4 h-4" /> Từ khóa:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Software Architecture",
                  "Backend Engineering",
                  "Marxist Philosophy",
                  "Refactoring",
                ].map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer transition-colors border border-slate-200"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
