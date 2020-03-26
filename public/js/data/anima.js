import data from '../../data/anima.yaml';

export let animaMap = {};
let animaStatusMap = {};

data.forEach(section => {
  section.pages.forEach(page => {
    page.anima.forEach(anima => {
      animaMap[anima.name] = {
        name: anima.name,
        section: section.name,
        page: page.name,
        status: anima.status
      };
      animaStatusMap[anima.status] = animaStatusMap[anima.status] || [];
      animaStatusMap[anima.status].push(animaMap[anima.name]);
    });
  });
});

export const findAnimaByName = (name) => (
  animaMap[name] || animaMap[name.replace(/のアニマ$/, '')]
);

export const searchAnimasByStatus = (status) => animaStatusMap[status];
