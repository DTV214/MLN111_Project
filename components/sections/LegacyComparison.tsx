"use client";
import { motion } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function LegacyComparison() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-yellow-50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-bold tracking-widest text-sm uppercase">
            Phân tích đối chiếu
          </span>
          <h2 className="font-serif text-4xl font-bold text-slate-900 mt-2">
            Cuộc chiến giữa hai thế hệ
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4">
            Sự khác biệt không chỉ nằm ở dòng code, mà nằm ở tư duy kiến trúc và
            khả năng thích ứng.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Cột Legacy - Tối màu/Cũ kỹ */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <Card className="bg-slate-50 border-slate-200 p-8 h-full relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-9xl font-serif font-black text-slate-300">
                  OLD
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-slate-700 mb-4 flex items-center gap-2">
                  <XCircle className="text-red-400" /> Legacy Monolith
                </h3>
                <p className="text-slate-600 italic mb-6">
                  Tảng đá khổng lồ chắn lối đi.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2" />
                    Tight Coupling: Sửa một chỗ, hỏng mười chỗ.
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2" />
                    Deploy ác mộng: Thời gian build tính bằng giờ.
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2" />
                    Công nghệ chết: Phụ thuộc thư viện từ 2010.
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Icon chuyển đổi ở giữa (Desktop) */}
          <div className="hidden lg:flex justify-center absolute left-1/2 -translate-x-1/2">
            <div className="bg-white p-2 rounded-full shadow-xl border border-yellow-100 z-20">
              <ArrowRight className="text-yellow-500 w-8 h-8" />
            </div>
          </div>

          {/* Cột Modern - Sáng/Vàng gold */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <Card className="bg-gradient-to-br from-yellow-50 to-white border-yellow-100 p-8 h-full relative overflow-hidden shadow-md hover:shadow-xl transition-shadow border-t-4 border-t-yellow-400">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-9xl font-serif font-black text-yellow-300">
                  NEW
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="text-green-500" /> Modular
                  Architecture
                </h3>
                <p className="text-slate-600 italic mb-6">
                  Hệ sinh thái linh hoạt và sống động.
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2" />
                    Separation of Concerns: Module nào việc nấy.
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2" />
                    Scalability: Mở rộng dễ dàng theo nhu cầu.
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2" />
                    High Maintenance: Dễ đọc, dễ sửa, dễ test.
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
