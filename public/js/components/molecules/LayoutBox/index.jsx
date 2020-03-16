import React from 'react';
import Box from '../../atoms/Box';
import styles from './styles.scss';

const LayoutBox = ({icon, children, ...attrs}) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <Box {...attrs}>
      {icon ? <div className={styles.icon}><img src={icon} /></div> : null}
      {childrenArray.length <= 1 ? childrenArray : childrenArray.slice(0, -1)}
      {childrenArray.length <= 1 ? null : <div className={styles.right}>{childrenArray.slice(-1)}</div>}
    </Box>
  );
};

export default LayoutBox;
