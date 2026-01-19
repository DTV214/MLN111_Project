// // components/sections/NewsSection.tsx
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Newspaper } from "lucide-react";

// const news = [
//   { title: "Xu hướng Modular Monolith 2024", date: "15/01/2026", cat: "Tech" },
//   {
//     title: "Tại sao nên học Triết khi làm Dev?",
//     date: "12/01/2026",
//     cat: "Education",
//   },
//   {
//     title: "Case Study: Uber thay đổi kiến trúc",
//     date: "10/01/2026",
//     cat: "Case Study",
//   },
// ];

// export default function NewsSection() {
//   return (
//     <section
//       id="news"
//       className="py-24 bg-gradient-to-t from-yellow-50 to-white"
//     >
//       <div className="container mx-auto px-4">
//         {" "}
//         {/* Đã thêm container */}
//         <div className="flex items-center justify-center gap-3 mb-12">
//           <Newspaper className="text-yellow-600 w-6 h-6" />
//           <h2 className="font-serif text-3xl font-bold text-slate-900">
//             Tin tức & Bài viết
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {news.map((item, idx) => (
//             <Card
//               key={idx}
//               className="hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-xl border-t-4 border-t-yellow-400 border-x-0 border-b-0"
//             >
//               <CardHeader>
//                 <div className="text-[10px] font-black text-yellow-600 uppercase tracking-widest mb-3 bg-yellow-50 inline-block px-2 py-1 rounded w-fit">
//                   {item.cat}
//                 </div>
//                 <CardTitle className="text-xl font-serif leading-snug text-slate-800 h-14 line-clamp-2">
//                   {item.title}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-slate-400 font-mono flex items-center gap-2">
//                   <span className="w-2 h-2 rounded-full bg-slate-300"></span>
//                   {item.date}
//                 </p>
//               </CardContent>
//               <CardFooter>
//                 <Button
//                   variant="ghost"
//                   className="p-0 text-slate-900 hover:text-yellow-600 hover:bg-transparent group"
//                 >
//                   Đọc tiếp{" "}
//                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
