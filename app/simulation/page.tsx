"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Code2,
  RefreshCcw,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Terminal,
} from "lucide-react";
import Link from "next/link";

// --- DỮ LIỆU CODE MẪU ---

const codeLegacy = `// MonolithController.java (2015)
// TẤT CẢ TRONG MỘT FILE: Rất khó bảo trì!
public class BigController {
    @Autowired UserService userService;
    @Autowired OrderService orderService;
    @Autowired PaymentService paymentService;

    @PostMapping("/checkout")
    public void checkout() {
        // 1. Logic User lẫn lộn
        User u = userService.getUser();
        if(u.isBlocked()) throw new Error();

        // 2. Gọi DB trực tiếp
        String sql = "UPDATE inventory SET stock = stock - 1";
        jdbcTemplate.execute(sql);

        // 3. Thanh toán (Hard dependency)
        paymentService.charge(u.getCard()); // Nếu Payment lỗi, cả Order chết!
    }
}`;

const codeMicroservices = `// OrderService.java (2018)
// Tách nhỏ nhưng RỜI RẠC
public class OrderService {
    @Autowired RestTemplate restTemplate;

    public void checkout() {
        // Gọi User Service qua mạng (Network Call) -> Chậm!
        UserDTO u = restTemplate.get("http://user-service/api/me");
        
        // Gọi Inventory Service
        restTemplate.post("http://inventory-service/api/deduct");

        // Gọi Payment Service
        // Rủi ro: Distributed Transaction (Saga Pattern phức tạp)
        restTemplate.post("http://payment-service/api/charge");
    }
}`;

const codeModular = `// OrderModule.java (2024)
// MODULAR MONOLITH: Thống nhất nhưng Tách biệt
@Module(name = "OrderContext")
public class OrderService {
    private final InventoryPort inventoryPort; // Interface (Decoupling)

    // Domain Event: Xử lý nội bộ (In-Memory) -> Cực nhanh
    @Transactional
    public void checkout(Cart cart) {
        // 1. Domain Logic thuần túy
        Order order = Order.create(cart);
        
        // 2. Bắn Event (Không gọi trực tiếp module khác)
        eventPublisher.publish(new OrderPlacedEvent(order));
    }
}
// Ưu điểm: Compile-time check, Zero-latency, ACID Transaction`;

// --- COMPONENT CHÍNH ---

export default function SimulationPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-slate-950 text-slate-200 relative"
    >
      {/* THANH TIẾN TRÌNH DỌC (The Thread) */}
      <motion.div
        className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-yellow-500 via-blue-500 to-green-500 origin-top z-0"
        style={{ scaleY: scrollYProgress, height: "100%" }}
      />

      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-32">
        {/* HEADER */}
        <div className="text-center mb-24">
          <Badge
            variant="outline"
            className="text-yellow-400 border-yellow-400 mb-4 px-4 py-1"
          >
            Level 3: Mô phỏng Kỹ thuật
          </Badge>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
            Đường Xoáy Ốc <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Của Sự Phát Triển
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Cuộn xuống để chứng kiến mã nguồn (Code) tự phủ định chính nó và tái
            sinh ở dạng thức cao hơn.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-10 flex justify-center"
          >
            <ArrowDown className="text-yellow-500 w-8 h-8" />
          </motion.div>
        </div>

        {/* --- STAGE 1: THESIS (MONOLITH) --- */}
        <section className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:text-right order-2 md:order-1 space-y-4">
            <div className="inline-flex items-center gap-2 text-red-400 font-bold uppercase tracking-widest text-sm">
              <XCircle className="w-4 h-4" /> Giai đoạn 1: Thesis
            </div>
            <h2 className="text-4xl font-bold text-white font-serif">
              Legacy Monolith
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Mọi thứ được nhồi nhét vào một chỗ. Code bị dính chặt vào nhau
              (Tight Coupling). Sửa một dòng ở User có thể làm hỏng chức năng
              Thanh toán.
            </p>
            <Badge className="bg-red-900/50 text-red-200 border-red-700 hover:bg-red-900">
              Spaghetti Code
            </Badge>
          </div>

          <div className="order-1 md:order-2 pl-8 md:pl-0 border-l-4 md:border-l-0 md:border-r-4 border-slate-800 relative">
            {/* Code Window */}
            <div className="bg-[#1e1e1e] rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
              <div className="bg-[#252526] px-4 py-2 flex gap-2 items-center border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-slate-400 ml-2 font-mono">
                  BigController.java
                </span>
              </div>
              <SyntaxHighlighter
                language="java"
                style={vscDarkPlus}
                customStyle={{ margin: 0, fontSize: "0.8rem" }}
              >
                {codeLegacy}
              </SyntaxHighlighter>
            </div>
            {/* Dot Connector */}
            <div className="absolute left-[-18px] md:left-auto md:right-[-18px] top-1/2 w-8 h-8 bg-red-500 rounded-full border-4 border-slate-950 shadow-lg shadow-red-500/50 z-20 flex items-center justify-center font-bold text-white text-xs">
              1
            </div>
          </div>
        </section>

        {/* --- STAGE 2: ANTITHESIS (MICROSERVICES) --- */}
        <section className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Code bên Trái */}
          <div className="pl-8 border-l-4 border-slate-800 relative">
            <div className="bg-[#1e1e1e] rounded-lg shadow-2xl border border-blue-900/50 overflow-hidden">
              <div className="bg-[#252526] px-4 py-2 flex gap-2 items-center border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-slate-600" />
                <span className="text-xs text-slate-400 ml-2 font-mono">
                  OrderService.java (Distributed)
                </span>
              </div>
              <SyntaxHighlighter
                language="java"
                style={vscDarkPlus}
                customStyle={{ margin: 0, fontSize: "0.8rem" }}
              >
                {codeMicroservices}
              </SyntaxHighlighter>
            </div>
            <div className="absolute left-[-18px] top-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-slate-950 shadow-lg shadow-blue-500/50 z-20 flex items-center justify-center font-bold text-white text-xs">
              2
            </div>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm">
              <AlertTriangle className="w-4 h-4" /> Giai đoạn 2: Antithesis
            </div>
            <h2 className="text-4xl font-bold text-white font-serif">
              Microservices
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Chúng ta phủ định Monolith bằng cách đập vỡ nó ra. Code rõ ràng
              hơn, nhưng phát sinh vấn đề mới: Giao tiếp qua mạng (Network
              calls) rất chậm và dễ lỗi.
            </p>
            <Badge className="bg-blue-900/50 text-blue-200 border-blue-700 hover:bg-blue-900">
              Network Overhead
            </Badge>
          </div>
        </section>

        {/* --- STAGE 3: SYNTHESIS (MODULAR MONOLITH) --- */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:text-right order-2 md:order-1 space-y-4">
            <div className="inline-flex items-center gap-2 text-green-400 font-bold uppercase tracking-widest text-sm">
              <CheckCircle2 className="w-4 h-4" /> Giai đoạn 3: Synthesis
            </div>
            <h2 className="text-4xl font-bold text-white font-serif">
              Modular Monolith
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Quay lại mô hình Một khối (Monolith) nhưng bên trong được tổ
              chức khoa học (Modular). Kế thừa sự đơn giản của Monolith và sự
              rành mạch của Microservices.
            </p>
            <div className="flex gap-2 justify-end">
              <Badge className="bg-green-900/50 text-green-200 border-green-700">
                Clean Architecture
              </Badge>
              <Badge className="bg-yellow-900/50 text-yellow-200 border-yellow-700">
                High Performance
              </Badge>
            </div>
          </div>

          <div className="order-1 md:order-2 pl-8 md:pl-0 border-l-4 md:border-l-0 md:border-r-4 border-slate-800 relative">
            <div className="bg-[#1e1e1e] rounded-lg shadow-2xl border border-green-500/50 overflow-hidden ring-2 ring-green-500/20">
              <div className="bg-[#252526] px-4 py-2 flex gap-2 items-center border-b border-slate-700">
                <Terminal className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-400 ml-2 font-mono">
                  OrderModule.java (Final Form)
                </span>
              </div>
              <SyntaxHighlighter
                language="java"
                style={vscDarkPlus}
                customStyle={{ margin: 0, fontSize: "0.8rem" }}
              >
                {codeModular}
              </SyntaxHighlighter>
            </div>
            <div className="absolute left-[-18px] md:left-auto md:right-[-18px] top-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-950 shadow-lg shadow-green-500/50 z-20 flex items-center justify-center font-bold text-white text-xs">
              3
            </div>
          </div>
        </section>

        {/* --- KẾT LUẬN & CTA --- */}
        <div className="text-center mt-32">
          <Card className="bg-slate-900 border-slate-800 p-10 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Bạn đã thấy sự vận động chưa?
            </h3>
            <p className="text-slate-400 mb-8">
              Phát triển không phải là đi theo đường thẳng tắp, mà là một quá
              trình quanh co, lặp lại nhưng ở trình độ cao hơn. - Đó chính là
              phép biện chứng trong từng dòng code.
            </p>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold"
              >
                <RefreshCcw className="mr-2 w-4 h-4" /> Quay về Trang chủ
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
