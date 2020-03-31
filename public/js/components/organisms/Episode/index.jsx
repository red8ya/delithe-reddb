import React from 'react';
import BoxList from '../../molecules/BoxList';
import Folder from '../../organisms/Folder';
import Stage from '../../molecules/Stage';

const Episode = ({episode, onClick}) => {
  const right = (
    <div>
      {episode.stages.length} / {episode.allStages.length}
    </div>
  );
  return (
    <Folder key={episode.name} text={episode.name} right={right}>
      <BoxList>
        {episode.stages.map(stage => (
          <Stage key={stage.name} onClick={() => onClick(stage)} {...stage} />
        ))}
      </BoxList>
    </Folder>
  );
};

export default Episode;
