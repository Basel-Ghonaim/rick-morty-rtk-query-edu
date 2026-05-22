export interface AllCharactersResponseDto {
  info: CharacterInfoDto;
  results: CharacterDto[];
}

export interface CharacterDto {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterInfoDto {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
