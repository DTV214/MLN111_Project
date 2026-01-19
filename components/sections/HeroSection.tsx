// components/sections/HeroSection.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="intro"
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-yellow-50 via-white to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-300 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-yellow-200 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-800 text-sm font-bold tracking-wide mb-4 border border-yellow-200">
            NGHIÊN CỨU KHOA HỌC: LEVEL 2
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Sự Đào Thải{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
              Công Nghệ
            </span>
            <br />& Quy Luật Phủ Định
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 font-sans">
            Khám phá hành trình tiến hóa của phần mềm từ Monolith đến
            Microservices dưới lăng kính của Phép biện chứng duy vật.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-slate-900 text-white hover:bg-slate-800 px-8"
            >
              Xem chi tiết
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              Về nhóm nghiên cứu
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
