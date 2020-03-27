import React from 'react';
import SinglePane from '../../templates/SinglePane';
import Window from '../../molecules/Window';
import styles from './styles.scss';

const About = () => {
  return (
    <SinglePane>
      <Window title="このWebサイトについて" className={styles.window}>
        <p>赤い辞書はiOS/Androidのゲーム「<a href="https://delithe.jp">De:Lithe (ディライズ)</a>」の非公式データベースサイトです。</p>
        <p>このサイトの運営は個人ゲームプレイヤーによって行われており、掲載されている情報の正確性は保証されていません。また、運用においてゲーム運営会社である「株式会社エニッシュ」は一切関与しておりません。ご注意ください。</p>
        <p>このWebサイトの利用は無料ですが、情報の再利用については知的財産権へのご留意をお願いします。</p>

        <h3>開発について</h3>

          <p><a href="https://github.com/red8ya/delithe-reddb"><img className={styles.github} src="/images/github.png" alt="GitHub" title="GitHub" /></a>で開発を行っています。不具合や機能改善の要望などは<a href="https://github.com/red8ya/delithe-reddb/issues/new/choose">Issue</a>にて報告をお願いします。</p>

        <p><a href="https://github.com/red8ya/delithe-reddb">https://github.com/red8ya/delithe-reddb</a></p>

        <h3>運営者</h3>
        <a href="https://twitter.com/red8ya">ハチヤ</a> (E-mail: hachiya.reddb@gmail.com)
      </Window>
    </SinglePane>
  );
};

export default About;
