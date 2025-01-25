import withSkeleton from '../../helpers/hocs/withSkeleton';
import { INews } from '../../interfaces';
import NewsItem from '../NewsItem/NewsItem';
import s from './NewsList.module.css';

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={s.list}>
      {news?.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);

export default NewsListWithSkeleton;
