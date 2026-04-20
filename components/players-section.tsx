"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const players = [
  { name: "Enrique Ramos", position: "Delantero", number: 11, goals: 4,image:"/enriramos.png" },
  { name: "Agustín Ramos", position: "Defensor", number: 4, goals: 2, image: "/ramos.png" },
  { name: "Tiziano Centullón", position: "Defensor", number: 4, goals: 0 },
  { name: "Guillermo Sosa", position: "Defensor", number: 5, goals: 1 },
  { name: "Leonel Cabrera", position: "Mediocampista", number: 10, goals: 3 },
  { name: "Uriel Romero", position: "Delantero", number: 11, goals: 4 },
  { name: "Aaron Antoniutti", position: "Portero", number: 1, goals: 0 },
  { name: "Hayron Leineker", position: "Mediocampista", number: 7, goals: 2 },
  { name: "David Palacios", position: "Defensor", number: 3, goals: 0 },
  { name: "Leo Cabrera", position: "Delantero", number: 19, goals: 3 },
  { name: "Ramón Martínez", position: "Mediocampista", number: 6, goals: 1 },
  { name: "Brian Muñoz", position: "Defensor", number: 2, goals: 0 },
  { name: "Luis Cardozo", position: "Delantero", number: 9, goals: 5 },
]

const positionColors: Record<string, string> = {
  "Portero": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Defensor": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Mediocampista": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Delantero": "bg-red-500/20 text-red-400 border-red-500/30",
}

export function PlayersSection() {
  return (
    <section id="plantel" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Temporada 2026</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">NUESTRO PLANTEL</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conocé a los jugadores que defienden la camiseta celeste y negra. DT: Emiliano Sola
          </p>
        </div>

        {/* Horizontal scrolling player cards */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {players.map((player) => (
              <Card
                key={player.number}
                className="group flex-shrink-0 w-64 snap-start border-border bg-card hover:border-primary/50 transition-all duration-300"

              >
                <CardContent className="p-0">
                  {/* Player placeholder with number */}
                  <div className="relative aspect-[3/4] overflow-hidden flex items-center justify-center">

                    {/* Número de fondo */}
                    <span className="absolute text-[15rem] font-black text-primary/10 
                   opacity-0 translate-y-10
                   group-hover:opacity-100 
                   group-hover:translate-y-[-20%]
                   group-hover:scale-110
                   transition-all duration-500 ease-out z-0">
                      {player.number}
                    </span>

                    {/* Imagen */}
                    <img
                      src={player.image}
                      alt={player.name}
                      className="relative z-10 w-full h-full object-cover 
               group-hover:opacity-80 
               transition-all duration-500 ease-out"
                    />

                    {/* Gradien te */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-24 z-20" />

                    {/* Gradiente inferior */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-24 z-20" />
                  </div>

                  <div className="p-5">
                    <Badge className={`mb-3 text-xs ${positionColors[player.position]}`}>
                      {player.position}
                    </Badge>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-foreground text-lg leading-tight">{player.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">Dorsal #{player.number}</p>
                      </div>
                      {player.position === "Delantero" || player.position === "Mediocampista" ? (
                        <div className="text-right">
                          <p className="text-2xl font-black text-primary">{player.goals}</p>
                          <p className="text-xs text-muted-foreground">Goles</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-background to-transparent pointer-events-none lg:hidden" />
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-background to-transparent pointer-events-none lg:hidden" />
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <p className="text-4xl font-black text-primary mb-2">22</p>
            <p className="text-sm text-muted-foreground">Jugadores</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <p className="text-4xl font-black text-primary mb-2">18</p>
            <p className="text-sm text-muted-foreground">Goles Totales</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <p className="text-4xl font-black text-primary mb-2">4</p>
            <p className="text-sm text-muted-foreground">Partidos Jugados</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <p className="text-4xl font-black text-primary mb-2">24</p>
            <p className="text-sm text-muted-foreground">Edad Promedio</p>
          </div>
        </div>
      </div>
    </section>
  )
}
