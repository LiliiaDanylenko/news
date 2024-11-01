import { getLatestNews } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import BannersList from '../BannersList/BannersList';
import s from './LatestNews.module.css';

const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
    <section className={s.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
