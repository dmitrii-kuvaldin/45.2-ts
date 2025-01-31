import React from "react";
import { useInView } from "react-intersection-observer";
import cn from "classnames";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  loading?: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, image, loading = false }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className={cn(styles.card, { [styles.visible]: inView })}>
      {loading ? (
        <Skeleton height={200} />
      ) : image ? (
        <img src={image} alt={title} className={styles.image} />
      ) : (
        <div className={styles.placeholder}>Нет изображения</div>
      )}
      <div className={styles.content}>
        <h3>{loading ? <Skeleton width={150} /> : title}</h3>
        <p>{loading ? <Skeleton count={2} /> : description}</p>
      </div>
    </div>
  );
};

export default Card;
