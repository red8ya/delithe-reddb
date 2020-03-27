import React from 'react';
import styles from './styles.scss';

const ButtonGroup = ({className, children}) => (
  <div className={`${styles.buttonGroup} ${className || ''}`}>
    {children}
  </div>
);

export default ButtonGroup;
