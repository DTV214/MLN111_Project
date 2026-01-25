"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  XCircle,
  RefreshCcw,
  ArrowRight,
  History,
  GitBranch,
  Layers,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    step: "Chương 1",
    phase: "Khẳng Định (Thesis)",
    title: "Sự Thịnh Vượng của Monolith",
    subtitle: "Cơ sở lý luận ban đầu",
    desc: "Trong giai đoạn đầu của kỷ nguyên số, Monolith (Nguyên khối) đóng vai trò là 'Cái khẳng định'. Nó phù hợp với trình độ phát triển công nghệ lúc bấy giờ: triển khai đơn giản, quản lý tập trung. Tuy nhiên, mâu thuẫn nội tại giữa quy mô ngày càng lớn và cấu trúc cứng nhắc dần nảy sinh.",
    points: [
      "Tính thống nhất cao",
      "Dễ dàng Debug & Develop ban đầu",
      "Mâu thuẫn: Khó mở rộng (Scale) khi dữ liệu lớn",
    ],
    img: "https://res.cloudinary.com/dratbz8bh/image/upload/v1769313036/futuristic-tech-monolith-stockcake_r46mrj.jpg", // Ảnh minh họa Monolith
    icon: <History className="w-6 h-6 text-slate-500" />,
    color: "bg-slate-100 text-slate-700",
  },
  {
    step: "Chương 2",
    phase: "Phủ Định (Antithesis)",
    title: "Cuộc Cách Mạng Microservices",
    subtitle: "Sự phủ định biện chứng",
    desc: "Để giải quyết mâu thuẫn của Monolith, Microservices ra đời như một sự 'Phủ định'. Chúng ta đập vỡ khối thống nhất thành các dịch vụ nhỏ. Đây là bước nhảy vọt về Lực lượng sản xuất, cho phép các team làm việc độc lập. Nhưng nó lại sinh ra mâu thuẫn mới: Chi phí vận hành và độ trễ mạng.",
    points: [
      "Linh hoạt & Độc lập công nghệ",
      "Phức tạp trong vận hành (DevOps)",
      "Mâu thuẫn mới: Chi phí hạ tầng tăng cao",
    ],
    img: "https://res.cloudinary.com/dratbz8bh/image/upload/v1769312944/Gemini_Generated_Image_rpam2nrpam2nrpam-e1765270510874_q2yq0s.png", // Ảnh minh họa Microservices
    icon: <GitBranch className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    step: "Chương 2 (Tiếp)",
    phase: "Phủ Định của Phủ Định (Synthesis)",
    title: "Kỷ Nguyên Modular Monolith",
    subtitle: "Sự kế thừa và phát triển",
    desc: "Theo quy luật xoáy ốc, công nghệ quay lại hình thái 'Một khối' (Monolith) nhưng ở trình độ cao hơn (Modular). Nó kế thừa 'hạt nhân hợp lý' (tính module) của Microservices và loại bỏ mặt tiêu cực (độ trễ mạng). Đây là giải pháp cân bằng cho năm 2024.",
    points: [
      "Hiệu năng cao (In-memory calls)",
      "Kế thừa tính Module hóa",
      "Giải pháp tối ưu cho đa số doanh nghiệp",
    ],
    img: "https://res.cloudinary.com/dratbz8bh/image/upload/v1769313271/1714504461883_xqmhva.png", // Ảnh minh họa Modular
    icon: <Layers className="w-6 h-6 text-green-500" />,
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
        {/* Section Header */}
        <div className="text-center mb-24">
          <Badge
            variant="outline"
            className="mb-4 text-slate-500 border-slate-300 px-4 py-1 uppercase tracking-widest text-xs font-bold"
          >
            Nội dung cốt lõi
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900">
            Tiến Trình Vận Động <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
              Của Kiến Trúc Phần Mềm
            </span>
          </h2>
        </div>

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
              <div
                className={`absolute -inset-4 rounded-3xl opacity-50 transition-transform duration-700 group-hover:rotate-2 ${
                  index === 0
                    ? "bg-slate-100"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>

                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-lg flex items-center gap-3">
                  {item.icon}
                  <span className="font-bold text-slate-800">{item.title}</span>
                </div>
              </div>
            </div>

            {/* --- CONTENT SIDE --- */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-serif font-black text-slate-200 leading-none select-none">
                  {item.step}
                </span>
                <Badge
                  variant="outline"
                  className={`border-none px-3 py-1 text-xs font-bold uppercase tracking-wider ${item.color}`}
                >
                  {item.phase}
                </Badge>
              </div>

              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-base font-medium text-yellow-600 mb-6 font-mono border-l-2 border-yellow-500 pl-3">
                {item.subtitle}
              </p>

              <p className="text-slate-600 text-lg leading-relaxed mb-8 text-justify">
                {item.desc}
              </p>

              <div className="space-y-3 bg-slate-50 p-6 rounded-xl border border-slate-100">
                {item.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 font-medium text-sm">
                      {point}
                    </span>
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
