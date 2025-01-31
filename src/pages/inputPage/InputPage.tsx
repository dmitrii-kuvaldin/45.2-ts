import { useState } from "react";
import Breadcrumbs from "../../ui/cards/breadcrumbs/Breadcrumbs";
import Checkbox from "../../ui/forms/checkbox/Checkbox";
import DatePickerComponent from "../../ui/forms/datePicker/DatePicker";
import FileUpload from "../../ui/forms/fileUpload/FileUpload";
import InputField from "../../ui/forms/inputField/InputField";
import RadioGroup from "../../ui/forms/radioGroup/RadioGroup";
import Select from "../../ui/forms/select/Select";
import Slider from "../../ui/forms/slider/Slider";
import Switch from "../../ui/forms/switch/Switch";
import Textarea from "../../ui/forms/textArea/Textarea";


export default function InputPage() {
  const [selectedValue, setSelectedValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [isOn, setIsOn] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [value, setValue] = useState(50);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    if (!e.target.checked) {
      setError("Это поле обязательно");
    } else {
      setError("");
    }
  };


  const options = [
    { label: "Опция 1", value: "option1" },
    { label: "Опция 2", value: "option2" },
    { label: "Опция 3", value: "option3" },
  ];
  return (
    <div>
      <Breadcrumbs />
      <div style={{ padding: "20px" }}>
        <InputField
          name="input"
          label="Ваше имя" placeholder="Введите имя" value='login'
          onChange={() => { }}
          error={''}
          helperText="Это поле обязательно" />
      </div>
      <div style={{ padding: "20px" }}>
        <Textarea label="Комментарий"
          placeholder="Введите ваш комментарий"
          value={'Textarea'}
          onChange={() => { }}
          error={''}
          helperText="Максимальная длина: 500 символов"
          autoResize />
      </div>
      <div style={{ padding: "20px" }}>
        <Select
          label="Выбор опции"
          options={options}
          value={selectedValue}
          onChange={(value) => setSelectedValue(value as string)}
          placeholder="Выберите опцию"
          helperText="Выберите один из вариантов"
        />
      </div>
      <div style={{ padding: "20px" }}>
        <Checkbox
          label="Согласен с условиями"
          checked={isChecked}
          onChange={handleChange}
          error={error}
        />
      </div>
      <div style={{ padding: "20px" }}>
        <RadioGroup
          name="example"
          options={options}
          value={selectedValue}
          onChange={(value) => setSelectedValue(value as string)}
          error={selectedValue === "" ? "Пожалуйста, выберите вариант" : ""}
        />
      </div>
      <div style={{ padding: "20px" }}>
        <Switch
          checked={isOn}
          onChange={(checked) => setIsOn(checked)}
          label="Активировать"
        />
      </div>
      <div>
        <h3>Выберите дату:</h3>
        <DatePickerComponent value={date} onChange={setDate} />
        <p>Выбранная дата: {date ? date.toLocaleDateString() : "Не выбрано"}</p>
      </div>
      <div>
        <h3>Загрузите файл:</h3>
        <FileUpload onFileSelect={setFile} />
        {file && <p>Выбран файл: {file.name}</p>}
      </div>
      <div>
        <h3>Выберите значение:</h3>
        <Slider
          value={value} onChange={setValue} />
        <p>Выбранное значение: {value}</p>
      </div>
    </div>
  );
}
