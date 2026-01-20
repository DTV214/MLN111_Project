// components/sections/PracticalExamples.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Server,
  ShieldAlert,
  ArrowRight,
  Database,
  Clock,
} from "lucide-react";

export default function PracticalExamples() {
  return (
    <section
      id="practical"
      className="py-24 bg-slate-50 border-y border-slate-200"
    >
      <div className="container mx-auto px-4">
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Badge
            variant="outline"
            className="mb-6 text-yellow-700 border-yellow-400 bg-yellow-50 px-4 py-1.5 text-sm font-bold uppercase tracking-wider"
          >
            Real-world Evidence
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Từ Lý Luận đến <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
              Thực Tiễn Kỹ Thuật
            </span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Dữ liệu thực tế chứng minh quy luật Phủ định của phủ định không chỉ
            là lý thuyết suông. Nó hiện hữu trong từng dòng code, từng kiến trúc
            hệ thống của các tập đoàn công nghệ hàng đầu.
          </p>
        </div>

        {/* --- MAIN GRID CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* CỘT TRÁI: TIMELINE CHI TIẾT (AMAZON CASE) - Chiếm 7 phần */}
          <div className="lg:col-span-7 space-y-8">
            <Card className="h-full border-none shadow-xl bg-white overflow-hidden">
              <CardHeader className="bg-slate-900 text-white p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 mb-3 font-bold">
                      CASE STUDY ĐIỂN HÌNH
                    </Badge>
                    <CardTitle className="font-serif text-3xl">
                      Hành trình của Amazon Prime Video
                    </CardTitle>
                    <CardDescription className="text-slate-400 mt-2 text-base">
                      Minh chứng cho vòng xoáy trôn ốc: Monolith → Microservices
                      → Modular Monolith
                    </CardDescription>
                  </div>
                  <Server className="w-12 h-12 text-slate-700" />
                </div>
              </CardHeader>

              <CardContent className="p-8">
                {/* Timeline Visual */}
                <div className="relative border-l-2 border-slate-200 ml-4 space-y-10 pb-4">
                  {/* Giai đoạn 1 */}
                  <div className="relative pl-8 group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-300 rounded-full border-4 border-white shadow-sm group-hover:bg-yellow-500 transition-colors" />
                    <div className="flex items-center gap-3 mb-2">
                      <Badge
                        variant="outline"
                        className="font-mono text-slate-500"
                      >
                        2015
                      </Badge>
                      <h4 className="font-bold text-slate-800 text-lg">
                        Khởi đầu phân tán (Microservices)
                      </h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Amazon chuyển sang kiến trúc Serverless/Microservices để
                      tách nhỏ hệ thống.
                      <br />
                      <span className="italic text-sm text-slate-400">
                        Mục đích: Tăng tốc độ deploy, tách biệt trách nhiệm.
                      </span>
                    </p>
                  </div>

                  {/* Giai đoạn 2: Mâu thuẫn */}
                  <div className="relative pl-8 group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-400 rounded-full border-4 border-white shadow-sm group-hover:scale-125 transition-transform" />
                    <div className="flex items-center gap-3 mb-2">
                      <Badge
                        variant="destructive"
                        className="bg-red-100 text-red-700 border-red-200"
                      >
                        Critical Issue
                      </Badge>
                      <h4 className="font-bold text-red-700 text-lg">
                        Điểm gãy (The Breaking Point)
                      </h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Hệ thống gặp vấn đề nghiêm trọng về{" "}
                      <strong>chi phí</strong> và <strong>hiệu năng</strong>.
                      Việc luân chuyển dữ liệu giữa các services tốn kém quá
                      nhiều tài nguyên mạng.
                      <br />
                      <span className="font-bold text-red-500 text-sm">
                        → Chạm giới hạn AWS Step Functions.
                      </span>
                    </p>
                  </div>

                  {/* Giai đoạn 3: Phủ định của phủ định */}
                  <div className="relative pl-8 group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-sm animate-pulse" />
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-green-200">
                        2023 - Hiện tại
                      </Badge>
                      <h4 className="font-bold text-green-700 text-lg">
                        Hồi quy thông minh (Modular Monolith)
                      </h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Gộp các components lại thành một khối thống nhất
                      (Monolith) nhưng giữ cấu trúc module bên trong.
                      <br />
                      <span className="font-bold text-slate-800 text-sm">
                        → Kết quả: Kế thừa ưu điểm của cả hai mô hình.
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CỘT PHẢI: SỐ LIỆU & CASE PHỤ - Chiếm 5 phần */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* 1. KẾT QUẢ ĐỊNH LƯỢNG (DASHBOARD STYLE) */}
            <Card className="bg-slate-900 text-white border-none shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity className="w-32 h-32" />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl text-yellow-400 border-b border-slate-700 pb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" /> Hiệu quả Tái cấu trúc
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div className="space-y-2">
                    <span className="text-5xl md:text-6xl font-black text-emerald-400 tracking-tighter block">
                      -90%
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Chi phí vận hành
                    </span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-5xl md:text-6xl font-black text-yellow-400 tracking-tighter block">
                      X5
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Tốc độ xử lý
                    </span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-slate-800 rounded-lg text-sm text-slate-300 italic">
                  Chúng tôi nhận ra rằng Microservices không phải là viên đạn
                  bạc. Quay về Monolith là quyết định đúng đắn nhất.
                  <div className="mt-2 text-right text-yellow-500 font-bold not-italic">
                    — Amazon Tech Blog
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2. CASE STUDY PHỤ: NGHỊCH LÝ COBOL (Lấy từ Doc của bạn) */}
            <Card className="bg-white border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-5 h-5 text-blue-500" />
                  <span className="text-xs font-bold text-blue-600 uppercase">
                    Nghịch lý công nghệ
                  </span>
                </div>
                <CardTitle className="font-serif text-xl text-slate-800">
                  Tại sao COBOL vẫn sống?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dù được coi là Legacy Code (lạc hậu), nhưng hệ thống Ngân hàng
                  lõi (Core Banking) vẫn dùng COBOL thay vì Java/.NET.
                </p>
                <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <Database className="w-8 h-8 text-slate-400" />
                  <div>
                    <p className="font-bold text-slate-700 text-sm">
                      Phủ định chưa hoàn tất
                    </p>
                    <p className="text-xs text-slate-500">
                      Cái cũ vẫn tồn tại song song vì độ ổn định quá cao.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-xs font-bold uppercase tracking-wide"
                >
                  Đọc phân tích chi tiết <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
