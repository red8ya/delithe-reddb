import React from 'react';
import SkillRow from '../SkillRow';
import { setQueryString } from '../../../query';
import styles from './styles.scss';

const encodeState = (state) => {
  return parseInt(state.slice(1).map(row => row.map(x => x ? "1" : "0").join('')).join(''), 2);
};

const onUpdate = (job, data, x, y) => {
  const newData = data.slice();
  newData[x][y] = !newData[x][y];
  const query = { job };
  const newEncodedState = encodeState(newData);
  if (newEncodedState !== 0) {
    query.d = newEncodedState;
  }
  setQueryString(query);
};

const SkillTree = ({job, skills, data, jp, jpCap}) => {
  const skillRows = skills.slice();
  skillRows.forEach((skillRow, x) => {
    skillRow.forEach((skill, y) => {
      if (skill) {
        const isDefault = x === 0;
        const isActive = isDefault || data[x][y];
        const canAcquire = !isActive && skill.required && skill.required.some(i => data[x-1][i]) && skill.jp + jp <= jpCap;
        Object.assign(skill, { isActive, isDefault, canAcquire });
      }
    });
  });
  skillRows.forEach((skillRow, x) => {
    const isLastRow = x + 1 === skillRows.length;
    skillRow.forEach((skill, y) => {
      if (skill) {
        const { isActive, isDefault } = skill;
        const canUnacquire = isActive && !isDefault && (isLastRow ||
          skillRows[x+1].filter(nextSkill => nextSkill).every(nextSkill => (
            nextSkill.required.indexOf(y) === -1 || (
              nextSkill.required.length === 1
              ? !nextSkill.isActive
              : !nextSkill.isActive || nextSkill.required.filter(j => j !== y).some(j => skillRow[j].isActive)
            )
          ))
        );
        Object.assign(skill, { canUnacquire });
      }
    });
  });
  return (
    <div className={styles.container}>
      {skillRows.map((skillRow, x) => {
        return (
          <div key={`skill_tree_row_${x}`} className={styles.row}>
            <SkillRow skills={skillRow} prevSkills={x !== 0 && skillRows[x-1]} onUpdate={(skill, y) => onUpdate(job, data, x, y)} jpCap={jpCap} />
          </div>
        );
      })}
    </div>
  );
};

export default SkillTree;
