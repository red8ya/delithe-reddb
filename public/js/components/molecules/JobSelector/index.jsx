import React from 'react';
import styles from './styles.scss';

const JobSelector = ({jobs, value, onChange, className}) => (
  <select className={`${styles.jobSelect} ${className || ''}`} onChange={onChange} value={value}>
    {jobs.map(job => (
      <option key={`job_${job.key}`} value={job.key}>
        {job.name}
      </option>
    ))}
  </select>
);

export default JobSelector;
