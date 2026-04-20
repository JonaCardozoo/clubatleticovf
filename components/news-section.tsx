"use client"

import { ArrowUpRight, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const featuredNews = {
  id: 1,
  title: "Victoria contundente: CAVF 7 - Argentino Jrs 1",
  excerpt: "El equipo celeste demostró su poderío ofensivo con una goleada histórica en el torneo de la Liga Paranaense de Futbol.",
  date: "19 Abril 2025",
  category: "Partido",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Px8g4TU0LwgTAxa2IV2kBCLYqhmWx5.png"
}

const news = [
  {
    id: 2,
    title: "Convocatoria para el próximo partido ante Oro Verde",
    excerpt: "El DT Emiliano Sola dio a conocer la lista de 18 jugadores convocados para el encuentro del domingo.",
    date: "18 Abril 2025",
    category: "Plantel"
  },
  {
    id: 3,
    title: "Luis Cardozo, figura del partido ante Argentino",
    excerpt: "El delantero fue la figura destacada con un hat-trick que selló la goleada del equipo.",
    date: "17 Abril 2025",
    category: "Destacado"
  },
  {
    id: 4,
    title: "El club recibió nuevas equipaciones para la temporada",
    excerpt: "La marca ÁNCORA presentó las nuevas camisetas que lucirá el plantel durante el campeonato.",
    date: "15 Abril 2025",
    category: "Institucional"
  },
  {
    id: 5,
    title: "Entrenamiento abierto para los hinchas",
    excerpt: "Este sábado los fanáticos podrán acompañar al plantel durante la práctica en el predio del club.",
    date: "14 Abril 2025",
    category: "Eventos"
  }
]

export function NewsSection() {
  return (
    <section id="noticias" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Actualidad</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">ÚLTIMAS NOTICIAS</h2>
          </div>
          <Link href="#" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            Ver todas las noticias
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <Card className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300">
            <div className="aspect-[16/10] relative overflow-hidden">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                {featuredNews.category}
              </Badge>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{featuredNews.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {featuredNews.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed line-clamp-3">
                {featuredNews.excerpt}
              </p>
            </CardContent>
          </Card>

          {/* News List */}
          <div className="flex flex-col gap-4">
            {news.map((article) => (
              <Card 
                key={article.id} 
                className="group border-border bg-card hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
