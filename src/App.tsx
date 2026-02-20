import { useEffect, useState } from "react";
import "./App.css";
import type { characterList } from "./types/types";
import { api } from "./api/api";

import { LoaderComponent } from "./components/LoaderComponent";
import { CharacterList } from "./components/CharacterList";
import { ErrorComponent } from "./components/ErrorComponent";

const App = () => {
  const [characters, setCharacters] = useState<characterList>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [nextPage, setNextPage] = useState<string | null>(null);

  const fetchCharacters = async (url: string = "/people") => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.get(url);
      setCharacters((prev) => [...prev, ...res.data.results]);
      setNextPage(res.data.next); 
    } catch (err) {
      setError("Error al obtener los datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(); 
  }, []);

  return (
    <div>
      <h1 className="TitleClass">Star Wars Characters</h1>

      {loading && <LoaderComponent />}
      {error && <ErrorComponent mensaje={error} />}

      {!loading && !error && <CharacterList charList={characters} />}

      {!loading && nextPage && (
        <button
          onClick={() => {
            const cleanUrl = nextPage.replace("https://swapi.dev/api", "");
            fetchCharacters(cleanUrl);
          }}
        >
          Siguiente página
        </button>
      )}
    </div>
  );
};

export default App;
