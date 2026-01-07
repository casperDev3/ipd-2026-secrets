import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FactsSection from '@/components/FactsSection';
import CelebrationSection from '@/components/CelebrationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutSection />
      <FactsSection />
      <CelebrationSection />
      <Footer />
    </main>
  );
}
