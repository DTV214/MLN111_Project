"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Code,
  PenTool,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AIUsagePage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-yellow-600" />
            <span className="text-xs font-bold text-yellow-700 uppercase tracking-wide">
              Academic Integrity
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Báo cáo Minh bạch <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500">
              Sử dụng Trí tuệ Nhân tạo
            </span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Chúng tôi cam kết tuân thủ các nguyên tắc liêm chính học thuật. Dưới
            đây là báo cáo chi tiết về cách AI được sử dụng để hỗ trợ (không
            thay thế) con người trong dự án này.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-8">
          {/* Section 1: Coding */}
          <Card className="border-l-4 border-l-blue-500 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-serif text-2xl text-slate-800">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                Hỗ trợ Lập trình (Coding Assistant)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Chúng tôi sử dụng các công cụ AI (GitHub Copilot, ChatGPT) như
                một người trợ lý kỹ thuật (Pair Programmer) để:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Gợi ý cấu trúc Component (Next.js/React).",
                  "Debug lỗi cú pháp và tối ưu hóa Tailwind CSS.",
                  "Tạo dữ liệu giả lập (Mock Data) cho biểu đồ.",
                  "Giải thích các lỗi TypeScript phức tạp.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-700 bg-slate-50 p-3 rounded border border-slate-100"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Section 2: Content */}
          <Card className="border-l-4 border-l-green-500 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-serif text-2xl text-slate-800">
                <div className="p-2 bg-green-100 rounded-lg">
                  <PenTool className="w-6 h-6 text-green-600" />
                </div>
                Hỗ trợ Nội dung (Content & Research)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                AI được sử dụng để tổng hợp và đơn giản hóa kiến thức, nhưng tư
                duy cốt lõi vẫn thuộc về nhóm nghiên cứu:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2 text-sm uppercase">
                    AI Đã làm:
                  </h4>
                  <ul className="text-sm space-y-2 text-slate-600 list-disc pl-4">
                    <li>Tóm tắt các khái niệm Triết học Mác-Lênin khó hiểu.</li>
                    <li>Gợi ý các ví dụ ẩn dụ (Analogy) đời sống.</li>
                    <li>Kiểm tra lỗi chính tả và ngữ pháp tiếng Việt.</li>
                  </ul>
                </div>
                <div className="bg-yellow-50/50 p-4 rounded-xl border border-yellow-100">
                  <h4 className="font-bold text-yellow-800 mb-2 text-sm uppercase">
                    Con người Đã làm:
                  </h4>
                  <ul className="text-sm space-y-2 text-slate-600 list-disc pl-4">
                    <li>Chọn lọc Case Study (Amazon Prime Video).</li>
                    <li>Quyết định cấu trúc logic của bài tiểu luận.</li>
                    <li>Kiểm chứng lại toàn bộ thông tin AI cung cấp.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Commitment */}
          <Card className="bg-slate-900 text-slate-300 border-none shadow-xl">
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-yellow-500/20 rounded-full">
                <ShieldCheck className="w-12 h-12 text-yellow-400" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-2 font-serif">
                  Cam kết Trách nhiệm
                </h3>
                <p className="text-sm leading-relaxed">
                  Nhóm nghiên cứu chịu hoàn toàn trách nhiệm về tính chính xác,
                  tính logic và giá trị khoa học của sản phẩm cuối cùng. Chúng
                  tôi khẳng định rằng AI chỉ là công cụ, không phải là tác giả
                  của đồ án này.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Back Button */}
          <div className="flex justify-center mt-8">
            <Link href="/">
              <Button variant="ghost" className="gap-2 hover:bg-slate-100">
                <ArrowLeft className="w-4 h-4" /> Quay về Trang chủ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
