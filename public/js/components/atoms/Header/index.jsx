import React from 'react';
import styles from './styles.scss';

const HeaderIcon = () => (
  <span className={styles.headerIcon}>
    <span className={styles.border1}></span>
    <span className={styles.border2}></span>
    <span className={styles.border3}></span>
    <span className={styles.border4}></span>
  </span>
);

const Header = ({children}) => (
  <div className={styles.header}>
    <HeaderIcon />
    {children}
  </div>
);

export default Header;
