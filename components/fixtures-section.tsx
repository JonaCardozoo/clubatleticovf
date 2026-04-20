"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { upcomingMatches, matchResults } from "@/data/matches"
import { getTeamById, getSortedStandings, type Team } from "@/data/teams"

// Componente para mostrar el escudo del equipo
function TeamLogo({ team, size = 56 }: { team: Team; size?: number }) {
  const [imageError, setImageError] = React.useState(false)
  
  if (imageError || !team.logo) {
    // Fallback: mostrar iniciales si no hay logo o hay error
    return (
      <div 
        className={`rounded-full flex items-center justify-center ${
          team.isOwnTeam ? 'bg-primary/20' : 'bg-secondary'
        }`}
        style={{ width: size, height: size }}
      >
        <span className={`font-black ${team.isOwnTeam ? 'text-primary' : 'text-muted-foreground'}`}
          style={{ fontSize: size * 0.35 }}
        >
          {team.shortName}
        </span>
      </div>
    )
  }

  return (
    <div 
      className="relative rounded-full overflow-hidden bg-secondary/50"
      style={{ width: size, height: size }}
    >
      <Image
        src={team.logo}
        alt={`Escudo de ${team.name}`}
        fill
        className="object-contain p-1"
        onError={() => setImageError(true)}
      />
    </div>
  )
}

import React from "react"

export function FixturesSection() {
  const sortedStandings = getSortedStandings()

  return (
    <section id="partidos" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Calendario</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">PARTIDOS</h2>
        </div>

        <Tabs defaultValue="proximos" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-6 md:mb-8 bg-secondary">
            <TabsTrigger value="proximos" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Próximos
            </TabsTrigger>
            <TabsTrigger value="resultados" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Resultados
            </TabsTrigger>
          </TabsList>

          <TabsContent value="proximos" className="space-y-4">
            {upcomingMatches.map((match) => {
              const homeTeam = getTeamById(match.homeTeamId)
              const awayTeam = getTeamById(match.awayTeamId)
              if (!homeTeam || !awayTeam) return null
              
              const isHome = homeTeam.isOwnTeam

              return (
                <Card key={match.id} className="border-border bg-card hover:border-primary/30 transition-colors">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col gap-4">
                      {/* Mobile: Competition on top */}
                      <div className="flex items-center justify-between md:hidden">
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {isHome ? "Local" : "Visitante"}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{match.competition}</p>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                        {/* Date info */}
                        <div className="hidden md:block md:w-32 flex-shrink-0">
                          <div className="flex items-center gap-2 text-primary mb-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-semibold">{match.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{match.time}</span>
                          </div>
                        </div>

                        {/* Match info */}
                        <div className="flex-1 flex items-center justify-between md:justify-center gap-2 md:gap-8">
                          <div className="text-center flex-1">
                            <TeamLogo team={homeTeam} size={48} />
                            <p className={`font-semibold text-sm md:text-base mt-2 ${homeTeam.isOwnTeam ? 'text-primary' : 'text-foreground'}`}>
                              {homeTeam.shortName}
                            </p>
                            <p className="text-xs text-muted-foreground hidden md:block">{homeTeam.name}</p>
                          </div>

                          <div className="text-center px-2 md:px-4 flex flex-col items-center">
                            {/* Mobile date/time */}
                            <div className="md:hidden text-center mb-2">
                              <p className="text-xs text-primary font-semibold">{match.date}</p>
                              <p className="text-xs text-muted-foreground">{match.time}</p>
                            </div>
                            <p className="text-2xl md:text-3xl font-black text-foreground">VS</p>
                          </div>

                          <div className="text-center flex-1">
                            <TeamLogo team={awayTeam} size={48} />
                            <p className={`font-semibold text-sm md:text-base mt-2 ${awayTeam.isOwnTeam ? 'text-primary' : 'text-foreground'}`}>
                              {awayTeam.shortName}
                            </p>
                            <p className="text-xs text-muted-foreground hidden md:block">{awayTeam.name}</p>
                          </div>
                        </div>

                        {/* Venue - Desktop */}
                        <div className="hidden md:block md:w-40 flex-shrink-0 text-right">
                          <Badge variant="outline" className="border-primary/30 text-primary mb-2">
                            {isHome ? "Local" : "Visitante"}
                          </Badge>
                          <div className="flex items-center justify-end gap-2 text-muted-foreground">
                            <span className="text-sm">{match.venue}</span>
                            <MapPin className="w-4 h-4" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{match.competition}</p>
                        </div>
                      </div>

                      {/* Mobile venue */}
                      <div className="flex items-center justify-center gap-2 text-muted-foreground md:hidden">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{match.venue}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </TabsContent>

          <TabsContent value="resultados" className="space-y-4">
            {matchResults.map((match) => {
              const homeTeam = getTeamById(match.homeTeamId)
              const awayTeam = getTeamById(match.awayTeamId)
              if (!homeTeam || !awayTeam) return null

              const ownTeamIsHome = homeTeam.isOwnTeam
              const ownTeamIsAway = awayTeam.isOwnTeam
              const ownTeamScore = ownTeamIsHome ? match.homeScore : match.awayScore
              const opponentScore = ownTeamIsHome ? match.awayScore : match.homeScore
              const isWin = ownTeamScore > opponentScore
              const isDraw = ownTeamScore === opponentScore

              return (
                <Card key={match.id} className="border-border bg-card">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col gap-4">
                      {/* Mobile: Result badge and competition */}
                      <div className="flex items-center justify-between md:hidden">
                        <Badge className={
                          isWin 
                            ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" 
                            : isDraw 
                              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                              : "bg-red-500/20 text-red-400 border-red-500/30"
                        }>
                          {isWin ? "Victoria" : isDraw ? "Empate" : "Derrota"}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{match.competition}</p>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                        {/* Date info - Desktop */}
                        <div className="hidden md:block md:w-32 flex-shrink-0">
                          <Badge className={
                            isWin 
                              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" 
                              : isDraw 
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-red-500/20 text-red-400 border-red-500/30"
                          }>
                            {isWin ? "Victoria" : isDraw ? "Empate" : "Derrota"}
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-2">{match.date}</p>
                        </div>

                        {/* Match result */}
                        <div className="flex-1 flex items-center justify-between md:justify-center gap-2 md:gap-8">
                          <div className="text-center flex-1">
                            <TeamLogo team={homeTeam} size={48} />
                            <p className={`font-semibold text-sm md:text-base mt-2 ${homeTeam.isOwnTeam ? 'text-primary' : 'text-foreground'}`}>
                              {homeTeam.shortName}
                            </p>
                            <p className="text-xs text-muted-foreground hidden md:block">{homeTeam.name}</p>
                          </div>

                          <div className="text-center px-2 md:px-4">
                            <p className="text-xs text-muted-foreground mb-1 md:hidden">{match.date}</p>
                            <p className="text-3xl md:text-4xl font-black text-foreground">
                              {match.homeScore} - {match.awayScore}
                            </p>
                          </div>

                          <div className="text-center flex-1">
                            <TeamLogo team={awayTeam} size={48} />
                            <p className={`font-semibold text-sm md:text-base mt-2 ${awayTeam.isOwnTeam ? 'text-primary' : 'text-foreground'}`}>
                              {awayTeam.shortName}
                            </p>
                            <p className="text-xs text-muted-foreground hidden md:block">{awayTeam.name}</p>
                          </div>
                        </div>

                        {/* Competition - Desktop */}
                        <div className="hidden md:block md:w-40 flex-shrink-0 text-right">
                          <p className="text-sm text-muted-foreground">{match.competition}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </TabsContent>
        </Tabs>

        {/* Standings Table */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6 text-center">
            Tabla de Posiciones - Liga Paranaense
          </h3>
          <Card className="border-border bg-card overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="py-3 px-2 md:px-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider w-12">Pos</th>
                      <th className="py-3 px-2 md:px-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Equipo</th>
                      <th className="py-3 px-2 md:px-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">PJ</th>
                      <th className="py-3 px-2 md:px-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">G</th>
                      <th className="py-3 px-2 md:px-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">E</th>
                      <th className="py-3 px-2 md:px-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">P</th>
                      <th className="py-3 px-2 md:px-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">GF</th>
                      <th className="py-3 px-2 md:px-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">GC</th>
                      <th className="py-3 px-2 md:px-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">DIF</th>
                      <th className="py-3 px-2 md:px-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">Pts</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {sortedStandings.map((entry, index) => (
                      <tr 
                        key={entry.teamId} 
                        className={entry.team.isOwnTeam ? "bg-primary/10" : ""}
                      >
                        <td className={`py-3 px-2 md:px-4 text-sm font-bold ${entry.team.isOwnTeam ? 'text-primary' : 'text-foreground'}`}>
                          {index + 1}
                        </td>
                        <td className="py-3 px-2 md:px-4">
                          <div className="flex items-center gap-2 md:gap-3">
                            <TeamLogo team={entry.team} size={28} />
                            <span className={`text-sm font-semibold ${entry.team.isOwnTeam ? 'text-primary' : 'text-foreground'}`}>
                              <span className="md:hidden">{entry.team.shortName}</span>
                              <span className="hidden md:inline">{entry.team.name}</span>
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-2 md:px-4 text-sm text-center text-foreground">{entry.played}</td>
                        <td className="py-3 px-2 md:px-4 text-sm text-center text-foreground">{entry.won}</td>
                        <td className="py-3 px-2 md:px-4 text-sm text-center text-foreground">{entry.drawn}</td>
                        <td className="py-3 px-2 md:px-4 text-sm text-center text-foreground">{entry.lost}</td>
                        <td className="py-3 px-2 md:px-4 text-sm text-center text-foreground hidden sm:table-cell">{entry.goalsFor}</td>
                        <td className="py-3 px-2 md:px-4 text-sm text-center text-foreground hidden sm:table-cell">{entry.goalsAgainst}</td>
                        <td className="py-3 px-2 md:px-4 text-sm text-center text-foreground hidden sm:table-cell">
                          {entry.goalDifference > 0 ? `+${entry.goalDifference}` : entry.goalDifference}
                        </td>
                        <td className={`py-3 px-2 md:px-4 text-sm text-center font-bold ${entry.team.isOwnTeam ? 'text-primary' : 'text-foreground'}`}>
                          {entry.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
