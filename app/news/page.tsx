"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { newsData } from "@/components/sections/NewsSection"; // Tái sử dụng dữ liệu

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Thư viện Kiến thức
          </h1>
          <p className="text-slate-600 text-lg">
            Nơi lưu trữ các bài viết chuyên sâu về Kỹ thuật phần mềm, Kiến trúc
            hệ thống và Tư duy Triết học.
          </p>

          {/* Search Bar (Visual only) */}
          <div className="mt-8 relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              className="pl-10 h-12 rounded-full shadow-sm border-slate-200 focus:border-yellow-400 focus:ring-yellow-400"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 justify-center mt-6 flex-wrap">
            {["All", "Tech", "Philosophy", "Case Study", "Tutorial"].map(
              (cat) => (
                <Badge
                  key={cat}
                  variant={cat === "All" ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-1.5 ${cat === "All" ? "bg-yellow-500 hover:bg-yellow-600" : "hover:bg-yellow-50"}`}
                >
                  {cat}
                </Badge>
              ),
            )}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Chúng ta map lại data, nhưng ở trang này hiển thị card to hơn/chi tiết hơn */}
          {newsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/news/${item.slug}`}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-none shadow-md overflow-hidden group bg-white">
                  {/* Fake Image Placeholder */}
                  <div className="h-48 bg-slate-200 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-blue-50 group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-slate-800 uppercase tracking-wide">
                      {item.cat}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="font-serif text-2xl text-slate-900 group-hover:text-yellow-600 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 line-clamp-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-slate-100 pt-4 flex justify-between items-center text-slate-400 text-sm">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {item.date}
                    </span>
                    <span className="text-yellow-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
