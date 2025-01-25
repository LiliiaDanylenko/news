import s from './Image.module.css';

interface Props {
  image: string;
}

const Image = ({ image }: Props) => {
  return <div className={s.wrapper}>{image ? <img src={image} alt="news" className={s.image} /> : null}</div>;
};

export default Image;
