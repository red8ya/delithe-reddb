import React from 'react';
import Header from '../../atoms/Header';
import Lv from '../../atoms/Lv';
import Cp from '../../atoms/Cp';
import Window from '../../molecules/Window';
import ChapterNumberBox from '../../molecules/ChapterNumberBox';
import { findAnimaByName } from '../../../data/anima';
import styles from './styles.scss';

const StageDetail = ({name, cp, monsters = [], items = [], chapter, episode, onClose}) => {
  const hasBoss = monsters.find(monster => monster.type === 'ボス');
  const lowestLv = Math.min(...monsters.map(monster => monster.lv));
  const highestLv = Math.max(...monsters.map(monster => monster.lv));
  return (
    <Window title={`${chapter ? '\u00A0'.repeat(9) : ''}${episode.name} ${name}`} isModal={true} onClose={onClose}>
      {chapter && (
        <div className={styles.chapter}>
          <ChapterNumberBox number={chapter} />
        </div>
      )}
      <div className={styles.layoutContainer}>
        <div className={styles.cp}>
          推奨戦闘力 <Cp value={cp} />
        </div>
        <div className={styles.levels}>
          <Lv value={lowestLv} to={highestLv} />
        </div>
      </div>
      <div className={styles.layoutContainer}>
        <div className={styles.monsters}>
          <Header>出現モンスター</Header>
          {monsters.map(monster => {
            const {name, lv, category, type} = monster;
            return (
              <div key={name}>
                <span>{name}</span> <Lv value={lv} /> ({category}{type})
              </div>
            );
          })}
        </div>
        <div className={styles.items}>
          <Header>報酬</Header>
          {items.map(name => {
            const anima = findAnimaByName(name);
            return (
              <div key={name}>
                <span>{name}{anima ? ` (${anima.status})` : ''}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Window>
  );
};

export default StageDetail;
