import { useState, useEffect } from 'react'
import { getNews } from '../../api/apiNews';
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import s from './Main.module.css'

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews(currentPage, pageSize);
      setNews(response.news);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(current => current + 1);
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(current => current - 1);
    }
  }

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <main className={s.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={'banner'} count={1} />
      )}

      <Pagination
        currentPage={currentPage} 
        totalPages={totalPages}
        handleNextPage={handleNextPage} 
        handlePrevPage={handlePrevPage}
        handleChangePage={handleChangePage} 
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={'item'} count={10} />
      )}

      <Pagination
        currentPage={currentPage} 
        totalPages={totalPages}
        handleNextPage={handleNextPage} 
        handlePrevPage={handlePrevPage}
        handleChangePage={handleChangePage} 
      />
    </main>
  )
}

export default Main