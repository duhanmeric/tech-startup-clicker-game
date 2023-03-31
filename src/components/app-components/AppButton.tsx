type AppButtonProps = {
  title: string;
  onClick: () => void;
  isDisabled?: boolean;
};

function AppButton({ title, onClick, isDisabled }: AppButtonProps) {
  return (
    <button disabled={isDisabled} className="btn" onClick={onClick}>
      {title}
    </button>
  );
}

export default AppButton;
