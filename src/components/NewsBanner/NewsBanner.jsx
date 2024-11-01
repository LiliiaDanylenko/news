import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../Image/Image';
import s from './NewsBanner.module.css';

const NewsBanner = ({ item }) => {
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
