"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, XCircle, RefreshCcw, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    step: "01",
    phase: "Chính Đề (Thesis)",
    title: "Legacy Monolith",
    subtitle: "Sự thống nhất cứng nhắc",
    desc: "Trong giai đoạn khởi thủy, Monolith là giải pháp tối ưu nhờ sự đơn giản: một codebase, một database, một quy trình deploy. Tuy nhiên, khi quy mô doanh nghiệp mở rộng, ưu điểm này trở thành 'xiềng xích'. Hệ thống trở nên cồng kềnh (Tight Coupling), một thay đổi nhỏ cũng đòi hỏi build lại toàn bộ, kìm hãm tốc độ phát triển.",
    points: [
      "Chi phí thay đổi cao",
      "Khó mở rộng (Scale) từng phần",
      "Công nghệ cũ kỹ khó nâng cấp",
    ],
    img: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771607/cover-bai-hthu-1397x786_vrwvlu.jpg",
    icon: <XCircle className="w-6 h-6 text-red-500" />,
    color: "bg-red-100 text-red-700",
  },
  {
    step: "02",
    phase: "Phản Đề (Antithesis)",
    title: "Microservices",
    subtitle: "Sự phủ định phân tán",
    desc: "Để giải quyết mâu thuẫn của Monolith, chúng ta thực hiện bước 'phủ định': đập vỡ khối thống nhất thành các mảnh nhỏ Microservices. Mỗi dịch vụ chạy độc lập, tự do chọn công nghệ. Nhưng tự do đi kèm cái giá đắt: sự phức tạp trong vận hành (DevOps), độ trễ mạng (Latency) và khó khăn trong việc debug phân tán.",
    points: [
      "Phức tạp trong vận hành",
      "Network Latency & Overhead",
      "Dữ liệu thiếu nhất quán (Eventual Consistency)",
    ],
    img: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771607/cover-bai-hthu-1397x786_vrwvlu.jpg",
    icon: <ArrowRight className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    step: "03",
    phase: "Hợp Đề (Synthesis)",
    title: "Modular Monolith",
    subtitle: "Sự hồi quy ở trình độ cao",
    desc: "Theo quy luật xoáy ốc, chúng ta quay lại hình thái 'Một khối' nhưng với tư duy tổ chức của Microservices. Modular Monolith kế thừa sự đơn giản trong triển khai của cái cũ, đồng thời áp dụng cấu trúc module rành mạch của cái mới. Đây là sự phủ định của phủ định – giải pháp cân bằng hoàn hảo cho đa số doanh nghiệp hiện nay.",
    points: [
      "Hiệu năng cao (In-memory calls)",
      "Dễ dàng Deploy & Test",
      "Ranh giới Module rõ ràng (Clean Architecture)",
    ],
    img: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771607/cover-bai-hthu-1397x786_vrwvlu.jpg",
    icon: <RefreshCcw className="w-6 h-6 text-green-500" />,
    color: "bg-green-100 text-green-700",
  },
];

export default function AlternatingFeatures() {
  return (
    <section id="content" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-yellow-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32 last:mb-0 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* --- IMAGE SIDE --- */}
            <div className="w-full lg:w-1/2 relative group">
              {/* Abstract Shape behind image */}
              <div
                className={`absolute -inset-4 rounded-3xl opacity-50 transition-transform duration-700 group-hover:rotate-2 ${
                  index === 0
                    ? "bg-red-100"
                    : index === 1
                      ? "bg-blue-100"
                      : "bg-green-100"
                }`}
              ></div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border-4 border-white transform transition-transform duration-700 group-hover:-translate-y-2">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>

                {/* Floating Badge on Image */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-lg flex items-center gap-3">
                  {item.icon}
                  <span className="font-bold text-slate-800">{item.title}</span>
                </div>
              </div>
            </div>

            {/* --- CONTENT SIDE --- */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl font-serif font-black text-slate-100 leading-none select-none absolute -translate-x-6 -translate-y-6 z-0">
                  {item.step}
                </span>
                <Badge
                  variant="outline"
                  className={`relative z-10 border-none px-3 py-1 text-xs font-bold uppercase tracking-wider ${item.color}`}
                >
                  {item.phase}
                </Badge>
              </div>

              <h3 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-4 relative z-10">
                {item.title}
              </h3>
              <p className="text-lg font-medium text-yellow-600 mb-6 font-mono">
                {item.subtitle}
              </p>

              <p className="text-slate-600 text-lg leading-relaxed mb-8 text-justify">
                {item.desc}
              </p>

              <div className="space-y-3">
                {item.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
