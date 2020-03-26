import React from 'react';
import GlobalHeader from '../../atoms/GlobalHeader';
import GlobalFooter from '../../atoms/GlobalFooter';
import styles from './styles.scss';

const SinglePane = ({children}) => (
  <div className={styles.page}>
    <div className={styles.header}>
      <GlobalHeader />
    </div>
    <div className={styles.main}>{children}</div>
    <GlobalFooter />
  </div>
);

export default SinglePane;
