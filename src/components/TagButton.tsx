interface TagButtonProps {
  children: string;
  isChecked: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TagButton = ({ onClick, children, isChecked }: TagButtonProps) => {
  const buttonStyle = isChecked
    ? 'bg-white text-primary'
    : 'bg-darkOpacity text-white';

  return (
    <button
      className={`
        border border-white
        rounded-tag-button 
        px-[10px] h-[32px]
        text-sm
        ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TagButton;
