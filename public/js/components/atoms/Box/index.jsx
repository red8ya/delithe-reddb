import React from 'react';
import styles from './styles.scss';

const Box = ({active, className, onClick, children}) => {
  let classNames = [styles.box];
  if (className) {
    classNames.push(className);
  }
  if (active) {
    classNames.push(styles.active);
  }
  return (
    <div className={classNames.join(' ')} onClick={onClick}>
      {children}
    </div>
  );
};

export default Box;
