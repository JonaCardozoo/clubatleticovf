"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, MapPin, Heart } from "lucide-react"

const milestones = [
  {
    year: "2025",
    title: "Fundación del Club",
    description: "Nace Club Atlético VF con la visión de convertirse en un referente del fútbol paranaense."
  },
  {
    year: "2025",
    title: "Primera Temporada en Liga Paranaense",
    description: "El club debuta oficialmente en la Liga Paranaense de Futbol con un plantel competitivo."
  },
  {
    year: "2025",
    title: "Victoria Inaugural",
    description: "CAVF logra su primera victoria oficial con un contundente 7-1 ante Argentino Jrs."
  }
]

const values = [
  {
    icon: Trophy,
    title: "Excelencia",
    description: "Buscamos la excelencia en cada entrenamiento y cada partido."
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Somos más que un club, somos una familia unida por la pasión."
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "El amor por los colores celeste y negro nos impulsa cada día."
  },
  {
    icon: MapPin,
    title: "Identidad",
    description: "Orgullosos representantes de Paraná, Entre Ríos."
  }
]

export function HistorySection() {
  return (
    <section id="historia" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Nuestra Esencia</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">HISTORIA DEL CLUB</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un club joven con grandes ambiciones. Conocé los comienzos y valores que nos definen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About */}
          <div>
            <Card className="border-border bg-card overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20  flex items-center justify-center">
              <img src="/escudo.png" alt="Club Atlético VF" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Club Atlético Villa Fontana</h3>
                    <p className="text-primary font-semibold">Fundado en 2025</p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Club Atlético VF nació de la pasión de un grupo de jóvenes soñadores que buscaban crear algo más que un equipo de fútbol. 
                    Ubicados en el barrio Villa Fontana de Paraná, Entre Ríos, el club representa los valores de esfuerzo, 
                    compañerismo y amor por el deporte.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Con los colores celeste y negro como bandera, el club se propone ser un espacio de formación deportiva y humana 
                    para los jóvenes de la comunidad paranaense.
                  </p>
                  <p className="text-lg font-semibold text-primary italic">
                    {'"Celeste y negro no se explica... se siente."'}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-border">
                  <div>
                    <p className="text-3xl font-black text-primary">2025</p>
                    <p className="text-sm text-muted-foreground">Año de Fundación</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-primary">Paraná</p>
                    <p className="text-sm text-muted-foreground">Entre Ríos, Argentina</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Hitos Importantes</h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/30 pb-6 last:pb-0">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                  <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                  <h4 className="text-lg font-bold text-foreground mt-1">{milestone.title}</h4>
                  <p className="text-muted-foreground mt-2">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">Nuestros Valores</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border bg-card hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
