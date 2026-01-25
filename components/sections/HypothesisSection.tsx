"use client";
import { motion } from "framer-motion";
import {
  Target,
  GitCompare,
  TrendingUp,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const hypothesis = [
  {
    step: "01",
    phase: "Khởi tạo",
    icon: <Target className="w-8 h-8 text-rose-500" />,
    title: "H1: Tính Tất Yếu Khách Quan",
    desc: "Sự đào thải công nghệ không phải là ngẫu nhiên, mà là kết quả của mâu thuẫn nội tại giữa nhu cầu mở rộng (Lực lượng sản xuất) và cấu trúc cứng nhắc (Quan hệ sản xuất).",
    highlight: "Mâu thuẫn nội tại",
    color: "border-rose-200 bg-rose-50 hover:border-rose-400",
    badgeColor: "bg-rose-100 text-rose-700",
  },
  {
    step: "02",
    phase: "Phủ định lần 1",
    icon: <GitCompare className="w-8 h-8 text-blue-500" />,
    title: "H2: Sự Phủ Định Biện Chứng",
    desc: "Microservices ra đời để phủ định Monolith, giải quyết sự tù túng. Tuy nhiên, nó lại sinh ra mâu thuẫn mới về chi phí vận hành và độ phức tạp quản lý.",
    highlight: "Mâu thuẫn mới",
    color: "border-blue-200 bg-blue-50 hover:border-blue-400",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    step: "03",
    phase: "Phủ định của phủ định",
    icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
    title: "H3: Sự Hồi Quy Cấp Cao",
    desc: "Modular Monolith xuất hiện như một bước phát triển cao hơn. Nó quay lại hình thái thống nhất (Monolith) nhưng kế thừa sự linh hoạt (Modules) của Microservices.",
    highlight: "Kế thừa & Phát triển",
    color: "border-emerald-200 bg-emerald-50 hover:border-emerald-400",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
];

export default function HypothesisSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 shadow-sm">
            <HelpCircle className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Câu hỏi & Giả thuyết
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Luận Điểm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500">
              Cốt Lõi
            </span>
          </h2>
          <p className="text-slate-500 text-lg">
            Nghiên cứu tập trung chứng minh 3 giả thuyết khoa học về sự vận động
            của kiến trúc phần mềm dựa trên quy luật triết học.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-rose-200 via-blue-200 to-emerald-200 border-t border-dashed border-slate-300 z-0"></div>

          {hypothesis.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10 group"
            >
              <Card
                className={`h-full border-2 transition-all duration-300 shadow-sm hover:shadow-xl ${item.color}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <Badge className={`${item.badgeColor} border-none`}>
                      {item.step} - {item.phase}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-xl text-slate-800 group-hover:text-slate-900">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed text-sm mb-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide opacity-80">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="underline decoration-2 underline-offset-4 decoration-slate-300 group-hover:decoration-current">
                      {item.highlight}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow Connector for Mobile */}
              {idx < 2 && (
                <div className="md:hidden flex justify-center my-4">
                  <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
