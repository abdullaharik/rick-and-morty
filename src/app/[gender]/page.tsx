type GenderPageProps = { gender: string };

const GenderPage = async ({ params }: { params: GenderPageProps }) => {
  const { gender } = params;

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?gender=${gender}`
  );
  const data = await res.json();

  return (
    <div>
      <h1>Gender: {gender}</h1>
      <h2>Characters:</h2>
      <ul>
        {data.results.map((character: { id: string; name: string }) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenderPage;
