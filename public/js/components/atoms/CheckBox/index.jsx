import React, { useState } from 'react';
import styles from './styles.scss';

const CheckBox = ({checked = false, onClick, children, ...args}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleClick = (e) => {
    setIsChecked(!isChecked);
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <div className={styles.checkboxContainer}>
      <label>
        <div className={`${styles.checkbox} ${isChecked ? styles.checked : ''}`}>
          <span className={`fas fa-check ${styles.checkIcon}`}></span>
          <input type="checkbox" defaultChecked={isChecked} onChange={handleClick} {...args} />
        </div>
        {children}
      </label>
    </div>
  );
};

export default CheckBox;
