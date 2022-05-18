import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from './ErrorModal.module.css';

const ErrorModal = ({ title, message, onConfirm }) => {
    return (
        <div className={styles.backdrop} onClick={onConfirm}>
            <Card cssClass={styles.modal}>
                <header
                    className={styles.header}>
                    <h2></h2>{title}
                </header>
                <div
                    className={styles.content}>
                    <p></p>{message}
                </div>
                <footer
                    className={styles.actions}>
                    <Button onKlik={onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal;