import * as React from 'react';

import './Card.css';
import CloseButton from '../CloseButton';

const Card: React.StatelessComponent = () => (
  <div className="card">
    {/* <img className="card__img" src="https://picsum.photos/200/300/?random" /> */}
    <div className="card__close">
      <CloseButton />
    </div>
    <div className="card__content">
      <button className="card__button">Open</button>
    </div>
  </div>
);

export default Card;
