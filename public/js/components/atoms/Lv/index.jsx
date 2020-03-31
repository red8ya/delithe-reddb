import React from 'react';
import styles from './styles.scss';

const Lv = ({value, to, ...args}) => (
  <span {...args}>
    <span className={styles.lv}>Lv.</span>
    <span className={styles.num}>{value}</span>
    {(to && value !== to) && '〜'}
    {(to && value !== to) ? <span className={styles.num}>{to}</span> : null}
  </span>
);

export default Lv;
