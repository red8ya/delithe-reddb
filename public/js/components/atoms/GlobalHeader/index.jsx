import React from 'react';
import { Link } from 'react-router5';
import styles from './styles.scss';

const GlobalHeader = ({className, children}) => (
  <div className={`${styles.globalHeader} ${className || ''}`}>
    <Link routeName="home">
      <div className={styles.sitename}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="De:Lithe" />
        </div>
        <span>の赤い辞書</span>
      </div>
    </Link>
    <div className={styles.icons}>
      {children}
    </div>
  </div>
);

export default GlobalHeader;
