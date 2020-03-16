import React from 'react';
import styles from './styles.scss';

const Cp = ({value}) => (
  <div className={styles.cp}>{value.toLocaleString()}</div>
);

export default Cp;
