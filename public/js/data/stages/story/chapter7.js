import info from '../../../../data/stages/story/chapter7/info.yaml';
import episode1Stages from '../../../../data/stages/story/chapter7/episode1/stages.yaml';
import episode2Stages from '../../../../data/stages/story/chapter7/episode2/stages.yaml';
import episode3Stages from '../../../../data/stages/story/chapter7/episode3/stages.yaml';
import episode4Stages from '../../../../data/stages/story/chapter7/episode4/stages.yaml';
import episode1Monsters from '../../../../data/stages/story/chapter7/episode1/monsters.yaml';
import episode2Monsters from '../../../../data/stages/story/chapter7/episode2/monsters.yaml';
import episode3Monsters from '../../../../data/stages/story/chapter7/episode3/monsters.yaml';
import episode4Monsters from '../../../../data/stages/story/chapter7/episode4/monsters.yaml';
import { mergeMonsters } from '../../utils';

const episodes =
  [
    [episode1Stages, episode1Monsters],
    [episode2Stages, episode2Monsters],
    [episode3Stages, episode3Monsters],
    [episode4Stages, episode4Monsters]
  ].map(([episodes, monsters]) => (
    episodes.map(episode => (
      Object.assign(episode, {
        stages: episode.stages.map(stage => mergeMonsters(stage, monsters))
      })
    ))
  )).flat();

const chapter = Object.assign(info, { episodes });

export default chapter;
