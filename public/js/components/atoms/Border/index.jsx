import React from 'react';
import styles from './styles.scss';

const Border = ({status, direction}) => {
  return (
    <div className={`${styles.border} ${styles[status] || ''} ${styles[direction] || ''}`}>
      <div className={styles.borderInner}>
        <div className={styles.light}>
          <div className={styles.lightInner}></div>
        </div>
      </div>
    </div>
  );
};

export default Border;
