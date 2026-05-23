import { baseApi } from "../baseApi";
import type { CharactersResponse } from "./character.entity";
export const charactersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCharacters: build.query<CharactersResponse, void>({
      query: () => `/character`,
    }),
    getCharacterById: build.query({
      query: (id: number) => `/character/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery } = charactersApi;