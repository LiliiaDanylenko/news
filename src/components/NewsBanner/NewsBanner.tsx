import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import { INews } from '../../interfaces';
import Image from '../Image/Image';
import s from './NewsBanner.module.css';

interface Props {
  item: INews;
}

const NewsBanner = ({ item }: Props) => {
  return (
    <li className={s.banner}>
      <Image image={item?.image} />
      <h3 className={s.title}>{item.title}</h3>
      <p className={s.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </li>
  );
};

export default NewsBanner;
