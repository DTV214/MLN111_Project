"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  Users,
  Sparkles,
  Code2,
  PenTool,
  Lightbulb,
  MonitorPlay,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// --- DỮ LIỆU THÀNH VIÊN ---
const teamMembers = [
  {
    id: 1,
    name: "Tất Tinh Bảo",
    mssv: "SE123456",
    role: "Team Leader & Research",
    icon: <Lightbulb className="w-3 h-3" />,
    color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    avatar: "https://github.com/shadcn.png", // Demo image
  },
  {
    id: 2,
    name: "Trần Văn An",
    mssv: "HS123457",
    role: "Content Creator",
    icon: <PenTool className="w-3 h-3" />,
    color: "bg-green-100 text-green-700 border-green-200",
    avatar: "",
  },
  {
    id: 3,
    name: "Võ Thành Danh",
    mssv: "HS123458",
    role: "Frontend Developer",
    icon: <Code2 className="w-3 h-3" />,
    color: "bg-blue-100 text-blue-700 border-blue-200",
    avatar: "",
  },
  {
    id: 4,
    name: "Trần Gia Nguyên",
    mssv: "HS123459",
    role: "Presenter & Research",
    icon: <MonitorPlay className="w-3 h-3" />,
    color: "bg-purple-100 text-purple-700 border-purple-200",
    avatar: "",
  },
  {
    id: 5,
    name: "Ngô Bằng Giang",
    mssv: "HS123459",
    role: "Presenter & Reporter",
    icon: <MonitorPlay className="w-3 h-3" />,
    color: "bg-purple-100 text-purple-700 border-purple-200",
    avatar: "",
  },
];

export default function HeroSection() {
  return (
    <section
      id="intro"
      className="relative min-h-[95vh] flex items-center justify-center bg-white overflow-hidden pt-16"
    >
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0">
        {/* Lưới kỹ thuật (Grid Pattern) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Vòng tròn tỏa sáng trung tâm */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-100/40 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Họa tiết trang trí phụ */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-20 relative max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge Level 2 - Nổi bật hơn */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white border border-yellow-200 shadow-[0_0_15px_rgba(234,179,8,0.15)] mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-500 fill-yellow-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">
              Đề tài Nghiên cứu Khoa học 2026
            </span>
          </motion.div>

          {/* Tiêu đề chính - Typography mạnh mẽ */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.15] mb-8 tracking-tight">
            Sự Đào Thải <br className="hidden md:block" />
            {/* Phần Highlight: Công Nghệ... */}
            <span className="relative inline-block my-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 animate-gradient-x pb-2">
                Công Nghệ trong thời đại chuyển đổi số
              </span>
              {/* Gạch chân nghệ thuật */}
              <span className="absolute bottom-3 left-0 w-full h-3 bg-yellow-200/50 -z-0 skew-x-12 transform origin-bottom-left rounded-sm"></span>
            </span>
            <br />
            {/* Phần Subtitle: Dưới góc nhìn... */}
            <span className="block mt-2 text-2xl md:text-4xl text-slate-600 font-light italic tracking-normal">
              dưới góc nhìn quy luật phủ định của phủ định
            </span>
          </h1>

          {/* Mô tả - Căn chỉnh độ rộng tối ưu đọc */}
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Khám phá hành trình tiến hóa tất yếu từ <strong>Monolith</strong> sơ
            khai đến sự bùng nổ của <strong>Microservices</strong>, và xu hướng
            quay trở lại <strong>Modular Monolith</strong> – một minh chứng sống
            động cho phép biện chứng duy vật.
          </p>

          {/* Cụm nút bấm (Actions) */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* Nút 1: CTA Chính */}
            <Link href="/research">
              <Button
                size="lg"
                className="bg-slate-900 text-white hover:bg-slate-800 px-8 h-14 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-base font-semibold group"
              >
                Bắt đầu Nghiên cứu
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            {/* Nút 2: Dialog Thành viên */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 px-8 h-14 rounded-full bg-white/80 backdrop-blur-sm transition-all text-base font-medium shadow-sm hover:shadow-md"
                >
                  <Users className="mr-2 w-5 h-5 text-slate-500" />
                  Nhóm thực hiện
                </Button>
              </DialogTrigger>

              {/* Nội dung Popup - Thiết kế lại Card */}
              <DialogContent className="sm:max-w-md bg-white border-slate-100 shadow-2xl p-0 overflow-hidden">
                <DialogHeader className="p-6 pb-2 bg-slate-50 border-b border-slate-100">
                  <DialogTitle className="font-serif text-2xl text-center text-slate-900">
                    Đội Ngũ Nghiên Cứu
                  </DialogTitle>
                  <DialogDescription className="text-center text-slate-500">
                    Nhóm sinh viên thực hiện đề tài (K18 - FPTU)
                  </DialogDescription>
                </DialogHeader>

                <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-100 hover:border-yellow-300 hover:shadow-md transition-all duration-300 group"
                    >
                      {/* Avatar */}
                      <Avatar className="h-12 w-12 border-2 border-white shadow-sm group-hover:scale-105 transition-transform">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-800 font-bold">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-bold text-slate-800 text-sm truncate">
                            {member.name}
                          </h4>
                          <span className="text-[10px] text-slate-400 font-mono bg-slate-100 px-1.5 py-0.5 rounded">
                            {member.mssv}
                          </span>
                        </div>

                        <div
                          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium border ${member.color}`}
                        >
                          {member.icon} {member.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 p-3 text-center text-[10px] text-slate-400 border-t border-slate-100">
                  © 2026 FPT University Research Group
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
