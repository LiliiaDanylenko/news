import { TOTAL_PAGES } from '../../constants/constants';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useAppDispatch, useAppSelector } from '../../store';
import { useGetNewsQuery } from '../../store/services/newsApi';
import { setFilters } from '../../store/slices/newsSlice';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import s from './NewsByFilters.module.css';

const NewsByFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number + 1 })
      );
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number - 1 })
      );
    }
  };

  const handleChangePage = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }));
  };

  return (
    <section className={s.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top
        bottom
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handleChangePage={handleChangePage}
      >
        <NewsList news={news} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
