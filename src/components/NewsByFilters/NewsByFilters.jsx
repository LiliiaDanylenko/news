import { TOTAL_PAGES } from '../../constants/constants';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import s from './NewsByFilters.module.css';

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilter('page_number', filters.page_number - 1);
    }
  };

  const handleChangePage = (pageNumber) => {
    changeFilter('page_number', pageNumber);
  };

  return (
    <section className={s.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handleChangePage={handleChangePage}
      />

      <NewsList news={news} isLoading={isLoading} />

      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handleChangePage={handleChangePage}
      />
    </section>
  );
};

export default NewsByFilters;
