import { useGetLatestNewsQuery } from '../../store/services/newsApi';
import BannersList from '../BannersList/BannersList';
import s from './LatestNews.module.css';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={s.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
