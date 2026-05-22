export interface AllCharactersResponseDto {
  info: CharacterInfoDto;
  results: CharacterDto[];
}

export interface CharacterDto {
  id: number;
  name: string;
  status: CharacterStatusDto;
  species: string;
  type: string;
  gender: CharacterGenderDto;
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

export type CharacterGenderDto = "Female" | "Male" | "Genderless" | "Unknown";

export type CharacterStatusDto = "Alive" | "Dead" | "Unknown";
