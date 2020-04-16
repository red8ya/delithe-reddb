import foggyStages from '../../../data/stages/maps/foggy/stages.yaml';
import foggyMonsters from '../../../data/stages/maps/foggy/monsters.yaml';
import { mergeMonsters } from '../utils';

const maps = {
  foggy: foggyStages.map(stage => mergeMonsters(stage, foggyMonsters))
};

export default maps;
