"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  RefreshCcw,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Terminal,
  Cpu,
  ChefHat,
  Network,
  Box,
  Home,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

// --- TYPE DEFINITIONS (No more 'any') ---
interface CodeData {
  title: string;
  sub: string;
  code: string;
  analogy: string;
  color: string;
}

interface SectionProps {
  data: CodeData;
  step: string;
  icon: React.ReactNode;
  align: "left" | "right";
  BadgeIcon: LucideIcon;
  badgeText: string;
  badgeColor: string;
}

// --- DỮ LIỆU CODE MẪU & GIẢI THÍCH ĐỜI SỐNG (KITCHEN ANALOGY) ---

const thesisData: CodeData = {
  title: "Giai đoạn 1: Monolith (Nguyên Khối)",
  sub: "Căn Bếp Chật Chội",
  code: `// TẤT CẢ TRONG 1 FILE: Rất dễ dẫm chân nhau
public class KitchenSystem {
    // ❌ Mọi thứ dính chùm (Tight Coupling)
    // Nếu ông Thu Ngân nghỉ việc -> Bếp cũng nghỉ!
    @Autowired Chef chef;
    @Autowired Cashier cashier;

    public void serveCustomer() {
       // 1. Thu ngân tính tiền
       // 2. Đầu bếp nấu ăn
       // 3. Phục vụ mang ra
       // ⛔ Tất cả chờ nhau trong 1 luồng duy nhất.
    }
}`,
  analogy:
    "Tưởng tượng một căn bếp nhỏ xíu. Đầu bếp, Thu ngân và Phục vụ đứng chen chúc. Chỉ cần ông Thu ngân bị ốm, cả bếp phải đóng cửa vì không ai tính tiền để nấu tiếp được.",
  color: "red",
};

const antithesisData: CodeData = {
  title: "Giai đoạn 2: Microservices (Vi Dịch Vụ)",
  sub: "Các Phòng Ban Rời Rạc",
  code: `// DỊCH VỤ RIÊNG BIỆT: Gọi nhau qua mạng
public class OrderService {
    // ⚠️ Gọi điện thoại cho nhau (Network Call) -> Chậm!
    @Autowired RestTemplate phone;

    public void serveCustomer() {
       // Gọi sang nhà Bếp (mất 2s kết nối)
       phone.call("http://kitchen-building/cook");
       
       // Gọi sang nhà Kho (mất 2s kết nối)
       phone.call("http://warehouse-building/get-food");

       // ⛔ Nếu đứt cáp quang -> Khách nhịn đói!
    }
}`,
  analogy:
    "Tách ra mỗi người một tòa nhà riêng. Muốn nấu món gì, Thu ngân phải gọi điện sang tòa nhà Bếp. Tự do hơn, nhưng tốn quá nhiều thời gian 'alo' cho nhau (Độ trễ mạng).",
  color: "blue",
};

const synthesisData: CodeData = {
  title: "Giai đoạn 3: Modular Monolith (Hợp Đề)",
  sub: "Tổ Hợp Bếp Công Nghiệp",
  code: `// MODULE HÓA: Gọn gàng & Siêu tốc
@Module(name = "OrderContext") 
public class OrderService {
    // ✅ Giao tiếp nội bộ (Interface) -> Nhanh như điện
    private final KitchenPort kitchen; 

    @Transactional
    public void serveCustomer() {
       // 1. Xử lý nghiệp vụ Order
       var order = Order.create();
       
       // 2. Bắn tin nhắn nội bộ (Event)
       // Bếp nhận được ngay lập tức trong RAM
       eventPublisher.publish(new OrderPlaced(order));
    }
}`,
  analogy:
    "Tất cả quay về làm chung một tòa nhà lớn (Monolith), nhưng được chia thành các khu vực chuyên biệt (Module). Giao tiếp bằng hệ thống băng chuyền siêu tốc. Vừa không chen chúc, vừa không tốn tiền điện thoại.",
  color: "green",
};

// --- BACKGROUND SPIRAL SVG (DNA HELIX EFFECT) ---
const SpiralBackground = () => (
  <svg
    className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
    viewBox="0 0 100 1200"
    preserveAspectRatio="none"
  >
    <path
      d="M 50 0 C 80 100, 20 200, 50 300 C 80 400, 20 500, 50 600 C 80 700, 20 800, 50 900 C 80 1000, 20 1100, 50 1200"
      fill="none"
      stroke="url(#gradient)"
      strokeWidth="1.5"
      strokeDasharray="5,5"
    />
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="50%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#22c55e" />
      </linearGradient>
    </defs>
  </svg>
);

// --- COMPONENT CHÍNH ---

export default function SimulationPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#020617] text-slate-200 relative overflow-hidden font-sans"
    >
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-slate-800/50"></div>
        <SpiralBackground />
      </div>

      {/* Progress Line (The Thread) */}
      <motion.div
        className="fixed top-0 left-0 md:left-1/2 w-[3px] bg-gradient-to-b from-red-500 via-blue-500 to-green-500 origin-top z-0 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
        style={{ scaleY, height: "100%" }}
      />

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-32">
        {/* --- HEADER --- */}
        <div className="text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-600 opacity-75 blur"></div>
              <Badge
                variant="outline"
                className="relative bg-black text-yellow-400 border-yellow-400/50 px-6 py-2 text-lg font-bold uppercase tracking-widest"
              >
                Level 3: Simulation Mode
              </Badge>
            </div>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-8xl font-bold text-white mt-8 mb-6 tracking-tight leading-none">
            Đường Xoáy Ốc <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500">
              Của Sự Tiến Hóa
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Quan sát trực quan quá trình mã nguồn tự phủ định chính nó để đạt
            đến trạng thái hoàn thiện hơn.
          </p>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 flex justify-center"
          >
            <ArrowDown className="text-slate-500 w-10 h-10" />
          </motion.div>
        </div>

        {/* --- SECTION 1: LEGACY MONOLITH --- */}
        <Section
          data={thesisData}
          step="1"
          icon={<Box className="w-6 h-6 text-red-500" />}
          align="left"
          BadgeIcon={XCircle}
          badgeText="Spaghetti Code"
          badgeColor="bg-red-500/10 text-red-400 border-red-500/50"
        />

        {/* --- SECTION 2: MICROSERVICES --- */}
        <Section
          data={antithesisData}
          step="2"
          icon={<Network className="w-6 h-6 text-blue-500" />}
          align="right"
          BadgeIcon={AlertTriangle}
          badgeText="High Latency"
          badgeColor="bg-blue-500/10 text-blue-400 border-blue-500/50"
        />

        {/* --- SECTION 3: MODULAR MONOLITH --- */}
        <Section
          data={synthesisData}
          step="3"
          icon={<Cpu className="w-6 h-6 text-green-500" />}
          align="left"
          BadgeIcon={CheckCircle2}
          badgeText="Clean Architecture"
          badgeColor="bg-green-500/10 text-green-400 border-green-500/50"
        />

        {/* --- FINAL CONCLUSION --- */}
        {/* Z-Index 20 để đè lên thanh Process Line */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center relative z-20"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent blur-3xl -z-10"></div>

          <Card className="bg-slate-950 border-2 border-yellow-500/30 p-12 max-w-4xl mx-auto rounded-3xl overflow-hidden relative group shadow-2xl">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-blue-500 to-green-500"></div>

            <h3 className="text-3xl font-serif font-bold text-white mb-6">
              Kết luận của Vòng Xoáy
            </h3>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Chúng ta không quay lại cái cũ kỹ (Monolith 2015), mà chúng ta kế
              thừa sự đơn giản của nó và kết hợp với tư duy tổ chức của cái mới
              (Modules). Đó chính là{" "}
              <span className="text-yellow-400 font-bold underline decoration-wavy underline-offset-4">
                Phủ định của phủ định
              </span>
              .
            </p>

            <Link href="/">
              <Button
                size="lg"
                className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 font-bold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all"
              >
                <Home className="mr-2 w-5 h-5" /> Hoàn thành nghiên cứu
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

// --- REUSABLE SECTION COMPONENT ---
function Section({
  data,
  step,
  icon,
  align,
  BadgeIcon,
  badgeText,
  badgeColor,
}: SectionProps) {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-48 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        !isLeft ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Connector Dot */}
      <div className="absolute left-0 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center">
        <div
          className={`w-12 h-12 rounded-full border-4 border-[#020617] flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 ${
            step === "1"
              ? "bg-red-500 shadow-red-500/50"
              : step === "2"
                ? "bg-blue-500 shadow-blue-500/50"
                : "bg-green-500 shadow-green-500/50"
          }`}
        >
          {step}
        </div>
      </div>

      {/* Content Side */}
      <div
        className={`space-y-6 ${
          !isLeft ? "lg:order-2 lg:pl-12" : "lg:pr-12 lg:text-right"
        }`}
      >
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${badgeColor} ${
            !isLeft ? "" : "lg:flex-row-reverse"
          }`}
        >
          <BadgeIcon className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wide">
            {badgeText}
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white font-serif leading-tight">
          {data.title}
        </h2>
        <h3
          className={`text-xl font-medium ${
            step === "1"
              ? "text-red-400"
              : step === "2"
                ? "text-blue-400"
                : "text-green-400"
          }`}
        >
          {data.sub}
        </h3>

        {/* Analogy Box */}
        <div
          className={`bg-slate-900/50 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-600 transition-colors ${
            !isLeft ? "text-left" : "lg:text-right"
          }`}
        >
          <div
            className={`absolute -top-3 ${
              !isLeft ? "left-4" : "lg:right-4 left-4 lg:left-auto"
            } bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-2 border border-slate-700`}
          >
            <ChefHat className="w-3 h-3" /> Ví dụ đời sống
          </div>
          <p className="text-slate-400 italic leading-relaxed">
            {data.analogy}
          </p>
        </div>
      </div>

      {/* Code Side */}
      <div className={`${!isLeft ? "lg:order-1" : ""} relative group`}>
        {/* Decoration Glow */}
        <div
          className={`absolute -inset-1 bg-gradient-to-r ${
            step === "1"
              ? "from-red-500/20"
              : step === "2"
                ? "from-blue-500/20"
                : "from-green-500/20"
          } to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000`}
        ></div>

        <div className="relative bg-[#1e1e1e] rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
          {/* Fake Browser Header */}
          <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-black/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="ml-4 flex items-center gap-2 text-xs text-slate-400 font-mono bg-black/20 px-3 py-1 rounded-md">
              {icon}
              <span>src/main/java/...</span>
            </div>
          </div>

          {/* Code Content */}
          <SyntaxHighlighter
            language="java"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              fontSize: "0.9rem",
              lineHeight: "1.6",
            }}
            showLineNumbers={true}
            wrapLines={true}
          >
            {data.code}
          </SyntaxHighlighter>
        </div>
      </div>
    </motion.div>
  );
}
