import React from 'react';
import Skill from '../../molecules/Skill';
import Border from '../../atoms/Border';
import styles from './styles.scss';

const SkillRow = ({skills, prevSkills, onUpdate}) => (
  <div>
    {(() => (
      skills.map((skill, x) => {
        const canToggle = skill && (skill.canAcquire || skill.canUnacquire);
        const onClick = () => {
          if (onUpdate && canToggle) {
            onUpdate(skill, x);
          }
        };
        return (
          <div key={`skill_row_${x}`} className={styles.skill}>
            <Skill {...skill} canToggle={canToggle} onClick={onClick} />
            {skill && skill.required && skill.required.map(requiredIdx => {
              const direction = x < requiredIdx ? 'up' : x > requiredIdx ? 'down' : '';
              const status = skill.isActive && prevSkills[requiredIdx].isActive ? 'on'
                : skill.canAcquire && prevSkills[requiredIdx].isActive ? 'active'
                : 'off';
              return (
                <Border key={`skill_border_${x}_${requiredIdx}`} status={status} direction={direction} />
              );
            })}
          </div>
        );
      })
    ))()}
  </div>
);

export default SkillRow;
