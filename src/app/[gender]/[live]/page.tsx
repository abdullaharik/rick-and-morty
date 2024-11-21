type LivePageProps = { live: string; gender: string };

const LivePage = async ({ params }: { params: LivePageProps }) => {
  const { live, gender } = params;

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?status=${live}&gender=${gender}`
  );
  const data = await res.json();

  return (
    <div>
      <h1>
        Gender:{gender} /Live: {live}
      </h1>
      <h2>Characters:</h2>
      <ul>
        {data.results.map((character: { id: string; name: string }) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LivePage;
