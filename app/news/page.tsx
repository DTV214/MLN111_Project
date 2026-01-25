"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Calendar,
  ArrowRight,
  Quote,
  BookOpen,
  ExternalLink,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";

// Dữ liệu tin tức mẫu
const newsData = [
  {
    id: 1,
    title: "Xu hướng Modular Monolith 2024: Sự trở lại của Vua",
    date: "15/01/2026",
    cat: "Tech Trend",
    slug: "modular-monolith-trend",
    desc: "Tại sao các công ty lớn như Amazon, Shopify đang rời bỏ Microservices để quay về Monolith? Phân tích lợi ích thực tế và thách thức kỹ thuật.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Triết học Mác-Lênin trong Kỹ thuật Phần mềm",
    date: "12/01/2026",
    cat: "Philosophy",
    slug: "philosophy-for-devs",
    desc: "Vận dụng quy luật 'Lượng đổi chất đổi' và 'Phủ định của phủ định' để giải quyết các bài toán kiến trúc hệ thống phức tạp.",
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Case Study: Uber thay đổi kiến trúc sau 10 năm",
    date: "10/01/2026",
    cat: "Case Study",
    slug: "uber-architecture-change",
    desc: "Bài học xương máu từ việc Uber chuyển đổi từ hơn 4000 microservices về kiến trúc DOMA (Domain-Oriented Microservice Architecture).",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
  },
];

// Dữ liệu Tài liệu tham khảo (Từ danh sách bạn cung cấp)
const references = [
  {
    id: 1,
    author: "Dragoni, N. et al.",
    year: "2017",
    title: "Microservices: Yesterday, Today, and Tomorrow",
    source: "Springer",
    link: "https://link.springer.com/chapter/10.1007/978-3-319-67425-4_12",
  },
  {
    id: 2,
    author: "Engels, F.",
    year: "1877",
    title: "Anti-Dühring: XIII. Negation of the Negation",
    source: "Marxists Internet Archive",
    link: "https://www.marxists.org/archive/marx/works/1877/anti-duhring/ch11.htm",
  },
  {
    id: 3,
    author: "Fowler, M.",
    year: "2014",
    title: "Microservices",
    source: "martinfowler.com",
    link: "https://martinfowler.com/articles/microservices.html",
  },
  {
    id: 4,
    author: "Kolny, M.",
    year: "2023",
    title:
      "Scaling up the Prime Video audio/video monitoring service and reducing costs by 90%",
    source: "Prime Video Tech",
    link: "https://www.wudsn.com/productions/www/site/news/2023/2023-05-08-microservices-01.pdf",
  },
  {
    id: 5,
    author: "Su, R., Li, X., & Taibi, D.",
    year: "2024",
    title: "From Microservice to Monolith: A Multivocal Literature Review",
    source: "Electronics, 13(8), 1452",
    link: "https://www.mdpi.com/2079-9292/13/8/1452",
  },
  {
    id: 6,
    author: "Tổng cục Thống kê",
    year: "2024",
    title: "Thông cáo báo chí tình hình lao động việc làm quý IV và năm 2024",
    source: "GSO",
    link: "https://www.gso.gov.vn/du-lieu-va-so-lieu-thong-ke/2024/12/thong-cao-bao-chi-tinh-hinh-lao-dong-viec-lam-quy-iv-va-nam-2024/",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-0">
      <div className="container mx-auto px-4 pb-24">
        {/* --- HEADER: THƯ VIỆN KIẾN THỨC --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-200 px-4 py-1"
          >
            Knowledge Hub
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Thư Viện Kiến Thức & <br />{" "}
            <span className="text-yellow-600">Nghiên Cứu</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            Nơi tổng hợp các bài phân tích chuyên sâu, cập nhật xu hướng công
            nghệ và kho tàng tài liệu tham khảo học thuật uy tín.
          </p>

          {/* Search Bar */}
          <div className="mt-10 relative max-w-lg mx-auto group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-hover:text-yellow-600 transition-colors" />
            <Input
              type="text"
              placeholder="Tìm kiếm bài viết, tài liệu..."
              className="pl-12 h-14 rounded-full shadow-sm border-slate-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-50 transition-all text-base bg-white"
            />
          </div>
        </div>

        {/* --- NEWS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {newsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/news/${item.slug}`}>
                <Card className="h-full hover:-translate-y-2 transition-all duration-300 border-none shadow-md hover:shadow-xl overflow-hidden group bg-white flex flex-col cursor-pointer">
                  {/* Image Header */}
                  <div className="h-56 w-full relative overflow-hidden bg-slate-200">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 hover:bg-white backdrop-blur font-bold border-none shadow-sm">
                      {item.cat}
                    </Badge>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="font-serif text-xl md:text-2xl text-slate-900 group-hover:text-yellow-600 transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pb-4">
                    <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-slate-100 pt-4 flex justify-between items-center text-slate-400 text-xs font-medium font-mono mt-auto">
                    <span className="flex items-center gap-2 bg-slate-50 px-2 py-1 rounded">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-600 font-bold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300">
                      Đọc ngay <ArrowRight className="w-3 h-3" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- REFERENCE SECTION (Tích hợp vào cuối trang) --- */}
      <section className="bg-white border-t border-slate-200 py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-yellow-50 rounded-full mb-4">
              <BookOpen className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-slate-800">
              Danh Mục Tài Liệu Tham Khảo
            </h2>
            <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
              Các nguồn tài liệu học thuật, báo cáo kỹ thuật và dữ liệu thống kê
              được sử dụng để xây dựng nội dung trang web này.
            </p>
          </div>

          <div className="grid gap-4">
            {references.map((ref) => (
              <div
                key={ref.id}
                className="group p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-yellow-300 hover:bg-yellow-50/30 transition-all duration-300 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
              >
                <div className="flex gap-4 items-start">
                  <div className="min-w-[32px] h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-xs font-bold text-slate-400 font-mono mt-1 group-hover:border-yellow-400 group-hover:text-yellow-600">
                    {ref.id}
                  </div>
                  <div className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-bold text-slate-900">
                      {ref.author}
                    </span>{" "}
                    ({ref.year}).{" "}
                    <span className="italic font-serif text-slate-800 font-medium">
                      {ref.title}
                    </span>
                    . <span className="text-slate-500">{ref.source}</span>.
                  </div>
                </div>

                <a
                  href={ref.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 flex items-center gap-2 text-xs font-bold text-blue-600 bg-white px-3 py-2 rounded-lg border border-blue-100 hover:bg-blue-50 hover:border-blue-200 transition-colors w-full md:w-auto justify-center"
                >
                  <ExternalLink className="w-3 h-3" /> Truy cập nguồn
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400 italic">
              *Danh sách được trích xuất và tổng hợp theo chuẩn APA. Cập nhật
              lần cuối: 25/01/2026.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
