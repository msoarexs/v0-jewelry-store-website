import Image from "next/image"

const features = [
  {
    title: "Artesanato Premium",
    description:
      "Cada peca e cuidadosamente trabalhada por artesaos com decadas de experiencia.",
  },
  {
    title: "Materiais Nobres",
    description:
      "Utilizamos ouro 18k, prata 925 e pedras preciosas certificadas de origem etica.",
  },
  {
    title: "Design Exclusivo",
    description:
      "Criamos pecas unicas que combinam tendencias contemporaneas com elegancia atemporal.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/about-workshop.jpg"
              alt="Artesao trabalhando em joia de ouro no atelie"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Nossa essencia
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
              A arte de criar beleza
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Ha mais de 15 anos, a Lumiere transforma metais preciosos em obras
              de arte que contam historias. Nosso compromisso com a excelencia e
              a paixao pelo oficio artesanal nos guiam em cada criacao.
            </p>
            <div className="mt-10 flex flex-col gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="border-l-2 border-primary pl-6">
                  <h3 className="text-sm font-medium tracking-wide text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
