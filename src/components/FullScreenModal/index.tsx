import * as React from 'react';

import './FullScreenModal.css'

const FullScreenModal: React.StatelessComponent = ({
  children,
}) => (
  <div className="full-screen-modal">
    <div className="full-screen-modal__content">
      {children}
    </div>
  </div>
);

export default FullScreenModal;
