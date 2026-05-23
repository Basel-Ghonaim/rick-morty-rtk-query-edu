import { useGetCharactersQuery } from "./feature/character/characterApi";

function App() {
  const { data } = useGetCharactersQuery();

  return (
    <>
      {data?.results.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </>
  );
}

export default App;
