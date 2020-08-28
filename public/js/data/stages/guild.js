import pazuzuInfo from '../../../data/stages/guild/pazuzu/info.yaml';
import pazuzuStages from '../../../data/stages/guild/pazuzu/stages.yaml';
import needshegInfo from '../../../data/stages/guild/needsheg/info.yaml';
import needshegStages from '../../../data/stages/guild/needsheg/stages.yaml';
import purgatoryInfo from '../../../data/stages/guild/purgatory/info.yaml';
import purgatoryStages from '../../../data/stages/guild/purgatory/stages.yaml';

const guild = [
  Object.assign({}, pazuzuInfo, { episodes: pazuzuStages }),
  Object.assign({}, needshegInfo, { episodes: needshegStages }),
  Object.assign({}, purgatoryInfo, { episodes: purgatoryStages }),
];

export default guild;
