import React from 'react';
import BoxList from '../../molecules/BoxList';
import Fraction from '../../atoms/Fraction';
import Folder from '../Folder';
import Episode from '../Episode';

const getStageCounts = (episodes) => (
  episodes.reduce((acc, episode) => acc + episode.stages.length, 0)
);

const Chapter = ({chapter, onClick, isFolded}) => {
  const right = (
    <Fraction num={getStageCounts(chapter.episodes)} denom={getStageCounts(chapter.allEpisodes)} />
  );
  return (
    <Folder text={chapter.name} hidden={isFolded} right={right}>
      <BoxList>
        {chapter.episodes.map(episode => (
          <Episode key={episode.name} episode={episode} onClick={(stage) => onClick(stage, episode)} />
        ))}
      </BoxList>
    </Folder>
  );
};

export default Chapter;
