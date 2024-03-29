export type FetchDisneyApiType = {
  data: {
    createdAt: string;
    films: string[];
    imageUrl?: string;
    name: string;
    parkAttractions: string[];
    shortFilms: never[];
    sourceUrl: string;
    tvShows: string[];
    updatedAt: string;
    url: string;
    videoGames: string[];
    __v: number;
    _id: number;
  }[];
  info: {
    count: number;
    nextPage: string;
    previousPage: string | null;
    totalPages: number;
  };
};

export type CharacterType = {
  createdAt: string;
  films: string[];
  imageUrl?: string;
  name: string;
  parkAttractions: string[];
  shortFilms: never[];
  sourceUrl: string;
  tvShows: string[];
  updatedAt: string;
  url: string;
  videoGames: string[];
  __v: number;
  _id: number;
};
