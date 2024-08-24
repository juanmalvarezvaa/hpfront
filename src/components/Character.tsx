import { Button, Typography } from "@mui/material";
import { WestOutlined } from "@mui/icons-material";
import "./Character.css";

type CharacterProps = {
  info: any;
  onBack: () => void;
};
const Character = ({ info, onBack }: CharacterProps) => {
  return (
    <div>
      <div className="back_btn">
        <Button onClick={onBack} startIcon={<WestOutlined />}>
          Back
        </Button>
      </div>
      <div className="character_image">
        <img
          src={
            info.image ||
            "https://www.svgrepo.com/show/452030/avatar-default.svg"
          }
          alt={info.actor}
          className="character_img"
        />
      </div>
      <Typography variant="h4">{info.name}</Typography>
      <Typography variant="body2">
        a.k.a.: {info.alternate_names.join(", ")}
      </Typography>
      <div className="character_desc">
        <div className="char_info">
          <Typography variant="h6">House:</Typography>
          <Typography variant="body2">{info.house}</Typography>
        </div>
        <div className="char_info">
          <Typography variant="h6">Ancestry:</Typography>
          <Typography variant="body2">{info.ancestry}</Typography>
        </div>
        <div className="char_info">
          <Typography variant="h6">Date Of Birth:</Typography>
          <Typography variant="body2">{info.dateOfBirth}</Typography>
        </div>
        <div className="char_info">
          <Typography variant="h6">Patronus:</Typography>
          <Typography variant="body2">{info.patronus}</Typography>
        </div>
        <div className="char_info">
          <Typography variant="h6">Species:</Typography>
          <Typography variant="body2">{info.species}</Typography>
        </div>
        <div className="char_info">
          <Typography variant="h6">dateOfBirth:</Typography>
          <Typography variant="body2">{info.dateOfBirth}</Typography>
        </div>
      </div>
    </div>
  );
};

export default Character;
