import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Character from "./components/Character";
import CharactersList from "./components/CharactersList";
import { IconButton } from "@mui/material";
import "./App.css";

export enum Filter {
  STUDENTS = "students",
  STAFF = "staff",
}

enum Houses {
  GRYFFINDOR = "Gryffindor",
  SLYTHERIN = "Slytherin",
  HUFFLEPUFF = "Hufflepuff",
  RAVENCLAW = "Ravenclaw",
}

const HousesColors: Record<string, string> = {
  [Houses.GRYFFINDOR]: "#740001",
  [Houses.SLYTHERIN]: "#1A472A",
  [Houses.HUFFLEPUFF]: "#ecb939",
  [Houses.RAVENCLAW]: "#222f5b",
};

const URL = "https://hp-api.onrender.com/api/characters";

function App() {
  const [filterCharacters, setFilterCharacters] = useState<Filter | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<any[]>([]);
  const [houseSelected, setHouseSelected] = useState<Houses | undefined>();
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

  useEffect(() => {
    if (!houseSelected) return;
    console.log(houseSelected);
    document.documentElement.style.setProperty(
      "background-color",
      HousesColors[houseSelected]
    );
  }, [houseSelected]);

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
      <div className="top_bar">
        <NavBar
          onChangeFilter={(newFilter) => setFilterCharacters(newFilter)}
        />
        <div className="houses">
          <IconButton onClick={() => setHouseSelected(Houses.GRYFFINDOR)}>
            <img src="./Gryffindor_ClearBG.png" />
          </IconButton>
          <IconButton onClick={() => setHouseSelected(Houses.HUFFLEPUFF)}>
            <img src="./Hufflepuff_ClearBG.png" />
          </IconButton>
          <IconButton onClick={() => setHouseSelected(Houses.RAVENCLAW)}>
            <img src="./RavenclawCrest.png" />
          </IconButton>
          <IconButton onClick={() => setHouseSelected(Houses.SLYTHERIN)}>
            <img src="./Slytherin_ClearBG.png" />
          </IconButton>
        </div>
      </div>
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
