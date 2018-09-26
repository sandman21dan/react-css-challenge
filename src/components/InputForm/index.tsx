import * as React from 'react';

import './InputForm.css';

const InputForm: React.StatelessComponent = () => (
  <div className="input-form">
    <input className="input-form__input" type="text"/>
    <button className="input-form__btn">Add</button>
  </div>
);

export default InputForm;
