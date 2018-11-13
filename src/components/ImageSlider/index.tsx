import * as React from 'react';

import './ImageSlider.css';

const ImageSlider: React.StatelessComponent = ({
  children,
}) => (
  <div className="image-slider">
    {children}
  </div>
);

export default ImageSlider;
