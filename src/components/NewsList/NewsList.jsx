import NewsItem from '../NewsItem/NewsItem'
import s from './NewsList.module.css'

const NewsList = ({ news }) => {
  return (
    <ul className={s.list}>
      {news.map(item => <NewsItem key={item.id} item={item} />)}
    </ul>
  )
}

export default NewsList