export type AnimeData = {
  mal_id: number,
  url: string,
  images: {
    jpg: {
      image_url: string
    }
  },
  trailer: {},
  approved: true,
  titles: [],
  title: string,
  title_english: null,
  title_japanese: string,
  title_synonyms: [],
  type: string,
  source: string,
  episodes: number,
  status: string,
  airing: boolean,
  aired: {},
  duration: string,
  rating: number,
  score: string,
  scored_by: string,
  rank: number,
  popularity: number,
  members: number,
  favorites: number,
  synopsis: string,
  background: null,
  season: null,
  year: null,
  broadcast: object[],
  producers: [],
  licensors: [],
  studios: [],
  genres: {
    mal_id: number,
    name: string,
    type: string,
    url: string
  }[],
  explicit_genres: [],
  themes: [],
  demographics: []
}