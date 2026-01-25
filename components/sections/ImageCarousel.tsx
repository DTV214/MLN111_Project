"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";

const slides = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dratbz8bh/image/upload/v1769312729/3_bh4lfz.jpg",
    phase: "Giai đoạn 1",
    title: "Sự Tiến Hóa Tự Nhiên",
    desc: "Khởi đầu từ những cấu trúc đơn giản (Monolith). Đây là nền tảng tất yếu của mọi hệ thống phần mềm trong giai đoạn sơ khai.",
    tags: ["Monolith", "Thesis", "Khởi thủy"],
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771681/le_nin_1716281116170_izc8la.jpg",
    phase: "Giai đoạn 2",
    title: "Cuộc Cách Mạng Phủ Định",
    desc: "Đập vỡ cấu trúc cũ để tìm kiếm sự linh hoạt (Microservices). Giai đoạn này đầy biến động, phức tạp nhưng cần thiết để phát triển.",
    tags: ["Microservices", "Antithesis", "Phân rã"],
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771493/article_tkzsvc.jpg",
    phase: "Giai đoạn 3",
    title: "Sự Hồi Quy Cấp Cao",
    desc: "Quay trở lại sự thống nhất nhưng với trí tuệ mới (Modular Monolith). Kế thừa ưu điểm của cả hai giai đoạn trước.",
    tags: ["Modular", "Synthesis", "Hợp nhất"],
  },
];

export default function ImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-yellow-100 to-transparent"></div>
        <div className="absolute left-10 bottom-10 text-9xl font-serif text-slate-200 rotate-12">
          Σ
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="mb-4 border-yellow-500 text-yellow-700 bg-yellow-50 px-4 py-1 uppercase tracking-widest text-xs font-bold"
          >
            Project Overview
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Hành Trình Nghiên Cứu
          </h2>
          <p className="text-slate-600 text-lg">
            Tổng quan 3 bước chuyển mình của công nghệ, tương ứng với 3 quy luật
            vận động của Triết học.
            <br />
            <span className="text-sm italic text-slate-500">
              (Di chuột vào ảnh để xem chi tiết)
            </span>
          </p>
        </div>

        {/* --- CAROUSEL --- */}
        <div className="flex justify-center">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-5xl shadow-2xl rounded-2xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.id} className="basis-full">
                  <div className="p-0">
                    <Card className="border-none rounded-2xl overflow-hidden group relative h-[500px]">
                      {" "}
                      {/* Chiều cao cố định */}
                      <CardContent className="p-0 h-full w-full relative">
                        {/* 1. IMAGE LAYER */}
                        <Image
                          src={slide.src}
                          alt={slide.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                        />

                        {/* 2. OVERLAY DARK LAYER (Để chữ dễ đọc) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                        {/* 3. CONTENT BOX (Glassmorphism) */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-end h-full">
                          {/* Phase Label */}
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="inline-flex items-center gap-2 text-yellow-400 font-mono text-sm font-bold tracking-widest uppercase mb-2">
                              <span className="w-8 h-[2px] bg-yellow-400 inline-block"></span>
                              {slide.phase}
                            </div>

                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-lg">
                              {slide.title}
                            </h3>
                          </div>

                          {/* Description (Reveal on Hover) */}
                          <div className="max-w-2xl overflow-hidden max-h-0 group-hover:max-h-[200px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                            <p className="text-slate-200 text-lg leading-relaxed border-l-4 border-yellow-500 pl-4 mb-6">
                              {slide.desc}
                            </p>

                            {/* Tags */}
                            <div className="flex gap-3">
                              {slide.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-xs text-white font-medium"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Hint Icon (Hide on Hover) */}
                          <div className="absolute bottom-8 right-8 text-white/50 group-hover:opacity-0 transition-opacity duration-300 animate-bounce">
                            <Info className="w-6 h-6" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="left-4 w-12 h-12 bg-white/10 hover:bg-white/90 hover:text-slate-900 border-none backdrop-blur-sm text-white transition-all" />
            <CarouselNext className="right-4 w-12 h-12 bg-white/10 hover:bg-white/90 hover:text-slate-900 border-none backdrop-blur-sm text-white transition-all" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
