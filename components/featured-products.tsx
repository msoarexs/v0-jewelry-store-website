"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Anel Solitario Classico",
    price: "R$ 2.490,00",
    originalPrice: "R$ 2.990,00",
    image: "/images/product-ring.jpg",
    tag: "Mais vendido",
  },
  {
    id: 2,
    name: "Colar Prata Delicado",
    price: "R$ 890,00",
    originalPrice: null,
    image: "/images/product-necklace.jpg",
    tag: null,
  },
  {
    id: 3,
    name: "Brincos Gota Dourada",
    price: "R$ 1.290,00",
    originalPrice: null,
    image: "/images/product-earring.jpg",
    tag: "Novo",
  },
  {
    id: 4,
    name: "Pulseira Elos Prata",
    price: "R$ 690,00",
    originalPrice: "R$ 890,00",
    image: "/images/product-bracelet.jpg",
    tag: null,
  },
  {
    id: 5,
    name: "Pingente Geometrico",
    price: "R$ 1.590,00",
    originalPrice: null,
    image: "/images/product-pendant.jpg",
    tag: "Exclusivo",
  },
  {
    id: 6,
    name: "Conjunto Prata Premium",
    price: "R$ 3.290,00",
    originalPrice: "R$ 3.990,00",
    image: "/images/product-silver-set.jpg",
    tag: "Oferta",
  },
]

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {product.tag && (
          <span className="absolute left-3 top-3 bg-primary px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
            {product.tag}
          </span>
        )}
        <div
          className={`absolute inset-x-0 bottom-0 flex justify-center pb-4 transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Button
            size="sm"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 tracking-wider uppercase text-[10px]"
          >
            <ShoppingBag className="h-3 w-3" />
            Adicionar
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm tracking-wide text-foreground">{product.name}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export function FeaturedProducts() {
  return (
    <section id="colecoes" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Selecao exclusiva
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            Pecas em Destaque
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Cada peca e cuidadosamente selecionada para oferecer o maximo em elegancia e qualidade.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background px-10 tracking-wider uppercase text-xs transition-colors bg-transparent"
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  )
}
