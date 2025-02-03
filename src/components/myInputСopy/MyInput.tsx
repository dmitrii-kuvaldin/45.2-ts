import styles from "./myInput.module.css";

interface IMyInputProps {
  name: string;
  placeholder: string;
  label: string;
  type: "password" | "email" | "text" | "number";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
}

export default function MyInput({
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
}: IMyInputProps): JSX.Element {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`${styles.myInput} ${touched && error ? styles.inputError : ""}`}
      />
      {touched && error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}
