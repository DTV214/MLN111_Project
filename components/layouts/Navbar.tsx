"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // Icon menu cho mobile
import { useState } from "react";

const navItems = [
  { name: "Giới thiệu", href: "#intro" },
  { name: "Nội dung", href: "#content" },
  { name: "Thực tiễn", href: "#practical" },
  { name: "Case-study", href: "/case-study" },
  { name: "Mô phỏng", href: "/simulation" },
  //   { name: "Tin tức", href: "#news" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-yellow-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl font-bold text-yellow-700 tracking-tighter"
        >
          Triết học & <span className="text-slate-800">Legacy Code</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-yellow-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/research">
            <Button
              variant="default"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold shadow-lg hover:shadow-yellow-100 transition-all"
            >
              Bắt đầu nghiên cứu
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6 text-slate-700" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
