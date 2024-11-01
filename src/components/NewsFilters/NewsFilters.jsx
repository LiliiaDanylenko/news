import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import s from './NewsFilters.module.css';

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={s.filters}>
      {dataCategories && (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter('category', category)}
        />
      )}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
    </div>
  );
};

export default NewsFilters;
