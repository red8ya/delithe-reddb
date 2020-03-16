import React, { useState } from 'react';
import LayoutBox from '../../molecules/LayoutBox';
import styles from './styles.scss';
import arrowUp from '../../../../images/arrow-up.png';
import arrowDown from '../../../../images/arrow-down.png';

const Folder = ({text, hidden = true, children}) => {
  const [isFolded, setIsFolded] = useState(hidden);

  const onClick = () => {
    setIsFolded(!isFolded);
  };

  let classNames = [styles.content];
  if (isFolded) {
    classNames.push(styles.hidden);
  }

  return (
    <div className={styles.folder}>
      <LayoutBox icon={isFolded ? arrowDown : arrowUp} active={!isFolded} onClick={onClick}>{text}</LayoutBox>
      <div className={classNames.join(' ')}>
        {children}
      </div>
    </div>
  );
};

export default Folder;
