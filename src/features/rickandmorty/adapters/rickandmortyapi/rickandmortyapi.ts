// REF: https://rickandmortyapi.com/documentation/#filter-characters

import {
  Character,
  CharacterFilter,
  characterFilterSchema,
} from './types/rickandmortyapi';

const API_URL = 'https://rickandmortyapi.com/api';

export async function fetchFilteredCharacters(
  filter: Partial<CharacterFilter>
): Promise<Character[]> {
  const validatedFilter = characterFilterSchema.safeParse(filter);

  const queryParams = new URLSearchParams(
    validatedFilter.data as unknown as Record<string, string>
  ).toString();
  const response = await fetch(`${API_URL}/character/?${queryParams}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.results;
}

// Example usage:
// fetchFilteredCharacters({ page: 2, name: 'rick', status: 'alive' })
//   .then((characters) => console.log(characters))
//   .catch((error) => console.error(error));
