import React from "react";
import Modal from "react-modal";
import cn from "classnames";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title?: string;
  children: React.ReactNode;
}

Modal.setAppElement("#root"); // Для лучшей доступности

const ModalComponent: React.FC<ModalProps> = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose} // ✅ Используем правильное API
      className={cn(styles.modal, { [styles.open]: isOpen })}
      overlayClassName={styles.overlay}
    >
      <div className={styles.header}>
        <h3>{title}</h3>
        <button className={styles.closeButton} onClick={onRequestClose}>✖</button>
      </div>
      <div className={styles.content}>{children}</div>
    </Modal>
  );
};

export default ModalComponent;
