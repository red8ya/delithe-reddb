import React from 'react';
import SkillTree from '../../organisms/SkillTree';
import JobSelector from '../../molecules/JobSelector';
import Header from '../../atoms/Header';
import Button from '../../atoms/Button';
import { jobs, jobNames, skills } from '../../../data/skills';
import { setQueryString } from '../../../query';
import styles from './styles.scss';

const availableJp = [
  0, // 1
  4,
  9,
  13,
  16,
  18,
  21,
  21,
  24,
  27, // 10
  29,
  30,
  33,
  35,
  38,
  40,
  40,
  42,
  45,
  48, // 20
  50,
  54,
  57,
  59,
  63,
  65,
  65,
  68,
  70,
  73, // 30
  76,
  80,
  83,
  85,
  88,
  91,
  91,
  93,
  97,
  99, // 40
  100,
  102,
  104,
  108,
  108,
  111,
  113,
  116,
  119,
  123, // 50
  123,
  127,
  130,
  132,
  133,
  137,
  140,
  142,
  143,
  146, // 60
  150,
  153,
  154,
  156,
  159,
  161,
  164,
  164,
  168,
  169, // 70
  172,
  172,
  176,
  178,
  183,
  187,
  188,
  192,
  195,
  197, // 80
  200,
  204,
  207,
  210,
  210,
  213,
  217,
  220,
  223,
  228, // 90
  231,
  233,
  235,
  238,
  238,
  239,
  241,
  243,
  246,
  250, // 100
  253,
  256,
  256,
  257,
  257,
  259,
  262,
  264,
  264,
  266, // 110
  269,
  272,
  274,
  274,
  277,
  279,
  283,
  285,
  285,
  288, // 120
  288,
  291,
  294,
  294,
  297,
  297,
  300,
  300,
  300,
  302, // 130
  306,
  308,
  309,
  311,
  313,
  317,
  317,
  320,
  322,
  325, // 140
  327,
  328,
  328,
  329,
  329,
  331,
  334,
  336,
  336,
  337, // 150
  340,
  342,
  344,
  344,
  347,
  349,
  353,
  355,
  355,
  357, // 160
  357,
  359,
  361,
  361,
  362,
  362,
  365,
  365,
  365,
  366, // 170
  369,
  371,
  372,
  373,
  375,
  379,
  379,
  381,
  382,
  385, // 180
  387,
  387,
  391,
  393,
  396,
  400,
  400,
  402,
  404,
  409, // 190
  411,
  413,
  416,
  418,
  418,
  421,
  425,
  425,
  426,
  430, // 200
  433,
  435,
  435,
  438,
  439,
  444,
  446,
  447,
  447,
  451, // 210
  451,
  453,
  454,
  454,
  458,
  458,
  461,
  463,
  466,
  470, // 220
];

const jpCap = 470;

const decodeState = (state, job) => {
  let stateDecoded = parseInt(state).toString(2);
  stateDecoded = "0".repeat(Math.ceil(stateDecoded.length / 3) * 3 - stateDecoded.length) + stateDecoded;
  stateDecoded = stateDecoded + "0".repeat(Math.max(0, (skills[job].length - 1) * 3 - stateDecoded.length));
  const digitsCount = (skills[job].length - 1) * 3;
  if (digitsCount < stateDecoded.length) {
    console.warn(`${stateDecoded} (${stateDecoded.length}) is too long. Truncate in ${digitsCount} digits.`);
    stateDecoded = stateDecoded.slice(0, digitsCount);
  }

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

  const knownJpCap = availableJp[availableJp.length-1];
  let lv = 1;
  if (knownJpCap < jp) {
    lv = null;
  }
  else {
    availableJp.forEach(n => {
      if (n < jp) {
        ++lv;
      }
    });
  }

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
          className={styles.selector}
          jobs={jobs.map(key => { return { key, name: jobNames[key] } })}
          value={job}
          onChange={e => onSelectJob(e.target.value)} />
        <div className={styles.jp}>JP: {jp}</div>
        <div className={styles.jp}>Lv: {lv || '???'}</div>
        {/* <Button className={styles.home}><a href="/"><span className="fas fa-home"></span></a></Button> */}
      </div>
      <div className={styles.main}>
        <SkillTree job={job} skills={skills[job]} data={dataDecoded} jp={jp} jpCap={jpCap} />
      </div>
    </div>
  );
};

export default SkillSimulator;
