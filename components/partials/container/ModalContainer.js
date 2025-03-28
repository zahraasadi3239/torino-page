import React from "react";
import styles from "./ModalContainer.module.css";

function ModalContainer({ children, isOpen, setIsOpen }) {
  if (!isOpen) return;
  return (
    <div className={styles.container}>
      <div className={styles.box}>{children}</div>
    </div>
  );
}

export default ModalContainer;
