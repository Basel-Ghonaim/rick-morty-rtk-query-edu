export interface AllCharacterResponse {
  results: Character[];
  info: AllCharacterInfoEntity;
}

export interface AllCharacterInfoEntity {
  countOfEntities: number;
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
  originLocation: CharacterLocation;
  currentLocation: CharacterLocation;
  image: string;
  episodeUrls: string[];
  url: string;
  createdAt: string;
}

export type CharacterStatus = "Alive" | "Dead" | "Unknown";

export type CharacterGender = "Female" | "Male" | "Genderless" | "Unknown";

export interface CharacterLocation {
  name: string;
  url: string;
}

export interface CharacterOrigin {
  name: string;
  url: string;
}