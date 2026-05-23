import type { CharacterGender, CharacterStatus } from "./character.types";

export interface CharactersResponse {
  results: Character[];
  info: CharacterInfo;
}

export interface CharacterInfo {
  count: number;
  totalPages: number;
  nextPage: string | null;
  prevPage: string | null;
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  originLocation: Location;
  currentLocation: Location;
  image: string;
  episodeUrls: string[];
  url: string;
  createdAt: string;
  created?: string;
}

export interface Location {
  name: string;
  url: string;
}

