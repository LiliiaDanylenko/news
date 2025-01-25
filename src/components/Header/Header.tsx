import { formatDate } from "../../helpers/formatDate"
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>NEWS</h1>
      <p className={s.date}>{formatDate(new Date())}</p>
    </header>
  )
}

export default Header