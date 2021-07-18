const LabelInput = ({
  type = "text",
  title,
  name,
  value,
  cbOnChange,
  cbOnClick,
  placeholder = "",
}) => {
  return cbOnChange ? (
    <label>
      <p>{title}</p>
      <input
        type={type}
        name={name}
        value={value}
        onChange={cbOnChange}
        placeholder={placeholder}
      />
    </label>
  ) : (
    <label>
      <p>{title}</p>
      <input
        type={type}
        name={name}
        value={value}
        onClick={cbOnClick}
      />
    </label>
  );
};

export default LabelInput;
