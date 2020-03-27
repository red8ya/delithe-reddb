import React, { useState } from 'react';
import SinglePane from '../../templates/SinglePane';
import StageDetail from '../../organisms/StageDetail';
import Chapter from '../../organisms/Chapter';
import FilterWindow from '../../organisms/FilterWindow';
import FilterButton from '../../molecules/FilterButton';
import AboutButton from '../../atoms/AboutButton';
import chapters from '../../../data/stages/story';
import abyss from '../../../data/stages/abyss';
import { findAnimaByName } from '../../../data/anima';

const filterChapters = (chapters, query) => {
  const { freeword, anima, monsterType, monsterCategory } = query;
  const freewords = (freeword || '').split(/\s+/);
  return chapters.map(chapter => (
    Object.assign({}, chapter, {
      episodes: chapter.episodes.map(episode => (
        Object.assign({}, episode, {
          stages: episode.stages.filter(stage => (
            !freeword || freeword === ''
            || freewords.every(word => stage.monsters.find(monster => monster.name.indexOf(word) !== -1))
            || freewords.every(word => stage.items.find(name => name.indexOf(word) !== -1))
          ))
          .filter(stage => {
            const animaStatuses = stage.items.map(findAnimaByName).filter(v => !!v);
            return (
              !anima || anima.length === 0 ||
              anima.every(a => animaStatuses.find(v => a.indexOf(v.status) !== -1))
            );
          })
          .filter(stage => (
            !monsterType || monsterType.length === 0 ||
            monsterType.every(type => stage.monsters.find(monster => monster.type.indexOf(type) !== -1))
          ))
          .filter(stage => (
            !monsterCategory || monsterCategory.length === 0 ||
            monsterCategory.every(category => stage.monsters.find(monster => monster.category.indexOf(category) !== -1))
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

  const HeaderButtons = () => (
    <div>
      <AboutButton />
      <FilterButton onClick={() => setIsFilterOpen(true)} />
    </div>
  );

  return (
    <SinglePane header={<HeaderButtons />}>
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
