import type { CharacterDto, CharactersResponseDto } from "./character.dto";
import type { CharactersResponse, Character } from "./character.entity";

export interface CharactersResponseMapper {
  DtoToCharactersResponse: (dto: CharactersResponseDto) => CharactersResponse;
  CharactersResponseToDto: (
    entity: CharactersResponse,
  ) => CharactersResponseDto;
}

export const charactersResponseMapper = (): CharactersResponseMapper => ({
  DtoToCharactersResponse: (dto) => {
    const charactersEntity = dto.results.map(
      (characterDto): Character => ({
        id: characterDto.id,
        name: characterDto.name,
        status: characterDto.status,
        species: characterDto.species,
        type: characterDto.type,
        gender: characterDto.gender,
        originLocation: characterDto.origin,
        currentLocation: characterDto.location,
        image: characterDto.image,
        episodeUrls: characterDto.episode,
        url: characterDto.url,
        createdAt: characterDto.created,
      }),
    );

    return {
      results: charactersEntity,
      info: {
        count: dto.info.count,
        totalPages: dto.info.pages,
        nextPage: dto.info.next,
        prevPage: dto.info.prev,
      },
    };
  },
  CharactersResponseToDto: (entity) => {
    const charactersDto = entity.results.map(
      (character): CharacterDto => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        gender: character.gender,
        origin: character.originLocation,
        location: character.currentLocation,
        image: character.image,
        episode: character.episodeUrls,
        url: character.url,
        created: character.createdAt,
      }),
    );

    return {
      results: charactersDto,
      info: {
        count: entity.info.count,
        pages: entity.info.totalPages,
        next: entity.info.nextPage,
        prev: entity.info.prevPage,
      },
    };
  },
});

