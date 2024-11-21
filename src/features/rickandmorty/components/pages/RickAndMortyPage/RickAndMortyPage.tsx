import {
  CharacterFilter,
  fetchFilteredCharacters,
} from '@/features/rickandmorty/adapters';

type RickAndMortyPageProps = CharacterFilter;

export const RickAndMortyPage = async ({
  params,
}: {
  params: RickAndMortyPageProps;
}) => {
  const { status, gender } = params;

  const data = await fetchFilteredCharacters(params);

  return (
    <div>
      <h1>
        Gender:{gender} / Status: {status}
      </h1>
      <h2>Characters:</h2>
      <ul>
        {data.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RickAndMortyPage;
