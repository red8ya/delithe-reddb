import React from 'react';
import styles from './styles.scss';

const SinglePane = ({children}) => (
  <div className={styles.page}>
    <div className={styles.header}>
      {children[0]}
    </div>
    <div className={styles.main}>
      {React.Children.toArray(children).slice(1)}
    </div>
  </div>
);

export default SinglePane;
