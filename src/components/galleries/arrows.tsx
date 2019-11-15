import React from 'react';

export const PrevArrow = ({ className, onClick }: any) => (
  <div 
      className={className}
      onClick={onClick}
  >
    <i className="fas fa-chevron-circle-left"></i>
  </div>
)

export const NextArrow = ({ className, onClick }: any) => (
  <div 
      className={className}
      onClick={onClick}
  >
    <i className="fas fa-chevron-circle-right"></i>
  </div>
)