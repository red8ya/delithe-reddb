import React, { useState } from 'react';
import LayoutBox from '../../molecules/LayoutBox';
import Arrow from '../../atoms/Arrow';
import styles from './styles.scss';

const Folder = ({text, right, hidden = true, children}) => {
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
      <LayoutBox icon={<Arrow direction={isFolded ? 'down' : 'up'} className={styles.arrow} />} active={!isFolded} onClick={onClick}>{text}{right}</LayoutBox>
      <div className={classNames.join(' ')}>
        {children}
      </div>
    </div>
  );
};

export default Folder;
