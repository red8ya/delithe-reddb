import React from 'react';
import BoxList from '../../molecules/BoxList';
import Folder from '../Folder';
import Episode from '../Episode';

const Chapter = ({chapter, onClick, isFolded}) => (
  <Folder text={chapter.name} hidden={isFolded}>
    <BoxList>
      {chapter.episodes.map(episode => (
        <Episode key={episode.name} episode={episode} onClick={(stage) => onClick(stage, episode)} />
      ))}
    </BoxList>
  </Folder>
);

export default Chapter;
