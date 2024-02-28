import { CharacterType } from '../../types';

type CharacterInfoType = {
  characterInfo: CharacterType;
};

const CharacterCard = ({ characterInfo }: CharacterInfoType) => {
  // nome, imagem
  return (
    <section>
      <img src={characterInfo.imageUrl} alt={characterInfo.name} />
      <h2>{characterInfo.name}</h2>
    </section>
  );
};

export default CharacterCard;
