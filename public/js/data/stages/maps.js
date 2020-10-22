import fashionStages from '../../../data/stages/maps/fashion/stages.yaml';
import fashionMonsters from '../../../data/stages/maps/fashion/monsters.yaml';
import accessoryStages from '../../../data/stages/maps/accessory/stages.yaml';
import accessoryMonsters from '../../../data/stages/maps/accessory/monsters.yaml';
import trainingStages from '../../../data/stages/maps/training/stages.yaml';
import trainingMonsters from '../../../data/stages/maps/training/monsters.yaml';
import challengeStages from '../../../data/stages/maps/challenge/stages.yaml';
import challengeMonsters from '../../../data/stages/maps/challenge/monsters.yaml';
import { mergeMonsters } from '../utils';

const maps = {
  fashion: fashionStages.map(stage => mergeMonsters(stage, fashionMonsters)),
  accessory: accessoryStages.map(stage => mergeMonsters(stage, accessoryMonsters)),
  training: trainingStages.map(stage => mergeMonsters(stage, trainingMonsters)),
  challenge: challengeStages.map(stage => mergeMonsters(stage, challengeMonsters))
};

export default maps;
