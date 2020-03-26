import React, { useState } from 'react';
import Window from '../../molecules/Window';
import Button from '../../atoms/Button';
import TextBox from '../../atoms/TextBox';
import styles from './styles.scss';

const FilterWindow = ({word = '', onSubmit, onClose, ...args}) => {
  const [freeword, setFreeword] = useState(word);
  const handleSubmit = () => {
    const query = { freeword };
    if (onSubmit) {
      onSubmit(query);
    }
  };
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setFreeword(word);
  };
  return (
    <Window isModal={true} title="フィルタ設定" onClose={handleClose} {...args}>
      <form onSubmit={(e) => { handleSubmit(); e.preventDefault() }}>
        <div className={styles.main}>
          <TextBox placeholder="フリーワード検索" value={freeword} onChange={(e) => setFreeword(e.target.value)} />
        </div>
        <div className={styles.footer}>
          <Button isWide={true} onClick={handleSubmit}>決定</Button>
        </div>
      </form>
    </Window>
  );
};

export default FilterWindow;
