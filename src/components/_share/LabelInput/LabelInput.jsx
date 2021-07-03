const LabelInput = ({
  type = "text",
  title,
  name,
  value,
  cbOnChange,
  placeholder = "",
}) => {
  return (
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
  );
};

export default LabelInput;
