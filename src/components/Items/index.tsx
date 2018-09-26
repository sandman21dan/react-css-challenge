import * as React from 'react';
import * as faker from 'faker';

import './Items.css';

const renderItems = () => {
  const items = [];

  for (let i = 0; i < 12; i++) {
    items.push(
      <li key={i} className="items__item">{faker.name.firstName()} {faker.name.lastName()}</li>
    );
  }

  return items;
}

const Items: React.StatelessComponent = () => (
  <ul className="items">
    {renderItems()}
  </ul>
);

export default Items;
