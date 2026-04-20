"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Noticias", href: "#noticias" },
  { name: "Plantel", href: "#plantel" },
  { name: "Partidos", href: "#partidos" },
  { name: "Historia", href: "#historia" },
  { name: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer id="contacto" className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 flex items-center justify-center">
              <img src="/escudo.png" alt="Club Atlético VF" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-bold text-foreground">CLUB ATLÉTICO</p>
                <p className="text-sm text-primary font-semibold">VILLA FONTANA</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Celeste y negro no se explica... se siente. Pasión, tradición y fútbol desde Paraná, Entre Ríos.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="https://instagram.com/club_atletico_vf" 
                target="_blank"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Hernandarias 3918<br />
                  Paraná, Entre Ríos<br />
                  Argentina
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <Link href="https://wa.me/qr/6L3BGPUCX7UDP1" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  WhatsApp
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <Link href="mailto:info@clubatleticovf.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@clubatleticovf.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Suscribite para recibir las últimas novedades del club.
            </p>
            <form className="space-y-3">
              <Input 
                type="email" 
                placeholder="Tu email" 
                className="bg-secondary border-border focus:border-primary"
              />
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Club Atlético VF. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Liga Paranaense de Futbol
          </p>
        </div>
      </div>
    </footer>
  )
}
