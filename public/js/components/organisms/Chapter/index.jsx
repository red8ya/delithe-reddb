import React from 'react';
import BoxList from '../../molecules/BoxList';
import Folder from '../Folder';
import Episode from '../Episode';

const Chapter = ({chapter, onClick}) => (
  <Folder key="abyss" text={chapter.name}>
    <BoxList>
      {chapter.episodes.map(episode => (
        <Episode key={episode.name} episode={episode} onClick={(stage) => onClick(stage, episode)} />
      ))}
    </BoxList>
  </Folder>
);

export default Chapter;
