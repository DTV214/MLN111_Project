import HeroSection from "@/components/sections/HeroSection";
import ImageCarousel from "@/components/sections/ImageCarousel";
import TopicBook from "@/components/sections/TopicBook"; // Import Flipbook
import LegacyComparison from "@/components/sections/LegacyComparison"; // Import So sánh
import AlternatingFeatures from "@/components/sections/AlternatingFeatures";
import PracticalExamples from "@/components/sections/PracticalExamples";
import NewsSection from "@/components/sections/NewsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />

      {/* Banner 2: Carousel */}
      <ImageCarousel />

      {/* Banner Flipbook (Mới - Tích hợp dưới carousel) */}
      <TopicBook />

      {/* Banner So sánh (Mới) */}
      <LegacyComparison />

      {/* Banner 3: Alternating (Đã sửa) */}
      <AlternatingFeatures />

      {/* Banner 4: Thực tiễn */}
      <PracticalExamples />

      {/* Banner 5: News */}
      <NewsSection />
    </div>
  );
}
