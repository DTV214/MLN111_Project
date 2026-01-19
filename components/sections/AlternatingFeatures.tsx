"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "1. Cái Khẳng Định: Legacy Code",
    desc: "Hệ thống cũ từng là giải pháp tối ưu trong quá khứ, nhưng theo thời gian, sự phát triển của nhu cầu khiến nó trở thành rào cản. Đây là điểm xuất phát tất yếu.",
    img: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771607/cover-bai-hthu-1397x786_vrwvlu.jpg",
  },
  {
    title: "2. Sự Phủ Định: Microservices",
    desc: "Để giải quyết mâu thuẫn 'nguyên khối' chật chội, ta phủ định nó bằng cách đập nhỏ thành Microservices. Linh hoạt hơn, tự do hơn, nhưng cũng hỗn loạn hơn.",
    img: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771607/cover-bai-hthu-1397x786_vrwvlu.jpg",
  },
  {
    title: "3. Phủ Định của Phủ Định: Modular Monolith",
    desc: "Không quay lại cái cũ, mà quay lại sự 'nhất quán' ở trình độ cao hơn. Kế thừa tính module của Microservices trong hình hài thống nhất của Monolith.",
    img: "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771607/cover-bai-hthu-1397x786_vrwvlu.jpg",
  },
];

export default function AlternatingFeatures() {
  return (
    <section
      id="content"
      className="py-24 bg-gradient-to-b from-white via-yellow-50/30 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        {/* Họa tiết trang trí nền (Pattern) */}
        <svg
          className="absolute top-0 right-0 opacity-10 pointer-events-none"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="pattern-squares"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-yellow-500"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#pattern-squares)" />
        </svg>

        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-32 last:mb-0 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative">
              {/* Trang trí sau ảnh */}
              <div
                className={`absolute -inset-4 bg-yellow-100 rounded-3xl -z-10 transform ${index % 2 === 0 ? "rotate-3" : "-rotate-3"} transition-transform duration-500 group-hover:rotate-0`}
              ></div>

              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl border border-slate-100 group">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay nhẹ khi hover */}
                <div className="absolute inset-0 bg-yellow-900/0 group-hover:bg-yellow-900/10 transition-colors duration-300"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-700 font-bold font-serif text-xl shadow-sm border border-yellow-200">
                  {index + 1}
                </span>
                <div className="h-px bg-yellow-200 flex-grow max-w-[100px]"></div>
              </div>

              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                {item.title.split(":")[1]} {/* Chỉ lấy phần text sau dấu : */}
                <span className="block text-lg font-sans font-normal text-yellow-600 mt-2 uppercase tracking-wider opacity-80">
                  {item.title.split(":")[0]}
                </span>
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
