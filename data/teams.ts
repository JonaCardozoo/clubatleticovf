// =====================================================
// CONFIGURACIÓN DE EQUIPOS - Liga Paranaense de Fútbol
// =====================================================
// Editá este archivo para actualizar los escudos de los equipos
// y la tabla de posiciones.

export interface Team {
    id: string
    name: string
    shortName: string
    logo: string // URL del escudo del equipo
    isOwnTeam?: boolean // true solo para Club Atlético VF
  }
  
  export interface StandingsEntry {
    teamId: string
    played: number    // PJ - Partidos Jugados
    won: number       // G - Ganados
    drawn: number     // E - Empatados
    lost: number      // P - Perdidos
    goalsFor: number  // GF - Goles a Favor
    goalsAgainst: number // GC - Goles en Contra
  }
  
  // =====================================================
  // EQUIPOS
  // =====================================================
  // Agregá o modificá equipos acá. El campo "logo" es la URL
  // del escudo. Podés usar imágenes de tu hosting o URLs externas.
  
  export const teams: Team[] = [
    {
      id: "cavf",
      name: "Club Atlético VF",
      shortName: "CAVF",
      logo: "/escudo.png", // Cambiá por la URL de tu escudo
      isOwnTeam: true
    },
    {
      id: "oro-verde",
      name: "Oro Verde FC",
      shortName: "OV",
      logo: "/escudos/oroverde.png"
    },
    {
      id: "san-miguel",
      name: "San Miguel",
      shortName: "SM",
      logo: "/escudos/sanmiguel.png"
    },
    {
      id: "argentino-jrs",
      name: "Argentino Jrs",
      shortName: "ARG",
      logo: "/escudos/argjr.png"
    },
    {
      id: "club-union",
      name: "Club Unión",
      shortName: "CU",
      logo: "/escudos/club-union.png"
    },
    {
      id: "la-potrera",
      name: "La Potrera",
      shortName: "LP",
      logo: "/escudos/la-potrera.png"
    },
    {
      id: "atletico-parana",
      name: "Atlético Paraná",
      shortName: "AP",
      logo: "/escudos/atleticoparana.png"
    },
    {
        id: "patronato",
        name: "Club Atlético Patronato",
        shortName: "PAT",
        logo: "/escudos/patronato.png"
      }
  ]
  
  // =====================================================
  // TABLA DE POSICIONES
  // =====================================================
  // Actualizá estos datos después de cada fecha.
  // Los puntos se calculan automáticamente (G*3 + E*1)
  // La diferencia de gol se calcula como GF - GC
  
  export const standings: StandingsEntry[] = [
    {
      teamId: "cavf",
      played: 1,
      won: 1,
      drawn: 0,
      lost: 0,
      goalsFor: 7,
      goalsAgainst: 1
    },
    {
      teamId: "oro-verde",
      played: 1,
      won: 1,
      drawn: 0,
      lost: 0,
      goalsFor: 3,
      goalsAgainst: 1
    },
    {
      teamId: "san-miguel",
      played: 1,
      won: 0,
      drawn: 1,
      lost: 0,
      goalsFor: 2,
      goalsAgainst: 2
    },
    {
      teamId: "atletico-parana",
      played: 1,
      won: 0,
      drawn: 1,
      lost: 0,
      goalsFor: 2,
      goalsAgainst: 2
    },
    {
      teamId: "argentino-jrs",
      played: 1,
      won: 0,
      drawn: 0,
      lost: 1,
      goalsFor: 1,
      goalsAgainst: 7
    }
  ]
  
  // =====================================================
  // FUNCIONES AUXILIARES (no modificar)
  // =====================================================
  
  export function getTeamById(id: string): Team | undefined {
    return teams.find(team => team.id === id)
  }
  
  export function calculatePoints(entry: StandingsEntry): number {
    return entry.won * 3 + entry.drawn * 1
  }
  
  export function calculateGoalDifference(entry: StandingsEntry): number {
    return entry.goalsFor - entry.goalsAgainst
  }
  
  export function getSortedStandings(): (StandingsEntry & { team: Team; points: number; goalDifference: number })[] {
    return standings
      .map(entry => ({
        ...entry,
        team: getTeamById(entry.teamId)!,
        points: calculatePoints(entry),
        goalDifference: calculateGoalDifference(entry)
      }))
      .sort((a, b) => {
        // Ordenar por puntos (descendente)
        if (b.points !== a.points) return b.points - a.points
        // Si hay empate en puntos, ordenar por diferencia de gol
        if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference
        // Si hay empate en diferencia de gol, ordenar por goles a favor
        return b.goalsFor - a.goalsFor
      })
  }
  