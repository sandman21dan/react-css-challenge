import * as React from 'react';

import './Content.css';
import InputForm from '../InputForm';
import Items from '../Items';

const Content: React.StatelessComponent = () => (
  <div className="content">
    <InputForm />
    <Items />
  </div>
);

export default Content;
