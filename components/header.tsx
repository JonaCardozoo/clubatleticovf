"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Instagram, Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "INICIO", href: "#inicio" },
  { name: "NOTICIAS", href: "#noticias" },
  { name: "PLANTEL", href: "#plantel" },
  { name: "PARTIDOS", href: "#partidos" },
  { name: "HISTORIA", href: "#historia" },
  { name: "CONTACTO", href: "#contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <img src="/escudo.png" alt="Club Atlético VF" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-wider text-foreground">CLUB ATLÉTICO</p>
              <p className="text-xs text-primary font-semibold tracking-widest">VILLA FONTANA</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="https://instagram.com/club_atletico_vf" target="_blank" className="text-foreground/60 hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Youtube className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 text-base font-semibold text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 pt-4 px-4 border-t border-border mt-4">
              <Link href="https://instagram.com/club_atletico_vf" target="_blank" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
