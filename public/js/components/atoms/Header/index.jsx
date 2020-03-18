import React from 'react';
import styles from './styles.scss';

const Header = ({children}) => (
  <div className={styles.header}>
    <img src="/images/header-icon.png" />
    {children}
  </div>
);

export default Header;
