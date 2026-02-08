"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="contato" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary-foreground/60">
            Fique por dentro
          </p>
          <h2 className="mt-3 font-serif text-3xl text-secondary-foreground md:text-4xl">
            Receba novidades exclusivas
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/70">
            Cadastre-se para receber em primeira mao lancamentos, promocoes
            especiais e conteudos sobre o universo da joalheria.
          </p>
          {submitted ? (
            <div className="mt-8 rounded-sm border border-primary/30 bg-primary/10 p-6">
              <p className="text-sm text-secondary-foreground">
                Obrigada por se cadastrar! Em breve voce recebera nossas novidades.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-sm border-secondary-foreground/20 bg-transparent text-secondary-foreground placeholder:text-secondary-foreground/40 focus-visible:ring-primary sm:rounded-r-none h-12"
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm tracking-wider uppercase text-xs sm:rounded-l-none h-12 px-8"
              >
                Cadastrar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
