import React from 'react';
import LayoutBox from '../LayoutBox';
import Boss from '../../atoms/Boss';
import Lv from '../../atoms/Lv';
import styles from './styles.scss';

const Stage = ({name, cp, monsters, items, onClick}) => {
  const hasBoss = monsters.find(monster => monster.type === 'ボス');
  const lowestLv = Math.min(...monsters.map(monster => monster.lv));
  return (
    <LayoutBox onClick={onClick}>
      {name}
      <div className={styles.option}>
        {hasBoss ? <Boss /> : null}
        <Lv value={lowestLv} />
      </div>
    </LayoutBox>
  );
};

export default Stage;
