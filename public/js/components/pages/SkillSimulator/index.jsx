import React from 'react';
import SkillTree from '../../organisms/SkillTree';
import JobSelector from '../../molecules/JobSelector';
import Header from '../../atoms/Header';
import Button from '../../atoms/Button';
import { jobs, jobNames, skills } from '../../../data/skills';
import { setQueryString } from '../../../query';
import styles from './styles.scss';

const decodeState = (state, job) => {
  let stateDecoded = parseInt(state).toString(2);
  stateDecoded = "0".repeat(Math.ceil(stateDecoded.length / 3) * 3 - stateDecoded.length) + stateDecoded;
  stateDecoded = stateDecoded + "0".repeat((skills[job].length - 1) * 3 - stateDecoded.length);
  const rowCount = stateDecoded.length / 3;

  return (
    [skills[job][0].map(x => !!x)].concat(
      Array.from(new Array(rowCount).keys()).map(i => (
        stateDecoded.slice(i * 3, i * 3 + 3).split('').map(x => !!parseInt(x))
      ))
    )
  );
};

const SkillSimulator = ({initialQuery}) => {
  const job = skills[initialQuery['job']] ? initialQuery['job'] : jobs[0];
  const data = initialQuery['d'] || '0';
  const dataDecoded = decodeState(data, job);
  skills[job][0].forEach((skill, i) => {
    if (skill) {
      dataDecoded[0][i] = true;
    }
  });
  const jp = dataDecoded.reduce((acc, row, i) => acc + row.reduce((acc, x, j) => acc + (x && skills[job][i][j] && skills[job][i][j].jp) || 0, 0), 0);

  const onSelectJob = (newJob) => {
    if (newJob !== job) {
      setQueryString({ job: newJob });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header className={styles.title}>スキルシミュレータ</Header>
        <JobSelector
          jobs={jobs.map(key => { return { key, name: jobNames[key] } })}
          value={job}
          onChange={e => onSelectJob(e.target.value)} />
        <div className={styles.jp}>必要JP: {jp}</div>
        {/* <Button className={styles.home}><a href="/"><span className="fas fa-home"></span></a></Button> */}
      </div>
      <div className={styles.main}>
        <SkillTree job={job} skills={skills[job]} data={dataDecoded} jp={jp} />
      </div>
    </div>
  );
};

export default SkillSimulator;
