import React from 'react';
import Box from '../../atoms/Box';
import styles from './styles.scss';

const ChapterNumberBox = ({number}) => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <span className={styles.number}>{number}</span>
    </div>
    <Box className={styles.box}></Box>
  </div>
);

export default ChapterNumberBox;
