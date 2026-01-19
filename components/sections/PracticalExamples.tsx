// components/sections/PracticalExamples.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PracticalExamples() {
  return (
    <section
      id="practical"
      className="py-24 bg-white border-y border-slate-100"
    >
      <div className="container mx-auto px-4">
        {" "}
        {/* Đã thêm container */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="mb-4 text-yellow-600 border-yellow-200 bg-yellow-50 px-4 py-1"
          >
            Thực tiễn & Ứng dụng
          </Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Mô hình hóa sự thay đổi
          </h2>
          <p className="text-slate-500 mt-4">
            Các số liệu và dòng thời gian thực tế chứng minh cho lý thuyết.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Giữ nguyên nội dung Card cũ của bạn nhưng giờ nó sẽ thẳng hàng */}
          {/* ... Code Card cũ ... */}
          {/* (Tôi đã giữ nguyên logic code cũ của bạn, chỉ bọc lại div ngoài cùng) */}
          <Card className="bg-slate-50 border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-serif text-xl">
                Timeline: Amazon Prime Video
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 border-l-2 border-yellow-300 pl-6 ml-2 py-2">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-white border-4 border-yellow-400 rounded-full" />
                  <p className="text-sm text-slate-500 font-mono mb-1">2015</p>
                  <p className="font-bold text-slate-800">
                    Microservices Architecture
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    Chi phí cao, Scale khó khăn do overhead của serverless.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-white border-4 border-yellow-400 rounded-full" />
                  <p className="text-sm text-slate-500 font-mono mb-1">2023</p>
                  <p className="font-bold text-slate-800">Move to Monolith</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Giảm 90% chi phí vận hành, giữ nguyên tính năng.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 text-white border-none shadow-xl flex flex-col justify-center">
            {/* ... Giữ nguyên nội dung cũ ... */}
            <CardHeader>
              <CardTitle className="font-serif text-xl text-yellow-400 border-b border-slate-700 pb-4">
                Kết quả Refactoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8 mt-2">
                <div className="text-center">
                  <p className="text-5xl font-bold text-emerald-400 tracking-tighter">
                    -90%
                  </p>
                  <p className="text-sm text-slate-400 mt-2 uppercase tracking-wide">
                    Chi phí
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-yellow-400 tracking-tighter">
                    +50%
                  </p>
                  <p className="text-sm text-slate-400 mt-2 uppercase tracking-wide">
                    Hiệu năng
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
