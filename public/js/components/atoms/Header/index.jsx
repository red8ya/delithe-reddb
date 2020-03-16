import React from 'react';
import headerIcon from '../../../../images/header-icon.png';
import styles from './styles.scss';

const Header = ({children}) => (
  <div className={styles.header}>
    <img src={headerIcon} />
    {children}
  </div>
);

export default Header;
