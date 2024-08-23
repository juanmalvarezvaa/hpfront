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
  const [characters, setCharacters] = useState<any[]>([]);
  const [favCharacters, setFavCharacters] = useState<string[]>([]);
  const [characterSelected, setCharacterSelected] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
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

  return (
    <>
      <NavBar onChangeFilter={(newFilter) => setFilterCharacters(newFilter)} />
      {!characters.length ? (
        <div>Loading...</div>
      ) : characterSelected ? (
        <Character info={characters.find((c) => c.id === characterSelected)} />
      ) : (
        <>
          {!!favCharacters.length && (
            <CharactersList
              title="Favourite characters"
              charsToShow={characters.filter((c) =>
                favCharacters.includes(c.id)
              )}
              onCharacterClick={(char: string) => setCharacterSelected(char)}
            />
          )}

          <CharactersList
            title={getTitle()}
            charsToShow={getFilteredCharacters()}
            onCharacterClick={(char: string) => setCharacterSelected(char)}
          />
        </>
      )}
    </>
  );
}

export default App;
