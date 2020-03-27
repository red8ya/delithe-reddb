import React from 'react';
import styles from './styles.scss';

const GlobalFooter = () => (
  <div className={styles.footer}>
    <div className={styles.copyright}>Made and Operated by <a href="https://twitter.com/red8ya">ハチヤ</a> with <span className={`fas fa-heart ${styles.love}`}></span></div>
    <div className={styles.enish}>
      ゲーム内の画像、名称などの著作権、商標権、意匠は<br/>運営会社である「<a href="https://www.enish.jp/">株式会社enish</a>」に帰属します。
    </div>
  </div>
);

export default GlobalFooter;
