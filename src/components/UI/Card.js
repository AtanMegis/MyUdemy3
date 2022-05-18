import React from "react";
import styles from './Card.module.css';

const Card = ({children, cssClass}) => {
    return (
    <div className={`${styles.card} ${cssClass}`}>{children}</div>
    )
}

export default Card;