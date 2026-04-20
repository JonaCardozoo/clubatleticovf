// =====================================================
// CONFIGURACIÓN DE PARTIDOS - Liga Paranaense de Fútbol
// =====================================================
// Editá este archivo para actualizar los próximos partidos
// y los resultados.

export interface UpcomingMatch {
    id: number
    homeTeamId: string
    awayTeamId: string
    date: string
    time: string
    venue: string
    competition: string
  }
  
  export interface MatchResult {
    id: number
    homeTeamId: string
    homeScore: number
    awayTeamId: string
    awayScore: number
    date: string
    competition: string
  }
  
  // =====================================================
  // PRÓXIMOS PARTIDOS
  // =====================================================
  // Agregá los partidos que vienen. Usá los IDs de los equipos
  // definidos en teams.ts
  
  export const upcomingMatches: UpcomingMatch[] = [

    {
      id: 2,
      homeTeamId: "san-miguel",
      awayTeamId: "cavf",
      date: "27 Abril 2025",
      time: "15:30",
      venue: "Est. San Miguel",
      competition: "Liga Paranaense - Fecha 3"
    },
    {
      id: 3,
      homeTeamId: "cavf",
      awayTeamId: "patronato",
      date: "4 Mayo 2025",
      time: "13:00",
      venue: "Predio CAVF",
      competition: "Liga Paranaense - Fecha 4"
    }
  ]
  
  // =====================================================
  // RESULTADOS
  // =====================================================
  // Agregá los resultados de los partidos ya jugados.
  // El más reciente primero.
  
  export const matchResults: MatchResult[] = [
    {
      id: 1,
      homeTeamId: "cavf",
      homeScore: 7,
      awayTeamId: "argentino-jrs",
      awayScore: 1,
      date: "13 Abril 2025",
      competition: "Liga Paranaense - Fecha 1"
    },
    {
        id: 2,
        homeTeamId: "cavf",
        homeScore: 2,
        awayTeamId: "oro-verde",
        awayScore: 1,
        date: "19 Abril 2025",
        competition: "Liga Paranaense - Fecha 2"
      },
  ]
  