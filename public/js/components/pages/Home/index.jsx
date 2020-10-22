import React, { useState } from 'react';
import SinglePane from '../../templates/SinglePane';
import StageDetail from '../../organisms/StageDetail';
import Chapter from '../../organisms/Chapter';
import FilterWindow from '../../organisms/FilterWindow';
import Folder from '../../organisms/Folder';
import BoxList from '../../molecules/BoxList';
import FilterButton from '../../molecules/FilterButton';
import AboutButton from '../../atoms/AboutButton';
import Fraction from '../../atoms/Fraction';
import { setQueryString } from '../../../query';
import chapters from '../../../data/stages/story';
import abyss from '../../../data/stages/abyss';
import maps from '../../../data/stages/maps';
import guild from '../../../data/stages/guild';
import equipments from '../../../../data/equipments.yaml';
import { findAnimaByName } from '../../../data/anima';

const ensureArray = (value) => (
  !value ? [] : Array.isArray(value) ? value : [value]
);

const arrayKeys = ['monsterType', 'monsterCategory', 'anima'];
const stringKeys = ['freeword'];
const booleanKeys = ['has_accessory'];

const normalizeQuery = (query) => {
  Object.keys(query).forEach(key => {
    query[key] = arrayKeys.indexOf(key) !== -1 ? ensureArray(query[key])
      : stringKeys.indexOf(key) !== -1 ? (query[key] === '' ? undefined : query[key])
      : booleanKeys.indexOf(key) !== -1 ? (query[key] === false ? undefined : query[key])
      : query[key];
  });
  return query;
};

const filterChapters = (chapters, query) => {
  const { freeword, anima, monsterType, monsterCategory } = query;
  const freewords = (freeword || '').split(/\s+/);
  return chapters.map(chapter => (
    Object.assign({}, chapter, {
      allEpisodes: chapter.episodes,
      episodes: chapter.episodes.map(episode => (
        Object.assign({}, episode, {
          allStages: episode.stages,
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
            monsterType.every(type => stage.monsters.find(monster => monster.type === type))
          ))
          .filter(stage => (
            !monsterCategory || monsterCategory.length === 0 ||
            monsterCategory.every(category => stage.monsters.find(monster => monster.category === category))
          ))
          .filter(stage => (
            !query.has_accessory || stage.items.find(name => equipments[name]?.type === 'アクセサリ')
          ))
        })
      )).filter(episode => episode.stages.length != 0)
    })
  )).filter(chapter => chapter.episodes.length != 0);
};

const Home = ({initialQuery}) => {
  const [selectedStage, setStage] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const query = normalizeQuery(initialQuery);
  const onFilterSubmit = (query) => {
    setQueryString(normalizeQuery(query));
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
      {filterChapters(chapters, query).map((chapter) => (
        <Chapter key={`chapter${chapter.number}`}
          chapter={chapter}
          onClick={(stage, episode) => setStage([stage, episode, chapter.number])}
        />
      ))}
      {filterChapters([{name: "深淵の魔境", episodes: abyss}], query).map((chapter, i) => (
        <Chapter key={`abyss${i}`} chapter={chapter}
          onClick={(stage, episode) => setStage([stage, episode, null])}
        />
      ))}
          {(() => {
            const filteredChapters = filterChapters(guild, query);
            if (filteredChapters.length > 0) {
              const allStagesCount = guild.reduce((acc, chapter) => (
                acc + chapter.episodes.reduce((acc, episode) => acc + episode.stages.length, 0)
              ), 0);
              const stagesCount = filteredChapters.reduce((acc, chapter) => (
                acc + chapter.episodes.reduce((acc, episode) => acc + episode.stages.length, 0)
              ), 0);
              return (
                <Folder text="ギルドダンジョン"
                  right={<Fraction num={stagesCount} denom={allStagesCount} />}>
                  <BoxList>
                    {
                      filteredChapters.map((chapter, i) => (
                        <Chapter key={`guild${i}`} chapter={chapter}
                          onClick={(stage, episode) => setStage([stage, episode, null])}
                        />
                      ))
                    }
                  </BoxList>
                </Folder>
              );
            }
          })()}
      {filterChapters([{name: "絶域の標", episodes: [
        {
          name: "おしゃれ",
          isMap: true,
          stages: maps.fashion
        },
        {
          name: "アクセサリ",
          isMap: true,
          stages: maps.accessory
        },
        {
          name: "育成",
          isMap: true,
          stages: maps.training
        },
        {
          name: "チャレンジ",
          isMap: true,
          stages: maps.challenge
        }
      ]}], query).map((chapter, i) => (
        <Chapter key={`maps_${chapter.name}_${i}`} chapter={chapter}
          onClick={(stage, episode) => setStage([stage, episode, null])}
        />
      ))}
      {selectedStage && <StageDetail onClose={() => setStage(null)}
        chapter={selectedStage[2]}
        episode={selectedStage[1]}
        {...selectedStage[0]} />}
      <FilterWindow isOpen={isFilterOpen}
        defaultQuery={query}
        onSubmit={onFilterSubmit}
        onClose={() => setIsFilterOpen(false)} />
    </SinglePane>
  );
};

export default Home
