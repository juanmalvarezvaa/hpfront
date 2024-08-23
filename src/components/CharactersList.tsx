import ChardCard from "./ChardCard";
import "./CharactersList.css";
import { Typography } from "@mui/material";

type CharactersListProps = {
  title: string;
  charsToShow: any[];
  favList?: string[];
  onCharacterClick: (char: string) => void;
  onFavClick: (charId: string) => void;
};

const CharactersList = ({
  title,
  charsToShow,
  favList,
  onCharacterClick,
  onFavClick,
}: CharactersListProps) => {
  return (
    <div>
      <Typography variant="h5">{title}</Typography>
      <div className="chars_list">
        {charsToShow.map((char) => (
          <ChardCard
            key={char.id}
            character={char}
            isFav={!favList ? true : favList.some((c) => c === char.id)}
            onFav={(charId) => onFavClick(charId)}
            // onCharClick={onCharacterClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CharactersList;
