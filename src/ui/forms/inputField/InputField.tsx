import React from "react";
import styles from "./InputField.module.css";

interface InputFieldProps {
  // тип поля ввода
  type?: "text" | "password" | "email" | "number";
  // описание поля на фоне
  placeholder?: string;
  // значение внутри поля
  value: string;
  // функция onChange для input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // ? функция которая с работает на onBlur
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  // переданная ошибка
  error?: string;
  // текст подсказка
  helperText?: string;
  // описание input
  label?: string;
  // иконка для input
  icon?: React.ReactNode;
  // активно поле или нет
  disabled?: boolean;
  name: string;
  // ! возможно нужно добавить name
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  label,
  icon,
  name,
  disabled = false,
}) => {
  return (
    <div className={`${styles.inputContainer} ${disabled ? styles.disabled : ""}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={`${styles.inputWrapper} ${error ? styles.error : ""}`}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={styles.input}
        />
      </div>
      {/* если передан текст подсказка - это будет он */}
      {helperText && <p className={styles.helperText}>{helperText}</p>}
      {/* если придет ошибка - придет этот текст */}
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default InputField;
