import { Button, Typography, Avatar } from "@mui/material";
import { WestOutlined } from "@mui/icons-material";
import "./Character.css";

type CharacterProps = {
  info: any;
  onBack: () => void;
};
const Character = ({ info, onBack }: CharacterProps) => {
  return (
    <div className="character">
      <div className="back_btn">
        <Button onClick={onBack} startIcon={<WestOutlined />}>
          Back
        </Button>
      </div>
      <br />
      <div className="character_info">
        <Avatar
          src={info.image}
          alt={info.actor}
          className="character_img"
          sx={{
            width: 250,
            height: 250,
            border: "3px solid white",
          }}
        />
        <div className="character_name">
          <Typography variant="h4">{info.name}</Typography>
          {!!info.alternate_names.length && (
            <Typography variant="body2">
              a.k.a.: {info.alternate_names.join(", ")}
            </Typography>
          )}
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default Character;
