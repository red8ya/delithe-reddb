import React, { useState } from 'react';
import SinglePane from '../../templates/SinglePane';
import StageDetail from '../../organisms/StageDetail';
import Chapter from '../../organisms/Chapter';
import FilterWindow from '../../organisms/FilterWindow';
import FilterButton from '../../molecules/FilterButton';
import chapters from '../../../data/stages/story';
import abyss from '../../../data/stages/abyss';
import { findAnimaByName } from '../../../data/anima';

const filterChapters = (chapters, query) => {
  const { freeword, anima, monsterType, monsterCategory } = query;
  return chapters.map(chapter => (
    Object.assign({}, chapter, {
      episodes: chapter.episodes.map(episode => (
        Object.assign({}, episode, {
          stages: episode.stages.filter(stage => (
            stage.monsters.find(monster => monster.name.indexOf(freeword || '') !== -1)
            || stage.items.find(name => name.indexOf(freeword || '') !== -1)
          ))
          .filter(stage => (
            !anima || anima.length === 0 ||
            stage.items.map(findAnimaByName).filter(v => !!v).find(v => anima.indexOf(v.status) !== -1)
          ))
          .filter(stage => (
            !monsterType || monsterType.length === 0 ||
            stage.monsters.find(monster => monsterType.indexOf(monster.type) !== -1)
          ))
          .filter(stage => (
            !monsterCategory || monsterCategory.length === 0 ||
            stage.monsters.find(monster => monsterCategory.indexOf(monster.category) !== -1)
          ))
        })
      )).filter(episode => episode.stages.length != 0)
    })
  )).filter(chapter => chapter.episodes.length != 0);
};

const Home = () => {
  const [selectedStage, setStage] = useState(null);
  const [query, setQuery] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const onFilterSubmit = (query) => {
    setQuery(query);
    setIsFilterOpen(false);
  };
  return (
    <SinglePane header={<FilterButton onClick={() => setIsFilterOpen(true)} />}>
      {filterChapters(chapters, query).map((chapter, i) => (
        <Chapter key={`chapter${i}`}
          chapter={chapter}
          onClick={(stage, episode) => setStage([stage, episode, i+1])}
        />
      ))}
      {filterChapters([{name: "深淵の魔境", episodes: abyss}], query).map((chapter, i) => (
        <Chapter key={`abyss${i}`} chapter={chapter}
          onClick={(stage, episode) => setStage([stage, episode, null])}
        />
      ))}
      {selectedStage && <StageDetail onClose={() => setStage(null)}
        chapter={selectedStage[2]}
        episode={selectedStage[1]}
        {...selectedStage[0]} />}
      <FilterWindow isOpen={isFilterOpen}
        word={query.freeword || ''}
        onSubmit={onFilterSubmit}
        onClose={() => setIsFilterOpen(false)} />
    </SinglePane>
  );
};

export default Home
