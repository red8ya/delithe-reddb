import React from 'react';
import styles from './styles.scss';

const TextBox = ({value, placeholder}) => (
  <input className={styles.textbox} type="text" placeholder={placeholder} defaultValue={value} />
);

export default TextBox;
