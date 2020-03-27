import React from 'react';
import Box from '../../atoms/Box';
import X from '../../atoms/X';
import styles from './styles.scss';

const Window = ({title, isModal, isOpen = true, onClose, className, children}) => (
  <div className={`${styles.container} ${isModal && styles.modal} ${isOpen ? '' : styles.hidden}`}>
    <Box className={`${styles.window} ${className || ''}`}>
      <div className={styles.title}>
        {title}
        <div onClick={onClose} className={styles.closeButton} style={isModal ? null : {display: 'none'}}>
          <X width='20px' height='20px' />
        </div>
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </Box>
    {isModal && <div onClick={onClose} className={styles.cover}></div>}
  </div>
);

export default Window;
