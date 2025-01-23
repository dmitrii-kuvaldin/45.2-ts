// пример отдельного компонента кнопки
// экспорт по умолчанию написан перед объявлением функции

/// типизация props для кнопки
interface IMyButtonProps {
  // необязательные ключи
  text?: string;
  type?: "button" | "submit" | "reset";
  // обязательный ключ
  func: () => void;
}

// указали значения по умолчанию для необязательных ключей
export default function MyButton({ func, text = "click me", type = "submit" }: IMyButtonProps) {
  return <button type={type} onClick={func}>{text}</button>;
}
