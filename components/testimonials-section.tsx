"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Ana Carolina M.",
    location: "Sao Paulo, SP",
    text: "Comprei meu anel de noivado na Lumiere e a qualidade superou todas as minhas expectativas. O atendimento personalizado fez toda a diferenca.",
    rating: 5,
  },
  {
    name: "Fernanda S.",
    location: "Rio de Janeiro, RJ",
    text: "As joias em prata sao simplesmente deslumbrantes. Ja presenteei minha mae e minha irma, e todas ficaram encantadas com a delicadeza das pecas.",
    rating: 5,
  },
  {
    name: "Mariana L.",
    location: "Belo Horizonte, MG",
    text: "Adoro a curadoria da Lumiere. Cada peca tem um design unico e sofisticado. O conjunto de prata que comprei recebe elogios sempre que uso.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Depoimentos
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">
            O que dizem nossas clientes
          </h2>
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="mt-6 font-serif text-xl leading-relaxed text-foreground md:text-2xl">
              {`"${testimonials[current].text}"`}
            </blockquote>
            <div className="mt-8">
              <p className="text-sm font-medium text-foreground">
                {testimonials[current].name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {testimonials[current].location}
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-border text-foreground hover:bg-foreground hover:text-background h-10 w-10 bg-transparent"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-border text-foreground hover:bg-foreground hover:text-background h-10 w-10 bg-transparent"
              aria-label="Proximo depoimento"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
