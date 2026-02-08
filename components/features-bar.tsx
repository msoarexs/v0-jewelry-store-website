import { Truck, Shield, RotateCcw, Gift } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Frete Gratis",
    description: "Em compras acima de R$ 500",
  },
  {
    icon: Shield,
    title: "Garantia Vitalicia",
    description: "Todas as pecas com certificado",
  },
  {
    icon: RotateCcw,
    title: "Troca Facilitada",
    description: "Ate 30 dias para trocar",
  },
  {
    icon: Gift,
    title: "Embalagem Premium",
    description: "Presente perfeito garantido",
  },
]

export function FeaturesBar() {
  return (
    <section className="border-y border-border py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <feature.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-xs font-medium uppercase tracking-wider text-foreground">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
