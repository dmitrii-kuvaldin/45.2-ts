import { useEffect, useState } from "react";
import styles from './products.module.css';
import { IProduct } from "./types/types";
import ProductCard from "../productCard/ProductCard";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Cart from "../cart/Cart";

export default function Products(): JSX.Element {
  // вызываем функцию получения данных из контекста корзины
  // в ответе через деструктуризацию получаем нужные данные
  const { addToCart } = useCart();


  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data: IProduct[] = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log('render product');


  return (
    <>
      <Cart />
      <div className={styles.shopContainer}>
        {products.map(product => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </>
  );
}
