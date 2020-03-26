import React, { useState } from 'react';
import SinglePane from '../../templates/SinglePane';
import StageDetail from '../../organisms/StageDetail';
import Chapter from '../../organisms/Chapter';
import chapters from '../../../data/stages/story';
import abyss from '../../../data/stages/abyss';

const Home = () => {
  const [selectedStage, setStage] = useState(null);
  return (
    <SinglePane>
      {chapters.map((chapter, i) => (
        <Chapter key={`chapter${i}`}
          chapter={chapter}
          onClick={(stage, episode) => setStage([stage, episode, i+1])} />
      ))}
      <Chapter chapter={{name: "深淵の魔境", episodes: abyss}}
        onClick={(stage, episode) => setStage([stage, episode, null])} />
      {selectedStage && <StageDetail onClose={() => setStage(null)}
        chapter={selectedStage[2]}
        episode={selectedStage[1]}
        {...selectedStage[0]} />}
    </SinglePane>
  );
};

export default Home
