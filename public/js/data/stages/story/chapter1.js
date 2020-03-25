import info from '../../../../data/stages/story/chapter1/info.yaml';
import episodes1 from '../../../../data/stages/story/chapter1/episode1/stages.yaml';
import monsters1 from '../../../../data/stages/story/chapter1/episode1/monsters.yaml';
import { mergeMonsters } from '../../utils';

const episodes = episodes1.map(episode => (
  Object.assign(episode, {
    stages: episode.stages.map(stage => mergeMonsters(stage, monsters1))
  })
));

const chapter = Object.assign(info, { episodes })

export default chapter;
