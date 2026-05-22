import type { CharacterGender, CharacterStatus } from "./character.types";

export interface CharactersResponseDto {
  info: CharacterInfoDto;
  results: CharacterDto[];
}

export interface CharacterInfoDto {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterDto {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
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

