import locations from '../../../data/stages/abyss/stages.yaml';
import monsters from '../../../data/stages/abyss/monsters.yaml';
import { mergeMonsters } from '../utils';

const abyss = locations.map(location => (
  Object.assign(location, {
    stages: location.stages.map(stage => mergeMonsters(stage, monsters))
  })
));

export default abyss;
