"use client";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  Download,
  MousePointerClick,
  ExternalLink,
  View,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function TopicBook() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-20">
        {/* --- CỘT TRÁI: Text Description & Actions --- */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-widest">
            <BookOpen className="w-3 h-3" />
            Documentation Center
          </div>

          {/* Heading */}
          <div>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Báo Cáo Nghiên Cứu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                Toàn Văn & Chi Tiết
              </span>
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              Đây là nơi bạn tìm thấy toàn bộ dữ liệu, phân tích chuyên sâu và
              các lập luận triết học được trình bày bài bản.
            </p>
          </div>

          {/* List content */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 max-w-md mx-auto md:mx-0">
            <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">
              Nội dung bên trong:
            </h4>
            <ul className="space-y-3">
              {[
                "Cơ sở lý luận Triết học Mác - Lênin",
                "Phân tích dữ liệu thực tế (Amazon, Netflix)",
                "Mô hình hóa kiến trúc phần mềm 2024",
                "Kết luận và Dự báo xu hướng tương lai",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-600 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* User Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-2">
            <Link href="/research">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white gap-2 shadow-lg h-12 px-6 rounded-full">
                <ExternalLink className="w-4 h-4" /> Giả thiết & Nghiên cứu
              </Button>
            </Link>
            <a
              href="https://docs.google.com/document/d/1RoOlRLLZDPnWxHNfTYS3LpOzWkwPVkE8O05hApt5xqM/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                className="border-slate-300 hover:bg-white text-slate-700 gap-2 h-12 px-6 rounded-full"
              >
                <View className="w-4 h-4" /> Xem Data
              </Button>
            </a>
          </div>
        </div>

        {/* --- CỘT PHẢI: 3D Vivid Book (Chân thực) --- */}
        <div className="w-full md:w-1/2 flex justify-center perspective-[1500px] py-10 relative">
          {/* Hint cho người dùng */}
          <div className="absolute top-0 right-10 md:right-20 animate-bounce text-slate-400 flex flex-col items-center gap-1 z-0">
            <MousePointerClick className="w-6 h-6" />
            <span className="text-xs font-mono">Di chuột để mở</span>
          </div>

          <div className="relative w-[320px] h-[460px] group preserve-3d cursor-pointer transition-transform duration-700 ease-out hover:rotate-y-[-15deg] hover:translate-x-4">
            {/* 1. BACK COVER (Bìa sau) */}
            <div className="absolute inset-0 bg-[#593c23] rounded-r-lg rounded-l-sm shadow-2xl transform translate-z-[-25px] border-l-[4px] border-[#3e2a18]"></div>

            {/* 2. PAGES BLOCK (Khối giấy) */}
            <div className="absolute top-[3px] right-[4px] bottom-[3px] left-[12px] bg-white transform translate-z-[-12px] border-r border-slate-300">
              {/* Texture giấy bên cạnh */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_1px,#f1f5f9_2px,#f1f5f9_3px)] opacity-50"></div>
            </div>

            {/* 3. FRONT COVER (Bìa trước - Lật) */}
            <div className="absolute inset-0 z-20 origin-left transition-transform duration-700 ease-in-out group-hover:rotate-y-[-160deg] preserve-3d rounded-r-lg rounded-l-sm">
              {/* === MẶT NGOÀI (FRONT) === */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-700 via-yellow-600 to-yellow-800 rounded-r-lg rounded-l-sm shadow-xl flex flex-col backface-hidden overflow-hidden">
                {/* Gáy sách cong (Spine Effect) */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-yellow-900/80 via-yellow-600/50 to-transparent z-20"></div>
                <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-yellow-900/30 z-20"></div>

                {/* Chất liệu bìa (Texture) */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-30 mix-blend-overlay"></div>

                {/* Nội dung bìa */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between border-t-2 border-b-2 border-yellow-400/20 m-4">
                  <div className="text-center space-y-2">
                    <p className="text-yellow-200/80 text-xs tracking-[0.4em] uppercase font-bold">
                      FPT University
                    </p>
                    <div className="w-12 h-1 bg-yellow-400 mx-auto rounded-full opacity-80"></div>
                  </div>

                  <div className="text-center">
                    <h2 className="font-serif text-5xl font-bold text-white mb-2 drop-shadow-md tracking-tight">
                      TRIẾT HỌC
                    </h2>
                    <p className="text-yellow-100 font-serif italic text-xl border-t border-b border-yellow-400/30 py-2 inline-block px-4">
                      & Kỷ Nguyên Số
                    </p>
                  </div>

                  <div className="text-center space-y-4">
                    <Badge
                      variant="outline"
                      className="border-yellow-400/50 text-yellow-200 font-mono text-[10px]"
                    >
                      RESEARCH PROPOSAL 2024
                    </Badge>
                    <p className="text-yellow-900/60 text-[10px] font-bold">
                      NHÓM THỰC HIỆN: GROUP 6
                    </p>
                  </div>
                </div>
              </div>

              {/* === MẶT TRONG (INSIDE) === */}
              <div className="absolute inset-0 bg-[#f8f5e8] rounded-r-lg rounded-l-sm shadow-inner rotate-y-180 backface-hidden flex items-center justify-center p-6 border-l-[8px] border-[#e2e8f0]">
                <div className="w-full h-full border border-slate-200 bg-white p-6 shadow-sm relative overflow-hidden">
                  {/* Dây đánh dấu trang (Bookmark) */}
                  <div className="absolute top-0 right-8 w-6 h-32 bg-red-600 shadow-md transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-1000 delay-100">
                    <div className="absolute bottom-0 left-0 border-l-[12px] border-r-[12px] border-b-[10px] border-l-red-600 border-r-red-600 border-b-transparent"></div>
                  </div>

                  <h5 className="font-serif text-2xl text-slate-800 font-bold mb-6 text-center border-b pb-4">
                    Mục Lục
                  </h5>

                  <ul className="space-y-4 text-sm text-slate-600 font-serif">
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                      <span>Chương 1: Tổng quan</span> <span>05</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                      <span>Chương 2: Cơ sở lý luận</span> <span>12</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                      <span>Chương 3: Giải pháp</span> <span>28</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1 font-bold text-yellow-700">
                      <span>Kết luận & Kiến nghị</span> <span>45</span>
                    </li>
                  </ul>

                  <div className="absolute bottom-6 left-0 w-full text-center">
                    <span className="text-[10px] text-slate-400 italic">
                      Phiên bản 1.0 - Lưu hành nội bộ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bóng đổ thực tế dưới sách */}
          <div className="absolute bottom-5 w-[300px] h-6 bg-black/30 blur-2xl rounded-[100%] transition-all duration-700 group-hover:w-[500px] group-hover:translate-x-[-100px] group-hover:opacity-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
