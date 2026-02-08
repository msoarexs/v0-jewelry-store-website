import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesBar } from "@/components/features-bar"
import { FeaturedProducts } from "@/components/featured-products"
import { CategoriesSection } from "@/components/categories-section"
import { BannerSection } from "@/components/banner-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesBar />
        <FeaturedProducts />
        <CategoriesSection />
        <BannerSection />
        <AboutSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
