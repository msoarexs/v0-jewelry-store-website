import Image from "next/image"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Aneis",
    count: "24 pecas",
    image: "/images/category-rings.jpg",
    href: "#",
  },
  {
    name: "Colares",
    count: "18 pecas",
    image: "/images/category-necklaces.jpg",
    href: "#",
  },
  {
    name: "Brincos",
    count: "32 pecas",
    image: "/images/category-earrings.jpg",
    href: "#",
  },
]

export function CategoriesSection() {
  return (
    <section id="categorias" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary-foreground/60">
            Navegue por
          </p>
          <h2 className="mt-3 font-serif text-3xl text-secondary-foreground md:text-4xl lg:text-5xl">
            Categorias
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative block aspect-[3/4] overflow-hidden"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={`Categoria ${category.name}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/40 transition-colors group-hover:bg-secondary/50" />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <p className="text-xs uppercase tracking-widest text-secondary-foreground/70">
                  {category.count}
                </p>
                <h3 className="mt-1 font-serif text-2xl text-secondary-foreground lg:text-3xl">
                  {category.name}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-widest text-secondary-foreground/80 transition-colors group-hover:text-primary">
                  <span>Explorar</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
