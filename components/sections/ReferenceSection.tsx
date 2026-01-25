"use client";
import {
  BookOpen,
  Link as LinkIcon,
  ExternalLink,
  Quote,
  Library,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const references = [
  {
    id: 1,
    author: "Dragoni, N., Giallorenzo, S., et al.",
    year: "2017",
    title: "Microservices: Yesterday, Today, and Tomorrow",
    source: "Springer",
    link: "https://link.springer.com/chapter/10.1007/978-3-319-67425-4_12",
  },
  {
    id: 2,
    author: "Engels, F.",
    year: "1877",
    title: "Anti-Dühring: XIII. Negation of the Negation",
    source: "Marxists Internet Archive",
    link: "https://www.marxists.org/archive/marx/works/1877/anti-duhring/ch11.htm",
  },
  {
    id: 3,
    author: "Fowler, M.",
    year: "2014",
    title: "Microservices",
    source: "martinfowler.com",
    link: "https://martinfowler.com/articles/microservices.html",
  },
  {
    id: 4,
    author: "Kolny, M.",
    year: "2023",
    title:
      "Scaling up the Prime Video audio/video monitoring service and reducing costs by 90%",
    source: "Prime Video Tech",
    link: "https://www.wudsn.com/productions/www/site/news/2023/2023-05-08-microservices-01.pdf",
  },
  {
    id: 5,
    author: "Noonan, A.",
    year: "2018/2020",
    title: "Segment: to microservices and back again",
    source: "InfoQ",
    link: "https://www.infoq.com/news/2018/07/segment-microservices/",
  },
  {
    id: 6,
    author: "Su, R., Li, X., & Taibi, D.",
    year: "2024",
    title: "From Microservice to Monolith: A Multivocal Literature Review",
    source: "Electronics, 13(8), 1452",
    link: "https://www.mdpi.com/2079-9292/13/8/1452",
  },
  {
    id: 7,
    author: "InfoQ",
    year: "2023",
    title:
      "Prime Video switched from serverless to EC2/ECS and saved costs by 90%",
    source: "InfoQ News",
    link: "https://www.infoq.com/news/2023/05/prime-ec2-ecs-saves-costs/",
  },
  {
    id: 8,
    author: "Duy Tan University",
    year: "n.d.",
    title: "Giáo trình Triết học Mác–Lênin (PDF)",
    source: "DTU Repository",
    link: "https://kmacle.duytan.edu.vn/uploads/75770b9b-cdbf-4038-90e2-f25e1f4426fe_triethocmaclenin.pdf",
  },
  {
    id: 9,
    author: "HCMUNRE",
    year: "n.d.",
    title:
      "Trích phần hướng dẫn giải quyết mâu thuẫn/đấu tranh các mặt đối lập (PDF)",
    source: "Tài liệu học phần",
    link: "https://hcmunre.edu.vn/upload/elfinder/Trang%20Khoa/Khoa%20Luat%20%26LLCT/Ph%E1%BA%A7n%203_GT%20h%E1%BB%8Dc%20ph%E1%BA%A7n%20Tri%E1%BA%BFt%20h%E1%BB%8Dc%20MLN%20%28K%29%20Tr131-Tr229.pdf",
  },
  {
    id: 10,
    author: "CAST Software",
    year: "2024",
    title: "Why COBOL Still Dominates Banking—and How to Modernize",
    source: "CAST Pulse",
    link: "https://www.castsoftware.com/pulse/why-cobol-still-dominates-banking-and-how-to-modernize",
  },
  {
    id: 11,
    author: "Luxoft",
    year: "2023",
    title: "Why banks still rely on COBOL-driven mainframe systems",
    source: "Luxoft Blog",
    link: "https://www.luxoft.com/blog/why-banks-still-rely-on-cobol-driven-mainframe-systems",
  },
  {
    id: 12,
    author: "Finextra",
    year: "2026",
    title: "Too Critical to Kill: Why COBOL Still Runs the Bank",
    source: "Finextra Blog",
    link: "https://www.finextra.com/blogposting/30543/too-critical-to-kill-why-cobol-still-runs-the-bank",
  },
  {
    id: 13,
    author: "Feathers, M.",
    year: "2004",
    title: "Working Effectively with Legacy Code",
    source: "Understand Legacy Code",
    link: "https://understandlegacycode.com/blog/what-is-legacy-code-is-it-code-without-tests",
  },
];

export default function ReferenceSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 -z-0"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <Badge
              variant="outline"
              className="mb-3 border-yellow-500 text-yellow-700 bg-yellow-50"
            >
              Academic Sources
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 flex items-center gap-3">
              <Library className="w-8 h-8 text-yellow-600" />
              Danh Mục Tài Liệu Tham Khảo
            </h2>
            <p className="text-slate-500 mt-2 text-lg">
              Tổng hợp nguồn dữ liệu chuẩn APA (2024-2026)
            </p>
          </div>

          <div className="hidden md:block w-1/3 h-[1px] bg-gradient-to-r from-slate-200 to-transparent"></div>
        </div>

        {/* --- List Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((ref) => (
            <a
              key={ref.id}
              href={ref.link}
              target="_blank"
              rel="noreferrer"
              className="group block h-full"
            >
              <Card className="h-full p-6 border border-slate-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden">
                {/* Hover Effect Bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300"></div>

                <div className="flex gap-4 items-start">
                  {/* ID Box */}
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 group-hover:bg-yellow-50 group-hover:text-yellow-700 transition-colors">
                    <span className="font-mono font-bold text-slate-400 text-sm">
                      {ref.id < 10 ? `0${ref.id}` : ref.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="text-sm text-slate-800 leading-relaxed mb-2">
                      <span className="font-bold">{ref.author}</span> (
                      {ref.year}).{" "}
                      <span className="italic font-serif text-lg text-slate-900 block my-1 group-hover:text-blue-700 transition-colors">
                        {ref.title}
                      </span>
                      <span className="text-slate-500 text-xs uppercase tracking-wide font-bold">
                        {ref.source}
                      </span>
                    </div>
                  </div>

                  {/* Link Icon */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
                    <ExternalLink className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* --- Footer Note --- */}
        <div className="mt-12 text-center border-t border-slate-100 pt-8">
          <p className="text-xs text-slate-400 italic">
            *Các tài liệu được trích dẫn nhằm phục vụ mục đích nghiên cứu và học
            thuật.
          </p>
        </div>
      </div>
    </section>
  );
}
