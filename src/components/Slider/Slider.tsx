import React, { useRef } from 'react';
import s from './Slider.module.css';
import { useTheme } from '../../context/ThemeContext';

interface Props {
  children: React.ReactElement;
  step?: number;
}

const Slider = ({ children, step = 150 }: Props) => {
  const { isDark } = useTheme();

  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={`${s.slider} ${isDark ? s.dark : s.light}`}>
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
