import React from 'react';
import Header from '../../atoms/Header';
import Lv from '../../atoms/Lv';
import Cp from '../../atoms/Cp';
import Window from '../../molecules/Window';
import ChapterNumberBox from '../../molecules/ChapterNumberBox';
import { findAnimaByName } from '../../../data/anima';
import equipments from '../../../../data/equipments.yaml';
import styles from './styles.scss';

const miscItems = ['^メテオライト$', '^古の種火$', '^レムナンタイトの欠片$', 'の宝珠の欠片$', '^武器・防具$', '^ビーン$', '^ルーン$', '^[星月]の砂$'];

const StageDetail = ({name, cp, monsters = [], items = [], chapter, episode, isOpen = true, onClose}) => {
  const lowestLv = Math.min(...monsters.map(monster => monster.lv));
  const highestLv = Math.max(...monsters.map(monster => monster.lv));

  const categories = Array.from(new Set(monsters.map(monster => monster.category)));
  let normalMonsters = [], eliteMonsters = [], bossMonsters = [];
  monsters.forEach(monster => {
    (monster.type === 'ボス' ? bossMonsters
      : monster.type === 'エリート' ? eliteMonsters
      : normalMonsters).push(monster);
  });

  let mainItems = [], animaItems = [], otherItems = [];
  items.forEach(item => {
    const anima = findAnimaByName(item);
    if (anima) {
      animaItems.push(anima);
    }
    else if (!miscItems.find(i => item.match(i))) {
      mainItems.push(item);
    }
    else {
      otherItems.push(item);
    }
  });
  return (
    <Window title={`${chapter ? '\u00A0'.repeat(9) : ''}${episode.name} ${name}`} isModal={true} isOpen={isOpen} onClose={onClose}>
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
          <Lv value={lowestLv} to={highestLv} /> <span className={styles.categories}>({categories.join(', ')})</span>
        </div>
      </div>
      <div className={styles.layoutContainer}>
        <div className={styles.monsters}>
          {bossMonsters.length !== 0 && (
            <div className={styles.section}>
              <Header>ボスモンスター</Header>
              {bossMonsters.map(monster => {
                const {name, lv, category} = monster;
                return (
                  <div key={name}>
                    <span>{name}</span> <Lv className={styles.lv} value={lv} /> ({category})
                  </div>
                );
              })}
            </div>)}
          {eliteMonsters.length !== 0 && (
            <div className={styles.section}>
              <Header>エリートモンスター</Header>
              {eliteMonsters.map(monster => {
                const {name, lv, category} = monster;
                return (
                  <div key={name}>
                    <span>{name}</span> <Lv className={styles.lv} value={lv} /> ({category})
                  </div>
                );
              })}
            </div>)}
          {normalMonsters.length !== 0 && (
            <div className={styles.section}>
              <Header>ノーマルモンスター</Header>
              {normalMonsters.map(monster => {
                const {name, lv, category} = monster;
                return (
                  <div key={name}>
                    <span>{name}</span> <Lv className={styles.lv} value={lv} /> ({category})
                  </div>
                );
              })}
            </div>)}
        </div>
        <div className={styles.items}>
          {animaItems.length !== 0 && (
            <div className={styles.section}>
              {animaItems.length !== 0 && <Header>アニマ</Header>}
              {animaItems.map(anima => {
                const {name, status} = anima;
                return (
                  <div key={name}>
                    <span>{name} ({status})</span>
                  </div>
                );
              })}
            </div>)}
          {mainItems.length !== 0 && (
            <div className={styles.section}>
              <Header>レア報酬</Header>
              {mainItems.map(name => {
                return (
                  <div key={name}>
                    <span>{`${name}${equipments[name] ? ` (${equipments[name].part})` : ''}`}</span>
                  </div>
                );
              })}
            </div>)}
          {otherItems.length !== 0 && (
            <div className={styles.section}>
              <Header>報酬</Header>
              {otherItems.map(name => {
                return (
                  <div key={name}>
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>)}
        </div>
      </div>
    </Window>
  );
};

export default StageDetail;
