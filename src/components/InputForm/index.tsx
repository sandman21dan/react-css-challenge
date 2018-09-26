import * as React from 'react';

import './InputForm.css';

const InputForm: React.StatelessComponent = () => (
  <div className="input-form">
    <input className="input-form__input" type="text"/>
    <button className="input-form__btn">Add</button>
    <button className="input-form__btn input-form__btn--delete">Delete</button>
  </div>
);

export default InputForm;
