import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from './ErrorModal.module.css';
import { ReactDOM } from "react";


const Backdrop = ({onConfirm}) => {
    return (
        <div className={styles.backdrop} onClick={onConfirm}></div>
    )
}

const ModalOverlay = ({title, message, onConfirm}) => {
    return (
        <Card cssClass={styles.modal}>
        <header
            className={styles.header}>
            <h2>{title}</h2>
        </header>
        <div
            className={styles.content}>
            <p>{message}</p>
        </div>
        <footer
            className={styles.actions}>
            <Button onKlik={onConfirm}>Okay</Button>
        </footer>
    </Card>
    )
}

const ErrorModal = ({title, message, onConfirm}) => {
    return (
      <React.Fragment>
      {ReactDOM.createPortal(
          <Backdrop onConfirm={onConfirm}/>,
          document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
          <ModalOverlay 
          title={title}
          message={message}
          onConfirm={onConfirm}
          />,
          document.getElementById('overlay-root')
      )}
      </React.Fragment>
    );
};

export default ErrorModal;