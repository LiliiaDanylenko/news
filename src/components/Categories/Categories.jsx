import { useRef } from 'react';
import s from './Categories.module.css';

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  const containerRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  return (
    <div
      className={s.categories}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <button
        className={!selectedCategory ? s.active : s.item}
        onClick={() => setSelectedCategory(null)}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? s.active : s.item}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
