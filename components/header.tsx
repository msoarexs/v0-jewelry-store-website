"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Menu, X, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Colecoes", href: "#colecoes" },
  { name: "Categorias", href: "#categorias" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
]

export function Header() {
  const [cartCount] = useState(0)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Mobile menu */}
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 bg-background">
                <nav className="mt-8 flex flex-col gap-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="font-serif text-lg text-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-xl tracking-widest text-foreground lg:text-2xl">
              LUMIERE
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm tracking-wider text-muted-foreground transition-colors hover:text-foreground uppercase"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-foreground hidden lg:flex">
              <Search className="h-4 w-4" />
              <span className="sr-only">Buscar</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hidden lg:flex">
              <User className="h-4 w-4" />
              <span className="sr-only">Minha conta</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative text-foreground">
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Carrinho</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
