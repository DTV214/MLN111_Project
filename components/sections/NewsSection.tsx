"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link"; // Quan trọng: Import Link

// Dữ liệu tin tức (Có slug để dẫn link)
export const newsData = [
  {
    id: 1,
    title: "Xu hướng Modular Monolith 2024: Sự trở lại của Vua",
    date: "15/01/2026",
    cat: "Tech",
    slug: "modular-monolith-trend",
    desc: "Tại sao các công ty lớn đang rời bỏ Microservices để quay về Monolith? Phân tích lợi ích và thách thức.",
  },
  {
    id: 2,
    title: "Tại sao Dev cần hiểu Triết học Mác-Lênin?",
    date: "12/01/2026",
    cat: "Education",
    slug: "philosophy-for-devs",
    desc: "Tư duy biện chứng giúp bạn debug tốt hơn và thiết kế hệ thống bền vững hơn như thế nào?",
  },
  {
    id: 3,
    title: "Case Study: Uber thay đổi kiến trúc sau 10 năm",
    date: "10/01/2026",
    cat: "Case Study",
    slug: "uber-architecture-change",
    desc: "Bài học từ việc Uber chuyển đổi từ hơn 4000 microservices về kiến trúc DOMA (Domain-Oriented Microservice Architecture).",
  },
];

export default function NewsSection() {
  return (
    <section
      id="news"
      className="py-24 bg-gradient-to-t from-yellow-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-yellow-100 rounded-full">
              <Newspaper className="text-yellow-700 w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900">
                Tin tức & Bài viết
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Cập nhật xu hướng công nghệ mới nhất
              </p>
            </div>
          </div>

          <Link href="/news">
            <Button
              variant="outline"
              className="border-yellow-200 text-yellow-700 hover:bg-yellow-50"
            >
              Xem tất cả bài viết <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <Link
              href={`/news/${item.slug}`}
              key={item.id}
              className="group h-full"
            >
              <Card className="h-full hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl border-t-4 border-t-yellow-400 border-x-0 border-b-0 bg-white">
                <CardHeader>
                  <div className="text-[10px] font-black text-yellow-600 uppercase tracking-widest mb-3 bg-yellow-50 inline-block px-2 py-1 rounded w-fit border border-yellow-100">
                    {item.cat}
                  </div>
                  <CardTitle className="text-xl font-serif leading-snug text-slate-800 group-hover:text-yellow-600 transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                    {item.desc}
                  </p>
                  <p className="text-xs text-slate-400 font-mono flex items-center gap-2 mt-auto">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    {item.date}
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-sm font-bold text-slate-900 group-hover:underline decoration-yellow-400 underline-offset-4 flex items-center">
                    Đọc chi tiết{" "}
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
