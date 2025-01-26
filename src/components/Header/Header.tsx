import { themeIcons } from '../../assets';
import { formatDate } from '../../helpers/formatDate';
import s from './Header.module.css';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`${s.header} ${isDark ? s.dark : s.light}`}>
      <div className={s.info}>
        <h1 className={s.title}>NEWS</h1>
        <p className={s.date}>{formatDate(new Date())}</p>
      </div>

      <img src={isDark ? themeIcons.light : themeIcons.dark} width={30} alt="theme switcher" onClick={toggleTheme} />
    </header>
  );
};

export default Header;
