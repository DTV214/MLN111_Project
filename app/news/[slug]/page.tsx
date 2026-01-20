"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ArticlePage() {
  const params = useParams();
  const { slug } = params;

  // Trong thực tế, bạn sẽ fetch data từ database dựa trên slug
  // Ở đây mình hardcode demo layout

  return (
    <article className="min-h-screen bg-white pt-24 pb-20">
      {/* Article Header */}
      <div className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Link href="/news">
            <Button
              variant="ghost"
              className="mb-8 text-slate-500 hover:text-yellow-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại Tin tức
            </Button>
          </Link>

          <div className="flex gap-2 justify-center mb-6">
            <Badge
              variant="secondary"
              className="bg-yellow-100 text-yellow-800"
            >
              Technology
            </Badge>
            <Badge variant="outline">5 min read</Badge>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {/* Demo Title based on slug */}
            {slug === "modular-monolith-trend"
              ? "Xu hướng Modular Monolith 2024: Sự trở lại của Vua"
              : "Bài viết chi tiết: " + slug}
          </h1>

          <div className="flex items-center justify-center gap-6 text-slate-500 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" /> Nhóm Nghiên cứu
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> 15/01/2026
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg prose-slate prose-headings:font-serif prose-a:text-yellow-600 hover:prose-a:text-yellow-500 mx-auto">
          <p className="lead text-xl text-slate-600 italic mb-8 border-l-4 border-yellow-400 pl-4">
            Trong một thế giới bị ám ảnh bởi Microservices, việc quay trở lại
            Monolith nghe có vẻ điên rồ. Nhưng Modular Monolith đang chứng minh
            điều ngược lại.
          </p>

          <h3>1. Tại sao Microservices không phải là thuốc tiên?</h3>
          <p>
            Microservices hứa hẹn sự tự do, khả năng mở rộng (scalability) và
            độc lập. Tuy nhiên, cái giá phải trả là sự phức tạp trong vận hành
            (DevOps complexity), độ trễ mạng (Network latency) và khó khăn trong
            việc debug phân tán...
          </p>

          <h3>2. Modular Monolith là gì?</h3>
          <p>
            Nó là một khối đơn nhất (deployment unit) nhưng bên trong mã nguồn
            được chia thành các module rạch ròi, chỉ giao tiếp qua các Public
            Interface xác định. Nó giống như việc bạn xếp gọn đồ đạc vào các
            ngăn tủ ngăn nắp, thay vì vứt bừa bãi (Spaghetti code) hay xây mỗi
            món đồ một căn nhà riêng (Microservices).
          </p>

          <h3>3. Kết luận</h3>
          <p>
            Sự phát triển của công nghệ tuân theo đường xoáy ốc. Chúng ta quay
            lại Monolith, nhưng ở một trình độ cao hơn.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex gap-2">
          <Tag className="w-4 h-4 text-slate-400" />
          <span className="text-sm font-bold text-slate-700">Tags:</span>
          <Badge variant="secondary" className="cursor-pointer">
            Architecture
          </Badge>
          <Badge variant="secondary" className="cursor-pointer">
            Backend
          </Badge>
          <Badge variant="secondary" className="cursor-pointer">
            Philosophy
          </Badge>
        </div>
      </div>
    </article>
  );
}