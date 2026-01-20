"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Để điều hướng
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

// --- DỮ LIỆU THÀNH VIÊN NHÓM (Bạn sửa thông tin tại đây) ---
const teamMembers = [
  {
    id: 1,
    name: "Tất Tinh Bảo",
    mssv: "SE123456",
    role: "Team Leader & Research",
    icon: <Lightbulb className="w-4 h-4 text-yellow-600" />,
    avatar: "https://github.com/shadcn.png", // Thay bằng link ảnh thật hoặc bỏ dòng này
  },
  {
    id: 2,
    name: "Trần Văn An",
    mssv: "HS123457",
    role: "Content Creator",
    icon: <PenTool className="w-4 h-4 text-green-600" />,
    avatar: "",
  },
  {
    id: 3,
    name: "Võ Thành Danh",
    mssv: "HS123458",
    role: "Frontend Developer",
    icon: <Code2 className="w-4 h-4 text-blue-600" />,
    avatar: "",
  },
  {
    id: 4,
    name: "Trần Gia Nguyên",
    mssv: "HS123459",
    role: "Presenter & Research",
    icon: <MonitorPlay className="w-4 h-4 text-purple-600" />,
    avatar: "",
  },
  {
    id: 5,
    name: "Ngô Bằng Giang",
    mssv: "HS123459",
    role: "Presenter & Reporter",
    icon: <MonitorPlay className="w-4 h-4 text-purple-600" />,
    avatar: "",
  },
];

export default function HeroSection() {
  return (
    <section
      id="intro"
      className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden"
    >
      {/* --- HỌA TIẾT NỀN (Nâng cấp) --- */}
      <div className="absolute inset-0 z-0">
        {/* Lưới Grid mờ */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Gradient Glow */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-yellow-50/80 to-transparent pointer-events-none"></div>
      </div>

      {/* Trang trí mờ (Blur Blobs) */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge Level 2 */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-yellow-50 text-yellow-800 text-xs font-bold tracking-widest mb-6 border border-yellow-200 shadow-sm uppercase"
          >
            <Sparkles className="w-3 h-3" />
            Nghiên cứu khoa học: Level 2
          </motion.div>

          {/* Tiêu đề chính */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Sự Đào Thải <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600">
              Công Nghệ
            </span>
            <br />& Quy Luật Phủ Định
          </h1>

          {/* Mô tả */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Hành trình tiến hóa của phần mềm từ <strong>Monolith</strong> đến{" "}
            <strong>Microservices</strong> và sự quay trở lại của{" "}
            <strong>Modular Monolith</strong> dưới lăng kính của Phép biện chứng
            duy vật.
          </p>

          {/* Cụm nút bấm (Actions) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Nút 1: Xem chi tiết (Dẫn sang trang Research) */}
            <Link href="/research">
              <Button
                size="lg"
                className="bg-slate-900 text-white hover:bg-slate-800 px-8 h-12 rounded-full shadow-lg hover:shadow-xl transition-all group font-medium"
              >
                Bắt đầu Nghiên cứu
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            {/* Nút 2: Về nhóm (Mở Popup Dialog) */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-white hover:text-yellow-600 hover:border-yellow-400 px-8 h-12 rounded-full bg-white/50 backdrop-blur-sm transition-all"
                >
                  <Users className="mr-2 w-4 h-4" />
                  Thành viên nhóm
                </Button>
              </DialogTrigger>

              {/* Nội dung Popup */}
              <DialogContent className="sm:max-w-lg bg-white/95 backdrop-blur-xl border-white/20 shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl text-center text-slate-900 pb-2">
                    Đội ngũ Nghiên cứu
                  </DialogTitle>
                  <DialogDescription className="text-center text-slate-500">
                    Những người thực hiện đề tài và đóng góp xây dựng sản phẩm.
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-yellow-200 hover:bg-yellow-50/50 transition-colors"
                    >
                      {/* Avatar */}
                      <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-yellow-200 text-yellow-800 font-bold">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      {/* Info */}
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-sm md:text-base">
                          {member.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge
                            variant="secondary"
                            className="text-[10px] px-1.5 h-5 bg-slate-200 text-slate-600"
                          >
                            {member.mssv}
                          </Badge>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            {member.icon} {member.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center text-xs text-slate-400 mt-2">
                  © FPT University Project
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
