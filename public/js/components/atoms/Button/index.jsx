import React from 'react';
import styles from './styles.scss';

const Button = ({className, isWide, onClick, children}) => (
  <button className={`${styles.button} ${isWide ? styles.wide : ''} ${className || ''}`} onClick={onClick}>{children}</button>
);

export default Button;
