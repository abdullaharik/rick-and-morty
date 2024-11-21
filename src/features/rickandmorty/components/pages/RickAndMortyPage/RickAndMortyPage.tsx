import { Character, CharacterFilter } from '@/features/rickandmorty/adapters';
import GenderSelect from '@/features/rickandmorty/components/molecules/GenderSelect/GenderSelect';
import StatusSelect from '@/features/rickandmorty/components/molecules/StatusSelect/StatusSelect';
import useUpdateUrl from '@/features/rickandmorty/hooks/useUpdateUrl';

export const RickAndMortyPage = ({
  params,
  data,
}: {
  params: CharacterFilter;
  data: Character[];
}) => {
  const { status, gender } = params;

  const { updateUrl } = useUpdateUrl();

  const handleUrl = (key: string) => (value: string) =>
    updateUrl({ ...params, [key]: value });

  return (
    <div>
      <GenderSelect onChange={handleUrl('gender')} defaultValue={gender} />
      <StatusSelect onChange={handleUrl('status')} defaultValue={status} />
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
