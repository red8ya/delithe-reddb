import React from 'react';
import Box from '../../atoms/Box';
import X from '../../atoms/X';
import styles from './styles.scss';

const Window = ({title, isModal, onClose, className, children}) => (
  <div className={`${styles.container} ${className || ''}`}>
    <Box className={`${styles.window} ${isModal && styles.modal}`}>
      <div className={styles.title}>
        {title}
        <div onClick={onClose} className={styles.closeButton}>
          <X width='20px' height='20px' />
        </div>
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </Box>
    {isModal && <div className={styles.cover}></div>}
  </div>
);

export default Window;
