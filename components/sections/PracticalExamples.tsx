"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Server,
  ShieldAlert,
  Zap,
  TrendingDown,
  Layers,
  Cpu,
} from "lucide-react";

export default function PracticalExamples() {
  return (
    <section
      id="practical"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Tech Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      {/* Decorative Blur Spots */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-200/40 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 text-blue-600 border-blue-200 bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm"
            >
              Chương 3: Thực trạng & Giải pháp
            </Badge>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Dữ Liệu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Thực Tiễn
              </span>{" "}
              <br />& Bức Tranh Chuyển Đổi
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Từ những con số biết nói của Amazon đến nghịch lý tồn tại của
              COBOL – Những bằng chứng sống động minh họa cho quy luật phủ định
              của phủ định.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- LEFT COLUMN: AMAZON CASE STUDY (Highlight) --- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-full"
            >
              <Card className="h-full border-none shadow-2xl overflow-hidden group relative bg-white ring-1 ring-slate-200/50">
                {/* Decorative Top Border Gradient */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"></div>

                <CardHeader className="p-8 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-none px-3">
                          Amazon Prime Video
                        </Badge>
                        <span className="text-xs text-slate-400 font-mono font-bold bg-slate-100 px-2 py-1 rounded">
                          2023
                        </span>
                      </div>
                      <CardTitle className="font-serif text-3xl md:text-4xl text-slate-900 leading-tight">
                        Cú Quay Xe Lịch Sử
                      </CardTitle>
                      <CardDescription className="text-slate-500 mt-2 text-base font-medium">
                        Từ Microservices trở về Monolith: Bước lùi chiến lược
                        hay sự tiến hóa tất yếu?
                      </CardDescription>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl shadow-inner">
                      <Server className="w-8 h-8 text-orange-600" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8 pt-4 space-y-8">
                  {/* Comparison Visualization Box */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Bad State */}
                    <div className="p-5 rounded-2xl bg-red-50/80 border border-red-100 text-center relative overflow-hidden group/box hover:bg-red-50 transition-colors">
                      <div className="absolute -right-6 -top-6 w-20 h-20 bg-red-200 rounded-full blur-2xl group-hover/box:scale-150 transition-transform duration-500"></div>
                      <Layers className="w-6 h-6 text-red-400 mx-auto mb-3" />
                      <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1 relative z-10">
                        Microservices
                      </p>
                      <div className="text-lg md:text-2xl font-black text-slate-800 mb-1 relative z-10">
                        Overkill
                      </div>
                      <p className="text-[10px] text-slate-500 relative z-10 font-medium">
                        Chi phí cao, quá phức tạp
                      </p>
                    </div>
                    {/* Good State */}
                    <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-100 text-center relative overflow-hidden group/box hover:bg-emerald-50 transition-colors shadow-sm">
                      <div className="absolute -right-6 -top-6 w-20 h-20 bg-emerald-200 rounded-full blur-2xl group-hover/box:scale-150 transition-transform duration-500"></div>
                      <Cpu className="w-6 h-6 text-emerald-500 mx-auto mb-3" />
                      <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 relative z-10">
                        Modular Monolith
                      </p>
                      <div className="text-lg md:text-2xl font-black text-emerald-600 mb-1 relative z-10 flex items-center justify-center gap-1">
                        <TrendingDown className="w-5 h-5" /> 90% Cost
                      </div>
                      <p className="text-[10px] text-emerald-600/80 relative z-10 font-medium">
                        Hiệu quả tối ưu hóa
                      </p>
                    </div>
                  </div>

                  {/* Timeline Analysis */}
                  <div className="space-y-0">
                    <div className="flex gap-4 items-start relative pb-8">
                      {/* Connecting Line */}
                      <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-slate-200"></div>
                      <div className="mt-1 w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 z-10 shadow-sm text-slate-500 text-xs font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">
                          Vấn đề: Giới hạn cứng (Hard Limit)
                        </h4>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          Hệ thống serverless chạm ngưỡng giới hạn của AWS Step
                          Functions, chi phí vận hành tăng phi mã.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start relative">
                      <div className="mt-1 w-8 h-8 rounded-full bg-yellow-400 border-4 border-yellow-100 flex items-center justify-center shrink-0 z-10 shadow-md">
                        <Zap className="w-4 h-4 text-white fill-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">
                          Giải pháp: Hợp nhất (Consolidation)
                        </h4>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          Gộp các components thành một process (Monolith) nhưng
                          giữ cấu trúc module. Loại bỏ network calls tốn kém.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: STATS & COBOL --- */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* STATS CARD (Dark Theme Accent) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-slate-900 border-none text-white shadow-2xl relative overflow-hidden h-full min-h-[280px] flex flex-col justify-between group">
                {/* Background Animation */}
                <div className="absolute top-[-50%] right-[-50%] w-[100%] h-[100%] bg-blue-600/30 rounded-full blur-[100px] group-hover:opacity-50 transition-opacity duration-700"></div>

                <CardHeader className="relative z-10 pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg font-medium text-blue-300">
                    <Activity className="w-5 h-5" />
                    Thị trường Lao động 2024
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="mb-6">
                    <p className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-2">
                      Thiếu hụt
                    </p>
                    <p className="text-sm text-slate-400 font-light">
                      Nhân sự vận hành hệ thống phân tán phức tạp
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      Sự dịch chuyển lao động đòi hỏi công nghệ phải tinh gọn,
                      giảm phụ thuộc vào vận hành thủ công.
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-yellow-500 uppercase">
                        Tổng cục Thống kê
                      </span>
                      <span className="text-[10px] text-slate-500">
                        29/12/2024
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* COBOL CARD (Clean Style) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default hover:border-blue-300 h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full w-fit">
                      <ShieldAlert className="w-4 h-4 text-blue-600" />
                      <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                        Nghịch lý
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-serif text-slate-800 mt-3 group-hover:text-blue-700 transition-colors">
                    Tại sao COBOL bất tử?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Hệ thống Ngân hàng lõi (Core Banking) vẫn chạy trên COBOL.
                    Đây là minh chứng cho <strong>tính kế thừa</strong>: Cái mới
                    không xóa bỏ hoàn toàn cái cũ nếu cái cũ vẫn còn giá trị cốt
                    lõi.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                    >
                      #LegacyCode
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                    >
                      #Stability
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
