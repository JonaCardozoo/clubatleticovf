import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { PlayersSection } from "@/components/players-section"
import { FixturesSection } from "@/components/fixtures-section"
import { HistorySection } from "@/components/history-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <NewsSection />
      <PlayersSection />
      <FixturesSection />
      <HistorySection />
      <Footer />
    </main>
  )
}
