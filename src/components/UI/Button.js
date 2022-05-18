import React from "react";
import styles from './Button.module.css';

const Button = ({ type, onKlik, children }) => {
    return (
        <div
            className={styles.button}
            type={type || 'button'}
            onClick={onKlik}
        >
            {children}
        </div>
    )
}

export default Button;
