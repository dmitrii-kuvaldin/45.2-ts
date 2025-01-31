import { useParams } from "react-router-dom";
import Pagination from "../../ui/lists/pagination/Pagination";
import DataList from "../../ui/lists/dataList/DataList";

const productsData = [
  { id: 1, name: "MacBook Pro", category: "Лэптопы" },
  { id: 2, name: "iPhone 15 Pro", category: "Смартфоны" },
  { id: 3, name: "PlayStation 5", category: "Консоли" },
  { id: 4, name: "Samsung Galaxy S23", category: "Смартфоны" },
  { id: 5, name: "Dell XPS 13", category: "Лэптопы" },
  { id: 6, name: "Xbox Series X", category: "Консоли" },
  { id: 7, name: "Apple Watch Ultra", category: "Гаджеты" },
  { id: 8, name: "iPad Pro", category: "Планшеты" },
  { id: 9, name: "Sony WH-1000XM5", category: "Аудио" },
  { id: 10, name: "GoPro Hero 11", category: "Камеры" },
];

const columns = [
  { key: "name", label: "Имя" },
  { key: "age", label: "Возраст" },
  { key: "city", label: "Город" },
];

const data = [
  { name: "Алексей", age: 28, city: "Москва" },
  { name: "Мария", age: 24, city: "Санкт-Петербург" },
  { name: "Иван", age: 32, city: "Казань" },
  { name: "Елена", age: 26, city: "Новосибирск" },
  { name: "Сергей", age: 30, city: "Екатеринбург" },
];


const Products: React.FC = () => {
  const { page } = useParams();
  const currentPage = Number(page) || 1;
  const itemsPerPage = 3; // Показываем 3 товара на страницу

  // Вычисляем, какие товары отображать на этой странице
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = productsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h1>Каталог товаров - Страница {currentPage}</h1>
      <ul>
        {displayedProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> — {product.category}
          </li>
        ))}
      </ul>
      <Pagination totalPages={Math.ceil(productsData.length / itemsPerPage)} currentPage={currentPage} basePath="/products" />
      <div style={{ padding: "20px" }}>
        <h1>Список данных</h1>
        <DataList columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Products;
