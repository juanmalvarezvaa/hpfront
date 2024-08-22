type CharacterProps = {
  info: any;
};
const Character = ({ info }: CharacterProps) => {
  return (
    <div>
      <h2>{info.name}</h2>
      <p>{info.house}</p>
      <p>{info.dateOfBirth}</p>
      <p>{info.ancestry}</p>
      <p>{info.patronus}</p>
    </div>
  );
};

export default Character;
