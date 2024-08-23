import { IconButton, Typography } from "@mui/material";
import { StarBorderRounded, StarRounded } from "@mui/icons-material";
import "./ChardCard.css";

type ChardCardProps = {
  character: any;
  isFav: boolean;
  onFav: (charId: string) => void;
  //   onCharClick: (charId: string) => void;
};

const ChardCard = ({
  character,
  isFav,
  onFav,
}: //   onCharClick,
ChardCardProps) => {
  return (
    <div className="char_card">
      <img
        src={
          character.image ||
          "https://www.svgrepo.com/show/452030/avatar-default.svg"
        }
        alt={character.actor}
        className="chard_img"
        // onClick={onCharClick}
      />
      <div className="card_info">
        <Typography variant="body2" color="white" noWrap>
          {character.name}
        </Typography>
        <IconButton>
          {isFav ? (
            <StarRounded onClick={() => onFav(character.id)} />
          ) : (
            <StarBorderRounded onClick={() => onFav(character.id)} />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default ChardCard;
