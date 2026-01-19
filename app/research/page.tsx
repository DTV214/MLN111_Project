"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  Search,
  GitBranch,
  Quote,
  FileText,
  Activity,
} from "lucide-react";
import Link from "next/link";

// Dữ liệu giữ nguyên
const researchQuestions = [
  {
    id: "q1",
    question:
      "Câu hỏi 1: Bản chất của Legacy Code là gì dưới góc nhìn duy vật?",
    hypothesis:
      "Legacy Code không phải là 'lỗi' hay sự kém cỏi chủ quan, mà là một sự 'tồn tại khách quan'. Nó là kết quả tất yếu của trình độ công nghệ và yêu cầu nghiệp vụ tại một thời điểm lịch sử nhất định.",
    method: "Phương pháp: Duy vật lịch sử & Phân tích thực trạng.",
    icon: <Search className="w-5 h-5 text-blue-500" />,
  },
  {
    id: "q2",
    question: "Câu hỏi 2: Mâu thuẫn nào thúc đẩy sự đào thải công nghệ?",
    hypothesis:
      "Đó là mâu thuẫn biện chứng giữa 'Lực lượng sản xuất' (Công nghệ mới, Dev team trình độ cao) và 'Quan hệ sản xuất' (Kiến trúc cũ, Quy trình deploy thủ công). Khi mâu thuẫn này gay gắt, cái cũ buộc phải bị thay thế.",
    method: "Phương pháp: Phân tích mâu thuẫn.",
    icon: <GitBranch className="w-5 h-5 text-red-500" />,
  },
  {
    id: "q3",
    question:
      "Câu hỏi 3: Quá trình chuyển từ Monolith sang Microservices thể hiện quy luật gì?",
    hypothesis:
      "Đây là bước 'Phủ định lần 1'. Microservices ra đời phủ định sự cồng kềnh của Monolith, giải quyết bài toán quy mô (Scale). Tuy nhiên, nó chưa phải là hoàn hảo.",
    method: "Phương pháp: So sánh & Case Study (Amazon/Netflix).",
    icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
  },
  {
    id: "q4",
    question: "Câu hỏi 4: Tại sao xu hướng Modular Monolith lại quay trở lại?",
    hypothesis:
      "Đây là bước 'Phủ định của phủ định'. Sau khi Microservices bộc lộ nhược điểm (phức tạp, chi phí cao), công nghệ quay về hình thái Monolith nhưng ở trình độ cao hơn (Modular).",
    method: "Phương pháp: Tổng hợp & Khái quát hóa.",
    icon: <BookOpen className="w-5 h-5 text-green-500" />,
  },
  {
    id: "q5",
    question: "Câu hỏi 5: Sự phát triển phần mềm có đi theo đường thẳng không?",
    hypothesis:
      "Không. Nó đi theo 'Đường xoáy ốc' (Spiral). Chúng ta dường như quay lại cái cũ (Monolith) nhưng thực chất đang đứng ở bậc thang cao hơn về chất lượng và công cụ quản trị.",
    method: "Phương pháp: Mô hình hóa đường xoáy ốc.",
    icon: <ArrowRight className="w-5 h-5 text-purple-500" />,
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden pt-24 pb-20">
      {/* --- BACKGROUND PATTERN (Mới) --- */}
      {/* Tạo lưới ô vuông mờ để làm nền kỹ thuật */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-yellow-200 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">
              Research Phase: Discovery
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Hồ sơ nghiên cứu: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600">
              Truy tìm Quy luật Vận động
            </span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Giải mã sự tiến hóa của mã nguồn thông qua lăng kính triết học biện
            chứng.
            <br />{" "}
            <span className="text-slate-400 italic text-sm">
              Case Study: FPT University Project
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* --- LEFT COLUMN: Main Research Content (8 cols) --- */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              {/* Decoration Header */}
              <div className="bg-slate-50 px-8 py-4 border-b border-slate-100 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  research_log_v2.0.json
                </div>
              </div>

              <div className="p-2 md:p-6">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                >
                  {researchQuestions.map((item, index) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      className="border border-slate-100 rounded-xl px-4 transition-all duration-300 data-[state=open]:border-yellow-400 data-[state=open]:bg-yellow-50/30 data-[state=open]:shadow-md"
                    >
                      <AccordionTrigger className="hover:no-underline py-5 group">
                        <div className="flex items-center gap-5 text-left w-full">
                          {/* Number Badge */}
                          <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 text-slate-500 group-data-[state=open]:bg-yellow-500 group-data-[state=open]:text-white items-center justify-center font-serif font-bold text-xl transition-colors duration-300">
                            {index + 1}
                          </div>

                          <div className="flex-grow">
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 group-data-[state=open]:text-yellow-600">
                              {item.question.split(":")[0]}
                            </span>
                            <span className="font-serif font-medium text-lg text-slate-700 group-data-[state=open]:text-slate-900 leading-snug">
                              {item.question.split(":")[1]}
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pb-6 pt-2 pl-0 md:pl-[68px]">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="relative bg-white p-6 rounded-lg border border-slate-200 shadow-sm"
                        >
                          {/* Dấu ngoặc kép trang trí */}
                          <Quote className="absolute top-4 right-4 w-8 h-8 text-yellow-100 rotate-180" />

                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <FileText className="w-4 h-4 text-yellow-500" />
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                Giả thuyết (Hypothesis)
                              </span>
                            </div>
                            <p className="text-slate-700 text-base font-serif leading-relaxed italic border-l-4 border-yellow-400 pl-4">
                              {item.hypothesis}
                            </p>
                          </div>

                          <div className="mt-6 flex flex-wrap gap-3">
                            <Badge
                              variant="secondary"
                              className="bg-slate-100 text-slate-600 hover:bg-slate-200 gap-1 pl-1"
                            >
                              <Activity className="w-3 h-3 text-slate-400" />
                              {item.method.replace("Phương pháp: ", "")}
                            </Badge>
                          </div>
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Navigation Button */}
            <div className="mt-10 flex justify-end">
              <Link href="/case-study">
                <Button
                  size="lg"
                  className="bg-slate-900 text-white hover:bg-slate-800 gap-3 px-8 h-14 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-medium text-lg"
                >
                  Bước tiếp theo: Chứng minh thực tế
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Sidebar (4 cols) --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {/* Card 1: Góc Lý Luận (Giao diện tối/Terminal) */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <Card className="relative bg-slate-900 text-slate-300 border-none shadow-2xl rounded-xl overflow-hidden">
                  <CardHeader className="border-b border-slate-800 pb-4">
                    <CardTitle className="text-yellow-400 font-serif flex items-center gap-2 text-lg">
                      <BookOpen className="w-5 h-5" /> Thư viện Triết học
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6 text-sm leading-relaxed">
                    <div className="group/item hover:bg-slate-800 p-3 -mx-3 rounded-lg transition-colors cursor-default">
                      <strong className="text-white block mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        Phủ định biện chứng
                      </strong>
                      <p className="text-slate-400 text-xs mt-1">
                        Thay thế cái cũ bằng cái mới, nhưng{" "}
                        <span className="text-yellow-400 border-b border-yellow-400 border-dotted">
                          kế thừa hạt nhân hợp lý
                        </span>
                        .
                      </p>
                    </div>

                    <div className="w-full h-px bg-slate-800" />

                    <div className="group/item hover:bg-slate-800 p-3 -mx-3 rounded-lg transition-colors cursor-default">
                      <strong className="text-white block mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Quy luật Lượng - Chất
                      </strong>
                      <p className="text-slate-400 text-xs mt-1">
                        Tích lũy nợ kỹ thuật (Lượng) $\rightarrow$ Phá vỡ cấu
                        trúc (Chất).
                      </p>
                    </div>
                  </CardContent>

                  {/* Họa tiết trang trí góc */}
                  <div className="absolute bottom-0 right-0 p-4 opacity-5">
                    <GitBranch className="w-24 h-24" />
                  </div>
                </Card>
              </div>

              {/* Card 2: Note của Dev (Giao diện giấy Note) */}
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-12 h-4 bg-yellow-200/50 backdrop-blur-sm rounded-sm z-10 shadow-sm"></div>{" "}
                {/* Băng dính */}
                <Card className="bg-yellow-50 border-yellow-200 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-yellow-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <Lightbulb className="w-4 h-4 text-yellow-600" /> Quick
                      Note
                    </h4>
                    <p className="font-serif text-slate-700 italic leading-relaxed">
                      Mã nguồn không bao giờ chết, nó chỉ chuyển từ dạng này
                      sang dạng khác. Một Senior Dev giỏi là người biết khi nào
                      nên{" "}
                      <span className="font-bold bg-yellow-200 px-1">
                        Refactor
                      </span>{" "}
                      thay vì{" "}
                      <span className="line-through decoration-red-400">
                        Rewrite
                      </span>
                      .
                    </p>
                    <div className="mt-4 flex justify-end">
                      <span className="text-[10px] font-mono text-slate-400">
                        -- Team Lead --
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
