export const mergeMonsters = (stage, monsters) => (
  Object.assign(stage, {
    monsters: stage.monsters.map(name => {
      if (!monsters[name]) {
        console.error(`Unknown monster: ${name} in ${stage.name}`);
      }
      return Object.assign({ name }, monsters[name]);
    })
  })
);
