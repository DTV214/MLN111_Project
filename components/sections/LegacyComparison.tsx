"use client";
import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  ArrowRight,
  Clock,
  Zap,
  Database,
  Layers,
  AlertTriangle,
  GitMerge,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LegacyComparison() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern: Grid kỹ thuật */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="mb-4 text-slate-500 border-slate-300 bg-white px-4 py-1 uppercase tracking-widest text-xs font-bold"
          >
            Evolution Analysis
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Từ Nguyên Khối đến <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
              Kiến Trúc Tương Lai
            </span>
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            Sự chuyển dịch không chỉ là về công nghệ, mà là về tốc độ thích ứng.
            Dưới đây là sự đối chiếu trực diện giữa hai thế hệ kiến trúc.
          </p>
        </div>

        {/* --- COMPARISON TIMELINE --- */}
        <div className="relative">
          {/* Trục giữa (Central Line) - Chỉ hiện trên Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-300 via-yellow-400 to-slate-300 -translate-x-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
            {/* --- LEGACY SIDE (Left) --- */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot (Desktop) */}
              <div className="hidden lg:flex absolute right-[-60px] top-8 w-8 h-8 bg-slate-200 rounded-full border-4 border-white items-center justify-center z-10">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              </div>

              <Card className="border-l-4 border-l-slate-400 shadow-lg bg-white/80 backdrop-blur-sm group hover:border-l-red-500 transition-colors duration-500">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge
                        variant="secondary"
                        className="bg-slate-100 text-slate-600 mb-2 font-mono"
                      >
                        2010s ERA
                      </Badge>
                      <h3 className="text-2xl font-serif font-bold text-slate-700 flex items-center gap-2">
                        Legacy Monolith
                      </h3>
                    </div>
                    <div className="p-3 bg-slate-100 rounded-full text-slate-500 group-hover:text-red-500 group-hover:bg-red-50 transition-colors">
                      <Database className="w-6 h-6" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-500 italic border-l-2 border-slate-200 pl-3">
                    Một tảng đá khổng lồ. Ổn định nhưng nặng nề. Muốn di chuyển
                    nó cần cả một đội quân.
                  </p>

                  {/* Metrics - Negative */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-red-500" />
                        <span className="text-sm font-bold text-slate-700">
                          Deploy Time
                        </span>
                      </div>
                      <span className="text-red-600 font-mono font-bold">
                        ~45 mins
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        <span className="text-sm font-bold text-slate-700">
                          Risk Factor
                        </span>
                      </div>
                      <span className="text-red-600 font-mono font-bold">
                        High (Tight Coupling)
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex gap-2 text-sm text-slate-600">
                      <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                      Khó mở rộng (Scale) từng phần riêng biệt.
                    </li>
                    <li className="flex gap-2 text-sm text-slate-600">
                      <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                      Công nghệ cũ (Legacy Stack) khó tuyển dụng.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* --- ARROW CONNECTOR (Center) --- */}
            <div className="flex lg:hidden justify-center text-slate-300">
              <ArrowRight className="w-8 h-8 rotate-90" />
            </div>

            {/* --- MODERN SIDE (Right) --- */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mt-0 lg:mt-24" // Đẩy xuống một chút để tạo hiệu ứng so le (Staggered)
            >
              {/* Timeline Dot (Desktop) */}
              <div className="hidden lg:flex absolute left-[-60px] top-8 w-8 h-8 bg-yellow-100 rounded-full border-4 border-white items-center justify-center z-10 shadow-sm">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>

              <Card className="border-l-4 border-l-yellow-400 shadow-xl bg-white relative overflow-hidden group">
                {/* Hiệu ứng nền sáng */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>

                <CardHeader className="pb-2 relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white mb-2 font-mono">
                        2024+ ERA
                      </Badge>
                      <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-2">
                        Modular Architecture
                      </h3>
                    </div>
                    <div className="p-3 bg-yellow-100 rounded-full text-yellow-600 group-hover:scale-110 transition-transform">
                      <Layers className="w-6 h-6" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <p className="text-slate-600 italic border-l-2 border-yellow-300 pl-3">
                    Một hệ sinh thái linh hoạt. Các khối lego lắp ghép thông
                    minh. Thay đổi một phần không ảnh hưởng toàn cục.
                  </p>

                  {/* Metrics - Positive */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-bold text-slate-700">
                          Deploy Time
                        </span>
                      </div>
                      <span className="text-green-600 font-mono font-bold">
                        ~5 mins
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-center gap-3">
                        <GitMerge className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-bold text-slate-700">
                          Maintainability
                        </span>
                      </div>
                      <span className="text-blue-600 font-mono font-bold">
                        High (Decoupled)
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                      Dễ dàng Scale theo chiều ngang.
                    </li>
                    <li className="flex gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                      Cô lập lỗi (Fault Isolation) tốt hơn.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom Connector (Kết luận) */}
          <div className="mt-16 text-center relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-600 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Sự tiến hóa hướng tới sự cân bằng giữa <strong>
                Tốc độ
              </strong> và <strong>Sự ổn định</strong>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
