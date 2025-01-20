import IconButton from './IconButton';

interface NavigationBarProps {
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  isDark: boolean;
}

const NavigationBar = ({
  showBackButton,
  showCloseButton,
  showTitle,
  title = '',
  isDark,
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: NavigationBarProps) => {
  return (
    <div className="flex w-full gap-10 items-center justify-between h-16 px-4 border-b border-mono300">
      <div className="navigation-title-wrapper flex ">
        {/**뒤로 가기 버튼 */}
        {showBackButton && (
          <IconButton
            alt="icon-back-arrow"
            iconPath={`/ic-asset-back${isDark ? '-white' : ''}.svg`}
            onClick={onBackButtonClick}
          />
        )}
        {/**페이지 제목  */}
        {showTitle && (
          <h1 className={`text-2xl ${isDark ? 'text-white' : ''}`}>{title}</h1>
        )}
      </div>
      {/**닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          alt="icon-close"
          iconPath={`/ic-asset-delete${isDark ? '-white' : '-dark'}.svg`}
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
};

export default NavigationBar;
