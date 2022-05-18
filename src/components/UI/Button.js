import React from "react";
import styles from './Button.module.css';

const Button = ({ type, onKlik, children }) => {
    return (
        <button
            className={styles.button}
            type={type || 'button'}
            onClick={onKlik}
        >
            {children}
        </button>
    )
}

export default Button;

