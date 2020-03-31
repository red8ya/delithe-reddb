import React from 'react';
import styles from './styles.scss';

const Arrow = ({direction = 'up', className}) => (
  <span className={`${styles.arrowContainer} ${styles[direction]} ${className || ''}`}>
    <span className={styles.arrow1}></span>
    <span className={styles.arrow2}></span>
  </span>
);

export default Arrow;
