import { Character } from '@/features/rickandmorty/adapters';
import { Image } from '@/features/rickandmorty/components/atoms';

type TeamSectionProps = {
  data: Character[];
};

export const TeamSection: React.FC<TeamSectionProps> = ({ data }) => {
  return (
    <ul
      role='list'
      className='mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6'
    >
      {data.map((character) => (
        <li key={character.name}>
          <Image
            alt=''
            src={character.image}
            className='mx-auto size-24 rounded-full'
          />
          <h3 className='mt-6 text-base/7 font-semibold tracking-tight text-gray-900'>
            {character.name}
          </h3>
          <p className='text-sm/6 text-gray-600'>{character.gender}</p>
          <p className='text-sm/6 text-gray-600'>{character.status}</p>
        </li>
      ))}
    </ul>
  );
};
