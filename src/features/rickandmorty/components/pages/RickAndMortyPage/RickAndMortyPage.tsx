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

  const handleGenderChange = (gender: CharacterFilter['gender']) => {
    updateUrl({ gender });
  };

  const handleStatusChange = (status: CharacterFilter['status']) => {
    updateUrl({ status });
  };

  return (
    <div>
      <GenderSelect onChange={handleGenderChange} defaultValue={gender} />
      <StatusSelect onChange={handleStatusChange} defaultValue={status} />
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
