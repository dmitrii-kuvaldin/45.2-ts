function MyInput({name, type, placeholder, label}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input placeholder={placeholder} name={name} type={type} />
    </>
  );
}

export default MyInput;
