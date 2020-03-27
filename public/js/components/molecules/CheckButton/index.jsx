import React, { useState } from 'react';
import styles from './styles.scss';

let lastId = 0;
const newId = () => `check_button_${++lastId}`;

const CheckButton = ({active, name, value, children, onClick}) => {
  const [isActive, setIsActive] = useState(active);
  const handleClick = (e) => {
    setIsActive(!isActive);
    if (onClick) {
      onClick(e);
    }
  };
  const id = newId();
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={`${styles.checkButton} ${isActive ? styles.active : ''}`}>
        <div className={styles.left}></div>
        {children}
        <div className={styles.right}></div>
      </label>
      <input id={id} onChange={handleClick} style={{display: 'none'}} type="checkbox" name={name} value={value} defaultChecked={isActive} />
    </div>
  );
};

export default CheckButton;
