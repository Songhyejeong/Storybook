import { flexColCenter } from '../styles';

interface CategoryButtonProps {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CategoryButton = ({
  iconPath,
  iconAlt,
  text,
  onClick,
}: CategoryButtonProps) => {
  return (
    <button
      className={`
      rounded-button-default 
      border
      border-primary
      text-primary
      text-base
      font-bold
      pl-[18px]
      pr-[18px]
      py-4
      ${flexColCenter}
    `}
      onClick={onClick}
    >
      <img alt={iconAlt} src={iconPath} />
      <p>{text}</p>
    </button>
  );
};

export default CategoryButton;
