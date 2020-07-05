import React from 'react';
import styles from './styles.scss';

const typeNames = { passive: "パッシブ", active: "アクティブ" };

const Skill = ({icon, name, jp, type, isActive, canToggle, onClick}) => (
  <div className={styles.container} onClick={onClick}>
    <div className={`${styles.skill} ${name ? '' : styles.empty} ${isActive ? styles.active : ''} ${canToggle ? styles.canToggle : ''}`}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.name}>{name}</div>
      {jp && <div className={styles.jp}>JP <span className={styles.jpPoint}>{jp}</span></div>}
      {type && <div className={`${styles.type} ${styles[type]}`}>{typeNames[type]}</div>}
    </div>
    {name && <div className={styles.background}></div>}
  </div>
);

export default Skill;
