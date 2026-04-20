"use client"

import { Play, ChevronDown, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fotoclub-TQcZfnd5p4fN62i9iSzyyKzWCvY8cv.jpg"
          alt="Jugadores de Club Atlético VF celebrando un gol"
          fill
          className="object-cover object-center md:object-top"
          priority
        />
        {/* Dark overlay with gradient - stronger on mobile for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60 md:via-background/80 md:to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent md:from-background/90 md:via-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-20 pt-24 md:pb-24 lg:pb-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            {/* Left content */}
            <div className="order-2 lg:order-1">
              {/* League badge */}
              <div className="mb-4 md:mb-6">
                <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-primary text-primary-foreground text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  Liga Paranaense de Futbol
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-foreground">
                Club
                <span className="block text-primary">Atlético</span>
                <span className="block">VF</span>
              </h1>

              {/* Tagline */}
              <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-light text-foreground/80 italic max-w-md">
                &ldquo;Celeste y negro no se explica... se siente&rdquo;
              </p>

              {/* Stats row - horizontal scroll on mobile */}
              <div className="mt-6 md:mt-8 flex items-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex-shrink-0">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-primary">2025</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Fundado</p>
                </div>
                <div className="w-px h-8 md:h-12 bg-border flex-shrink-0" />
                <div className="flex-shrink-0">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">LPF</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Competición</p>
                </div>
                <div className="w-px h-8 md:h-12 bg-border flex-shrink-0" />
                <div className="flex-shrink-0">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">Paraná</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Ciudad</p>
                </div>
              </div>

              {/* CTA - stack on mobile, row on tablet+ */}
              <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 md:h-14 px-6 md:px-8 text-xs md:text-sm font-bold uppercase tracking-wider w-full sm:w-auto">
                  <Link href="#partidos">
                    Próximo Partido
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground/5 h-12 md:h-14 px-6 md:px-8 text-xs md:text-sm font-bold uppercase tracking-wider w-full sm:w-auto">
                  <Link href="#historia" className="flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Ver Historia
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right - Next match card */}
            <div className="order-1 lg:order-2 lg:justify-self-end w-full lg:w-auto">
              <div className="bg-card/90 backdrop-blur-md border border-border p-4 sm:p-6 lg:p-8 w-full lg:max-w-sm">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider">Próximo Partido</span>
                  <span className="text-[10px] md:text-xs text-muted-foreground">2° Fecha - LPF</span>
                </div>
                
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                  {/* Home team */}
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-2 md:mb-3 border border-primary/20">
                      <span className="text-lg sm:text-xl md:text-2xl font-black text-primary">VF</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-foreground">CAVF</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">Local</p>
                  </div>

                  {/* VS */}
                  <div className="text-center px-2 sm:px-4 flex-shrink-0">
                    <p className="text-xl sm:text-2xl md:text-3xl font-black text-muted-foreground">VS</p>
                  </div>

                  {/* Away team */}
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-secondary flex items-center justify-center mb-2 md:mb-3">
                      <span className="text-lg sm:text-xl md:text-2xl font-black text-muted-foreground">OV</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-foreground">Oro Verde</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">Visitante</p>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground hidden sm:block" />
                      <div>
                        <p className="text-muted-foreground">Domingo</p>
                        <p className="font-bold text-foreground">19 de Abril</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground">Hora</p>
                      <p className="font-bold text-primary text-lg sm:text-xl">13:00</p>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 flex items-center gap-2 text-[10px] md:text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span>Predio CAVF - Hernandarias 3918</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <Link href="#noticias" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-[10px] uppercase tracking-[0.2em]">Descubrir</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </Link>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-20 right-0 w-1 h-20 md:h-32 bg-primary hidden md:block" />
      <div className="absolute top-20 right-0 w-20 md:w-32 h-1 bg-primary hidden md:block" />
    </section>
  )
}
