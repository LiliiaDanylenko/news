import React, { useRef } from 'react';
import s from './Slider.module.css';

const Slider = ({ children, step = 150 }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={s.slider}>
      <button onClick={scrollLeft} className={s.arrow}>
        {'<'}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={s.arrow}>
        {'>'}
      </button>
    </div>
  );
};

export default Slider;
