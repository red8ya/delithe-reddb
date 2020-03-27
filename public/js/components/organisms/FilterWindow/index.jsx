import React, { useState } from 'react';
import Window from '../../molecules/Window';
import Button from '../../atoms/Button';
import TextBox from '../../atoms/TextBox';
import Header from '../../atoms/Header';
import CheckButton from '../../molecules/CheckButton';
import ButtonGroup from '../../molecules/ButtonGroup';
import Section from '../../atoms/Section';
import styles from './styles.scss';

const FilterCheckButton = ({onClick, name, activeBy, children}) => {
  const value = React.Children.toArray(children)[0];
  return (
    <CheckButton onClick={onClick} name={name} value={value} active={activeBy?.find(v => v === value)}>{value}</CheckButton>
  );
};

const FilterWindow = ({defaultQuery = {}, onSubmit, onClose, ...args}) => {
  const [query, setQuery] = useState(defaultQuery);
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(query);
    }
  };
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setQuery(defaultQuery);
  };
  const handleChange = (e) => {
    setQuery(Object.assign({}, query, {[e.target.name]: e.target.value}));
  };
  const handleCheck = (e) => {
    const { name, value, checked } = e.target;
    let values = query[name] ? query[name].concat() : [];
    if (checked) {
      values.push(value);
    }
    else {
      values = values.filter(v => v !== value);
    }
    setQuery(Object.assign({}, query, {[name]: values}));
  };
  return (
    <Window isModal={true} title="フィルタ設定" onClose={handleClose} {...args}>
      <form onSubmit={(e) => { handleSubmit(); e.preventDefault() }}>
        <div className={styles.main}>
          <TextBox placeholder="フリーワード検索" name="freeword" value={query.freeword} onChange={handleChange} />

          <Section>
            <Header>モンスタータイプ</Header>

            <ButtonGroup>
              <FilterCheckButton onClick={handleCheck} name="monsterType" activeBy={query.monsterType}>ノーマル</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="monsterType" activeBy={query.monsterType}>エリート</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="monsterType" activeBy={query.monsterType}>ボス</FilterCheckButton>
            </ButtonGroup>
          </Section>

          <Section>
            <Header>モンスター種別</Header>

            <ButtonGroup>
              <FilterCheckButton onClick={handleCheck} name="monsterCategory" activeBy={query.monsterCategory}>魔</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="monsterCategory" activeBy={query.monsterCategory}>魔獣</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="monsterCategory" activeBy={query.monsterCategory}>聖</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="monsterCategory" activeBy={query.monsterCategory}>竜</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="monsterCategory" activeBy={query.monsterCategory}>人型</FilterCheckButton>
            </ButtonGroup>
          </Section>

          <Section>
            <Header>アニマ</Header>

            <ButtonGroup>
              <FilterCheckButton onClick={handleCheck} name="anima" activeBy={query.anima}>HP</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="anima" activeBy={query.anima}>MP</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="anima" activeBy={query.anima}>物防</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="anima" activeBy={query.anima}>魔防</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="anima" activeBy={query.anima}>物攻</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="anima" activeBy={query.anima}>魔攻</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="anima" activeBy={query.anima}>回魔</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="anima" activeBy={query.anima}>会心</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="anima" activeBy={query.anima}>回避</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="anima" activeBy={query.anima}>命中</FilterCheckButton>
              <FilterCheckButton onClick={handleCheck} name="anima" activeBy={query.anima}>俊敏</FilterCheckButton>
            </ButtonGroup>
          </Section>
        </div>
        <div className={styles.footer}>
          <Button isWide={true} onClick={handleSubmit}>決定</Button>
        </div>
      </form>
    </Window>
  );
};

export default FilterWindow;
