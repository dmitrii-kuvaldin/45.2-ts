import React, { useEffect, useRef } from "react";
import styles from "./Textarea.module.css";

// textarea это длинный input для большого кол-ва текста
interface TextareaProps {
  // заглушка на фон
  placeholder?: string;
  // значение
  value: string;
  // функция на изменение
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  // функция на изменения фокуса в форме
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  // ошибка
  error?: string;
  // текст подсказка
  helperText?: string;
  // подпись
  label?: string;
  // кол-во строк
  rows?: number;
  // кол-во колонок
  cols?: number;
  // активно или нет
  disabled?: boolean;
  // авто увеличение высоты
  autoResize?: boolean; // Увеличение высоты автоматически
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  label,
  rows = 3,
  cols,
  disabled = false,
  autoResize = false,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value, autoResize]);

  return (
    <div className={`${styles.textareaContainer} ${disabled ? styles.disabled : ""}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={`${styles.textareaWrapper} ${error ? styles.error : ""}`}>
        <textarea
          ref={textareaRef}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={rows}
          cols={cols}
          disabled={disabled}
          className={styles.textarea}
        />
      </div>
      {helperText && <p className={styles.helperText}>{helperText}</p>}
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default Textarea;
