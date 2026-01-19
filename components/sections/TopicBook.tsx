"use client";
import { motion } from "framer-motion";

export default function TopicBook() {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Phần mô tả bên cạnh sách */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h3 className="font-serif text-3xl font-bold text-slate-800">
            Hồ sơ nghiên cứu <br />
            <span className="text-yellow-600">Level 2: Khám phá</span>
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Toàn bộ quá trình nghiên cứu từ việc đặt câu hỏi, xây dựng giả
            thuyết đến kiểm chứng thực tế được gói gọn trong tài liệu này. Một
            cách tiếp cận khoa học để giải quyết vấn đề kỹ thuật.
          </p>
          <div className="flex gap-2 justify-center md:justify-start pt-2">
            <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-mono text-slate-500">
              #Research
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-mono text-slate-500">
              #Philosophy
            </span>
          </div>
        </div>

        {/* 3D Book Visual */}
        <div className="md:w-1/2 flex justify-center perspective-1000">
          <motion.div
            className="relative w-[260px] h-[360px] cursor-pointer preserve-3d group"
            whileHover={{ rotateY: -20, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front Cover */}
            <div className="absolute inset-0 bg-yellow-500 rounded-r-md shadow-2xl flex flex-col items-center justify-center p-6 text-center z-20 backface-hidden border-l-4 border-yellow-700">
              <div className="border-2 border-yellow-200 w-full h-full flex flex-col items-center justify-center p-4">
                <h4 className="font-serif text-2xl font-bold text-white mb-2 uppercase tracking-wider">
                  Báo Cáo
                </h4>
                <div className="w-12 h-1 bg-white mb-4 opacity-50"></div>
                <p className="font-serif text-white text-sm">
                  Sự đào thải công nghệ
                </p>
                <p className="font-mono text-yellow-100 text-[10px] mt-8">
                  Nhóm nghiên cứu FPT
                </p>
              </div>
            </div>

            {/* Pages (Thickness) */}
            <div className="absolute right-0 top-0 w-[40px] h-full bg-slate-100 origin-right rotate-y-90 translate-x-[20px] z-10 border border-slate-200"></div>

            {/* Back Cover shadow simulation */}
            <div className="absolute inset-0 bg-yellow-600 rounded-l-md transform translate-z-[-20px] shadow-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
