import React from 'react';
import { Link } from 'react-router5'
import styles from './styles.scss';

const AboutButton = () => (
  <div className={styles.aboutButton}>
    <Link routeName="about">
      <span className="fas fa-question-circle"></span>
    </Link>
  </div>
);

export default AboutButton;
