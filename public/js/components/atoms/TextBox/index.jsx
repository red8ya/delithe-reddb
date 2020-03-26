import React from 'react';
import styles from './styles.scss';

const TextBox = ({value, placeholder, onChange}) => (
  <input className={styles.textbox} type="text" placeholder={placeholder} value={value} onChange={onChange} />
);

export default TextBox;
