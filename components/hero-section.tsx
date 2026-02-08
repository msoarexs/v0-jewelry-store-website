import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[85vh] min-h-[600px]">
        <Image
          src="/images/hero-jewelry.jpg"
          alt="Colar de ouro com diamantes sobre veludo escuro"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/60" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted">
                Nova Colecao 2025
              </p>
              <h1 className="font-serif text-4xl leading-tight text-secondary-foreground md:text-6xl lg:text-7xl text-balance">
                Elegancia que transcende o tempo
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-secondary-foreground/80 lg:text-lg">
                Descubra joias e pratas exclusivas, criadas com maestria artesanal
                para realcar sua beleza unica.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 tracking-wider uppercase text-xs"
                >
                  Explorar Colecao
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 px-8 tracking-wider uppercase text-xs bg-transparent"
                >
                  Nossa Historia
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
