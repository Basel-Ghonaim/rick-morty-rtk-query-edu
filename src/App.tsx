import { useGetCharactersQuery } from "./feature/character/characterApi";
import { CharacterCard } from "./feature/character/components/CharacterCard";

function App() {
  const { data } = useGetCharactersQuery();

  return (
    <div className="cards-container">
      <div className="cards-grid">
        {data?.results.map((item) => (
          <div key={item.id} className="card-wrapper">
            <CharacterCard character={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
