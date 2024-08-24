import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Character from "./components/Character";
import CharactersList from "./components/CharactersList";
import "./App.css";

export enum Filter {
  STUDENTS = "students",
  STAFF = "staff",
}

const URL = "https://hp-api.onrender.com/api/characters";

function App() {
  const [filterCharacters, setFilterCharacters] = useState<Filter | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<any[]>([]);
  const [favCharacters, setFavCharacters] = useState<string[]>([]);
  const [characterSelected, setCharacterSelected] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setCharacters(data);
      });
  }, []);

  const getFilteredCharacters = () => {
    if (!filterCharacters) return characters;

    return characters.filter((c) =>
      filterCharacters === Filter.STUDENTS ? c.hogwartsStudent : c.hogwartsStaff
    );
  };

  const getTitle = () => {
    if (!filterCharacters) return "All characters";

    return filterCharacters === Filter.STUDENTS
      ? "Hogwarts students"
      : "Hogwarts staff";
  };

  const handleAddToFavs = (charId: string) => {
    console.log("handleAddToFavs: ", charId);
    if (favCharacters.includes(charId)) {
      setFavCharacters(favCharacters.filter((c) => c !== charId));
    } else {
      setFavCharacters([...favCharacters, charId]);
    }
  };

  return (
    <>
      <NavBar onChangeFilter={(newFilter) => setFilterCharacters(newFilter)} />
      {isLoading ? (
        <p>Loading...</p>
      ) : !characters.length ? (
        <div>Woops... no info</div>
      ) : characterSelected ? (
        <Character
          info={characters.find((c) => c.id === characterSelected)}
          onBack={() => setCharacterSelected(undefined)}
        />
      ) : (
        <>
          {!!favCharacters.length && (
            <CharactersList
              title="Favourite characters"
              charsToShow={characters.filter((c) =>
                favCharacters.includes(c.id)
              )}
              onCharacterClick={(char: string) => setCharacterSelected(char)}
              onFavClick={handleAddToFavs}
            />
          )}

          <CharactersList
            title={getTitle()}
            charsToShow={getFilteredCharacters()}
            favList={favCharacters}
            onCharacterClick={(char: string) => setCharacterSelected(char)}
            onFavClick={handleAddToFavs}
          />
        </>
      )}
    </>
  );
}

export default App;
