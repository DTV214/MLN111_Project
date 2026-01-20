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

const slides = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771542/bo-sung-phat-trien-hoan-thien-chu-nghia-mac-lenin_xdkrjm.jpg",
    alt: "Technology Evolution",
    title: "Sự Tiến Hóa",
    desc: "Từ đơn giản đến phức tạp",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771542/bo-sung-phat-trien-hoan-thien-chu-nghia-mac-lenin_xdkrjm.jpg",
    alt: "Legacy Code Refactoring",
    title: "Tái Cấu Trúc",
    desc: "Phủ định cái cũ lạc hậu",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771542/bo-sung-phat-trien-hoan-thien-chu-nghia-mac-lenin_xdkrjm.jpg",
    alt: "Future Architecture",
    title: "Tương Lai",
    desc: "Kế thừa và phát triển",
  },
];

export default function ImageCarousel() {
  // Plugin Autoplay: Chuyển slide mỗi 4 giây
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* --- HỌA TIẾT TRANG TRÍ --- */}
      <div className="absolute top-10 left-[-5%] w-64 h-64 border-[20px] border-yellow-100 rounded-full opacity-50 z-0" />
      <div className="absolute bottom-10 right-[5%] font-serif text-[200px] text-slate-100 leading-none select-none z-0 rotate-12">
        Ω
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-yellow-600 font-bold tracking-widest text-xs uppercase mb-2 block">
            Field Research
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800">
            Tổng quan Dự án
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex justify-center">
          {/* max-w-4xl giúp ảnh gọn gàng, tập trung hơn */}
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-4xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {slides.map((slide) => (
                // THAY ĐỔI QUAN TRỌNG Ở ĐÂY:
                // basis-full: Chiếm trọn 100% chiều rộng (hiển thị 1 ảnh)
                <CarouselItem key={slide.id} className="basis-full pl-4">
                  <div className="p-1">
                    <Card className="border-none shadow-2xl rounded-xl overflow-hidden group">
                      {/* Tăng aspect-ratio lên video (16/9) hoặc wide hơn để ảnh không bị quá cao */}
                      <CardContent className="flex aspect-[16/9] items-center justify-center p-0 relative">
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                        {/* Nội dung chữ */}
                        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-white font-serif text-3xl font-bold mb-2">
                            {slide.title}
                          </h3>
                          <p className="text-yellow-300 text-sm font-mono tracking-wide uppercase border-l-2 border-yellow-500 pl-3">
                            {slide.desc}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Nút điều hướng */}
            <CarouselPrevious className="hidden md:flex -left-12 w-12 h-12 border-2 border-yellow-500/30 bg-white/80 hover:bg-yellow-500 hover:text-white text-yellow-600 transition-all shadow-lg backdrop-blur-sm" />
            <CarouselNext className="hidden md:flex -right-12 w-12 h-12 border-2 border-yellow-500/30 bg-white/80 hover:bg-yellow-500 hover:text-white text-yellow-600 transition-all shadow-lg backdrop-blur-sm" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
