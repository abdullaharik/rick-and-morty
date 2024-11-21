import { Character, CharacterFilter } from '@/features/rickandmorty/adapters';
import { TeamSection } from '@/features/rickandmorty/components/molecules';
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
    <div className='p-24'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-center'>
          <div className='flex justify-center border rounded-full w-96'>
            <GenderSelect
              onChange={handleUrl('gender')}
              defaultValue={gender}
            />
            <StatusSelect
              onChange={handleUrl('status')}
              defaultValue={status}
            />
          </div>
        </div>
        <TeamSection data={data} />
      </div>
    </div>
  );
};

export default RickAndMortyPage;
