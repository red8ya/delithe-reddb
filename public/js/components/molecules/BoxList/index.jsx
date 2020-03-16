import React from 'react';
import styles from './styles.scss';

const BoxList = ({children}) => (
  <div className={styles.boxlist}>
    {children}
  </div>
);

export default BoxList;
