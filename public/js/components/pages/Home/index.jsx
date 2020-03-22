import React, { useState } from 'react';
import SinglePane from '../../templates/SinglePane';
import GlobalHeader from '../../atoms/GlobalHeader';
import GlobalFooter from '../../atoms/GlobalFooter';
import Stage from '../../molecules/Stage';
import BoxList from '../../molecules/BoxList';
import Folder from '../../organisms/Folder';
import StageDetail from '../../organisms/StageDetail';
import chapters from '../../../data/chapters';

const Home = () => {
  const [selectedStage, setStage] = useState(null);
  return (
    <SinglePane>
      <GlobalHeader />
      {chapters.map((chapter, i) => (
        <Folder key={`chapter${i}`} text={chapter.name}>
          <BoxList>
            {chapter.episodes.map((episode) => (
              <Folder key={episode.name} text={episode.name}>
                <BoxList>
                  {episode.stages.map((stage) => (
                    <Stage key={stage.name} onClick={() => setStage([stage, episode, i+1])} {...stage} />
                  ))}
                </BoxList>
              </Folder>
            ))}
          </BoxList>
        </Folder>
      ))}
      {selectedStage && <StageDetail onClose={() => setStage(null)}
        chapter={selectedStage[2]}
        episode={selectedStage[1]}
        {...selectedStage[0]} />}
      <GlobalFooter />
    </SinglePane>
  );
};

export default Home
