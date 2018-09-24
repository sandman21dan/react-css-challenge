import * as React from 'react';

import './Content.css';
import Card from '../Card';

const cards: React.ReactNode[] = [];

for (let i = 0; i < 8; i++) {
  cards.push(<Card key={i} />);
}

const Content: React.StatelessComponent = () => (
  <div className="content">
    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est necessitatibus officiis eum obcaecati accusantium provident? Tempora in, praesentium aperiam autem repellendus corporis incidunt maiores reiciendis culpa cum odit at earum?</p> */}
    {cards}
  </div>
);

export default Content;
