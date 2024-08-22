type CharactersListProps = {
  title: string;
  charsToShow: any[];
  onCharacterClick: (char: string) => void;
};

const CharactersList = ({
  title,
  charsToShow,
  onCharacterClick,
}: CharactersListProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {charsToShow.map((char) => (
          <li key={char.id}>{char.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;
