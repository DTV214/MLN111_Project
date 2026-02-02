"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook để lấy đường dẫn hiện tại
import { Button } from "@/components/ui/button";
import { Bot, Menu, View } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Lấy đường dẫn hiện tại (ví dụ: /, /case-study)

  // Hàm xử lý tạo đường dẫn thông minh
  const getHref = (href: string) => {
    // Nếu link là trang con (bắt đầu bằng / nhưng không phải /#), giữ nguyên
    if (href.startsWith("/") && !href.startsWith("/#")) return href;

    // Nếu link là anchor (#...)
    if (href.startsWith("#") || href.startsWith("/#")) {
      const hash = href.replace("/", ""); // Đưa về dạng #id

      // Nếu đang ở trang chủ, dùng #id để scroll mượt
      if (pathname === "/") {
        return hash;
      }
      // Nếu đang ở trang khác, dùng /#id để redirect về trang chủ rồi scroll
      return `/${hash}`;
    }

    return href;
  };

  const navItems = [
    { name: "Giới thiệu", href: "#intro" }, // Sửa thành #intro để khớp với ID của HeroSection
    { name: "Nội dung", href: "#content" },
    { name: "Thực tiễn", href: "#practical" },
    { name: "Case-study", href: "/case-study" },
    { name: "Mô phỏng", href: "/simulation" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-yellow-100 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl font-bold text-yellow-700 tracking-tighter hover:scale-105 transition-transform"
        >
          Triết học & <span className="text-slate-800">Legacy Code</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={getHref(item.href)}
              className={`text-sm font-medium transition-colors relative group ${
                pathname === item.href
                  ? "text-yellow-600 font-bold"
                  : "text-slate-600 hover:text-yellow-600"
              }`}
            >
              {item.name}
              {/* Hiệu ứng gạch chân khi hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* AI Usage Button */}
          <Link href="/ai-usage">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-slate-300 text-slate-500 hover:text-yellow-600 hover:border-yellow-500 hover:bg-yellow-50 transition-all bg-transparent"
            >
              <Bot className="w-4 h-4" />
              AI Usage
            </Button>
          </Link>

          {/* Start Research Button */}
          <Link href="/research">
            <Button
              variant="default"
              size="sm"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Bắt đầu nghiên cứu
            </Button>
          </Link>

          {/* Report Link */}
          <a
            href="https://docs.google.com/document/d/1QhQx2RjhOJ_ZwP4iuAdrQSRRKRMTLtwb7v22YxRfE18/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-yellow-600 transition-colors"
          >
            <View className="w-4 h-4" /> Xem báo cáo
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 hover:bg-slate-100 rounded-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6 text-slate-700" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={getHref(item.href)}
              className="text-base font-medium text-slate-600 py-2 hover:text-yellow-600 hover:pl-2 transition-all border-b border-slate-50 last:border-none"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <Link href="/ai-usage" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Bot className="w-4 h-4" /> AI Usage
              </Button>
            </Link>
            <Link href="/research" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                Bắt đầu nghiên cứu
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
