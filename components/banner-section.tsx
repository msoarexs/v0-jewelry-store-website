import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BannerSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/banner-collection.jpg"
          alt="Modelo usando joias elegantes em ouro"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-secondary/50" />
        <div className="relative flex h-full items-center justify-center text-center">
          <div className="max-w-2xl px-4">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-foreground/70">
              Colecao Especial
            </p>
            <h2 className="mt-4 font-serif text-3xl text-secondary-foreground md:text-5xl lg:text-6xl text-balance">
              Brilhe em cada momento
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-secondary-foreground/80">
              Pecas desenhadas para acompanhar seus momentos mais especiais, do dia a dia as grandes celebracoes.
            </p>
            <Button
              size="lg"
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-8 tracking-wider uppercase text-xs"
            >
              Conhecer Colecao
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
