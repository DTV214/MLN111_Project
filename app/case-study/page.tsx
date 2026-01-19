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
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Cần import Link để nút điều hướng hoạt động

// Dữ liệu giả lập (Case Study Amazon)
const costData = [
  { name: "Microservices", cost: 100, label: "Tốn kém (100%)" },
  { name: "Modular Monolith", cost: 10, label: "Tiết kiệm (chỉ còn 10%)" },
];

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 relative overflow-hidden">
      {/* --- HỌA TIẾT NỀN (PATTERN) --- */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        {/* Lưới chấm */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        {/* Hình tròn trang trí */}
        <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-[-100px] w-[400px] h-[400px] bg-yellow-100 rounded-full blur-[100px] mix-blend-multiply opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 shadow-sm mb-6">
            <Badge variant="default" className="bg-blue-600 hover:bg-blue-700">
              Case Study 2023
            </Badge>
            <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">
              Amazon Prime Video
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Sự Hồi Quy vĩ đại: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Từ Phân Tán về Tập Trung
            </span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto font-light">
            Tại sao một gã khổng lồ công nghệ lại từ bỏ kiến trúc hiện đại để
            quay về cái cũ? Một ví dụ kinh điển minh chứng cho quy luật{" "}
            <span className="font-bold text-slate-800">Đường xoáy ốc</span>{" "}
            trong Triết học.
          </p>
        </motion.div>

        {/* --- GÓC GIẢI THÍCH (Dành cho Giảng viên Triết) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20 bg-white rounded-2xl shadow-xl border-l-8 border-yellow-400 p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <BookOpen className="w-32 h-32 text-yellow-600" />
          </div>

          <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="bg-yellow-100 text-yellow-700 p-2 rounded-lg">
              <BookOpen className="w-6 h-6" />
            </span>
            Góc nhìn đời sống (Dành cho người ngoại đạo)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-4xl">🏭</div>
              <h4 className="font-bold text-slate-700">
                1. Giai đoạn Đại công xưởng
              </h4>
              <p className="text-sm text-slate-500 italic">
                (Tương ứng: Monolith Cũ)
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tất cả công nhân làm việc chung 1 phòng lớn. <br />
                <span className="text-green-600 font-bold">Ưu điểm:</span> Trao
                đổi nhanh. <br />
                <span className="text-red-500 font-bold">Nhược điểm:</span> Chật
                chội, 1 người ốm lây cả xưởng.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-4xl">🚚</div>
              <h4 className="font-bold text-slate-700">
                2. Giai đoạn Xưởng gia công
              </h4>
              <p className="text-sm text-slate-500 italic">
                (Tương ứng: Microservices)
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tách ra mỗi tổ làm 1 nhà riêng biệt. <br />
                <span className="text-green-600 font-bold">Ưu điểm:</span> Tự
                do, không lây bệnh. <br />
                <span className="text-red-500 font-bold">Nhược điểm:</span> Tốn
                tiền ship hàng qua lại giữa các nhà (Đây là lý do Amazon tốn
                tiền).
              </p>
            </div>

            <div className="space-y-3 relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block text-slate-300">
                ➜
              </div>
              <div className="text-4xl">🏢</div>
              <h4 className="font-bold text-blue-700">
                3. Giai đoạn Tổ hợp thông minh
              </h4>
              <p className="text-sm text-blue-500 italic">
                (Tương ứng: Modular Monolith)
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Gom lại về chung 1 tòa nhà cao cấp, nhưng chia phòng cách âm.{" "}
                <br />
                <span className="text-blue-600 font-bold">Kết quả:</span> Vừa
                không tốn tiền ship (chung tòa nhà), vừa trật tự ngăn nắp (chia
                phòng).
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* LEFT: TIMELINE STORY */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-serif text-3xl font-bold text-slate-800 flex items-center gap-3">
              <Layers className="w-8 h-8 text-blue-500" />
              Diễn biến Sự kiện
            </h2>

            <div className="space-y-8 relative border-l-2 border-slate-200 ml-3 pl-8 py-2">
              {/* Step 1 */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-0 w-6 h-6 bg-slate-100 rounded-full border-4 border-slate-300 group-hover:border-blue-400 transition-colors"></span>
                <div className="mb-3 rounded-lg overflow-hidden shadow-sm border border-slate-100">
                  {/* Ảnh minh họa Microservices (Rời rạc) */}
                  <Image
                    src="https://res.cloudinary.com/dratbz8bh/image/upload/v1765771493/article_tkzsvc.jpg"
                    alt="Microservices concept"
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover opacity-80"
                  />
                </div>
                <h3 className="font-bold text-lg text-slate-700">
                  Bước 1: Phủ định cái cũ
                </h3>
                <p className="text-slate-600 mt-2 text-sm">
                  Amazon chuyển sang kiến trúc <strong>Serverless</strong> (chia
                  nhỏ). Họ muốn thoát khỏi sự cồng kềnh của hệ thống cũ.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-0 w-6 h-6 bg-red-100 rounded-full border-4 border-red-300 group-hover:border-red-500 transition-colors"></span>
                <h3 className="font-bold text-lg text-red-600 flex items-center gap-2">
                  Bước 2: Mâu thuẫn nảy sinh{" "}
                  <TrendingDown className="w-4 h-4" />
                </h3>
                <p className="text-slate-600 mt-2 text-sm">
                  Việc các xưởng nhỏ (Services) phải gửi dữ liệu video qua lại
                  liên tục đã làm <strong>tắc nghẽn đường truyền</strong> và chi
                  phí vận hành tăng vọt.
                </p>
                <div className="mt-3 p-3 bg-red-50 rounded border border-red-100 text-red-800 text-xs font-mono">
                  ERROR: AWS Step Functions Limit Exceeded.
                  <br />
                  COST: $$$ (Too high)
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-0 w-6 h-6 bg-green-100 rounded-full border-4 border-green-300 group-hover:border-green-500 transition-colors"></span>
                <div className="mb-3 rounded-lg overflow-hidden shadow-sm border border-slate-100">
                  {/* Ảnh minh họa Monolith (Gọn gàng) */}
                  <Image
                    src="https://res.cloudinary.com/dratbz8bh/image/upload/v1765771493/article_tkzsvc.jpg"
                    alt="Modular architecture"
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover opacity-80"
                  />
                </div>
                <h3 className="font-bold text-lg text-green-600 flex items-center gap-2">
                  Bước 3: Phủ định của phủ định{" "}
                  <RefreshCcw className="w-4 h-4" />
                </h3>
                <p className="text-slate-600 mt-2 text-sm">
                  Gộp tất cả về một khối <strong>Modular Monolith</strong>. Xử
                  lý dữ liệu ngay trong bộ nhớ (Memory) thay vì gửi qua mạng.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: DATA EVIDENCE */}
          <div className="lg:col-span-7">
            <Card className="border-none shadow-2xl bg-white h-full overflow-hidden relative">
              <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-400" />
              <CardHeader>
                <CardTitle className="font-serif text-xl flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Chứng cứ Số liệu (The Evidence)
                </CardTitle>
                <CardDescription>
                  Biểu đồ so sánh hiệu quả trước và sau khi thay đổi kiến trúc.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-12">
                {/* Chart Block */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex justify-between items-end mb-4">
                    <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wider">
                      Chi phí vận hành (Cost)
                    </h4>
                    <Badge className="bg-green-500 hover:bg-green-600">
                      -90% Chi phí
                    </Badge>
                  </div>

                  <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={costData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          horizontal={false}
                        />
                        <XAxis type="number" hide />
                        <YAxis
                          dataKey="name"
                          type="category"
                          width={140}
                          tick={{
                            fontSize: 12,
                            fontWeight: 600,
                            fill: "#64748b",
                          }}
                        />
                        <Tooltip
                          contentStyle={{
                            borderRadius: "12px",
                            border: "none",
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                          }}
                          cursor={{ fill: "transparent" }}
                        />
                        <Bar
                          dataKey="cost"
                          fill="#3b82f6"
                          radius={[0, 6, 6, 0]}
                          barSize={32}
                          animationDuration={1500}
                        >
                          {/* Bạn có thể thêm LabelList nếu muốn hiển thị số trên cột */}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-xs text-center text-slate-400 mt-2 italic">
                    *Số liệu công bố bởi Amazon Prime Video Tech Blog
                  </p>
                </div>

                {/* Conceptual Architecture Diagram */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Before */}
                  <div className="text-center group cursor-pointer">
                    <div className="mx-auto w-24 h-24 bg-red-50 rounded-full flex items-center justify-center border-2 border-red-100 group-hover:scale-110 transition-transform duration-300">
                      <Box className="w-10 h-10 text-red-400 group-hover:text-red-500" />
                    </div>
                    <p className="mt-3 font-bold text-slate-600">Trước</p>
                    <p className="text-xs text-slate-400">Rời rạc, tốn kém</p>
                  </div>

                  {/* After */}
                  <div className="text-center group cursor-pointer">
                    <div className="mx-auto w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center border-2 border-blue-200 shadow-blue-200 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Box className="w-10 h-10 text-blue-600" />
                    </div>
                    <p className="mt-3 font-bold text-blue-700">Sau</p>
                    <p className="text-xs text-blue-500">Tập trung, tối ưu</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* --- NÚT ĐIỀU HƯỚNG SANG TRANG SIMULATION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center pb-10"
        >
          <Link href="/simulation">
            <Button
              size="lg"
              className="bg-slate-900 text-white hover:bg-slate-800 gap-3 px-8 h-14 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-medium text-lg group"
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
