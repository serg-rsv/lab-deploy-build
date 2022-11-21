const UserButton = ({ onClick, dataActive = false, disabled = false }) => {
  return (
    <button
      type="submit"
      data-active={dataActive}
      onClick={onClick}
      disabled={disabled}
    ></button>
  );
};

export default UserButton;
