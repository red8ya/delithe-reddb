import React from 'react';
import styles from './styles.scss';

const TextBox = ({name, value, placeholder, onChange}) => (
  <input className={styles.textbox} type="text" placeholder={placeholder} name={name} defaultValue={value} onChange={onChange} />
);

export default TextBox;
