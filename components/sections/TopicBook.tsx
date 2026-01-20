"use client";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2 } from "lucide-react";

export default function TopicBook() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* --- CỘT TRÁI: Text Description (Responsive) --- */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wide">
            <BookOpen className="w-3 h-3" />
            Tài liệu tham khảo
          </div>

          <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Hồ sơ nghiên cứu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
              Level 2: Khám Phá
            </span>
          </h3>

          <p className="text-slate-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Tổng hợp toàn bộ quá trình nghiên cứu: từ việc đặt câu hỏi phản
            biện, xây dựng giả thuyết khoa học đến các bằng chứng thực tế về quy
            luật phủ định trong công nghệ.
          </p>

          <ul className="space-y-3 text-left max-w-md mx-auto md:mx-0 pt-2">
            {[
              "Phương pháp luận Mác - Lênin",
              "Phân tích Case Study Amazon/Netflix",
              "Mô hình hóa đường xoáy ốc",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 justify-center md:justify-start pt-6">
            <span className="px-4 py-1.5 bg-yellow-50 border border-yellow-200 text-yellow-700 rounded-lg text-sm font-mono font-bold shadow-sm">
              #Research
            </span>
            <span className="px-4 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg text-sm font-mono font-bold shadow-sm">
              #Philosophy
            </span>
          </div>
        </div>

        {/* --- CỘT PHẢI: 3D Flippable Book --- */}
        <div className="w-full md:w-1/2 flex justify-center perspective-1000 py-10">
          <div className="relative w-[300px] h-[420px] group preserve-3d cursor-pointer">
            {/* 1. BACK COVER (Bìa sau - Cố định) */}
            <div className="absolute inset-0 bg-[#854d0e] rounded-r-lg shadow-2xl transform translate-x-2 translate-z-[-20px] border-l-[10px] border-[#5e3408]"></div>

            {/* 2. PAGES (Trang giấy bên trong - Xếp chồng) */}
            <div className="absolute top-2 right-2 w-[280px] h-[400px] bg-white border border-slate-200 shadow-inner flex flex-col p-6 z-10 origin-left transition-transform duration-700 group-hover:rotate-y-[-20deg]">
              {/* Nội dung nhỏ bên trong sách */}
              <div className="w-full h-full border border-dashed border-slate-300 p-4 relative overflow-hidden">
                <h5 className="font-serif text-xl text-slate-800 font-bold mb-2">
                  Mục Lục
                </h5>
                <div className="space-y-2">
                  <div className="w-full h-2 bg-slate-100 rounded"></div>
                  <div className="w-3/4 h-2 bg-slate-100 rounded"></div>
                  <div className="w-full h-2 bg-slate-100 rounded"></div>
                  <div className="w-5/6 h-2 bg-slate-100 rounded"></div>
                </div>
                <div className="mt-8 space-y-2">
                  <div className="w-full h-2 bg-slate-100 rounded"></div>
                  <div className="w-full h-2 bg-slate-100 rounded"></div>
                </div>

                {/* Dấu triện đỏ */}
                <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-red-500 rounded-full flex items-center justify-center opacity-20 rotate-[-15deg]">
                  <span className="text-red-500 text-[10px] font-bold uppercase">
                    Approved
                  </span>
                </div>
              </div>
            </div>

            {/* 3. FRONT COVER (Bìa trước - Lật ra khi hover) */}
            <div className="absolute inset-0 z-20 origin-left transition-transform duration-700 ease-in-out group-hover:rotate-y-[-160deg] preserve-3d">
              {/* Mặt ngoài bìa */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-r-lg shadow-xl border-l-[12px] border-yellow-900 flex flex-col items-center justify-center p-6 text-center backface-hidden">
                <div className="w-full h-full border-[3px] border-yellow-400/30 flex flex-col items-center justify-between p-6">
                  <div className="text-yellow-200 text-xs tracking-[0.3em] uppercase">
                    FPT University
                  </div>
                  <div>
                    <h1 className="font-serif text-4xl font-bold text-white mb-2 drop-shadow-md">
                      TRIẾT HỌC
                    </h1>
                    <span className="text-yellow-300 font-serif italic text-lg">
                      & Công nghệ
                    </span>
                  </div>
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-400/50 backdrop-blur-sm">
                    <span className="text-2xl font-bold text-white">II</span>
                  </div>
                </div>
              </div>

              {/* Mặt trong bìa (Khi lật ra sẽ thấy) */}
              <div className="absolute inset-0 bg-[#fdfbf7] rounded-l-lg shadow-inner rotate-y-180 backface-hidden border-r-[12px] border-yellow-900 flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="font-serif text-slate-500 italic mb-4">
                    Mọi sự phát triển đều là sự phủ định cái cũ...
                  </p>
                  <div className="w-10 h-1 bg-yellow-600 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bóng đổ dưới sách */}
          <div className="absolute bottom-5 w-[260px] h-4 bg-black/20 blur-xl rounded-[100%] transition-all duration-700 group-hover:w-[450px] group-hover:translate-x-[-80px] group-hover:opacity-10"></div>
        </div>
      </div>
    </section>
  );
}
