const Button = ({ title, type = "button", cbOnClick, cbArgs }) => {
  return (
    <button
      type={type}
      onClick={cbArgs ? () => cbOnClick(...cbArgs) : cbOnClick}
    >
      {title}
    </button>
  );
};

export default Button;
