import React from 'react';
import styles from './styles.scss';

const GlobalHeader = ({className, children}) => (
  <div className={`${styles.globalHeader} ${className || ''}`}>
    <div className={styles.sitename}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="De:Lithe" />
      </div>
      <span>の赤い辞書</span>
    </div>
    {children}
  </div>
);

export default GlobalHeader;
