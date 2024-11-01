import BannersList from '../BannersList/BannersList';
import s from './LatestNews.module.css';

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={s.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
