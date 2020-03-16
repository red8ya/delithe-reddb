import React from 'react';
import styles from './styles.scss';

const X = ({width = '100%', height = '100%'}) => (
  <div className={styles.x} style={{width, height}}>
    <span></span>
  </div>
);

export default X;
