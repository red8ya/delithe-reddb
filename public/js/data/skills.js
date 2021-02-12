import knight from '../../data/skills/knight.yaml';
import bishop from '../../data/skills/bishop.yaml';
import wizard from '../../data/skills/wizard.yaml';
import ranger from '../../data/skills/ranger.yaml';
import runeknight from '../../data/skills/runeknight.yaml';
import paladin from '../../data/skills/paladin.yaml';
import hermit from '../../data/skills/hermit.yaml';
import darkblade from '../../data/skills/darkblade.yaml';
import minstrel from '../../data/skills/minstrel.yaml';

export const jobNames = {
  knight: "ナイト",
  bishop: "ビショップ",
  wizard: "ウィザード",
  ranger: "レンジャー",
  runeknight: "ルーンナイト",
  paladin: "パラディン",
  hermit: "ハーミット",
  darkblade: "ダークブレイド",
  minstrel: "ミンストレル",
};

export const jobs = ['knight', 'bishop', 'wizard', 'ranger', 'runeknight', 'paladin', 'hermit', 'darkblade', 'minstrel'];

export const skills = { knight, bishop, wizard, ranger, runeknight, paladin, hermit, darkblade, minstrel };

export default skills;
