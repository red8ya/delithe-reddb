import React from 'react';
import styles from './styles.scss';

const Fraction = ({num, denom}) => (
  <div className={styles.fraction}>
    <span className={styles.numerator}>{num}</span>
    <span className={styles.denominator}>/ {denom}</span>
  </div>
);

export default Fraction;
