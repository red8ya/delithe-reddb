import React from 'react';
import SkillTree from '../../organisms/SkillTree';
import JobSelector from '../../molecules/JobSelector';
import Header from '../../atoms/Header';
import Button from '../../atoms/Button';
import { setQueryString } from '../../../query';
import styles from './styles.scss';

const skills = {
  knight: [
    [null, {name: "スラッシュ", type: "active"}, null],
    [{name: "スタンバッシュ", jp: 5, type: "active", required: [1]}, {name: "物防アップ", jp: 8, type: "passive", required: [1]}, {name: "レイザースラッシュ", jp: 6, type: "active", required: [1]}],
    [{name: "物防アップ", jp: 15, type: "passive", required: [1]}, {name: "タウント", jp: 24, type: "active", required: [1]}, {name: "物攻アップ", jp: 15, type: "passive", required: [1]}],
    [{name: "ディヴォーション", jp: 20, type: "active", required: [0]}, {name: "物防アップ", jp: 10, type: "passive", required: [1]}, {name: "HPアップ", jp: 25, type: "passive", required: [2]}],
    [{name: "物攻アップ", jp: 22, type: "passive", required: [0]}, {name: "物攻アップ", jp: 21, type: "passive", required: [0, 2]}, {name: "イリテイション", jp: 18, type: "active", required: [2]}],
    [{name: "魔防アップ", jp: 32, type: "passive", required: [1]}, {name: "プロヴィデンス", jp: 30, type: "active", required: [1]}, {name: "ソードブレイク", jp: 16, type: "active", required: [1]}],
    [{name: "ウォークライ", jp: 36, type: "active", required: [0]}, {name: "HPアップ", jp: 32, type: "passive", required: [1]}, {name: "物防アップ", jp: 24, type: "passive", required: [2]}],
    [{name: "HPアップ", jp: 44, type: "passive", required: [0]}, {name: "プロボーグ", jp: 48, type: "active", required: [1]}, {name: "HPアップ", jp: 24, type: "passive", required: [1, 2]}],
    [null, {name: "物攻アップ", jp: 23, type: "passive", required: [0, 1, 2]}, null],
  ],
  bishop: [
    [null, {name: "ホーリーボール", type: "active"}, null],
    [{name: "物防アップ", jp: 26, type: "passive", required: [1]}, {name: "ヒール", jp: 8, type: "active", required: [1]}, {name: "魔防アップ", jp: 24, type: "passive", required: [1]}],
    [{name: "MPアップ", jp: 26, type: "passive", required: [1]}, {name: "魔防アップ", jp: 16, type: "passive", required: [1]}, {name: "MPアップ", jp: 10, type: "passive", required: [1]}],
    [{name: "物防アップ", jp: 14, type: "passive", required: [0]}, {name: "魔防アップ", jp: 22, type: "passive", required: [1]}, {name: "ヒールウィンド", jp: 21, type: "active", required: [2]}],
    [{name: "キュア", jp: 33, type: "active", required: [0]}, {name: "ディスオーダー", jp: 25, type: "active", required: [1]}, {name: "回魔アップ", jp: 34, type: "passive", required: [2]}],
    [{name: "エレメンタルレジスト", jp: 20, type: "active", required: [1]}, {name: "カームダウン", jp: 24, type: "active", required: [1]}, {name: "回魔アップ", jp: 36, type: "passive", required: [1]}],
    [{name: "全悪性状態異常耐性アップ", jp: 46, type: "passive", required: [1]}, {name: "回魔アップ", jp: 22, type: "passive", required: [1]}, {name: "マインドライズ", jp: 22, type: "active", required: [1]}],
    [{name: "MPアップ", jp: 24, type: "passive", required: [1]}, {name: "回魔アップ", jp: 22, type: "passive", required: [1]}, {name: "ブレスオブスピリット", jp: 30, type: "active", required: [1]}],
    [null, {name: "リザレクション", jp: 27, type: "active", required: [0]}, null],
  ],
  wizard: [
    [null, {name: "ファイアアロー", type: "active"}, null],
    [{name: "MPアップ", jp: 12, type: "passive", required: [1]}, null, {name: "ウォーターピラー", jp: 9, type: "active", required: [1]}],
    [{name: "マナドレイン", jp: 27, type: "active", required: [0]}, {name: "魔攻アップ", jp: 21, type: "passive", required: [0, 2]}, {name: "魔防アップ", jp: 12, type: "passive", required: [2]}],
    [null, {name: "魔攻アップ", jp: 18, type: "passive", required: [0, 2]}, {name: "リデュースパワー", jp: 24, type: "active", required: [2]}],
    [{name: "会心アップ", jp: 23, type: "passive", required: [1]}, {name: "レッサーヒール", jp: 20, type: "active", required: [1]}, {name: "魔攻アップ", jp: 30, type: "passive", required: [2]}],
    [{name: "MPアップ", jp: 27, type: "passive", required: [1]}, {name: "魔防アップ", jp: 20, type: "passive", required: [1]}, {name: "アイシクルエッジ", jp: 24, type: "active", required: [2]}],
    [{name: "ファイアーバード", jp: 28, type: "active", required: [1]}, {name: "魔防アップ", jp: 27, type: "passive", required: [1]}, {name: "MPアップ", jp: 28, type: "passive", required: [1]}],
    [{name: "水耐性アップ", jp: 22, type: "passive", required: [0]}, {name: "魔攻アップ", jp: 30, type: "passive", required: [1]}, {name: "フローズンノヴァ", jp: 34, type: "active", required: [2]}],
    [{name: "ダブルスペル", jp: 33, type: "active", required: [0]}, {name: "魔攻アップ", jp: 40, type: "passive", required: [1]}, {name: "マジックライズ", jp: 22, type: "active", required: [2]}],
  ],
  ranger: [
    [null, {name: "インパルス", type: "active"}, null],
    [{name: "ヒュプノストライク", jp: 11, type: "active", required: [1]}, {name: "シャドウスラスト", jp: 12, type: "active", required: [1]}, {name: "サンダースラスト", jp: 13, type: "active", required: [1]}],
    [{name: "リデュースマインド", jp: 24, type: "active", required: [0]}, {name: "物攻アップ", jp: 20, type: "passive", required: [1]}, {name: "回避アップ", jp: 24, type: "passive", required: [2]}],
    [{name: "物攻アップ", jp: 14, type: "passive", required: [0]}, {name: "俊敏アップ", jp: 22, type: "passive", required: [0, 1, 2]}, {name: "命中アップ", jp: 23, type: "passive", required: [2]}],
    [null, {name: "雷属性攻撃力アップ", jp: 20, type: "passive", required: [1]}, {name: "アクセラレート", jp: 33, type: "active", required: [1]}],
    [{name: "モンスター討伐ルピアップ", jp: 44, type: "passive", required: [1]}, {name: "クイック", jp: 22, type: "active", required: [1]}, {name: "パラライズストライク", jp: 18, type: "active", required: [1]}],
    [{name: "物攻アップ", jp: 25, type: "passive", required: [1]}, {name: "雷耐性アップ", jp: 27, type: "passive", required: [1]}, {name: "会心アップ", jp: 25, type: "passive", required: [2]}],
    [{name: "ヴェノムストライク", jp: 29, type: "active", required: [1]}, {name: "コンセントレイト", jp: 30, type: "active", required: [1]}, null],
    [{name: "俊敏アップ", jp: 36, type: "passive", required: [0]}, {name: "物攻アップ", jp: 38, type: "passive", required: [1]}, null],
    [null, {name: "会心アップ", jp: 22, type: "passive", required: [0, 1]}, null],
  ],
  runeknight: [
    [null, {name: "フォーススラッシュ", type: "active"}, null],
    [{name: "エリアルバスター", jp: 10, type: "active", required: [1]}, {name: "魔攻アップ", jp: 21, type: "passive", required: [1]}, {name: "グランドバスター", jp: 12, type: "active", required: [1]}],
    [null, {name: "全属性攻撃力アップ", jp: 22, type: "passive", required: [0]}, {name: "MPアップ", jp: 14, type: "passive", required: [2]}],
    [{name: "パワーライズ", jp: 25, type: "active", required: [1]}, {name: "物攻アップ", jp: 25, type: "passive", required: [1]}, {name: "魔防アップ", jp: 18, type: "passive", required: [1]}],
    [{name: "MPアップ", jp: 30, type: "passive", required: [0]}, null, {name: "スペルリフレクター", jp: 35, type: "active", required: [2]}],
    [{name: "雷属性攻撃力アップ", jp: 15, type: "passive", required: [0]}, {name: "スプラッシュバスター", jp: 18, type: "active", required: [0, 2]}, {name: "クリムゾンバスター", jp: 18, type: "active", required: [2]}],
    [{name: "ライジングバスター", jp: 24, type: "active", required: [0]}, {name: "魔防アップ", jp: 30, type: "passive", required: [1]}, {name: "HPアップ", jp: 23, type: "passive", required: [2]}],
    [{name: "リデュースマジック", jp: 32, type: "active", required: [0]}, {name: "魔攻アップ", jp: 32, type: "passive", required: [1]}, {name: "物攻アップ", jp: 32, type: "passive", required: [2]}],
    [{name: "アストラルバーン", jp: 33, type: "active", required: [1]}, {name: "全属性攻撃力アップ", jp: 24, type: "passive", required: [1]}, {name: "HPアップ", jp: 33, type: "passive", required: [2]}],
  ],
  paladin: [
    [null, {name: "スマッシュ", type: "active"}, null],
    [{name: "魔防アップ", jp: 10, type: "passive", required: [1]}, {name: "物防アップ", jp: 11, type: "passive", required: [1]}, {name: "リストレーション", jp: 12, type: "active", required: [1]}],
    [{name: "シールドインパクト", jp: 21, type: "active", required: [0]}, {name: "HPアップ", jp: 27, type: "passive", required: [1]}, {name: "物防アップ", jp: 20, type: "passive", required: [2]}],
    [{name: "ディバインオーラ", jp: 28, type: "active", required: [0]}, {name: "パリィスタンス", jp: 26, type: "active", required: [0, 1]}, null],
    [{name: "ランパート", jp: 26, type: "active", required: [1]}, {name: "リベンジシールド", jp: 28, type: "active", required: [1]}, {name: "魔防アップ", jp: 24, type: "passive", required: [1]}],
    [{name: "物防アップ", jp: 18, type: "passive", required: [0]}, {name: "センチュリオン", jp: 32, type: "active", required: [1]}, {name: "魔防アップ", jp: 25, type: "passive", required: [2]}],
    [{name: "HPアップ", jp: 38, type: "passive", required: [0]}, {name: "魔防アップ", jp: 24, type: "passive", required: [1]}, {name: "回避アップ", jp: 18, type: "passive", required: [1]}],
    [{name: "物防アップ", jp: 20, type: "passive", required: [0, 1]}, {name: "フォートレス", jp: 30, type: "active", required: [2]}, {name: "オーガスイング", jp: 24, type: "active", required: [2]}],
    [null, {name: "HPアップ", jp: 27, type: "passive", required: [0, 1]}, {name: "HPアップ", jp: 42, type: "passive", required: [2]}],
  ],
  hermit: [
    [null, {name: "ブライトネス", type: "active"}, null],
    [{name: "ヒール", jp: 8, type: "active", required: [1]}, {name: "回魔アップ", jp: 21, type: "passive", required: [1]}, {name: "セイクリッドロウ", jp: 14, type: "active", required: [1]}],
    [{name: "回魔アップ", jp: 18, type: "passive", required: [0]}, null, {name: "ダークネス", jp: 22, type: "active", required: [2]}],
    [{name: "命中アップ", jp: 25, type: "passive", required: [0]}, {name: "詠唱時間短縮", jp: 14, type: "passive", required: [0, 2]}, null],
    [{name: "回魔アップ", jp: 26, type: "passive", required: [1]}, {name: "全悪性状態異常耐性アップ", jp: 28, type: "passive", required: [1]}, {name: "エレメンタルガード", jp: 24, type: "active", required: [1]}],
    [{name: "ヒールウィンド", jp: 26, type: "active", required: [0]}, {name: "ケイオスゲート", jp: 28, type: "active", required: [1]}, {name: "魔攻アップ", jp: 40, type: "passive", required: [2]}],
    [{name: "MPアップ", jp: 24, type: "passive", required: [0]}, {name: "魔攻アップ", jp: 30, type: "passive", required: [0, 2]}, {name: "魔攻アップ", jp: 28, type: "passive", required: [2]}],
    [{name: "MPアップ", jp: 26, type: "passive", required: [0]}, {name: "イルミナート", jp: 24, type: "active", required: [1]}, {name: "回避アップ", jp: 18, type: "passive", required: [1]}],
    [{name: "リザレクション", jp: 32, type: "active", required: [0]}, {name: "詠唱時間短縮", jp: 24, type: "passive", required: [1]}, {name: "ディスペル", jp: 30, type: "active", required: [2]}],
  ],
  minstrel: [
    [null, {name: "飛翔するクレフ", type: "active"}, null],
    [{name: "回魔アップ", jp: 12, type: "passive", required: [1]}, {name: "回魔アップ", jp: 24, type: "passive", required: [1]}, {name: "終局のパッサメッツォ", jp: 10, type: "active", required: [1]}],
    [{name: "癒しのエチュード", jp: 18, type: "active", required: [0]}, {name: "回避アップ", jp: 22, type: "passive", required: [0, 2]}, {name: "戦刃のヴィヴァーチェ", jp: 15, type: "active", required: [2]}],
    [{name: "護りと祈りのアンセム", jp: 26, type: "active", required: [0]}, {name: "暗闇のラメント", jp: 22, type: "active", required: [0, 2]}, null],
    [{name: "再生のカンタータ", jp: 22, type: "active", required: [1]}, {name: "英雄のフリューゲル", jp: 27, type: "active", required: [1]}, {name: "回避アップ", jp: 25, type: "passive", required: [1]}],
    [{name: "MPアップ", jp: 20, type: "passive", required: [0]}, {name: "物防アップ", jp: 26, type: "passive", required: [1]}, {name: "鎮静のリコルダンツァ", jp: 30, type: "active", required: [1]}],
    [{name: "全悪性状態異常耐性アップ", jp: 26, type: "passive", required: [0]}, {name: "魔防アップ", jp: 26, type: "passive", required: [1]}, null],
    [{name: "MPアップ", jp: 32, type: "passive", required: [0]}, {name: "回魔アップ", jp: 23, type: "passive", required: [1]}, {name: "命中アップ", jp: 35, type: "passive", required: [1]}],
    [{name: "城塞のパルティータ", jp: 36, type: "active", required: [0]}, null, {name: "回魔アップ", jp: 32, type: "passive", required: [2]}],
    [null, {name: "魔攻アップ", jp: 21, type: "passive", required: [0, 2]}, null],
  ],
};

const jobNames = {
  knight: "ナイト",
  bishop: "ビショップ",
  wizard: "ウィザード",
  ranger: "レンジャー",
  runeknight: "ルーンナイト",
  paladin: "パラディン",
  hermit: "ハーミット",
  minstrel: "ミンストレル",
};

const jobs = ['knight', 'bishop', 'wizard', 'ranger', 'runeknight', 'paladin', 'hermit', 'minstrel'];

const decodeState = (state, job) => {
  let stateDecoded = parseInt(state).toString(2);
  stateDecoded = "0".repeat(Math.ceil(stateDecoded.length / 3) * 3 - stateDecoded.length) + stateDecoded;
  stateDecoded = stateDecoded + "0".repeat((skills[job].length - 1) * 3 - stateDecoded.length);
  const rowCount = stateDecoded.length / 3;

  return (
    [[false, true, false]].concat(
      Array.from(new Array(rowCount).keys()).map(i => (
        stateDecoded.slice(i * 3, i * 3 + 3).split('').map(x => !!parseInt(x))
      ))
    )
  );
};

const SkillSimulator = ({initialQuery}) => {
  const job = initialQuery['job'] || jobs[0];
  const data = initialQuery['d'] || '0'; //"36513277";
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
