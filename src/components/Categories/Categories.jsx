import { forwardRef } from 'react';
import s from './Categories.module.css';

const Categories = forwardRef(
  ({ categories, selectedCategory, setSelectedCategory }, ref) => {
    return (
      <div ref={ref} className={s.categories}>
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
  }
);

Categories.displayName = 'Categories';

export default Categories;
