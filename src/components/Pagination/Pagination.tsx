import { IPaginationProps } from '../../interfaces';
import s from './Pagination.module.css'

const Pagination = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
  handleChangePage,
}: IPaginationProps) => {
  return (
    <div className={s.pagination}>
      <button className={s.arrow} onClick={handlePrevPage} disabled={currentPage <= 1}>
        {'<'}
      </button>
      <div className={s.list}>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={s.pageNumber}
            onClick={() => handleChangePage(i + 1)}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button className={s.arrow} onClick={handleNextPage} disabled={currentPage >= 10}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination