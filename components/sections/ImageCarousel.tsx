// components/sections/ImageCarousel.tsx
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

// Giả lập link ảnh Cloudinary (Bạn thay link thật vào đây)
const slides = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771542/bo-sung-phat-trien-hoan-thien-chu-nghia-mac-lenin_xdkrjm.jpg",
    alt: "Technology Evolution",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771542/bo-sung-phat-trien-hoan-thien-chu-nghia-mac-lenin_xdkrjm.jpg",
    alt: "Legacy Code Refactoring",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771542/bo-sung-phat-trien-hoan-thien-chu-nghia-mac-lenin_xdkrjm.jpg",
    alt: "Future Architecture",
  },
];

export default function ImageCarousel() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold text-slate-800">
            Tổng quan Dự án
          </h2>
          <p className="text-slate-500 mt-2">
            Hình ảnh minh họa quá trình nghiên cứu thực địa
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel className="w-full max-w-4xl">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <div className="p-1">
                    <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
                      <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 w-full bg-black/50 p-4 text-white backdrop-blur-sm">
                          <p className="font-mono text-sm">{slide.alt}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
