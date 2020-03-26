import React from 'react';
import Button from '../../atoms/Button';

const FilterButton = (args) => (
  <Button {...args}><span className="fas fa-search"></span></Button>
);

export default FilterButton;
