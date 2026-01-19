// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t-4 border-yellow-500">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-serif text-2xl text-white font-bold mb-4">
            Philosophy & Code
          </h3>
          <p className="text-slate-400 max-w-sm mb-6">
            Sự phát triển là một cuộc đấu tranh giữa các mặt đối lập. <br />-
            Vận dụng triết học Mác-Lênin vào kỹ thuật phần mềm hiện đại.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Liên kết</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Tài liệu nghiên cứu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Giới thiệu nhóm
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Liên hệ</h4>
          <p className="text-sm">FPT University</p>
          <p className="text-sm">Email: nhomnghiencuu@fpt.edu.vn</p>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-slate-800 text-sm font-mono text-slate-500">
        © 2026 Philosophy Research Group. Built with Next.js & Tailwind.
      </div>
    </footer>
  );
}
