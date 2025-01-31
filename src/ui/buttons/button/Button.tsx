import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";

interface ButtonProps {
  // текст для кнопки
  children: React.ReactNode;
  // событие onClick (необязательный для ссылок)
  onClick?: () => void;
  // тип кнопки
  type?: "button" | "submit" | "reset";
  // ссылка (если передана, кнопка становится <a>)
  href?: string;
  // target для ссылок
  target?: "_blank" | "_self" | "_parent" | "_top";
  // вариант цветовой схемы
  variant?: "primary" | "secondary" | "danger" | "outline";
  // размер кнопки
  size?: "small" | "medium" | "large";
  // активная или нет
  disabled?: boolean;
  // грузится или нет
  loading?: boolean;
  // иконка
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  href,
  target,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  icon,
}) => {
  const classNames = cn(styles.button, styles[variant], styles[size], {
    [styles.disabled]: disabled,
  });

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={classNames}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {loading ? <span className={styles.loader}></span> : <>{icon && <span className={styles.icon}>{icon}</span>}{children}</>}
      </a>
    );
  }

  return (
    <button className={classNames} onClick={onClick} type={type} disabled={disabled || loading}>
      {loading ? <span className={styles.loader}></span> : <>{icon && <span className={styles.icon}>{icon}</span>}{children}</>}
    </button>
  );
};

export default Button;
