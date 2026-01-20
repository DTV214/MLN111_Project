"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingDown,
  Zap,
  Box,
  Layers,
  RefreshCcw,
  BookOpen,
  Code2,
  ArrowRight,
  GitMerge,
  Server,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Dữ liệu thực tế từ Amazon Prime Video Tech Blog (2023)
const costData = [
  {
    name: "Microservices",
    cost: 100,
    label: "Chi phí cao (100%)",
    color: "#ef4444",
  },
  {
    name: "Modular Monolith",
    cost: 10,
    label: "Tối ưu hóa (10%)",
    color: "#22c55e",
  },
];

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 relative overflow-hidden">
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="absolute top-20 right-[-100px] w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 left-[-100px] w-[500px] h-[500px] bg-yellow-100 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* --- 1. HEADER SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 shadow-sm mb-6">
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-700 hover:bg-blue-200"
            >
              Case Study 2023
            </Badge>
            <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">
              Amazon Prime Video
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Sự Hồi Quy Vĩ Đại: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Từ Phân Tán về Tập Trung
            </span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Tại sao một gã khổng lồ công nghệ lại từ bỏ kiến trúc hiện đại
            (Microservices) để quay về cái cũ (Monolith)?
            <br className="hidden md:block" />
            Một ví dụ kinh điển minh chứng cho{" "}
            <span className="font-bold text-slate-900">
              Quy luật Phủ định của Phủ định
            </span>{" "}
            trong Triết học.
          </p>
        </motion.div>

        {/* --- 2. GÓC GIẢI THÍCH ĐỜI SỐNG (Dành cho người không chuyên) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-yellow-100 text-yellow-700 rounded-xl">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Góc nhìn Đời sống & Triết học
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Giải thích kỹ thuật bằng ngôn ngữ quản lý sản xuất
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Mũi tên kết nối (Desktop only) */}
                <div className="hidden md:block absolute top-12 left-[30%] w-[40%] h-[2px] border-t-2 border-dashed border-slate-200 z-0"></div>

                {/* Giai đoạn 1 */}
                <div className="relative z-10 bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-slate-400 transition-colors text-center group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    🏭
                  </div>
                  <h4 className="font-bold text-slate-700 mb-2">
                    1. Đại công xưởng
                  </h4>
                  <Badge variant="outline" className="mb-3 bg-white">
                    Monolith Cũ
                  </Badge>
                  <p className="text-sm text-slate-600 leading-relaxed text-left">
                    Tất cả công nhân làm chung 1 phòng lớn.
                    <br />
                    <span className="text-green-600 font-semibold">
                      ✔ Ưu điểm:
                    </span>{" "}
                    Trao đổi cực nhanh.
                    <br />
                    <span className="text-red-500 font-semibold">
                      ✘ Nhược điểm:
                    </span>{" "}
                    Chật chội, 1 người ốm lây cả xưởng.
                  </p>
                </div>

                {/* Giai đoạn 2 */}
                <div className="relative z-10 bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-400 transition-colors text-center group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    🚚
                  </div>
                  <h4 className="font-bold text-blue-700 mb-2">
                    2. Xưởng gia công
                  </h4>
                  <Badge
                    variant="outline"
                    className="mb-3 bg-white text-blue-600 border-blue-200"
                  >
                    Microservices
                  </Badge>
                  <p className="text-sm text-slate-600 leading-relaxed text-left">
                    Tách ra mỗi tổ làm 1 nhà riêng.
                    <br />
                    <span className="text-green-600 font-semibold">
                      ✔ Ưu điểm:
                    </span>{" "}
                    Tự do, linh hoạt.
                    <br />
                    <span className="text-red-500 font-semibold">
                      ✘ Nhược điểm:
                    </span>{" "}
                    Tốn tiền ship hàng (vận chuyển) qua lại giữa các nhà.
                  </p>
                </div>

                {/* Giai đoạn 3 */}
                <div className="relative z-10 bg-gradient-to-b from-yellow-50 to-white p-6 rounded-2xl border-2 border-yellow-400 shadow-lg text-center group transform md:-translate-y-4">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Giải pháp tối ưu
                  </div>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    🏢
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    3. Tổ hợp thông minh
                  </h4>
                  <Badge className="mb-3 bg-yellow-500 hover:bg-yellow-600 text-white">
                    Modular Monolith
                  </Badge>
                  <p className="text-sm text-slate-700 leading-relaxed text-left">
                    Gom lại về chung 1 tòa nhà cao cấp, nhưng chia phòng cách
                    âm.
                    <br />
                    <span className="text-blue-600 font-bold">
                      → Kết quả:
                    </span>{" "}
                    Vừa không tốn tiền ship (chung tòa nhà), vừa trật tự ngăn
                    nắp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- 3. CHI TIẾT KỸ THUẬT & DỮ LIỆU --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* CỘT TRÁI: CÂU CHUYỆN TIMELINE (5 phần) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Layers className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-slate-900">
                Diễn biến Sự kiện
              </h2>
            </div>

            <div className="space-y-8 relative border-l-2 border-slate-200 ml-3 pl-8 py-2">
              {/* Step 1 */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-0 w-6 h-6 bg-white rounded-full border-4 border-slate-300 group-hover:border-slate-500 transition-colors"></span>
                <h3 className="font-bold text-lg text-slate-700 flex items-center gap-2">
                  1. Khởi đầu: Phủ định cái cũ
                </h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                  Amazon ban đầu sử dụng kiến trúc{" "}
                  <strong>Serverless (Microservices)</strong> để chia nhỏ công
                  cụ giám sát video. Mục tiêu là thoát khỏi sự cồng kềnh, chậm
                  chạp của hệ thống cũ.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-0 w-6 h-6 bg-white rounded-full border-4 border-red-400 group-hover:scale-125 transition-transform"></span>
                <h3 className="font-bold text-lg text-red-600 flex items-center gap-2">
                  2. Mâu thuẫn nảy sinh <TrendingDown className="w-5 h-5" />
                </h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                  Việc hàng nghìn dịch vụ nhỏ phải nói chuyệnvới nhau qua
                  mạng gây ra tắc nghẽn. Dữ liệu video phải truyền đi truyền lại
                  giữa các bước gây tốn kém tài nguyên.
                </p>
                <div className="mt-3 p-4 bg-red-50 rounded-xl border border-red-100 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="text-xs text-red-800 font-mono">
                    <span className="font-bold">PROBLEM:</span> Chạm giới hạn
                    AWS Step Functions.
                    <br />
                    <span className="font-bold">COST:</span> Chi phí hạ tầng
                    tăng chóng mặt.
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-0 w-6 h-6 bg-green-500 rounded-full border-4 border-green-200 shadow-lg shadow-green-500/50"></span>
                <h3 className="font-bold text-lg text-green-700 flex items-center gap-2">
                  3. Phủ định của phủ định <RefreshCcw className="w-5 h-5" />
                </h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                  Đội ngũ kỹ sư quyết định gộp tất cả các services lại thành một
                  khối <strong>Modular Monolith</strong> duy nhất.
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-xs text-green-800 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Xử lý trong bộ nhớ
                    (RAM)
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-xs text-green-800 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Loại bỏ Network Call
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: DỮ LIỆU CHỨNG MINH (7 phần) */}
          <div className="lg:col-span-7">
            <Card className="border-none shadow-2xl bg-slate-900 text-white h-full overflow-hidden relative group">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>

              <CardHeader className="relative z-10 border-b border-slate-800 pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-serif text-2xl flex items-center gap-2 text-yellow-400">
                      <Zap className="w-6 h-6" />
                      Chứng cứ Số liệu
                    </CardTitle>
                    <CardDescription className="text-slate-400 mt-1">
                      Kết quả thực tế sau khi tái cấu trúc (Refactoring)
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-yellow-400 border-yellow-400/30 bg-yellow-400/10"
                  >
                    Official Data
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-10 pt-8 relative z-10">
                {/* 1. CHART */}
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-medium text-slate-300">
                    <span>So sánh Chi phí Vận hành (Cost)</span>
                    <span className="text-emerald-400 font-bold">
                      -90% Reduction
                    </span>
                  </div>

                  {/* Custom Bar Visual instead of Recharts for better styling in dark mode */}
                  <div className="space-y-6">
                    {/* Microservices Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Microservices / Serverless</span>
                        <span>100% (Baseline)</span>
                      </div>
                      <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Monolith Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span className="text-yellow-400 font-bold">
                          Modular Monolith
                        </span>
                        <span className="text-yellow-400 font-bold">~10%</span>
                      </div>
                      <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "10%" }}
                          transition={{ duration: 1, delay: 0.4 }}
                          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full relative"
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-2 text-[10px] text-yellow-400 whitespace-nowrap font-bold">
                            Winner!
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. DIAGRAM VISUAL */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 flex flex-col items-center text-center opacity-50 grayscale hover:grayscale-0 transition-all">
                    <div className="mb-3 p-3 bg-slate-700 rounded-full">
                      <Box className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="text-sm font-bold text-slate-300">
                      Trước
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Rời rạc, tốn kém
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/50 to-slate-800 border border-blue-500/30 flex flex-col items-center text-center shadow-lg shadow-blue-900/20">
                    <div className="mb-3 p-3 bg-blue-600 rounded-full shadow-lg shadow-blue-500/50">
                      <Box className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-bold text-blue-200">Sau</div>
                    <div className="text-xs text-blue-300 mt-1">
                      Tập trung, hiệu suất cao
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 text-center italic">
                  *Số liệu công bố bởi Amazon Prime Video Tech Blog
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* --- 4. NAVIGATION BUTTON --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center pb-10"
        >
          <Link href="/simulation">
            <Button
              size="lg"
              className="bg-slate-900 text-white hover:bg-slate-800 gap-3 px-8 h-14 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-medium text-lg group border-2 border-transparent hover:border-yellow-400"
            >
              Bước tiếp theo: Mô phỏng Kỹ thuật
              <Code2 className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform" />
              <ArrowRight className="w-5 h-5 ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
