import { useEffect, useState } from "react";
import Accordion from "../../ui/cards/accordion/Accordion";
import Breadcrumbs from "../../ui/cards/breadcrumbs/Breadcrumbs";
import Card from "../../ui/cards/card/Card";
import ModalComponent from "../../ui/cards/modal/Modal";
import Tabs from "../../ui/cards/tabs/Tabs";
import Table from "../../ui/lists/table/Table";

const cardsData = [
  {
    title: "Tesla Cybertruck",
    description: "Футуристический электропикап от Tesla.",
    image: "https://www.tessi-supply.com/cdn/shop/articles/img-1701856486467.jpg?v=1701857305&width=800",
  },
  {
    title: "MacBook Pro M3",
    description: "Самый мощный ноутбук Apple.",
    image: "https://www.notebookcheck.com/fileadmin/_processed_/8/6/csm_IMG_1241_772bbde126.jpg",
  },
  {
    title: "Без изображения",
    description: "Пример карточки без фото.",
  },
];

const accordionData = [
  {
    title: "Что такое Tesla Cybertruck?",
    content: "Это футуристический электропикап от Tesla с бронестеклом и мощными характеристиками.",
  },
  {
    title: "Какие особенности у MacBook Pro M3?",
    content: "Новый чип M3, невероятная производительность и энергоэффективность.",
  },
  {
    title: "Как работает этот аккордеон?",
    content: "Он использует `react-spring` для плавной анимации раскрытия и скрытия контента.",
  },
];

const tabData = [
  {
    label: "Описание",
    content: <p>Это подробное описание товара.</p>,
  },
  {
    label: "Характеристики",
    content: (
      <ul>
        <li>Процессор: M3</li>
        <li>Память: 16GB</li>
        <li>Дисплей: 15 дюймов Retina</li>
      </ul>
    ),
  },
  {
    label: "Отзывы",
    content: <p>Отзывы покупателей появятся здесь.</p>,
  },
];


const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Имя" },
  { key: "age", label: "Возраст" },
];

const data = [
  { id: 1, name: "Алексей", age: 28 },
  { id: 2, name: "Мария", age: 24 },
  { id: 3, name: "Иван", age: 32 },
];


export default function CardsPage() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return (
    <div>
      <Breadcrumbs />
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} image={card.image} loading={loading} />
        ))}
      </div>
      <div style={{ padding: "20px" }}>
        <button onClick={() => setIsModalOpen(true)}>Открыть модальное окно</button>

        <ModalComponent isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} title="Модальное окно">
          <p>Это содержимое модального окна.</p>
        </ModalComponent>
      </div>
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {accordionData.map((item, index) => (
          <Accordion key={index} title={item.title}>
            <p>{item.content}</p>
          </Accordion>
        ))}
      </div>
      <div style={{ padding: "20px" }}>
        <Tabs tabs={tabData} />
      </div>
      <div style={{ padding: "20px" }}>
      </div>
      <div>
        <Breadcrumbs basePath="/admin" labels={{ dashboard: "Главная", settings: "Настройки" }} />
        <h1>Панель администратора</h1>
        <p>Раздел управления сайтом...</p>
      </div>
      <div style={{ padding: "20px" }}>
      <h1>Таблица</h1>
      <Table columns={columns} data={data} />
    </div>
    </div>
  );
}
